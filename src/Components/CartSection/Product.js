import React from 'react';
import './Product.css';
import { useNavigate } from 'react-router-dom';
import BuyNow from '../BuyNow';

const Product = () => {
  let navigate = useNavigate();

  const continueNextPage = () => {
    window.scrollTo(0, 0);
    navigate('/');
  };
  return (
    <>
      <div className="row shop-by-size-main-container">
        <h1 className="pb-md-5 py-4 d-lg-block d-none">
          See our products below
        </h1>
        <h1 className="pb-md-5 py-4 d-lg-none d-block small-screen">
          See our products
        </h1>

        <p className="pb-5 text-center mx-auto ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod temp <br /> incididunt ut labore et dolore magna aliqua.
        </p>
        <BuyNow />
      </div>
      <div className="text-center d-none d-md-block">
        <button className="buy-btn" onClick={continueNextPage}>
          Continue Shopping
        </button>
      </div>
    </>
  );
};

export default Product;
