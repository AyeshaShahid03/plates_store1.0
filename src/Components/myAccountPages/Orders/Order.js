import React from 'react';
import './MyOrders.css';
import '../../BuyNow.css';
import Rating from '../../Rating/Rating';
const Order = ({ orderData }) => {
  return (
    <>
      <div className="row border-box my-4 ">
        <div className="col-12 col-md-2  order-product-img ">
          <img src={orderData.img} className="img-fluid "></img>
        </div>
        <div className="col-12 col-md-10">
          <div className="row align-items-center">
            <div className="col-12 col-md-4 ">
              <p className="mb-1 mt-2 order-size-data">{orderData.size}</p>
              <h4 className="check-heading-data">${orderData.price}</h4>
            </div>
            <div className="col-12 col-md-2 text-md-center ">
              <p className="my-1 order-size-data">Quantity</p>
              <p className="order-size-data">{orderData.quantity}</p>
            </div>
            <div className="col-12 col-md-3 text-md-center">
              <p className="my-1 order-size-data">Review Product</p>
              <p className="order-rating">
                <Rating rating={orderData.review} />
              </p>
            </div>
            <div className="col-12 col-md-3">
              <p className="check-heading-data1">
                Delivered on {orderData.deliveryTime}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row border-box1 my-4 d-md-none">
        <div className="col-3 p-0 order-product-img ">
          <img src={orderData.img} className="img-fluid"></img>
        </div>
        <div className="col-9">
          <div className="row ">
            <div className="col-9">
              <p className="order-small-cart">{orderData.size}</p>
            </div>
            <div className="col-3">
              <h4 className="check-price-heading fs-6">${orderData.price}</h4>
            </div>
          </div>
          <div className="row py-2">
            <div className="col-3">
              <p className="qty-order-head">Qty:{orderData.quantity}</p>
            </div>
            <div className="col-9">
              <p className="check-deliver-heading text-end">
                Delivered on {orderData.deliveryTime}
              </p>
            </div>
          </div>
        </div>
        <div className="row" style={{ paddingLeft: '5.8em' }}>
          <div className="col-7">
            <p className="qty-order-head">Review Product</p>
          </div>
          <div className="col-5">
            <p className="order-rating text-end">
              <Rating rating={orderData.review} />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
