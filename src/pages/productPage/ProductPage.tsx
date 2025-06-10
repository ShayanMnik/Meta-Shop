import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Container from '../../components/container/Container';
import Button from '../../components/button/Button';
import type { Products } from '../../types/servers';
import { getProduct } from '../../services/api';
import add from '../../assets/img/Add.svg'
import remove from '../../assets/img/remove.svg'

function ProductPage() {
    const params = useParams<{ id: string }>()
    const [product, setProduct] = useState<Products>()

    useEffect(() => {
        getProduct(params.id as string).then((res) => {
            setProduct(res)
        })
    })
    
    const [count , setCount] = useState(1)


    const handleAddCount = () => {
        setCount(prevCount => prevCount + 1)
    }
    const handleRemoveCount = () => {
        setCount(prevCount => prevCount - 1)
    }

    return (
        <Container>
            <div className='h-96 grid grid-cols-12 mt-4 shadow-md'>
                <div className='col-span-2 p-5 border-l border-gray-300'>
                    <img className='rounded' src={product?.imageUrl} alt="1" />
                    <div className='flex items-center justify-between gap-1 my-4'>
                        <Button onClick={handleAddCount} className='px-1 py-1 rounded text-2xl cursor-pointer shadow active:shadow-lg'>
                            <img src={add} alt="add" />
                        </Button>
                        <p className='px-2 py-1 flex items-center justify-center text-center text-lg'>{count}</p>
                        <Button onClick={handleRemoveCount} className='px-1 py-1 rounded text-2xl cursor-pointer shadow active:shadow-lg'>
                            <img src={remove} alt="add" />
                        </Button>
                    </div>
                    <Button
                        className='w-full h-9 text-gray-800 text-sm shadow-lg active:shadow-xl  '
                        onClick={() => {
                            alert("Added to cart")
                        }}>
                        Add to cart
                    </Button>
                </div>
                <div className='col-span-10 p-14 flex flex-wrap justify-between'>
                    <h1 className='w-full text-xl font-bold mb-3'>{product?.title}</h1>
                    <p className='flex items-center text-gray-600'>قیمت : &nbsp; <span className='text-black'>$ {product?.price}</span></p>
                    <div className='pt-4 text-right'>
                        <p className='mt-3 text-[15px] text-gray-600'>{product?.desc}</p>
                    </div>
                </div>
            </div>
        </Container>
    )
}
export default ProductPage;