import React from 'react';
import { AllProducts } from '../Data/BuyNowData';
import { useNavigate } from 'react-router-dom';
import './Products.css';
const Products = () => {
  let navigate = useNavigate();
  const handleButton = () => {
    navigate('/product');
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="col-xl-12 shop-by-product-container">
        {AllProducts.map((product) => (
          <div className="product product1 mb-5" key={product.id}>
            <img src={product.img} className="img-fluid"></img>
            <h4 className=" pb-2 ">{product.name}</h4>
            <button onClick={handleButton}>{product.btn}</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
