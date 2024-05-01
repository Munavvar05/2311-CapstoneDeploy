import React, { useState, useEffect } from 'react';
import ApiUtils from '../utils/ApiUtils';

export default function HomePage() {
  const [productData, setProductData] = useState([]);
  const ProductList = ApiUtils.getAllProducts();

  useEffect(() => {
    const fetchData = () => {
      setProductData(ProductList);
    };
    fetchData();
  }, []);

  const cartMap = new Map();
  const storedCartData = ApiUtils.getCartItems();
  storedCartData.forEach(item => {
    if (item.id) {
      cartMap.set(item.id, item);
    }
  })

  const addItemToCart = (item) => {
    ApiUtils.addToCart(item)
    const updatedProductData = [...productData];
    setProductData(updatedProductData);
    window.location.reload();
  }

  return (
    <div id="container">
        {productData.map((el, index) => (
          <div key={index} className="box pt-3">
            <img src={el.image_url} alt={el.name} />
            <p>{el.name}</p>
            <div id="pricebox">
              <div>
                <h3>{el.price}</h3>
              </div>
              <div>
                <strike>{el.strikedoffprice}</strike>
              </div>
            </div>
            {
              cartMap.has(el.id)
              ? <div>Item is already in the Cart</div>
              : <button onClick={() => addItemToCart(el)}>Add to Cart</button>
            }
          </div>
        ))}
      </div>
  );
}
