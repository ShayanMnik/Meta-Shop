import React from 'react'
import Container from '../../components/container/Container';
import CartItem from '../../components/cartItem/CartItem';
import Button from '../../components/button/Button';

function Cart() {
  return (
    
    <Container>

        <div className='grid grid-cols-1 mt-4'>
            <CartItem variant='red'/>
            <CartItem variant='green' className='col-span-12'/>
            <CartItem variant='blue' className='col-span-12'/>
            <CartItem variant='black' className='col-span-12'/>
            <CartItem variant='yellow' className='col-span-12'/>
        </div>

        <div className='w-full h-52 flex flex-wrap items-center mt-7 mb-10 shadow gap-3'>
            <p className='w-full pr-5 flex items-center mt-4'>قیمت کل : 2000$</p>
            <p className='w-full pr-5 flex items-center'>تخفیف شما : 300$</p>
            <p className='w-full pr-5 flex items-center'>قیمت نهایی : 1700$</p>
            <Button 
            className='px-7 py-1.5 rounded mr-5 mb-6 cursor-pointer active:!bg-green-600'
            variant='green'>
                ثبت سفارش 
            </Button>
        </div>

    </Container>

  )
}

export default Cart;