import React from 'react'
import SimpleImageSlider from 'react-simple-image-slider';

const Slider = () => {
    const sliderImages = [
        {
          url:
            "https://vsmart.ajspire.com/uploads/slider/1671082475.jpg",
        },
        {
          url:
    "https://vsmart.ajspire.com/uploads/slider/1667996845.jpg"
        },
    
          
       
      ];
  return (
    <div><div id="slides-shop" class="cover-slides">
    <ul class="slides-container ">
        <li class="text-center">
      <SimpleImageSlider  width={1700} height={700} images={sliderImages} showNavs={true} />
           
        </li>
       
      
    </ul>

</div></div>
  )
}

export default Slider