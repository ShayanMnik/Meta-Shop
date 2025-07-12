import { useEffect, useState } from "react"
import { getAllNewProducts } from "../../services/api";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Products } from "../../types/servers";
import Container from "../container/Container";
import ProductCard from "../ProductCard/ProductCard";
import { Link } from "react-router-dom";
import arrLeft from "../../assets/img/arrLeft.svg"
import arrLeftPng from "../../assets/img/arrLeft.png"
import { ArrowLeft, ArrowRight } from "lucide-react";





function SlidersByCategroy() {
    const [products, setProducts] = useState<Products[]>([])

    const categories = Array.from(new Set(products.map(item => item.category)));

    const getProductsByCategory = (category: string) => {
        return products.filter(item => item.category === category);
    };



    useEffect(() => {
        getAllNewProducts().then((res) => {
            setProducts(res)
        });
    }, []);


    return (
        <Container>
            {categories.map((category) => (
                <div key={category}>
                    <div className="w-full flex items-center justify-end  py-2">
                        <Link to={"/store"} className="flex items-center text-[15px] flex-row-reverse pl-7 text-left duration-150 hover:text-[#0381FB]">
                            {category}
                            <ArrowRight className="w-5 h-5 pb-1 ml-2 group-hover:text-[#0381FB] duration-150" />
                        </Link>
                    </div>
                    <Swiper className="w-[95%] h-[350px] rounded-[8px] my-4 mx-auto mb-24"
                        spaceBetween={10}
                        slidesPerView={4}
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
                        {getProductsByCategory(category).map(product => (
                            <SwiperSlide key={product.id}>
                                <ProductCard product={product} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            ))}
        </Container>
    )
}

export default SlidersByCategroy