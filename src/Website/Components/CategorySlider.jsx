// import React from 'react'

// const CategorySlider = () => {
//   return (
//     <div>
//       <section className="section suggest-part">
//   <div className="container">
//     <ul className="suggest-slider slider-arrow slick-initialized slick-slider"><i className="icofont-arrow-right dandik slick-arrow" style={{display: 'block'}} />
//       <div className="slick-list draggable"><div className="slick-track" style={{opacity: 1, width: 5800, transform: 'translate3d(-2088px, 0px, 0px)'}}><li className="slick-slide slick-cloned" data-slick-index={-5} aria-hidden="true" style={{width: 212}} tabIndex={-1}>
//             <a className="suggest-card shadow my-2" href="/product-shop/14/0" tabIndex={-1}>
//               <img style={{width: 212, height: 101}} src="https://vsmart.ajspire.com/ecommerce/category_image/category_image/1658902579category.jpg" alt="1658902579category.jpg" />
//               <h5>Stationary
//                 1 items
//               </h5>
//             </a>
//           </li>
//         </div></div>
//       <i className="icofont-arrow-left bamdik slick-arrow" style={{display: 'block'}} /></ul>
//   </div>
// </section>

//     </div>
//   )
// }

// export default CategorySlider 













import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CategorySlider = () => {
  const [slider, SetSlider] = useState([]);

  const getSlid2 = async () => {
    try {
      const response = await fetch("https://vsmart.ajspire.com/api/categories");
      const data = await response.json();

      if (Array.isArray(data)) {
        SetSlider(data.slice(0, 10));
      } else {
        console.error("Fetched data is not an array:", data);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  

  useEffect(() => {
    getSlid2();
  }, []);
  return (
   
    //           
    //               <h5>Stationary
    //                 1 items
    //               </h5>
    //             </a>
    //           </li>
    //         </div></div>
    //       <i className="icofont-arrow-left bamdik slick-arrow" style={{display: 'block'}} /></ul>
    //   </div>
    // </section>

    <section className="section suggest-part">
      <div className="container">

        <Carousel interval={2000}>
          {slider.map((category, index) => (
            <Carousel.Item key={index}>
      <ul className="suggest-slider slider-arrow slick-initialized slick-slider"><i className="icofont-arrow-right dandik slick-arrow" style={{display: 'block'}} />
              <div className="suggest-slider slider-arrow slick-initialized slick-slider"style={{opacity: 1, width: 5800, transform: 'translate3d(-2088px, 0px, 0px)'}}>
              <a className="suggest-card shadow my-2" href="/product-shop/14/0" tabIndex={-1}>
               
                
                {slider.slice(index, index + 5).map((category) => (
                  <Link to={`/product-shop/${category.category_id}/${category.subcategory_id}`} >
                    <a
                      key={category.category_id}
                      className="suggest-card shadow my-2 rounded-bottom-5  "
                      href={`/product-shop/${category.category_id}/0`}
                    >
                      <img style={{width: 212, height: 101}} src={category.category_banner} alt="1658902579category.jpg" />

                      <div>
                        <h5 className="text-center text-bg-success">
                          {category.category_name}
                          <br />
                        </h5>
                      </div>
                    </a>
                  </Link>
                   ))}
                  </a>
                  </div>

               
            </ul>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  )
}

export default CategorySlider
