import React from 'react';
import './MyOrders.css';
import '../../BuyNow.css';
import Order from './Order';
import { productValues } from '../../Data/CartData';
const MyOrders = () => {
  return (
    <>
      <div className="row">
        <h4 className="order-heading">
          All Orders
          <div className="container">
            <div className="row">
              <div className="col-1 hr-line"></div>
            </div>
          </div>
        </h4>
      </div>
      <div>
        {productValues.map((orderItem) => {
          return (
            <div className="row pe-3 ps-2" key={orderItem.id}>
              <Order orderData={orderItem} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MyOrders;
