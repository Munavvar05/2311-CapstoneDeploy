import React, { useState, useEffect } from 'react';
import ApiUtils from '../utils/ApiUtils';
import { format } from "date-fns";

const CartPage = () => {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const storedCartData = ApiUtils.getCartItems();
      setCartData(storedCartData);
    };
    fetchData();
  }, []);


  const total = cartData.reduce((sum, el) => sum + Number(el.price), 0);
  const length = cartData.length;

  const removeItem = (item) => {
    ApiUtils.removeFromCart(item);
    window.location.reload();
  };

  const checkout = (item) => {
    const date = new Date();
    item.orderDate = format(date, "MMM dd, yyyy");
    const aDate = addDays(date, 3)
    item.arrivalDate = format(aDate, "MMM dd, yyyy");;

    ApiUtils.checkout(item);
    removeItem(item);
    window.location.reload();
  }

  return (
    <div>
      <h4 className="pt-5">You have {length} items in cart and Total is $USD {total}</h4>
      <div id="container">
        {cartData.map((el, index) => (
          <div key={index} className="box pt-3">
            <img src={el.image_url} alt={el.name} />
            <p>{el.name}</p>
            <div id="pricebox">
              <div>
                <h3>$USD {el.price}</h3>
              </div>
              <div>
                <strike>{el.strikedoffprice}</strike>
              </div>
            </div>

            <div className='row'>
              <div className='col'>

              </div>
              <div className='col'>
                <button onClick={() => removeItem(el)}>Remove</button>
              </div>
              <div className='col'>
                <button onClick={() => checkout(el)}>Checkout</button>
              </div>  
              <div className='col'>

              </div>
            </div>
          
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}