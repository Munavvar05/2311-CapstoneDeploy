import React, { useState, useEffect } from 'react';
import ApiUtils from '../utils/ApiUtils';
import ListGroup from 'react-bootstrap/ListGroup';

const CheckoutPage = () => {
  const [ordersData, setOrderData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const storedOrderItemsData = ApiUtils.getOrderItems();
      setOrderData(storedOrderItemsData);
    };
    fetchData();
  }, []);

  const cancelOrder = (item) => {
    ApiUtils.removeFromOrder(item);
    window.location.reload();
  };

  return (
    <div className='container'>
      <h4 className="pt-5">You orders:</h4>
      <ListGroup>
        {ordersData.map((el, index) => (
          <ListGroup.Item key={index} className="pt-3">
            <div className='row'>
              <div className='col'>
                <div className='d-flex align-items-start flex-column'>
                  <div>Item name: {el.name}</div>
                  <div>Total order price: ${el.price}</div>
                  <div>Ordered date: {el.orderDate ? el.orderDate : 'N/A'}</div>
                  <div>Arrival date: {el.arrivalDate ? el.arrivalDate : 'N/A'}</div>
                </div>
              </div>
              <div className='col'>
                <div className='d-flex align-items-end flex-column'>
                  <div>
                    <button onClick={() => cancelOrder(el)}>Cancel Order</button>
                  </div>
                </div>
              </div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default CheckoutPage;