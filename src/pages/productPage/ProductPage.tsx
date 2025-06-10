import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Container from '../../components/container/Container';
import Button from '../../components/button/Button';
import type { Products } from '../../types/servers';
import { getProduct } from '../../services/api';


function ProductPage() {
    const params = useParams<{id : string}>()
    const [product, setProduct] = useState<Products>()

    useEffect(() => {
        getProduct(params.id as string).then((res) => {
            setProduct(res)
        })
    })

    return (
        <Container>
            <div className='h-96 grid grid-cols-12 mt-4 shadow'>
                <div className='col-span-2 bg-cyan-200 p-3.5 '>
                    <img className='rounded' src={product?.imageUrl} alt="1" />
                    <Button
                        className='w-full h-9 text-xl rounded mt-4  '
                        variant='blue'
                        onClick={() => {
                            alert("KOOOOONI <3")
                        }}>
                        Add to cart
                    </Button>
                </div>
                <div className='col-span-10 p-14'>
                    <h1 className='text-xl font-bold mb-3'>{product?.title}</h1>
                    <p className='mb-2.5'>قیمت : <span>{product?.price}$</span></p>
                    <div className='pt-4 text-right'>
                        <p className='mb-3'>{product?.desc}</p>
                    </div>
                </div>
            </div>
        </Container>
    )
}
export default ProductPage;