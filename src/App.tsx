import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Store from "./pages/Store/Store"
import Layout from "./components/layout/Layout"
import ProductPage from "./pages/productPage/ProductPage"
import Cart from "./pages/cart/Cart"

function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Layout>
  )
}

export default App
