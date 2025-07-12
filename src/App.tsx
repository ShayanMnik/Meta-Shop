import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Store from "./pages/Store/Store"
import Layout from "./components/layout/Layout"
import ProductPage from "./pages/productPage/ProductPage"
import Cart from "./pages/cart/Cart"
import { useShoppingCartContext } from "./context/ShoppingCartContext"
import PrivateRoute from "./components/privateRoute/PrivateRoute"
import Login from "./pages/login/Login"

function App() {


  const { isLogin } = useShoppingCartContext()

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/login" element={isLogin ? <Navigate to="/cart" /> : <Login />} />
        <Route element={<PrivateRoute />} >
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </Layout>
  )
}

export default App