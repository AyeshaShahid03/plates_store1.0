import React from 'react';
import Elipse from '../../../assets/images/Ellipse 39.png';
import './Subscription.css';
import Subscription from './Subscription';
const Subscriptions = () => {
  const subscriptValue = [
    {
      id: 1,
      img: Elipse,
      product: 'Subscription',
    },
    {
      id: 2,
      img: Elipse,
      product: 'Subscription',
    },
  ];

  return (
    <>
      {/* ////////// cart-product/////////// */}

      <div className="row">
        <h4 className="order-heading">
          Your Subscription
          <div className="container">
            <div className="row">
              <div className="col-1 hr-line"></div>
            </div>
          </div>
        </h4>
      </div>

      {subscriptValue.map((sub) => {
        return (
          <div className="row pe-3 ps-2" key={sub.id}>
            <Subscription subData={sub} />
          </div>
        );
      })}

      <div className="d-none d-md-block text-center">
        <button className="sub-btn">SUBMIT</button>
      </div>
      <div className="d-block d-md-none d-grid">
        <button className="sub-btn">SUBMIT</button>
      </div>
      {/* ////////// cart-product end/////////// */}
    </>
  );
};

export default Subscriptions;
