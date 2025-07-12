import axios from "axios"


const baseURL = axios.create({
    baseURL:"http://localhost:7001"
})
const baseUrl2 = axios.create({
    baseURL:"http://localhost:7003"
})

export async function getNewProducts() {

    const { data } = await baseUrl2(`/products`)

    return data
}
export async function getNewProduct(id:number | string) {

    const { data } = await baseUrl2(`/products/${id}`)

    return data
}

export async function getProducts() {
    
    const { data } = await baseURL("/products")

    return data
}


export async function getProduct(id : string | number){

    const { data } = await baseURL(`/products/${id}`)

    return data
}

export async function getAllProducts() {

  const { data } = await baseURL("/products");
  
  return data;
}
export async function getAllNewProducts() {

  const { data } = await baseUrl2("/products");
  
  return data;
}

export async function login(username: string , password: string){

    const { data } = await baseURL({
        method: "POST",
        url:"/login",
        data: {
            username,
            password,
        }
    })

    return data
}