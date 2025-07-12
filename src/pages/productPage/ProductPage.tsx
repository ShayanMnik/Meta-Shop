import  { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Container from '../../components/container/Container';
import Button from '../../components/button/Button';
import type { Products } from '../../types/servers';
import { getNewProduct } from '../../services/api';
import add from '../../assets/img/Add.svg'
import remove from '../../assets/img/remove.svg'
import { useShoppingCartContext } from '../../context/ShoppingCartContext';
import TrashCan from '../../assets/img/traschCan.svg'


function ProductPage() {
    const params = useParams<{ id: string }>();
    const [product, setProduct] = useState<Products>();

    const { handeDecreaseItemCount, handleIncreaseItemCount, getProductCount, removeProduct } = useShoppingCartContext()


    useEffect(() => {
        getNewProduct(params.id as string).then((res) => {
            setProduct(res)
        })
    })

    return (
        <Container>
            <div className='h-96 grid grid-cols-7 md:grid-cols-12 mt-10 shadow-lg mb-10 bg-white rounded-[8px]'>
                <div className='col-span-3 md:col-span-2 p-5 border-l border-gray-300'>
                    <img className='rounded' src={product?.imageUrl} alt="1" />
                    {
                        getProductCount(parseInt(params.id as string)) === 0 ?
                            <Button onClick={() => handleIncreaseItemCount(parseInt(params.id as string))} className='w-full h-9 text-gray-800 bg-gray-200 rounded text-[13px] shadow-md mt-16 active:bg-gray-300'>
                                Add to cart
                            </Button>
                            :
                            <div className='flex flex-wrap items-center justify-center gap-3'>
                                <div className='w-full flex items-center justify-between gap-1  mt-[40px]'>
                                    <Button onClick={() => handleIncreaseItemCount(parseInt(params.id as string))} className='px-1 py-1 rounded text-2xl cursor-pointer shadow text-gray-800 bg-gray-200 active:bg-gray-300'>
                                        <img className='w-[20px] h-[20px]' src={add} alt="add" />
                                    </Button>
                                    <p className='px-2 py-1 flex items-center justify-center text-center text-lg'>
                                        {getProductCount(parseInt(params.id as string))}
                                    </p>
                                    <Button onClick={() => handeDecreaseItemCount(parseInt(params.id as string))} className='px-1 py-1 rounded text-2xl cursor-pointer shadow text-gray-800 bg-gray-200 active:bg-gray-300'>
                                        <img className='w-[20px] h-[20px]' src={remove} alt="add" />
                                    </Button>
                                </div>
                                <Button onClick={() => removeProduct(parseInt(params.id as string))} className='w-full h-9 flex items-center justify-center text-gray-800 bg-gray-200 rounded text-[13px] shadow-md  active:bg-gray-300'>
                                    <img className='w-[20px] h-[20px]' src={TrashCan} alt="trashcan" />
                                </Button>
                                <Button className='w-full h-9 font-medium flex items-center justify-center text-[rgb(11, 11 ,11)] active:text-[#fff] cursor-pointer bg-green-500 active:bg-green-700 rounded text-[13px] shadow-md '>
                                    <Link to="/cart">
                                        سبد خرید
                                    </Link>
                                </Button>
                            </div>
                    }
                </div>
                <div className='col-span-4 md:col-span-10 p-7 md:p-14 flex flex-col justify-start'>
                    <h1 className='w-full text-left text-[14px] md:text-[17px] font-bold h-[80px] mt-3'>{product?.title}</h1>
                    <p className='flex h-[40px] text-left flex-row-reverse  items-center text-gray-600 mb-5'>: Price <span className='text-black ml-3'>$ {product?.price}</span></p>
                    <div className='h-[130px] md:pt-4 ellipsis-multiline-9 text-left'>
                        <p className='text-[11px] text-gray-600'>{product?.desc}</p>
                    </div>
                </div>
            </div>
        </Container>
    )
}
export default ProductPage;