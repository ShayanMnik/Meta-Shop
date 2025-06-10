import React, { useEffect, useState } from 'react'
import Container from '../../components/container/Container'
import ProductItem from '../../components/productItem/ProductItem'
import { Link } from 'react-router-dom'
import { getProducts } from '../../services/api'
import type { Products } from '../../types/servers'

function Store() {

    const [products, setProducts] = useState<Products>([])

    useEffect(() => {
        getProducts().then((res) => {
            setProducts(res)
        });
    }, []);
    return (
        <Container>
            <h1 className='mt-10 mb-4'>جدیدترین محصولات</h1>
            <div className='grid grid-cols-4 gap-7 mb-80 mt-12'>
                {
                    products.map((items: Products) => (
                        <Link to={`/product/${items.id}`}>
                            <ProductItem {...items} />
                        </Link>
                    ))
                }
            </div>
        </Container>
    )
}

export default Store