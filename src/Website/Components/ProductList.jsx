import React from 'react'
import { useState } from 'react';

const ProductList = () => {
    const [ourpro, setourpro] = useState([])
    
        fetch("https://vsmart.ajspire.com/api/products").then(
            response => {
                return response.json();
            }
        ).then(
            data => {
              console.log(data)
                setourpro(data.products.data)
            }
        )
  return (
    <div>
     <section className="section feature-part">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="section-heading">
          <h2>our product</h2>
        </div>
      </div>
    </div>
    <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2">
      <input type="hidden" name="_token" defaultValue="gXX5lfbmKPpdDBhswonpJqP0OR3t3qysJ7UjYxjx" />
      {ourpro.map((el)=>
      (
      <div className="col-lg-6">
        <input type="hidden" name="product_id" defaultValue="eyJpdiI6IklZRzJFbXBrL3NLSm5LcDN2T0hxTUE9PSIsInZhbHVlIjoiQ2JyTFhnVCtGT0RHZXVLUmVMcGhGdz09IiwibWFjIjoiMGQ4Yzg0M2U0NjlmYmZhYjYyY2M5Yjc5NDZkMDNiNzY0MzFmYTYxNGQwOTU2Mzg3ZTQ5YTg2MzA2ODdiZGFiMCIsInRhZyI6IiJ9" />
        <input type="hidden" name="point_value" defaultValue={0.00} />
        <input type="hidden" name="price" defaultValue={549.00} />
        <input type="hidden" name="discount" defaultValue={156} />
        <input type="hidden" name="user_id" defaultValue />
        <div className="feature-card shadow">
          <div className="feature-media">
            <div className="feature-label">
              <label className="label-text order">{el.mrp_price-el.sale_price}</label>
            </div>
            <a className="feature-wish wish" href="/user-login">
              <i className="fas fa-heart" /></a>
            <a className="feature-image" href="/cat_product_one/3401/4">
              <img style={{width: 150, height: 150}} src={el.product_image} alt="product" />
            </a>
            <div className="feature-widget">
              <a title="Product Compare" href="/user-login" className="fas fa-random" />
              <a title="Product View" href="/cat_product_one/3401/4" className="fas fa-eye" />
            </div>
          </div>
          <div className="feature-content">
            <h6 className="feature-name"><a href="/cat_product_one/3401/4" title="Tata Tea Premium Tea, 1. 5 Kg">{el.english_name}</a>
            </h6>
            <div className="feature-rating">
              <a href="/cat_product_one/3401/4" />
            </div>
            <h6 className="feature-price">
              MRP<del>{el.mrp_price}</del><span>{el.sale_price}<small>/only</small></span>
            </h6>
            <p />
            <button className="product-add" style={{backgroundColor: '#43A047'}} title="Add to Cart"><a href="/user-login"><i className="fas text-white fa-shopping-basket" /><span className="fas text-white">add</span></a>
            </button>
          </div>
        </div>
      </div>
       ))}
    </div>
   
  </div>
</section>
</div>

  )
}

export default ProductList
