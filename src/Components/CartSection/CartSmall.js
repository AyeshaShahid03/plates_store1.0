import React, { useState } from 'react';
import AutoDelivery from '../myAccountPages/Subscript/AutoDelivery';

const CartSmall = ({
  cartData,
  decrementHandler,
  incrementHandler,
  currentQTY,
  productPrice,
}) => {
  return (
    <>
      <div className=" col-3 sub-product sub-product-img1 ">
        <img src={cartData.img} className="img-fluid "></img>
      </div>
      <div className="col-8">
        <div className="row pt-3">
          <div className="col-8 ">
            <p>{cartData.name}</p>
          </div>
          <div className="col-4 ">
            <h5 className="sub-heading-small">{`$${productPrice}`}</h5>
          </div>
          <div className="row pt-3">
            <div className="col-10">
              <div className="increment-btn-container-handel">
                <button
                  type="button"
                  onClick={decrementHandler}
                  style={{ width: '40px', borderRadius: '5px 0px 0px 5px' }}
                >
                  <i className="bi bi-dash-lg"></i>
                </button>

                <div
                  style={{
                    borderLeft: 'solid 1px #80808040',
                    borderRight: 'solid 1px #80808040',
                  }}
                >
                  <input
                    type="number"
                    value={currentQTY}
                    style={{ width: '60px' }}
                  ></input>
                </div>

                <button
                  type="button"
                  onClick={incrementHandler}
                  style={{ width: '40px', borderRadius: '0px 5px 5px 0px' }}
                >
                  <i className="bi bi-plus-lg"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AutoDelivery />
    </>
  );
};

export default CartSmall;
