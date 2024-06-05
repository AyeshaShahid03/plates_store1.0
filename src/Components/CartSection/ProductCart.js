import React, { useState, useEffect } from 'react';
import Elipse from '../../assets/images/Ellipse 39.png';
import './Cart.css';
import { useNavigate } from 'react-router-dom';
import '../BuyNow.css';
import Cart from './Cart';
import { days, monthDay, fullYear } from '../Data/ProductData';
import CartSmall from './CartSmall';
import BuyNow from '../BuyNow';

const ProductCart = () => {
  let d = new Date();
  let yearName = fullYear[d.getMonth()];
  let dayName = days[d.getDay()];
  let year = new Date().getFullYear();
  let date = `${yearName}, ${year} ${dayName}`;
  let month = monthDay[d.getDate()];

  let pricePerQTY = Number(34.55);
  const shipping = Number(12.74);
  let [currentQTY, setcurrentQTY] = useState(1);
  let [productPrice, setProductPrice] = useState(
    Number(pricePerQTY).toFixed(2)
  ); // totalQuantityprice
  let [totalPrice, settotalPrice] = useState(
    Number(productPrice) + Number(shipping)
  ); // All price including shipping

  const addDecimals = (num) => {
    return num.toFixed(2);
  };

  let price = 4.99;

  useEffect(() => {
    let tabLink = document.querySelectorAll('.delivery-order');
    let tabLinkContainer = document.querySelector('.all-delivery-box');

    tabLinkContainer.addEventListener('click', function (e) {
      let click = e.target.closest('.delivery-order');
      // console.log(click)
      if (!click) return;

      tabLink.forEach((t) => {
        t.classList.remove('order_active');
      });
      click.classList.add('order_active');
    });
  }, []);

  let cartData = [
    {
      id: 1,
      img: Elipse,
      name: 'Plate',
    },
  ];

  const continueNextPage = () => {
    window.scrollTo(0, 0);
    navigate('/');
  };

  let incrementHandler = () => {
    setcurrentQTY(++currentQTY);
    console.log('New Value of Current QTY:' + currentQTY);

    setProductPrice(addDecimals(Number(currentQTY) * pricePerQTY));
    console.log('product price' + productPrice);
    settotalPrice(addDecimals(Number(productPrice) + Number(shipping)));
    console.log('total price' + totalPrice);
  };

  let decrementHandler = () => {
    console.log('New Value of Current QTY:' + currentQTY);
    if (currentQTY > 1) {
      setcurrentQTY(--currentQTY);
      console.log('New Value of Current QTY from decrement:' + currentQTY);

      setProductPrice(addDecimals(Number(currentQTY) * pricePerQTY));
      settotalPrice(addDecimals(Number(productPrice) + Number(shipping)));
      console.log(totalPrice);
    }
  };

  const navigate = useNavigate();

  const handleButton = () => {
    navigate('/payment');
    window.scrollTo(0, 0);
  };

  const addShippingFee = () => {
    settotalPrice(addDecimals(Number(productPrice) + Number(shipping)));
  };

  const noShippingFee = () => {
    settotalPrice(addDecimals(Number(productPrice) + Number(shipping)));
  };

  return (
    <>
      <div className="main-heading">
        <h1>My Cart</h1>
      </div>
      <div className="container">
        <div className="row ">
          <div className="col-xl-10  col-sm-11 cart-product-main-container cart-for-des-tab">
            <div className="row px-md-0 px-2">
              <div className="col-sm-7 d-none d-md-block cart-product cart-product-img-heading ">
                <h5>Product</h5>
              </div>

              <div className="col-sm-2 ps-5 d-none d-md-block cart-product cart-product-quantity-heading">
                <h5>Quantity</h5>
              </div>
              <div className="col-sm-2 ps-5 d-none d-md-block cart-product cart-product-price-heading">
                <h5>Final Price</h5>
              </div>
              <div className="col-sm-1 "></div>

              {cartData.map((cart) => {
                return (
                  <div className="row cart-product-container1 " key={cart.id}>
                    <Cart
                      cartData={cart}
                      incrementHandler={incrementHandler}
                      decrementHandler={decrementHandler}
                      currentQTY={currentQTY}
                      productPrice={productPrice}
                    />
                  </div>
                );
              })}

              {cartData.map((cart) => {
                return (
                  <div
                    className="row sub-product-container1 d-md-none mt-0 ps-3"
                    key={cart.id}
                  >
                    <CartSmall
                      cartData={cart}
                      incrementHandler={incrementHandler}
                      decrementHandler={decrementHandler}
                      currentQTY={currentQTY}
                      productPrice={productPrice}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-xl-10  col-11 coupon-total-price-main-container">
            <div
              className="row"
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <div className="col-md-6 coupon-delivery-time-main-container">
                <div className="coupon-container">
                  <div className="form-group coupon-input-container">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Coupon Code"
                    />
                  </div>

                  <div className="coupon-btn-container">
                    <button className="">Apply Coupon</button>
                  </div>
                </div>
                <div className="coupon-container1 d-md-none">
                  <div className="form-group coupon-input-container1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Coupon Code"
                    />
                  </div>

                  <div className="coupon-btn-container1">
                    <button className="">ADD</button>
                  </div>
                </div>
                <div className="delivery-time-container mb-4">
                  <div className="deliver-time-c">
                    <h6 className=" deliver-time-h ps-2">
                      Select Delivery Time
                    </h6>
                  </div>
                  <div className=" delivery-time-main-div all-delivery-box">
                    <div
                      className=" delivery-time delivery-order px-4 "
                      onClick={addShippingFee}
                    >
                      <h2 className="fw-bold">{month}</h2>
                      <p className="">{date}</p>
                      <h1 className="delivery-free">FREE</h1>
                    </div>
                    <div
                      className=" delivery-time delivery-order order_active px-4"
                      onClick={noShippingFee}
                    >
                      <h2 className="fw-bold">{month}</h2>
                      <p className="">{date}</p>
                      <h1 className="delivery-free">FREE</h1>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-5 d-none d-lg-block">
                <div
                  className="cart-total-price-main_container"
                  style={{ background: '#e1e2da' }}
                >
                  <div className="subtotal-c">
                    <h4 style={{ color: '#385f59' }}>Subtotal</h4>
                    <h4 className="subtotal-price">${productPrice}</h4>
                  </div>

                  <div className="Shipping-fee-c">
                    <div>
                      <h4 style={{ color: '#385f59' }}>Shipping fee</h4>
                      <p style={{ color: '#385f59' }}>
                        Extra shipping Free of $30 will be required to the
                        states of Hawii,Alaska,& Puerto Rico. Correct should be:
                        Extra shipping FEE of $30 will be required to the states
                        of Hawaii, Alaska, & Puerto Rico.
                      </p>
                    </div>
                    <h4 className="subtotal-shipping-price">${shipping}</h4>
                  </div>

                  <div className="estimated-total-c">
                    <h4 style={{ color: '#385f59' }}>Estimated Total</h4>
                    <h4 className="subtotal-price">${totalPrice}</h4>
                  </div>

                  <div className="proceed-to-checkout_c mb-5">
                    <button onClick={handleButton}>Proceed to Checkout</button>
                  </div>
                </div>
              </div>

              <div className="col-md-5 d-lg-none">
                <div className="cart-total-price-main_container">
                  <div className="subtotal-c">
                    <h4 style={{ color: '#385f59' }}>Subtotal</h4>
                    <h4 className="subtotal-price">${productPrice}</h4>
                  </div>

                  <div className="Shipping-fee-c">
                    <div>
                      <h4 style={{ color: '#385f59' }}>Shipping fee</h4>
                      <p style={{ color: '#385f59' }}>
                        Extra shipping Free of $30 will be required to the
                        states of Hawii,Alaska,& Puerto Rico. Correct should be:
                        Extra shipping FEE of $30 will be required to the states
                        of Hawaii, Alaska, & Puerto Rico.
                      </p>
                    </div>
                    <h4 className="subtotal-shipping-price">${shipping}</h4>
                  </div>

                  <div className="estimated-total-c">
                    <h4 style={{ color: '#385f59' }}>Estimated Total</h4>
                    <h4 className="subtotal-price">${totalPrice}</h4>
                  </div>

                  <div className="proceed-to-checkout_c mb-5">
                    <button onClick={handleButton}>Proceed to Checkout</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container pb-5">
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
      </div>
    </>
  );
};

export default ProductCart;
