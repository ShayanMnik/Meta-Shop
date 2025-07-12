import { Link } from "react-router-dom"
import Logo from "../../assets/img/Meta-Logo2.png"
import linkedin from "../../assets/img/lin.svg"
import github from "../../assets/img/git.svg"
import instagram from "../../assets/img/insta.svg"
import telegram from "../../assets/img/tel.svg"
import Button from "../button/Button"
import payment from "../../assets/img/payment.png"
import Container from "../container/Container"
function Footer() {
    return (
        <div className='w-full h-[440px] flex-wrap bg-[#181818]'>
            <Container>
                <section className='grid grid-cols-9 lg:grid-cols-12 w-full h-[330px]'>


                    <div className='col-span-3 lg:col-span-2  py-[52.5px] px-[30px] h-full '>
                        <h2 className="w-full h-[40px] flex items-center pr-5 my-3 text-white text-[13px] xl:text-[15px] font-bold">اطلاعات <span className="w-[40px] h-[1.5px] bg-[#0381FB]/70 mr-4"></span></h2>
                        <ul className="w-full pr-5 text-[#888884]  pt-5">
                            <li className="w-full h-[30px] xl:text-[13px] text-[9px] hover:text-[#586DF2]">
                                <Link to={"/"}>نحوه ارسال سفارش</Link>
                            </li>
                            <li className="w-full h-[30px] xl:text-[13px] text-[9px] hover:text-[#586DF2]">
                                <Link to={"/"}>حریم خصوصی</Link>
                            </li>
                            <li className="w-full h-[30px] xl:text-[13px] text-[9px] hover:text-[#586DF2]">
                                <Link to={"/"}>قوانین و مقررات</Link>
                            </li>
                            <li className="w-full h-[30px] xl:text-[13px] text-[9px] hover:text-[#586DF2]">
                                <Link to={"/contactUs"}>تماس با ما</Link>
                            </li>
                            <li className="w-full h-[30px] xl:text-[13px] text-[9px] hover:text-[#586DF2]">
                                <Link to={"/"}>گارانتی و بازگشت کالا</Link>
                            </li>
                        </ul>
                    </div>


                    <div className='col-span-3 lg:col-span-2 py-[52.5px] px-[30px] h-full'>
                        <h2 className="w-full h-[40px] flex items-center pr-5 my-3 text-white text-[13px] xl:text-[15px] font-bold">حساب کاربری<span className="w-[20px] h-[1.5px] bg-[#0381FB]/70 mr-3"></span></h2>
                        <ul className="w-full pr-5 text-[#888884] pt-5">
                            <li className="w-full h-[30px] xl:text-[13px] text-[9px] hover:text-[#586DF2]">
                                <Link to={"/"}>حساب کاربری</Link>
                            </li>
                            <li className="w-full h-[30px] xl:text-[13px] text-[9px] hover:text-[#586DF2]">
                                <Link to={"/cart"}>تاریخچه سفارشات</Link>
                            </li>
                            <li className="w-full h-[30px] xl:text-[13px] text-[9px] hover:text-[#586DF2]">
                                <Link to={"/"}>حریم خصوصی</Link>
                            </li>
                            <li className="w-full h-[30px] xl:text-[13px] text-[9px] hover:text-[#586DF2]">
                                <Link to={"/"}>سوالات متداول</Link>
                            </li>
                        </ul>
                    </div>

                    <div className='col-span-3 lg:col-span-4  py-[52.5px] px-[30px] text-[#888884] text-[14px]'>
                        <div className="w-full h-[60px] flex items-center justify-center mb-2"><Link to={"/"}>
                            <img className="w-[150px]" src={Logo} alt="1" /></Link>
                        </div>
                        <div className="w-full h-[100px] flex items-center justify-center flex-wrap mb-2 text-[10px]">
                            <p className="w-full flex items-center justify-center">آدرس : ایران ، تهران ، تهرانپارس شرقی</p>
                            <p className="w-full flex items-center justify-center">تلفن : 02177074623 و 09223196067</p>
                            <p className="w-full items-center justify-center hidden lg:flex text-[12px]">ایمیل : <a className="hover:text-[#586DF2]" href="https://mortazavi.developer@gmail.com"> &nbsp;mortazavi.developer@gmail.com</a></p>
                            <p className="w-full flex items-center justify-center lg:hidden"><a className="hover:text-[#586DF2]" href="https://mortazavi.developer@gmail.com">mortazavi.developer@gmail.com</a></p>
                        </div>
                        <div className="w-full h-[30px] flex items-center gap-3 justify-center">
                            <a title="LinkedIn" href="https://www.linkedin.com/in/shayan-nik-533594321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><img className="w-[16px] h-[16px]" src={linkedin} alt="" /></a>
                            <a title="GitHub" href="https://github.com/ShayanMnik"><img className="w-[16px] h-[16px]" src={github} alt="" /></a>
                            <a title="Instagram" href="https://www.instagram.com/shayan.nik_web?igsh=eGFqZ295d3B0MzJ6"><img className="w-[16px] h-[16px]" src={instagram} alt="" /></a>
                            <a title="Telegram" href="https://t.me/shwynik"><img className="w-[16px] h-[16px]" src={telegram} alt="" /></a>
                        </div>
                    </div>


                    <div className='lg:col-span-4  p-10 hidden lg:grid'>
                        <div className="w-full">
                            <h2 className="w-full h-[40px] flex items-center mt-3 text-white text-[13px] xl:text-[15px] font-bold">عضویت در خبرنامه <span className="w-[40px] h-[1.5px] bg-[#0381FB] mr-4"></span></h2>
                        </div>
                        <p className="text-[#888884] xl:text-[13px] text-[11px] w-full mb-4 mt-2">اولین نفر باشید که مطلع می شوید. پس امروز در خبرنامه ثبت نام کنید!</p>
                        <form className="grid grid-cols-4 mt-4">
                            <input required type="text" className="rounded-tr rounded-br col-span-3 border-0 outline-0 inline h-[50px] bg-[#282828] text-[#888884] pr-4" placeholder="آدرس ایمیل شما..." />
                            <Button type="submit" className="rounded-bl rounded-tl cursor-pointer col-span-1 bg-[#0381FB] text-white hover:bg-[#026dd4] active:bg-[#0255a6] duration-200 text-[14px] flex items-center justify-center h-[50px]">عضو میشم!</Button>
                        </form>
                    </div>



                </section>
                <div className="w-full h-[100px] flex items-center justify-between  py-[52.5px] px-[30px] border-t border-t-[#888884]/20">
                    <p className="text-[#888884] text-[14px] w-full flex items-center justify-start pr-5">© کپی رایت سال 1404 ، <a className="decoration-0 text-[#888884] hover:text-[#0381FB]" href="#">شایان نیک</a></p>
                    <img className="bg-[#181818]" src={payment} alt="2" />
                </div>
            </Container>
        </div>
    )
}

export default Footer

