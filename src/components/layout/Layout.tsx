import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

interface ILayout{
    children: React.ReactNode
}


function Layout({children}: ILayout) {
  return (
    <div  className='bg-[#dcdcdc]'>
        <div className='w-full h-[45px] bg-black text-white text-[12px] flex items-center justify-center'>حمل و نقل 2 روزه رایگان برای سفارشات بیش تر از 150 هزار تومان دریافت کنید و لذت ببرید!</div>
        <Navbar />
        <main>{children}</main>
        <Footer />
    </div>
  )
}

export default Layout