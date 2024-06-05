import React, { useState } from 'react';
import './Subscription.css';
import AutoDelivery from './AutoDelivery';
const Subscription = ({ subData }) => {
  let defincrement = 1;
  // let [increment, setincrement] = useState(defincrement)
  let [incrementVal, setincrementVal] = useState(defincrement);

  let incrementValChangeHandler = (event) => {
    setincrementVal(event.target.value);
  };
  let incrementHandler = () => {
    let plus = Number(incrementVal) + 1;
    setincrementVal(plus);
  };
  let decrementHandler = () => {
    let subtract = Number(incrementVal) - 1;
    if (subtract > 0) {
      setincrementVal(subtract);
    }
  };
  return (
    <>
      {/* ////////// cart-product/////////// */}
      <div className="row sub-product-container ">
        <div className="col-12 col-md-3 sub-product ">
          <div className="row">
            <div className="col-12 sub-product-img ">
              <img src={subData.img} className="img-fluid "></img>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-9">
          <div className="row pt-3">
            <div className="col-sm-5  cart-change-font ">
              <p className="pb-3 subscribe-name">Product</p>
              <p className="subscribe-pro">{subData.product}</p>
            </div>

            <div className="col-sm-4  cart-change-font">
              <p className="pb-3 subscribe-name">Quantity</p>
              <div className="increment-btn-container">
                <button
                  type="button"
                  onClick={decrementHandler}
                  style={{ width: '50px', borderRadius: '5px 0px 0px 5px' }}
                  className="fw-bold"
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
                    value={incrementVal}
                    onChange={incrementValChangeHandler}
                    style={{ width: '80px' }}
                    className="fw-bold"
                  ></input>
                </div>

                <button
                  type="button"
                  onClick={incrementHandler}
                  style={{ width: '50px', borderRadius: '0px 5px 5px 0px' }}
                >
                  <i className="bi bi-plus-lg "></i>
                </button>
              </div>
            </div>
            <div className="col-sm-3 text-lg-center cart-change-font pe-0">
              <p className="pb-3 subscribe-name">Final Price</p>
              <h5 className="sub-heading" style={{ fontSize: '24px' }}>{`$${(
                Number(incrementVal) * 34.26
              ).toFixed(2)}`}</h5>
            </div>
          </div>
          <AutoDelivery />
        </div>
      </div>

      <div className="row ps-3 pt-4 sub-product-container1 d-md-none">
        <div className="col-3 sub-product sub-product-img1 ">
          <img src={subData.img} className="img-fluid "></img>
        </div>
        <div className="col-8">
          <div className="row">
            <div className="col-7 sub-heading1">
              <p>{subData.product}</p>
            </div>
            <div className="col-4 ">
              <h5 className="sub-heading-small">{`$${(
                Number(incrementVal) * 34.26
              ).toFixed(2)}`}</h5>
            </div>
          </div>
          <div className="col-6 pt-2">
            <div className="increment-btn-container1">
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
                  value={incrementVal}
                  onChange={incrementValChangeHandler}
                  style={{ width: '50px' }}
                  className="fw-bold"
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
        <AutoDelivery />
      </div>

      {/* ////////// cart-product end/////////// */}
    </>
  );
};

export default Subscription;
