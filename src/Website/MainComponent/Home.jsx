import React from 'react'
import Featuredproduct from '../Components/FeatureProduct'
import Slider from '../Components/Slider';
import Categoryslider from '../Components/CategorySlider';
import Shop from '../Pages/Shop';
import ProductList from '../Components/ProductList';

const Home = () => {
  return (
    <div>
    <Slider></Slider>
    <Categoryslider></Categoryslider>
        <Featuredproduct></Featuredproduct>
        <ProductList></ProductList>
    </div>

  )
  
}

export default Home