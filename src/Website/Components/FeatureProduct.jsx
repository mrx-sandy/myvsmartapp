// import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
// import AuthUser from '../Authantication/AuthUser';

// const Featuredproduct = () => {
//     const [ourpro, setourpro] = useState([])
// const{http,token}=AuthUser()

//     fetch("https://vsmart.ajspire.com/api/products").then(
//         response => {
//             return response.json();
//         }
//     ).then(
//         data => {
//           console.log(data)
//             setourpro(data.products.data)
//         }
//     )
//     const addToCart = (productId) => {
//         http.post(`/add-to-cart/${productId}`)
//           .then(response => {
//             console.log('Product added to cart:', response.data);
//           })
//           .catch(error => {
//             // Handle errors
//             console.error('Error adding product to cart:', error);
//           });
//       };
//   return (

//          <div class="products-box">
//         <div class="container">
//             <div class="row">
//                 <div class="col-lg-12">
//                     <div class="title-all text-center">
//                         <h1>Our Featured product</h1>
//                     </div>
//                 </div>
//             </div>

//             <div class="row special-list">
//             { ourpro.slice(0,20).filter((product)=>product.featured===1).map((product=>
//                 <div className="col-lg-4 col-md-12">

//                 <div className="product-card shadow">
//                   <div className="product-media">
//                     <a className="product-image" href="/cat_product_one/3401/4">
//                       <img  style={{ width: 150, height: 150 }} src={product.product_image} alt="product" />
//                     </a>
//                   </div>
//                   <div className="product-content">
//                     <h6 className="product-name"><a href="/cat_product_one/3401/4" title={product.english_name}></a>
//                     </h6>
//                     {/* <h6 className="text-primary"><span><small>PV :</small>2.72</span>
//                     </h6> */}
//                     <h6 className="product-price">
//                       MRP<dproduct>{product.mrp_price}</dproduct><span>{product.sale_price}<small>/only</small></span>
//                     </h6>
//                     <p />
//                     <button className="product-add" style={{ backgroundColor: '#43A047' }} fdprocessedid="0crpk">
//                       Add To Cart
//                     </button>
//                   </div>
//                 </div>
//               </div>
//                  ))
// }
//             </div>
//             </div>
//             </div>

//   )
// }

// export default Featuredproduct

import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthUser from "../Authantication/AuthUser";

const Featuredproduct = () => {
  const [ourpro, setourpro] = useState([]);
  const { http, token } = AuthUser();

  fetch("https://vsmart.ajspire.com/api/products")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      setourpro(data.products.data);
    });
  const addToCart = (productId) => {
    http
      .post(`/add-to-cart/${productId}`)
      .then((response) => {
        console.log("Product added to cart:", response.data);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error adding product to cart:", error);
      });
  };
  return (
    <div class="products-box">
      <div className="section-heading">
          <h2>our featured product</h2>
        </div>
      {ourpro
        .slice(0, 20)
        .filter((e) => e.featured === 1)
        .map((product) => (
          <div className="col">
          <input type="hidden" name="product_id" defaultValue="eyJpdiI6IklZRzJFbXBrL3NLSm5LcDN2T0hxTUE9PSIsInZhbHVlIjoiQ2JyTFhnVCtGT0RHZXVLUmVMcGhGdz09IiwibWFjIjoiMGQ4Yzg0M2U0NjlmYmZhYjYyY2M5Yjc5NDZkMDNiNzY0MzFmYTYxNGQwOTU2Mzg3ZTQ5YTg2MzA2ODdiZGFiMCIsInRhZyI6IiJ9" />
          <input type="hidden" name="point_value" defaultValue={0.00} />
          <input type="hidden" name="price" defaultValue={549.00} />
          <input type="hidden" name="discount" defaultValue={156} />
          <input type="hidden" name="user_id" defaultValue />
          <div className="feature-card shadow">
            <div className="feature-media">
            <div className="feature-label">
              <label className="label-text order">{el.mrp_price-el.sale_price}OFF</label>
            </div>
              <a className="feature-wish wish" href="/user-login">
                <i className="fas fa-heart" /></a>
              <a className="feature-image" href="/cat_product_one/3401/4">
                <img style={{width: 150, height: 150}} src={product.product_image} alt="product" />
              </a>
              <div className="feature-widget">
                <a title="Product Compare" href="/user-login" className="fas fa-random" />
                <a title="Product View" href="/cat_product_one/3401/4" className="fas fa-eye" />
              </div>
            </div>
            <div className="feature-content">
              <h6 className="feature-name"><a href="/cat_product_one/3401/4" title="Tata Tea Premium Tea, 1. 5 Kg">{product.english_name}</a>
              </h6>
              <div className="feature-rating">
                <a href="/cat_product_one/3401/4" />
              </div>
              <h6 className="feature-price">
                MRP<dproduct>{product.mrp_price}</dproduct><span>{product.sale_price}<small>/only</small></span>
              </h6>
              <p />
              <button className="product-add" style={{backgroundColor: '#43A047'}} title="Add to Cart"><a href="/user-login"><i className="fas text-white fa-shopping-basket" /><span className="fas text-white">add</span></a>
              </button>
            </div>
          </div>
        </div>
        ))}
    </div>
  );
};

export default Featuredproduct;
