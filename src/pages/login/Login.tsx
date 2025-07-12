import { useState } from "react"
import Button from "../../components/button/Button"
import { useShoppingCartContext } from "../../context/ShoppingCartContext"
import { Link } from "react-router-dom"
import logo from "../../assets/img/Meta-Logo.png"

function Login() {

    const { handleLogin } = useShoppingCartContext()


    const [user, setUser] = useState({
        username: "",
        password: ""
    })


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        setUser({
            ...user,
            [name]: value
        })
    }


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("test submit");


    }

    return (
        <div className='w-full h-[90vh] flex items-center content-start justify-center bg-[#E8E8E8] overflow-hidden'>
            <div className='w-[250px] md:w-[350px] xl:w-[400px] h-[450px] flex flex-col justify-start items-center shadow gap-5 px-5 rounded-[6px] py-5 bg-[#FFFFFF]'>
                <img className="w-[130px]" src={logo} alt="" />
                <h1 className='w-full h-[35px] font-bold text-[24px] flex items-center justify-center mb-1 text-[#111827]'>ورود</h1>

                <form className='w-full h-[100px] flex flex-wrap' onSubmit={handleSubmit}>

                    <input required onChange={handleChange} name="username" value={user.username} className='w-full h-[40px] rounded-[6px] bg-[#F3F4F6] placeholder-[#9FA6B2] border-gray-600 outline-0 flex text-right items-center pr-3 mb-3' type="text" placeholder='نام کاربری' id='username' />
                    <input required onChange={handleChange} name="password" value={user.password} className='w-full h-[40px] bg-[#F3F4F6] border-gray-800 rounded-[6px]  outline-0 flex text-right items-center justify-end pr-3 mb-2' type="password" placeholder='رمزعبور' id='password' />
                    <div className="w-full h-[40px] flex items-center justify-between">
                        <div className="flex items-center gap-1 text-[9px] md:text-[13px] font-normal"><input id="checkbox" type="checkbox" />مرا بخاطر بسپار</div>
                        <Link className="text-[#4B8CF7] text-[9px] md:text-[13px] font-normal" to={"/"}>فراموشی رمزعبور ؟</Link>
                    </div>
                    <div className="w-full h-[40px] flex items-center justify-start gap-2 text-[10px] md:text-[15px] font-normal">حساب کاربری نداری ؟ <Link className="text-[#4B8CF7] text-[11px] md:text-[14px]" to={"/"}>ثبت نام</Link></div>
                    <Button className="bg-[#586DF2] active:bg-[#4d5fd3] text-[#FCFCFF] w-full h-[40px] mt-2 mb-2 flex items-center justify-center rounded text-[16px] font-bold" type="submit" onClick={()=> handleLogin(user.username , user.password)}>ورود</Button>
                </form>
            </div>
        </div>
    )
}
export default Login;


















// <div className="flex flex-col items-center justify-center h-screen">
//     <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
//         <h2 className="text-2xl font-bold text-gray-900 mb-4">Login</h2>
//         <form className="flex flex-col">
//             <input type="email" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Email address">
//                 <input type="password" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Password">
//                     <div className="flex items-center justify-between flex-wrap">
//                         <label htmlFor="remember-me" className="text-sm text-gray-900 cursor-pointer">
//                             <input type="checkbox" id="remember-me" className="mr-2">Remember me</input>

//                         </label>
//                         <a href="#" className="text-sm text-blue-500 hover:underline mb-0.5">Forgot password?</a>
//                         <p className="text-gray-900 mt-4"> Don't have an account? <a href="#" className="text-sm text-blue-500 -200 hover:underline mt-4">Signup</a></p>
//                     </div>
//                     <button type="submit" className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150">Login</button>
//                 </input>
//             </input>
//         </form>
//     </div>
// </div>