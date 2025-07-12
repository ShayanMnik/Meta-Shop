// App.tsx
import React from 'react';
import Carousel from '../../components/carousel/Carousel';

const TestCars: React.FC = () => {
    return (
        <div className='w-[100%] px-5 lg:px-36 py-10'>
            <Carousel />
        </div>
    );
};

export default TestCars;
