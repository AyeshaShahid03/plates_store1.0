import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddNewCard = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="row">
        <h4 className="order-heading">
          Add New Card
          <div className="container">
            <div className="row">
              <div className="col-1 hr-line"></div>
            </div>
          </div>
        </h4>
      </div>
      <div className="container">
        <form className="">
          <div className="row pt-4 pe-2 form-border">
            <div className="col-12  mb-4">
              <input
                type="email"
                className="form-control input-form input-form-small"
                placeholder="Name on Card*"
              />
            </div>
            <div className="col-12  mb-4">
              <input
                type="text"
                className="form-control input-form input-form-small"
                placeholder="Card number*"
              />
            </div>
            <div className=" col-6 mb-4">
              <input
                type="text"
                className="form-control input-form input-form-small"
                placeholder="Expiry*"
              />
            </div>
            <div className="col-6 mb-4">
              <input
                type="text"
                className="form-control input-form input-form-small"
                placeholder="CVV*"
              />
            </div>
          </div>
          <div className="mt-4 d-none d-md-block">
            <button
              className="bill-btn"
              onClick={() => {
                navigate('/user/account-setting');
                window.scrollTo(0, 0);
              }}
            >
              SAVE
            </button>
          </div>
          <div className="mt-4 d-block d-md-none d-grid">
            <button
              className="bill-btn"
              onClick={() => {
                navigate('/user/account-setting');
                window.scrollTo(0, 0);
              }}
            >
              SAVE
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddNewCard;
