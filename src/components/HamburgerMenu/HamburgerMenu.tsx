import { useState } from "react"
import { Link } from "react-router-dom"
import HamburgerMenuIcon from "../../assets/img/hamburgerMenu.svg"
import grayX from "../../assets/img/grayX.svg"

function HamburgerMenu() {

    const [isOpen, setIsOpen] = useState(false)


    return (
        <div className="relative ">
            <button className="cursor-pointer" onClick={() => setIsOpen(prev => !prev)}>
                <img src={HamburgerMenuIcon} alt="menu" className="w-8 h-8" />
            </button>

            <div
                className={`fixed top-0 right-0 h-full w-72 rounded-bl-[50px] bg-[#1b1b1b] shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="py-4 px-6  flex flex-col space-y-4">
                    <button className="self-end mb-7" onClick={() => setIsOpen(false)}><img className="xbtn cursor-pointer" src={grayX} alt="" /></button>
                    <Link className="duration-150 text-[#C0C0C0] hover:text-[#0381FB] active:text-[#026dd4]" to="/" onClick={() => setIsOpen(false)}>خانه</Link>
                    <Link className="duration-150 text-[#C0C0C0] hover:text-[#0381FB] active:text-[#026dd4]" to="/store" onClick={() => setIsOpen(false)}>فروشگاه</Link>
                    <Link className="duration-150 text-[#C0C0C0] hover:text-[#0381FB] active:text-[#026dd4]" to="/cart" onClick={() => setIsOpen(false)}>سبد خرید</Link>
                    <Link className="duration-150 text-[#C0C0C0] hover:text-[#0381FB] active:text-[#026dd4]" to="/login" onClick={() => setIsOpen(false)}>ورود</Link>
                </div>
                <div className="absolute bottom-[20px] right-[10px] h-[50px] w-[80%] border-t-[0.5px] border-t-[#C0C0C0] flex items-center  mb-5 mr-4 "><p className="text-[#C0C0C0] text-[14px] w-full flex items-center justify-start">© کپی رایت سال 1404 ، <a className="decoration-0 text-[#C0C0C0] hover:text-[#0381FB]" href="#">شایان نیک</a></p>
                </div>
            </div>

            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 bg-black/30 z-40"
                />
            )}
        </div>
    )
}

export default HamburgerMenu