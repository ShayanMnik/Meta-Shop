import { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { login } from "../services/api";
import { useNavigate } from "react-router-dom";

interface IShoppingCartProvider {
    children: React.ReactNode
}

interface cartItem {
    id: number,
    count: number,
}

interface IShoppingCartContext {
    cartItems: cartItem[],
    handleIncreaseItemCount: (id: number) => void;
    handeDecreaseItemCount: (id: number) => void;
    getProductCount: (id: number) => number;
    removeProduct: (id: number) => void;
    allProductCount: number;
    isLogin: Boolean;
    handleLogin: (username: string, password: string) => void;
    handleLogOut: () => void;
}


export const ShoppingCartContext = createContext({} as IShoppingCartContext)


export const useShoppingCartContext = () => {
    return useContext(ShoppingCartContext)
}





export function ShoppingCartProvider({ children }: IShoppingCartProvider) {

    const [cartItems, setCartItems] = useLocalStorage<cartItem[]>("cartItems", [])

    console.log(cartItems);

    const handleIncreaseItemCount = (id: number) => {


        setCartItems((currentItems) => {

            let selectedItem = currentItems.find((item) => item.id == id);
            if (selectedItem == null) {
                return [...currentItems, { id: id, count: 1 }]
            }
            else {
                return currentItems.map(item => {
                    if (item.id == id) {
                        return { ...item, count: item.count + 1 }
                    }
                    else {
                        return item;
                    }
                }
                )
            }

        })

    }
    const handeDecreaseItemCount = (id: number) => {

        setCartItems((currentItems) => {
            let selectedItem = currentItems.find((item) => item.id == id);
            if (selectedItem?.count === 1) {
                return currentItems.filter((item) => item.id !== id)
            } else {
                return currentItems.map(item => {
                    if (item.id == id) {
                        return { ...item, count: item.count - 1 }
                    }
                    else {
                        return item;
                    }
                }
                )
            }
        }
        )
    }
    const getProductCount = (id: number) => {
        return cartItems.find((item) => item.id == id)?.count || 0
    }

    const removeProduct = (id: number) => {

        setCartItems((currentItems) => {
            let selectedItem = currentItems.find((item) => item.id == id);
            if (selectedItem?.count) {
                return currentItems.filter((item) => item.id !== id)

            }
            return currentItems
        })
    }
    const allProductCount = cartItems.reduce((totalCount, item) => totalCount + item.count, 0)

    const [isLogin, setIsLogin] = useState(false)

    const navigate = useNavigate()

    const handleLogin = (username: string, password: string) => {
        login(username, password).finally(() => {

            let token = "TamdbYMuJbLxfVMjhQdqdoiLhPQFfsiD"
            localStorage.setItem("token", token)
            localStorage.setItem("username", username)
            localStorage.setItem("password", password)
            setIsLogin(true)
            navigate("/cart")
        })
    }
    const handleLogOut = () => {
        setIsLogin(false)
        navigate("/login")
        localStorage.removeItem("token")
        localStorage.removeItem("username")
        localStorage.removeItem("password")
    }


    useEffect(() => {
        let token = localStorage.getItem("token")
        if (token) {
            setIsLogin(true)
        }
    }, [])



    return (
        <ShoppingCartContext.Provider value={{ cartItems, handleIncreaseItemCount, handeDecreaseItemCount, getProductCount, removeProduct, allProductCount, isLogin, handleLogin, handleLogOut }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}