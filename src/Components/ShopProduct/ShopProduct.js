import React from 'react';
import BuyNow from '../BuyNow';
// import group1 from '../../assets/images/group1.png';
import Client from '../Client/Client';
import Carousel from './Carousel';
import Products from './Products';
const ShopProduct = () => {
  return (
    <>
      <main className="pb-5">
        <Carousel />
        <div className="container pt-4 pb-4 pb-5">
          <div className="row shop-by-size-main-container">
            <h1 className="pb-md-5 py-4 small-screen">Shop our products</h1>

            <p className="pb-3 text-center mx-auto ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod temp <br /> incididunt ut labore et dolore magna aliqua.
            </p>

            <h3 className="home-plate pb-4">Plates</h3>
            <Products />
          </div>
          <div className="row pb-5">
            <div className="col text-center">
              <button className="shop-size-container-btn">
                SEE ALL PRODUCTS
              </button>
            </div>
          </div>
        </div>

        <div className="shop-card-background mb-4 ">
          <div className="container px-md-5 ">
            <div className="row shop-by-product-main-container ">
              <h1 className="pb-md-5 pb-4 pt-5 ">Shop Other Products</h1>

              <p className="pb-5 text-center mx-auto ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod temp <br /> incididunt ut labore et dolore magna aliqua.
              </p>
              <BuyNow />
            </div>
          </div>
        </div>
          <Client />
      </main>
    </>
  );
};

export default ShopProduct;
