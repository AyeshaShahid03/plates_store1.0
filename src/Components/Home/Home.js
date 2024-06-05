import React from 'react';
import './Home.css';
import { chooseUs } from '../Data/CompanyData';
import BuyNow from '../BuyNow';
// import group1 from '../../assets/images/group1.png';
import Client from '../Client/Client';
import OurProduct from './OurProduct';
import Custom from './Custom';
import Carousel from './Carousel';
const Home = () => {
  return (
    <>
      <main className="pb-5">
        <Carousel />
        <div className="container pt-4 pb-4">
          <div className="row shop-by-size-main-container">
            <h1 className="pb-md-5 py-4  d-md-none ">Shop our products</h1>
            <h1 className="pb-md-5 py-4 d-none d-md-block">
              Shop our products below
            </h1>

            <p className="pb-3 text-center mx-auto change-paragraph ">
            From nature, feed back nature. A greener choice for a brighter future!
            </p>

            <h3 className="home-plate pb-4">Plates</h3>
            <BuyNow />
            <h3 className="home-plate pb-4">Bowls</h3>
            <BuyNow />
            <h3 className="home-plate pb-4">Cups</h3>
            <BuyNow />
          </div>
          <div className="row">
            <div className="col text-center">
              <button className="shop-size-container-btn">
                SEE ALL PRODUCTS
              </button>
            </div>
          </div>
        </div>
        <OurProduct />
        <Custom />
        <div style={{ backgroundColor: '#E1E2DA' }}>
          <div className="container">
            <div className="row ">
              <div className="col-12 why-choose-h-p_container pb-3">
                <h1 className="pt-md-5 pb-md-4 pb-3 pt-5 d-none d-md-block">
                  Why Us?
                </h1>
                <h1 className=" pb-3 pt-5  d-md-none">Why Our Products?</h1>
                <p className="container mx-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod temp <br /> incididunt ut labore et dolore magna
                  aliqua.
                </p>
              </div>

              <div className="col-xl-11 pt-4 why-choose-card-container">
                {chooseUs.map((chooseUs) => (
                  <div className="why-choose-card" key={chooseUs.id}>
                    <img className="img-fluid pt-4" src={chooseUs.img}></img>
                    <h4 className="word-wrap1">{chooseUs.name}</h4>
                    <p>{chooseUs.paragraph}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Client />
      </main>
    </>
  );
};

export default Home;
