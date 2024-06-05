import React, { useState } from 'react';
import CardAutoDelivery from '../CartSection/CardAutoDelivery';
import './Category.css';
const Standard = () => {
  let pricePerQTY = Number(33.89);

  let [savePrice, setSavePrice] = useState(pricePerQTY);

  let [currentQTY, setcurrentQTY] = useState(1);
  let [productPrice, setProductPrice] = useState(
    Number(pricePerQTY).toFixed(2)
  ); // totalQuantityprice
  let [totalPrice, settotalPrice] = useState(Number(productPrice)); // All price including shipping

  const addDecimals = (num) => {
    return num.toFixed(2);
  };

  let savePrcent = [37, 40, 42, 43, 44, 47];
  let standardTotalPrice = [33.89, 21.35, 20.33, 19.66, 19.32, 18.98, 17.96];

  let standardSetting = () => {
    if (currentQTY == 1) {
      return addDecimals(
        (Number(pricePerQTY) - (Number(pricePerQTY) * savePrcent[0]) / 100) *
          Number(currentQTY)
      );
    } else if (currentQTY == 2) {
      return addDecimals(
        (Number(pricePerQTY) - (Number(pricePerQTY) * savePrcent[0]) / 100) *
          Number(currentQTY)
      );
    } else if (currentQTY == 3) {
      return addDecimals(
        (Number(pricePerQTY) - (Number(pricePerQTY) * savePrcent[1]) / 100) *
          Number(currentQTY)
      );
    } else if (currentQTY == 4) {
      return addDecimals(
        (Number(pricePerQTY) - (Number(pricePerQTY) * savePrcent[2]) / 100) *
          Number(currentQTY)
      );
    } else if (currentQTY == 5) {
      return addDecimals(
        (Number(pricePerQTY) - (Number(pricePerQTY) * savePrcent[3]) / 100) *
          Number(currentQTY)
      );
    } else if (currentQTY >= 6 && currentQTY <= 11) {
      return addDecimals(
        (Number(pricePerQTY) - (Number(pricePerQTY) * savePrcent[4]) / 100) *
          Number(currentQTY)
      );
    } else if (currentQTY >= 12) {
      return addDecimals(
        (Number(pricePerQTY) - (Number(pricePerQTY) * savePrcent[5]) / 100) *
          Number(currentQTY)
      );
    }
  };

  let incrementHandler = () => {
    setcurrentQTY(++currentQTY);
    console.log('New Value of Current QTY:' + currentQTY);

    setProductPrice(addDecimals(Number(currentQTY) * pricePerQTY));

    console.log('product price' + productPrice);
    settotalPrice(addDecimals(Number(currentQTY) * pricePerQTY));
    console.log('total price' + totalPrice);

    setSavePrice(standardSetting);
  };

  let decrementHandler = () => {
    console.log('New Value of Current QTY:' + currentQTY);
    if (currentQTY > 1) {
      setcurrentQTY(--currentQTY);
      console.log('New Value of Current QTY from decrement:' + currentQTY);

      setProductPrice(addDecimals(Number(currentQTY) * pricePerQTY));
      settotalPrice(addDecimals(Number(currentQTY) * pricePerQTY));
      console.log(totalPrice);
      setSavePrice(standardSetting);
    }
  };

  return (
    <>
      <div
        style={{
          border: 'solid 1px #80808040',
          borderRadius: '10px',
          margin: '30px 0px',
          backgroundColor: '#E1E2DA',
        }}
        className="d-lg-block d-none"
      >
        <div
          style={{
            backgroundColor: '#385F59',
            borderRadius: '10px 10px 0px 0px',
            padding: '4px 10px',
            color: 'white',
          }}
        >
          <h6 className="step-h">
            <span style={{ fontStyle: 'italic' }}>Step 1:</span> Select Quantity
          </h6>
        </div>
        <div className="increment-btn-main_container text-center">
          <div className="increment-btn-container d-flex align-items-center justify-content-center ">
            <button type="button" onClick={decrementHandler}>
              <i className="bi bi-dash-lg"></i>
            </button>

            <div
              style={{
                borderLeft: 'solid 1px #80808040',
                borderRight: 'solid 1px #80808040',
              }}
            >
              <input
                className="fw-bold"
                type="number"
                value={currentQTY}
                onChange={(e) => e.target.value}
              />
            </div>

            <button type="button" onClick={incrementHandler}>
              <i className="bi bi-plus-lg"></i>
            </button>
          </div>

          <p
            style={{ margin: '10px 40px', color: '#385F59' }}
            className="price-filter-set pt-2"
          >
            11.25X11.25X1 Air Filters for
            <span style={{ color: '#D75D39' }}>`${productPrice} each`</span>
          </p>
        </div>

        <div style={{ padding: '4px 10px' }}>
          <h5 className="quality-h"> Quality Discount</h5>
        </div>
        <div className="container-box">
          <div
            className={`quality-p_container ${
              currentQTY == 1 ? 'quality-p_container-active' : ''
            } `}
          >
            <p>1 for</p>
            <p>${standardTotalPrice[0]}</p>
            <p style={{ opacity: '0', color: '#d75d39' }}>
              (SAVE {savePrcent[0]}%)
            </p>
          </div>

          <div
            className={`quality-p_container ${
              currentQTY == 2 ? 'quality-p_container-active' : ''
            } `}
          >
            <p>2 for</p>
            <p>${standardTotalPrice[1]} ea</p>
            <p className="save" style={{ color: '#d75d39' }}>
              (SAVE {savePrcent[0]}%)
            </p>
          </div>

          <div
            className={`quality-p_container ${
              currentQTY == 3 ? 'quality-p_container-active' : ''
            } `}
          >
            <p>3 for</p>
            <p>${standardTotalPrice[2]} ea</p>
            <p className="save" style={{ color: '#d75d39' }}>
              (SAVE {savePrcent[1]}%)
            </p>
          </div>

          <div
            className={`quality-p_container ${
              currentQTY == 4 ? 'quality-p_container-active' : ''
            } `}
          >
            <p>4 for</p>
            <p>${standardTotalPrice[3]} ea</p>
            <p className="save" style={{ color: '#d75d39' }}>
              (SAVE {savePrcent[2]}%)
            </p>
          </div>

          <div
            className={`quality-p_container ${
              currentQTY == 5 ? 'quality-p_container-active' : ''
            } `}
          >
            <p>5 for</p>
            <p>${standardTotalPrice[4]} ea</p>
            <p className="save" style={{ color: '#d75d39' }}>
              (SAVE {savePrcent[3]}%)
            </p>
          </div>

          <div
            className={`quality-p_container ${
              currentQTY >= 6 && currentQTY <= 11
                ? 'quality-p_container-active'
                : ''
            } `}
          >
            <p>6-11 for</p>
            <p>${standardTotalPrice[5]} ea</p>
            <p className="ms-0 ps-5" style={{ color: '#d75d39' }}>
              (SAVE {savePrcent[4]}%)
            </p>
          </div>

          <div
            className={`quality-p_container ${
              currentQTY >= 12 ? 'quality-p_container-active' : ''
            } `}
          >
            <p>12+ for</p>
            <p>${standardTotalPrice[6]} ea</p>
            <p className="ps-4" style={{ color: '#d75d39' }}>
              (SAVE {savePrcent[5]}%)
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          border: 'solid 1px #80808040',
          borderRadius: '10px',
          margin: '30px 0px',
          backgroundColor: '#E1E2DA',
        }}
        className="d-lg-none d-block"
      >
        <div
          style={{
            backgroundColor: '#385F59',
            borderRadius: '10px 10px 0px 0px',
            padding: '4px 10px',
            color: 'white',
          }}
        >
          <h6 className="step-h">
            <span style={{ fontStyle: 'italic' }}>Step 1:</span> Select Quantity
          </h6>
        </div>
        <div className="increment-btn-main_container text-center">
          <div className="increment-btn-container d-flex align-items-center justify-content-center ">
            <button type="button" onClick={decrementHandler}>
              <i className="bi bi-dash-lg"></i>
            </button>

            <div
              style={{
                borderLeft: 'solid 1px #80808040',
                borderRight: 'solid 1px #80808040',
              }}
            >
              <input
                className="fw-bold"
                type="number"
                value={currentQTY}
                onChange={(e) => e.target.value}
              />
            </div>

            <button type="button" onClick={incrementHandler}>
              <i className="bi bi-plus-lg"></i>
            </button>
          </div>

          <p
            style={{ margin: '10px 40px', color: '#385F59' }}
            className="price-filter-set pt-2"
          >
            11.25X11.25X1 Air Filters for
            <span style={{ color: '#D75D39' }}>`${productPrice} each`</span>
          </p>
        </div>
      </div>
      <div
        style={{
          border: 'solid 1px #80808040',
          borderRadius: '10px',
          margin: '30px 0px',
          backgroundColor: '#E1E2DA',
        }}
        className="d-lg-none d-block"
      >
        <div style={{ padding: '0px 10px' }}>
          <h5 className="quality-h text-center pt-3"> Quality Discount</h5>
        </div>
        <div className="">
          <div
            className={`quality-p_container  ${
              currentQTY == 1 ? 'quality-p_container-active' : ''
            } `}
          >
            <p>1 for</p>
            <p>${standardTotalPrice[0]}</p>
            <p style={{ opacity: '0', color: '#d75d39' }}>
              (SAVE {savePrcent[0]}%)
            </p>
          </div>

          <div
            className={`quality-p_container ${
              currentQTY == 2 ? 'quality-p_container-active' : ''
            } `}
          >
            <p>2 for</p>
            <p>${standardTotalPrice[1]} ea</p>
            <p className="save" style={{ color: '#d75d39' }}>
              (SAVE {savePrcent[0]}%)
            </p>
          </div>

          <div
            className={`quality-p_container ${
              currentQTY == 3 ? 'quality-p_container-active' : ''
            } `}
          >
            <p>3 for</p>
            <p>${standardTotalPrice[2]} ea</p>
            <p className="save" style={{ color: '#d75d39' }}>
              (SAVE {savePrcent[1]}%)
            </p>
          </div>

          <div
            className={`quality-p_container ${
              currentQTY == 4 ? 'quality-p_container-active' : ''
            } `}
          >
            <p>4 for</p>
            <p>${standardTotalPrice[3]} ea</p>
            <p className="save" style={{ color: '#d75d39' }}>
              (SAVE {savePrcent[2]}%)
            </p>
          </div>

          <div
            className={`quality-p_container ${
              currentQTY == 5 ? 'quality-p_container-active' : ''
            } `}
          >
            <p>5 for</p>
            <p>${standardTotalPrice[4]} ea</p>
            <p className="save" style={{ color: '#d75d39' }}>
              (SAVE {savePrcent[3]}%)
            </p>
          </div>

          <div
            className={`quality-p_container ${
              currentQTY >= 6 && currentQTY <= 11
                ? 'quality-p_container-active'
                : ''
            } `}
          >
            <p>6-11 for</p>
            <p>${standardTotalPrice[5]} ea</p>
            <p className="" style={{ color: '#d75d39' }}>
              (SAVE {savePrcent[4]}%)
            </p>
          </div>

          <div
            className={`quality-p_container ${
              currentQTY >= 12 ? 'quality-p_container-active' : ''
            } `}
          >
            <p>12+ for</p>
            <p>${standardTotalPrice[6]} ea</p>
            <p className="" style={{ color: '#d75d39' }}>
              (SAVE {savePrcent[5]}%)
            </p>
          </div>
        </div>
      </div>
      <div className="border-delivery-box1 ">
        <CardAutoDelivery />
      </div>
      <div
        className="d-none d-md-block"
        style={{
          border: 'solid 1px #80808040',
          borderRadius: '10px',
          margin: '30px 0px',
        }}
      >
        <div
          style={{
            backgroundColor: '#385F59',
            borderRadius: '10px 10px 0px 0px',
            padding: '4px 10px',
            color: 'white',
          }}
        >
          <h6 className="step-h">
            <span style={{ fontStyle: 'italic' }}>Step 3:</span> Purchase Now
          </h6>
        </div>
        <div style={{ padding: '20px 15px ' }}>
          <h2 className="cut-h">
            <span style={{ color: '#D75D39' }} className="pe-5">
              ${savePrice}
            </span>
            <strike style={{ color: '#385F59' }}>${totalPrice}</strike>
          </h2>
        </div>
      </div>
      <div className="d-grid add-cart-btn1 ">
        <button>Add to Cart</button>
      </div>
      <div
        className="d-block d-md-none"
        style={{
          background: '#E1E2DA',
          border: '1px solid #F5F5F5',
          borderRadius: '10px',
          margin: '30px 0px',
        }}
      >
        <div
          style={{
            backgroundColor: '#385F59',
            borderRadius: '10px 10px 0px 0px',
            padding: '4px 10px',
            color: 'white',
          }}
        >
          <h6 className="step-h">
            <span style={{ fontStyle: 'italic' }}>Step 4:</span> Purchase Now
          </h6>
        </div>
        <div style={{ padding: '20px 15px ' }}>
          <h3 className="cut-h">
            <span>Total:</span>
            <span className="px-3 cut-h1">${savePrice}</span>
            <strike className="strike-color">${totalPrice}</strike>
          </h3>
          <div className="d-grid add-cart-btn">
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Standard;
