import React, { useEffect, useState } from 'react'; // Remove the extra import state
import { Carousel } from 'react-bootstrap';

const Slider = () => {

  const [Slider,SetSlider]=useState([]);
  const GetSlider = () => {
    fetch('https://vsmart.ajspire.com/api/banners')
      .then(response => response.json())
      .then(data => {
        SetSlider(data.banners);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };
  
useEffect(()=>
{GetSlider();},[]);
  return (
    <div  className="Slider">
<Carousel>
  {
    Slider.map((slider)=>
(
  <Carousel.Item>
<img src={slider.slider_image} alt="girl in the jacket" width="1730" height="700" />
  </Carousel.Item>
)

    )
  }
</Carousel>


    </div>
  )
}

export default Slider