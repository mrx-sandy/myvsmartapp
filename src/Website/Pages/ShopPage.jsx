import React, { useState, useEffect } from 'react';

const ShopPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://vsmart.ajspire.com/api/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);
  

  return (
    <div>
      <h2>Shop</h2>
      <div className="product-list">
        {products.length === 0 ? (
          <p>Loading...</p>
        ) : (
          products.map(product => (
            <div key={product.id} className="product">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <button>Add to Cart</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
  
}

export default ShopPage;
