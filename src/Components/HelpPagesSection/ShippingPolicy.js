import React from 'react';
import './ShippingPolicy.css';
import { shippingData } from '../Data/ShippingData';
const ShippingPolicy = () => {
  return (
    <>
      <div className="main-heading">
        <h1>Shipping Policy</h1>
      </div>
      <div className="container py-2">
        <div className="row">
          <div className="col-md-12 shipping-policy-container px-4">
            {shippingData.map((shipping) => (
              <div key={shipping.id}>
                <h5>{shipping.title}</h5>
                <ul>
                  {shipping.unlist.map((list) => (
                    <div key={list.id}>
                      <li>{list.list}</li>
                    </div>
                  ))}
                </ul>
              </div>
            ))}
            <h5>For Return and Refund</h5>
            <p>Please refer to the Refund/Returns Policy.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShippingPolicy;
