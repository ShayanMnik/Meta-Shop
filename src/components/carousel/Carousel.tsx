// Carousel.tsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import slider from "../../assets/img/slider.jpg"
// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

// Optional: Define a type if you're working with dynamic data
interface Slide {
    id: number;
    imageUrl: string | any;
    alt?: string;
}

const slides: Slide[] = [
    {
        id: 1,
        imageUrl: "https://i.postimg.cc/505G8Btx/slider.jpg",
        alt: 'Slide 1',
    },
    {
        id: 2,
        imageUrl: "https://i.postimg.cc/505G8Btx/slider.jpg",
        alt: 'Slide 2',
    },
    {
        id: 8,
        imageUrl: "https://i.postimg.cc/505G8Btx/slider.jpg",
        alt: 'Slide 3',
    },
];

const Carousel: React.FC = (id) => {
    return (
        <div className='md:w-[1000px] md:h-[300px] mx-auto rounded-[8px]'>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                autoplay={{ delay: 7000 }}
                loop={true}
                pagination={{ clickable: true }}
                navigation
                className='shayanSwiper rounded-[8px]'
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <Link className='w-full h-full block' to={`/product/${slide.id}`}>
                            <img
                                src={slide.imageUrl}
                                alt={slide.alt}
                                style={{ width: "100%", objectFit: "cover", borderRadius: "8px" }}
                            />
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Carousel;
