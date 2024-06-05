import React from 'react';
import Carts from './carts';
import Rectanlge from '../../assets/images/Rectangle 8.png';

const LargeScreen = () => {
  let cartData = [
    {
      id: 1,
      name: 'Plates ',
      img: Rectanlge,
      price: 59.64,
    },
    {
      id: 2,
      name: 'Plates',
      price: 30.64,
      img: Rectanlge,
    },
  ];
  return (
    <>
      <div className="cart-border ">
        <h3 className="pb-2">Order Summary</h3>
        {cartData.map((cart) => {
          return (
            <div className="pe-3" key={cart.id}>
              <Carts cartData={cart} />
            </div>
          );
        })}

        <hr />
        <div className="row">
          <div className="col-8 col-lg-8">
            <h5 className="subtotal-name">Subtotal</h5>
          </div>
          <div className="col-lg-4 col-4">
            <h4 className="checked-heading">$97.74</h4>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-8 col-lg-9">
            <h5 className="subtotal-name">Shipping fee</h5>
            <p className="checked-para">
              <span style={{ color: '#FF4141' }}>*</span> extra Shipping Fee of
              $30 will be required to the states of Hawaii, Alaska, & Puerto
              Rico.
            </p>
          </div>
          <div className="col-lg-3 col-4">
            <h4 className="shipping-name">$12.00</h4>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-8 col-lg-8">
            <h5 className="subtotal-name">Estimated Total</h5>
          </div>
          <div className="col-lg-4 col-4">
            <h4 className="checked-heading">$109.74</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default LargeScreen;
