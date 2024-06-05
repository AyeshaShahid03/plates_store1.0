import React from 'react';
import { useNavigate } from 'react-router-dom';

const AccountSetting = () => {
  const navigate = useNavigate();
  return (
    <>
      <>
        <div className="row pb-md-4">
          <h4 className=" order-heading ">
            Edit Your Account
            <div className="container">
              <div className="row">
                <div className="col-1 hr-line"></div>
              </div>
            </div>
          </h4>
        </div>
        <div className="container">
          <h4 className=" order-heading1 pb-md-2">Change Email</h4>

          <form>
            <div className="row pe-2 px-md-3 pt-md-4 form-border">
              <div className="col-md-12 mb-4">
                <div>
                  <label className="form-label label-font pb-2" htmlFor="email">
                    Change email address:
                  </label>
                  <i
                    className="fa-solid fa-pen float-end"
                    style={{ color: '#D75D39' }}
                  ></i>
                </div>
                <input
                  type="email"
                  className="form-control input-form input-form-small"
                  placeholder="Enter new email eddress"
                  id="email"
                />
              </div>
            </div>
            <div className="mt-4 d-none d-md-block">
              <button
                className="bill-btn"
                onClick={() => {
                  navigate('/user/change-password');
                  window.scrollTo(0, 0);
                }}
              >
                CHANGE EMAIL
              </button>
            </div>
            <div className="mt-4 d-block d-md-none d-grid">
              <button
                className="bill-btn1"
                onClick={() => {
                  navigate('/user/change-password');
                  window.scrollTo(0, 0);
                }}
              >
                CHANGE EMAIL
              </button>
            </div>
          </form>
        </div>
      </>
    </>
  );
};

export default AccountSetting;
