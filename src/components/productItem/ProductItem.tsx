import type { Product } from "../../types/servers"
import dollar from "../../assets/img/dollar.svg"
import Button from "../button/Button"
import { Link, useParams } from "react-router-dom"
import { useShoppingCartContext } from "../../context/ShoppingCartContext"
import add from '../../assets/img/Add.svg'
import remove from '../../assets/img/remove.svg'
import TrashCan from '../../assets/img/traschCan.svg'



type ProductsTypes = Product



function ProductItem({ ...items }: ProductsTypes) {
  const params = useParams<{ id: string }>();
  const { handeDecreaseItemCount, handleIncreaseItemCount , getProductCount, removeProduct } = useShoppingCartContext()

  return (
    <div className="w-full overflow-hidden h-full shadow rounded-lg bg-white">
      <div className="p-6 w-full flex items-center justify-center md:w-[300px]  md:h-[300px]">
        <img className="rounded p-4 h-[300px] w-[300px] object-contain" src={items.imageUrl} alt="1" />
      </div>
      <div className="flex justify-between px-4 md:px-7 h-14 ">
        <h3 className="flex items-center ellipsis-multiline justify-center text-[12px] text-left">{items.title}</h3>
      </div>
      <div className="flex flex-row-reverse items-center justify-between content-start px-4 md:px-7  h-12">
        {
          items.discount !== undefined ? <>
            <div className="flex flex-wrap">
              <p className="flex items-center justify-end text-[13px] h-[15px] w-full">{items.price - items.discount}<img src={dollar} className="w-[15px] h-[15px]" alt="dollar-sign"></img></p>
              <p className="w-full h-[15px] flex items-center justify-end text-[13px] line-through text-[#656565] pl-[15px]">{items.price}</p>
            </div>
          </> : <p className="w-full h-[15px] flex items-center justify-end text-[13px] text-[#1b1b1b]">{items.price} <img src={dollar} alt="1" /></p>

        }
        {
          getProductCount(parseInt(params.id as string)) === 0 ?
            <Button onClick={() => handleIncreaseItemCount(parseInt(params.id as string))} className='w-[100px] h-9 text-gray-800 bg-gray-200 rounded text-[13px] shadow-md active:bg-gray-300'>
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

      <div className="mb-4 flex items-center justify-center h-16">
        <p className="text-[9px] opacity-75 ellipsis-multiline-3 px-7 text-[#333] text-left">{items.desc}</p>
      </div>
    </div>
  )
}

export default ProductItem




