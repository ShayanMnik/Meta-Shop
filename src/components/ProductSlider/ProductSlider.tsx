import { useState, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/swiper-bundle.css';
import { getAllNewProducts, getAllProducts, getProduct } from "../../services/api"
import ProductCard from "../ProductCard/ProductCard"
import Container from "../container/Container";
import { Navigation } from 'swiper/modules';
import { useRef } from 'react';
import arrLeft from "../../assets/img/arrLeft.png"
import arrRight from "../../assets/img/arrRight.png"
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react"



function ProductSlider() {
    const [products, setProducts] = useState([])
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        getAllNewProducts().then((res) => {
            setProducts(res)
        });
    }, []);


    return (
        <Container>
            <div className="w-full relative  shayanGroup">
                <div className="w-full flex items-center  justify-end py-2">
                    <Link to={"/store"} className="flex items-center text-[15px] flex-row-reverse pl-7 text-left duration-150 hover:text-[#0381FB]">
                        All New Products
                        <ArrowRight className="w-5 h-5 pb-1 ml-2 group-hover:text-[#0381FB] duration-150" />
                    </Link>
                </div>
                <Swiper className="w-[95%] h-[350px] my-4 mx-auto mb-24 rounded-[8px]" modules={[Navigation]} navigation={{
                    prevEl: prevRef.current!,
                    nextEl: nextRef.current!,
                }}
                    onSwiper={(swiper) => {
                        if (
                            swiper.params.navigation &&
                            typeof swiper.params.navigation !== 'boolean'
                        ) {
                            swiper.params.navigation.prevEl = prevRef.current!;
                            swiper.params.navigation.nextEl = nextRef.current!;
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }
                    }}
                    pagination={{ clickable: true }}
                    spaceBetween={18} slidesPerView={4}
                    breakpoints={{
                        100: {
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                        1280: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {products.map(product => (
                        <SwiperSlide className="flex items-center justify-center h-full" key={product}>
                            <ProductCard product={product} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <button
                    ref={nextRef}
                    className="sw-btn-2 shayanSlider swiper-button-prev absolute top-1/2 left-5 z-10 text-2xl ml-5 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-1000"
                >
                    <img src={arrLeft} alt="" />
                </button>
                <button
                    ref={prevRef}
                    className="sw-btn-2 shayanSlider  swiper-button-next absolute top-1/2 right-5 z-10 text-2xl mr-5 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-1000"
                >
                    <img src={arrRight} alt="" />
                </button>
            </div>
        </Container>
    )
}

export default ProductSlider