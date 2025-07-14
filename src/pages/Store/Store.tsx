import  { useEffect, useState } from 'react'
import Container from '../../components/container/Container'
import ProductItem from '../../components/productItem/ProductItem'
import { Link } from 'react-router-dom'
import { getProducts } from '../../services/api'
import type { Product } from '../../types/servers'

function Store() {

    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        getProducts().then((res) => {
            setProducts(res.products)
        });
    }, []);
    
    return (
        <Container>
            <h1 className='mt-10 mb-4 px-8 sm:px-5 h-[50px] flex items-center text-[20px]'>جدیدترین محصولات</h1>
            <div className='grid grid-cols-1 px-5 sm:grid-cols-2 lg:grid-cols-4 gap-7 mb-10'>
                {
                    products.map((items: Product) => (
                        <Link key={items.id} to={`/product/${items.id}`}>
                            <ProductItem {...items} />
                        </Link>
                    ))
                }
            </div>
        </Container>
    )
}

export default Store