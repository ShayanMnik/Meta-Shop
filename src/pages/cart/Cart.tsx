import Container from '../../components/container/Container';
import CartItem from '../../components/cartItem/CartItem';
import Button from '../../components/button/Button';
import { useShoppingCartContext } from '../../context/ShoppingCartContext';
import dollar from "../../assets/img/dollar.svg";
import { useEffect, useState } from 'react';
import type { Products } from '../../types/servers';
import { getNewProduct } from '../../services/api';
import greenD from "../../assets/img/greenDollar.svg";
import grayD from "../../assets/img/grayDollar.svg";

function Cart() {
  const { cartItems, allProductCount } = useShoppingCartContext();

  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    getNewProduct().then((res: any) => {
      if (Array.isArray(res)) {
        const normalized = res.map(p => ({ ...p, id: String(p.id) }));
        setProducts(normalized);
      } else {
        setProducts([]);
        console.warn("getNewProduct returned non-array:", res);
      }
    }).catch((err) => {
      setProducts([]);
      console.error("Error fetching products:", err);
    });
  }, []);
  console.log(cartItems);

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
    <div className='w-full px-4 py-8'>
      <Container>
        {/* حالت flex در md به بالا برای نمایش کنار هم */}
        <div className='flex flex-col md:flex-row gap-6 items-start'>

          {/* لیست آیتم‌ها */}
          <div className='flex flex-col gap-4 w-full md:w-8/12'>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <CartItem key={item.id} id={item.id} count={item.count} />
              ))
            ) : (
              <p className='text-center text-gray-500 py-10'>سبد خرید شما خالی است.</p>
            )}
          </div>

          {/* خلاصه فاکتور */}
          <div className='w-full h-52 md:w-4/12 px-7 py-4 bg-white shadow rounded-[16px]'>
            <div className='w-full flex flex-wrap gap-3'>
              <div className='w-full flex items-center justify-between py-1 px-2 text-[#6D7177]'>
                <p className='text-[13px] md:text-[11px] lg:text-[15px]'>
                  قیمت کالاها ({`${allProductCount}`})
                </p>
                <div className='flex items-center text-[11px]'>
                  <p className='w-[50px] text-left text-[12px]'>
                    {totalPrice.toLocaleString()}
                  </p>
                  <img className='h-full' src={grayD} alt='' />
                </div>
              </div>

              <div className='w-full flex items-center justify-between py-1 px-2'>
                <p className='text-[13px] md:text-[11px] lg:text-[15px]'>جمع سبد خرید</p>
                <div className='flex items-center text-[11px]'>
                  <p className='w-[50px] text-left text-[12px]'>
                    {finalPrice.toLocaleString()}
                  </p>
                  <img className='h-full' src={dollar} alt='' />
                </div>
              </div>

              <div className='w-full flex items-center justify-between py-1 px-2 text-[#3da743]'>
                <p className='text-[13px] md:text-[11px] lg:text-[15px]'>سود شما از خرید</p>
                <div className='flex items-center text-[11px]'>
                  <p className='w-[50px] text-left text-[12px]'>
                    {totalDiscount.toLocaleString()}
                  </p>
                  <img className='h-full' src={greenD} alt='' />
                </div>
              </div>

              <Button className='w-full mt-2 bg-[#0381FB] text-white hover:bg-[#026dd4] active:bg-[#0255a6] text-[13px] md:text-[12px] lg:text-[14px] rounded-[9px] h-[35px]'>
                نهایی کردن سفارش
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Cart;
