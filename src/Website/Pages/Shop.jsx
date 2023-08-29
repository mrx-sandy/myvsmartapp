import React, { useState, useEffect } from 'react';

const Shop = () => {
  const [shop, setProduct] = useState([]);

  useEffect(() => {
    fetch('https://vsmart.ajspire.com/api/shop')
      .then(response => response.json())
      .then(data => setProduct(data.product.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleAddToCart = productId => {
    // Logic to add the product to the cart
    console.log(`Product ${productId} added to cart`);
  };

  return (
    <div className='container' >
      <h1 className='text-center mx-4'>Shop Products</h1>
      

      <div className='row'>
      {shop.slice(0, 20).map((el, index) => (
          <div  className='col-lg-3 col-md-4 col-sm-6 mb-4'>
            <div className='product-card'>
              <div className='product-media'>
                <a className='product-image' href={`/cat_product_one/${el.id}/${el.category_id}`}>
                  <img
                    style={{ width: '100%', height: 'auto', maxWidth: '100%' }}
                    src={el.product_image}
                    alt='product'
                  />
                </a>
              </div>
              <div className='product-content'>
                <h6 className='product-name'>
                  <a href={`/cat_product_one/${el.id}/${el.category_id}`} title={el.english_name}>
                    {el.product_name}
                  </a>
                </h6>
                <h6 className='product-price'>
                  MRP<del>{el.mrp_price}</del>
                  <span>
                    {el.sale_price}
                    <small>/only</small>
                  </span>
                </h6>
                <p />
                <button className='product-add btn btn-success' onClick={() => handleAddToCart(el.id)}>
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
       ))}
      </div>
   
     </div>
  );
};

export default Shop;
