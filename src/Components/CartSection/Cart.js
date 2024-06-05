import React from 'react';
import AutoDelivery from '../myAccountPages/Subscript/AutoDelivery';
const Cart = ({
  cartData,
  decrementHandler,
  incrementHandler,
  currentQTY,
  productPrice,
}) => {
  return (
    <>
      <div className="col-12 col-md-2 sub-product ">
        <div className="row">
          <div className="col-12 sub-product-img ">
            <img src={cartData.img} className="img-fluid "></img>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-10">
        <div className="row pt-md-5 pt-4 ">
          <div className="col-md-6 py-2 ">
            <h3 className="cartDataName">{cartData.name}</h3>
          </div>

          <div className="col-md-3 text-lg-center py-2 ">
            <div className="increment-btn-container">
              <button
                type="button"
                onClick={decrementHandler}
                style={{
                  width: '50px',
                  borderRadius: '5px 0px 0px 5px',
                  padding: '10px 5px',
                }}
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
                  style={{ width: '80px', padding: '10px 5px' }}
                  className="fw-bold"
                ></input>
              </div>

              <button
                type="button"
                onClick={incrementHandler}
                style={{
                  width: '50px',
                  borderRadius: '0px 5px 5px 0px',
                  padding: '10px 5px',
                }}
              >
                <i className="bi bi-plus-lg"></i>
              </button>
            </div>
          </div>
          <div className="col-md-2 py-2">
            <h3 className="sub-heading" style={{ fontSize: '24px' }}>
              ${productPrice}
            </h3>
          </div>
          <div className="col-md-1 cart-product-del">
            <i className="bi bi-trash3-fill"></i>
          </div>
        </div>
        <div className="col-md-8 cart-Select-Deliver ">
          <AutoDelivery />
        </div>
      </div>
    </>
  );
};

export default Cart;
