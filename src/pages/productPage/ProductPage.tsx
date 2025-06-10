import React from 'react'
import { useParams } from 'react-router-dom';
import Container from '../../components/container/Container';
import Button from '../../components/button/Button';



function ProductPage() {
    const params = useParams()



    return (
        <Container>

            <div className='h-96 grid grid-cols-12 mt-4 shadow'>

                <div className='col-span-2 bg-cyan-200 p-3.5 '>
                    <img className='rounded' src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png" alt="1" />


                    <Button 
                    className='w-full h-9 text-xl rounded mt-4  '
                    variant='blue'
                    onClick={()=>{
                        alert("KOOOOONI <3")
                    }}>
                        Add to cart
                    </Button>



                </div>
                <div className='col-span-10 p-14'>
                    <h1 className='text-xl font-bold mb-3'>عنوان محصول</h1>
                    <p className='mb-2.5'>قیمت : <span>55$</span></p>
                    <div className='pt-4 text-right'>
                        <p className='mb-3'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد .کردبان فارسی ایجاد کرد.</p>
                    </div>
                </div>


            </div>

        </Container>
    )
}

export default ProductPage;