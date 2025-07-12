import React from 'react'
import TestCars from '../../components/testCars/TestCars';
import Container from '../../components/container/Container';
import ProductSlider from '../../components/ProductSlider/ProductSlider';
import SlidersByCategroy from '../../components/slidersByCategory/SlidersByCategroy';

function Home() {
  return (
    <Container>
      <div>
        <div className='flex items-center justify-center w-full'>
          <TestCars />
        </div>
        <div className='flex items-center justify-center w-full'>
          <ProductSlider />
        </div>
        <div className='flex items-center justify-center w-full'>
          <SlidersByCategroy />
        </div>
      </div>
    </Container>
  )
}

export default Home;