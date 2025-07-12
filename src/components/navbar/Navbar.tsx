import Container from '../container/Container'
import { Link } from 'react-router-dom'
import cart from '../../assets/img/cart.svg'
import { useShoppingCartContext } from '../../context/ShoppingCartContext'
import LogOut from "../../assets/img/LogOut.svg"
import Profile from "../../assets/img/profile.svg"
import arrowDown from "../../assets/img/arrowDown.svg"
import { useEffect, useRef, useState } from 'react'
import Button from '../button/Button'
import arrowLeft from "../../assets/img/arrowLeft.svg"
import redLogOut from "../../assets/img/redLogOut.svg"
import Logo from "../../assets/img/Meta-Logo.png"
import SearchBar from '../serachBox/SearchBox'
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu'


function Navbar() {

    const { allProductCount, isLogin, handleLogOut } = useShoppingCartContext()

    const [show, setShow] = useState(false)

    const username: string | null = localStorage.getItem("username")

    const boxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (boxRef.current && !boxRef.current.contains(event.target as Node)) {
                setShow(false);
            }
        }

        if (show) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [show]);

    return (
        <div className='h-20 shadow-lg flex items-center bg-white'>
            <Container>
                <div className='flex justify-between items-center rounded'>
                    <div className='w-[500px] xl:w-[900px] gap-10 flex items-center justify-start'>
                        <Link to={"/"}><img className='w-[120px]' src={Logo} alt="logo" /></Link>
                        <ul className='lg:flex-row-reverse hidden lg:flex '>
                            <li className='ml-4'>
                                <Link to={"/"}>
                                    خانه
                                </Link>
                            </li>
                            <li className='ml-4'>
                                <Link to={"/store"}>
                                    فروشگاه
                                </Link>
                            </li>
                        </ul>
                        <SearchBar className='hidden lg:w-[300px] xl:w-[500px] lg:flex' />
                    </div>

                    <div className='flex gap-2 group items-center h-full'>
                        {
                            isLogin ?
                                <div className='w-[60px] lg:h-[40px] ml-2 rounded px-4 items-center justify-center relative cursor-pointer hidden lg:flex' onClick={() => setShow((prev) => !prev)}>
                                    <img src={Profile} alt="" />
                                    <img src={arrowDown} alt="" />
                                    <div ref={boxRef} className={`w-[300px] h-[220px] bg-[#fafafa] z-[100] rounded border border-[#1b1b1b]/5 absolute top-full left-3 px-6 py-4 shadow opacity-0 ${show ? `opacity-100 pointer-events-auto` : `opacity-0 pointer-events-none`}`}>
                                        <Link to={"/"} className='w-full h-[60px] flex items-center justify-start border-b border-b-[#808080]/45 hover:bg-[#e6e6e6]/30 rounded'>
                                            <div className='w-[20%] h-full flex items-center justify-center'><img src={Profile} className='w-[25px] h-full flex items-end justify-center' alt="" /></div>
                                            <div className='w-[80%] h-full flex items-center justify-between pr-4'>{username} <img className='flex items-center justify-center pl-2' src={arrowLeft} alt="" /></div>

                                        </Link>

                                        <Link to={"/cart"} className='w-full h-[60px] flex items-center justify-between border-b border-b-[#808080]/45 hover:bg-[#e6e6e6]/30 rounded'>
                                            <div className='w-[20%] h-full flex items-center justify-center'><img src={cart} className='w-[25px] h-full flex items-end justify-center' alt="" /></div>
                                            <div className='w-[80%] h-full flex items-center justify-start pr-4 '>سبد خرید</div>
                                        </Link>

                                        <Button onClick={handleLogOut} className='w-full h-[60px] flex items-center justify-between hover:bg-[#e6e6e6]/30 rounded'>
                                            <div className='w-[20%] h-full flex items-center justify-center'><img src={redLogOut} className='w-[25px] h-full flex items-end justify-center' alt="" /></div>
                                            <div className='w-[80%] h-full flex items-center justify-start pr-4 text-[#EF4056] '>خروج از حساب کاربری</div>
                                        </Button>
                                    </div>
                                </div>
                                :
                                <Link className=' hidden lg:flex' to={"/login"}>
                                    <div className='w-[150px] h-[40px] ml-4 rounded px-4 flex items-center justify-center relative cursor-pointer border gap-2 border-[#1b1b1b]/15 text-[14px] active:bg-[#e6e6e6]/30'>
                                        <img className='w-[19px] h-[19px]' src={LogOut} alt="" /> ورود و ثبت نام
                                    </div>
                                </Link>
                        }
                        <Link title='Cart' className='relative items-center justify-center hidden lg:flex' to={"/cart"}>
                            <img src={cart} alt="" />
                            {
                                allProductCount !== 0 && <span className='absolute bottom-[-5px] left-3 w-[19px] h-[19px] text-[9px] rounded-[10px] text-center text-gray-100 bg-red-600 flex content-center items-center justify-center'>{allProductCount}</span>
                            }
                        </Link>
                    </div>

                    <div className='w-[100px] h-full flex items-center justify-center lg:hidden'>
                        <HamburgerMenu />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Navbar