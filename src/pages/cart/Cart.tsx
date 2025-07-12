import Container from '../../components/container/Container';
import CartItem from '../../components/cartItem/CartItem';
import Button from '../../components/button/Button';
import { useShoppingCartContext } from '../../context/ShoppingCartContext';
import dollar from "../../assets/img/dollar.svg"
import { useEffect, useState } from 'react';
import type { Products } from '../../types/servers';
import { getNewProducts } from '../../services/api';
import greenD from "../../assets/img/greenDollar.svg"
import grayD from "../../assets/img/grayDollar.svg"
import emptyCart from "../../assets/img/emptyCart.png"
function Cart() {

  const { cartItems, allProductCount } = useShoppingCartContext()

  const [products, setProducts] = useState<Products[]>([])

  useEffect(() => {
    getNewProducts().then((res) => {
      setProducts(res)
    });
  }, []);

  const { totalPrice, totalDiscount, finalPrice } = cartItems.reduce(
    (acc, cartItem) => {
      const product = products.find((p) => Number(p.id) === (cartItem.id));
      if (!product) return acc;

      const itemTotal = product.price * cartItem.count;
      const discountRate = product.discount ?? 0;
      const discountAmount = (product.price * discountRate / 100) * cartItem.count;

      acc.totalPrice += itemTotal;
      acc.totalDiscount += discountAmount;
      acc.finalPrice += itemTotal - discountAmount;

      return acc;
    },
    { totalPrice: 0, totalDiscount: 0, finalPrice: 0 }
  );

  return (
    <div className='w-full px-12 py-8'>
      <Container>
        <div className='flex justify-center gap-4 flex-wrap min-h-[260px]  md:grid md:grid-cols-12'>

          <div className={`flex md:col-span-8 w-full h-[270px] md:h-[fit] rounded-[16px]`}>
            <div className='w-full flex flex-col items-center rounded-[16px] mb-4 gap-3'>
              {
                cartItems.map((item) => (
                  <CartItem key={item.id} id={item.id} count={item.count} />
                ))
              }
            </div>
          </div>
          <div className={`flex md:col-span-4 ${allProductCount === 0 ? "md:col-start-9" : ""} w-full h-56 md:h-48 px-7 py-4 bg-white shadow rounded-[16px]`}>
            <div className='w-full h-[100%] flex flex-wrap gap-3'>
              <div className='w-full flex items-center justify-between py-1 px-2 text-[#6D7177]'>
                <p className='flex flex-row-reverse items-center justify-center text-[13px] md:text-[11px] lg:text-[15px]'>قیمت کالاها ({`${allProductCount}`})</p>
                <div className='flex flex-row-reverse items-center justify-start w-[100px] h-full text-[11px] md:text-[9px] lg:text-[11px]'>
                  <img className=' h-full' src={grayD} alt="" />
                  <p className='w-[50px] h-full flex items-center justify-end text-[12px] '>{totalPrice.toLocaleString()}</p>
                </div>
              </div>
              <div className='w-full flex items-center justify-between py-1 px-2'>
                <p className='flex flex-row-reverse items-center justify-center text-[13px] md:text-[11px] lg:text-[15px]'>جمع سبد خرید</p>
                <div className='flex flex-row-reverse items-center justify-start w-[100px] h-full text-[11px] md:text-[9px] lg:text-[11px]'>
                  <img className=' h-full' src={dollar} alt="" />
                  <p className='w-[50px] h-full flex items-center justify-end text-[12px] '>{finalPrice.toLocaleString()}</p>
                </div>
              </div>
              <div className='w-full flex items-center justify-between py-1 px-2 text-[#3da743]'>
                <p className='flex flex-row-reverse items-center justify-center text-[13px] md:text-[11px] lg:text-[15px]'>سود شما از خرید</p>
                <div className='flex flex-row-reverse items-center justify-start w-[100px] h-full text-[11px] md:text-[9px] lg:text-[11px]'>
                  <img className=' h-full' src={greenD} alt="" />
                  <p className='w-[50px] h-full flex items-center justify-end text-[12px] '>{totalDiscount.toLocaleString()}</p>
                </div>
              </div>
              <Button className='w-full flex items-center justify-center mx-2 cursor-pointer bg-[#0381FB] text-white hover:bg-[#026dd4] active:bg-[#0255a6] md:text-[12px] lg:text-[14px] duration-200 rounded-[9px] h-[35px]'>نهایی کردن سفارش</Button>
            </div>
          </div>
        </div>
      </Container>
    </div>

  )
}

export default Cart;



