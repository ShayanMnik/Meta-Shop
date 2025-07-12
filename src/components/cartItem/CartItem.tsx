import { useEffect, useState } from 'react'
import Button from '../button/Button'
import add from '../../assets/img/Add.svg'
import remove from '../../assets/img/remove.svg'
import { getNewProduct } from '../../services/api'
import type { Products } from '../../types/servers'
import { useShoppingCartContext } from '../../context/ShoppingCartContext'
import { Link } from 'react-router-dom'
import redTrashCan from "../../assets/img/redTrashCan.svg"
import dollar from "../../assets/img/dollar.svg"

interface ICartItem {
    id: number;
    count: number;
    key: number;


}



function CartItem({ id, count }: ICartItem) {

    const [product, setProduct] = useState<Products>()
    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const [status, setStatus] = useState(false)

    useEffect(() => {
        getNewProduct(id).then((res) => {
            setProduct(res)
        });
    }, []);

    const { handleIncreaseItemCount, handeDecreaseItemCount } = useShoppingCartContext()

    return (

        <div className='w-full h-56 md:h-48 grid grid-cols-5 p-4  shadow rounded-[16px] bg-white'>
            <Link className='col-span-2 object-contain flex items-center justify-center' to={`/product/${id}`}>

                <img className='w-[130px]' src={product?.imageUrl} alt="1" />

            </Link>

            <div className='w-full col-span-3 px-6 pb-6 flex flex-wrap gap-4'>

                <Link to={`/product/${id}`} dir='ltr' className='w-full ellipsis-multiline-3 md:h-auto flex text-left items-center text-[14px] lg:text-[16px]'>{product?.title}</Link>
                <div className='w-full flex items-center justify-end'>
                    <div className='flex items-center justify-center'>
                        <p className='flex items-center justify-center pt-1'>1</p>
                        <img className='ml-5' src={dollar} alt="" />
                    </div>
                    <div dir='ltr'>price :</div>
                </div>
                <div className='w-full flex flex-row-reverse items-center justify-end gap-1 text-[13px] lg:text-xl'>
                    <div
                        onClick={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                            setSelectedColor(prev => prev === "قرمز" ? null : "قرمز");
                        }}
                        className='md:w-[17px] md:h-[17px] w-[15px] h-[14px] cursor-pointer rounded-[1000px] text-[13px] border-[0.5px] border-[#1b1b1b]/30 bg-red-500'
                    ></div>
                    <div onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        setSelectedColor(prev => prev === "سبز" ? null : "سبز");

                    }} className='md:w-[17px] md:h-[17px] w-[15px] h-[14px] cursor-pointer rounded-[1000px] text-[13px] border-[0.5px] border-[#1b1b1b]/30 bg-green-500'></div>
                    <div onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        setSelectedColor(prev => prev === "آبی" ? null : "آبی");


                    }} className='md:w-[17px] md:h-[17px] w-[15px] h-[14px] cursor-pointer rounded-[1000px] text-[13px] border-[0.5px] border-[#1b1b1b]/30 bg-blue-500'></div>
                    <div onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        setSelectedColor(prev => prev === "زرد" ? null : "زرد");


                    }} className='md:w-[17px] md:h-[17px] w-[15px] h-[14px] cursor-pointer rounded-[1000px] text-[13px] border-[0.5px] border-[#1b1b1b]/30 bg-yellow-500'></div>
                    <div onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        setSelectedColor(prev => prev === "سفید" ? null : "سفید");


                    }} className='md:w-[17px] md:h-[17px] w-[15px] h-[14px] cursor-pointer rounded-[1000px] text-[13px] border-[0.5px] border-[#1b1b1b]/30 bg-white'></div>
                    <div onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        setSelectedColor(prev => prev === "مشکی" ? null : "مشکی");


                    }} className='md:w-[17px] md:h-[17px] w-[15px] h-[14px] cursor-pointer rounded-[1000px] text-[13px] border-[0.5px] border-[#1b1b1b]/30 bg-black'></div>
                    {
                        selectedColor && <div className='text-[12px]'>{selectedColor}</div>
                    }
                </div>
                <div className='w-full flex flex-row-reverse items-center justify-between'>

                    <div className='flex items-center justify-start gap-5'>

                        <Button onClick={() => handleIncreaseItemCount((id as number))} className='text-gray-800 bg-[#DCDCDC] hover:bg-gray-200 active:bg-gray-300 px-1 py-1 rounded text-2xl cursor-pointer active:shadow'>
                            <img src={add} alt="add" />
                        </Button>

                        <p className='px-2 py-1 flex items-center justify-center text-center text-base'>{count}</p>

                        <Button onClick={() => handeDecreaseItemCount((id as number))} className='text-gray-800 bg-[#DCDCDC] hover:bg-gray-200 active:bg-gray-300 px-1 py-1 rounded text-2xl cursor-pointer active:shadow'>
                            {
                                count > 1 ? <img src={remove} alt="remove" /> : <img src={redTrashCan} alt="RTrashcan" />
                            }
                        </Button>

                    </div>

                    {/* <Button onClick={() => removeProduct((id as number))} className='text-gray-800 bg-gray-200 active:bg-gray-300 flex items-center justify-center h-10 w-8 rounded cursor-pointer active:shadow'>
                        <img className='w-6 h-9' src={TrashCan} alt="Delete" />
                    </Button> */}

                </div>
            </div>


        </div>
    )
}

export default CartItem
