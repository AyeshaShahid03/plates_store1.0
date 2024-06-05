import React from 'react';
import './Checked.css';
import FormData from '../Form/FormData';
import Carts from './carts';
import CartsSmall from './CartsSmall';
import Rectanlge from '../../assets/images/Rectangle 8.png';
import LargeScreen from './LargeScreen';
import SmallScreen from './SmallScreen';
const Checked = () => {
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

  let price = cartData[0].price + cartData[1].price;
  const addDecimals = (num) => {
    return num.toFixed(2);
  };
  const shipping = addDecimals(97.74);
  let total = addDecimals(Number(price) + Number(shipping));

  return (
    <>
      <div className="main-heading">
        <h1>Checkout</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-7 ">
            <FormData />
          </div>
          <div className="col-1"></div>
          <div className="col-12 col-lg-4">
            <LargeScreen />
          </div>
          <div className="col-12 col-lg-4">
            <SmallScreen />
          </div>
        </div>
      </div>
    </>
  );
};

export default Checked;
