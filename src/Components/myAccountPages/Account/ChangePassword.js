import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AccountSetting.css';
const ChangePassword = () => {
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
          <form>
            <div className="row pe-2 pt-md-4 px-md-3 form-border">
              <h4 className=" order-heading1 ps-4 pb-md-2">Change Password</h4>

              <div className="col-12  mb-4">
                <label
                  className="form-label label-font pb-3"
                  htmlFor="oldPassword"
                >
                  Old password
                </label>
                <input
                  type="password"
                  className="form-control input-form input-form-small"
                  placeholder="Enter old password"
                  id="oldPassword"
                />
              </div>

              <div className="col-12  mb-4">
                <label
                  className="form-label label-font pb-2"
                  htmlFor="newPassword"
                >
                  New password
                </label>
                <input
                  type="password"
                  className="form-control input-form input-form-small"
                  placeholder="Enter new password"
                  id="newPassword"
                />
              </div>

              <div className="col-12  mb-4">
                <label
                  className="form-label label-font pb-2"
                  htmlFor="confirmPassword"
                >
                  Confirm new password
                </label>
                <input
                  type="password"
                  className="form-control input-form input-form-small"
                  placeholder="Retype your password"
                  id="confirmPassword"
                />
              </div>
            </div>
            <div className="mt-4 d-none d-md-block">
              <button
                className="bill-btn"
                onClick={() => {
                  navigate('/user/change-email-password');
                  window.scrollTo(0, 0);
                }}
              >
                Change Password
              </button>
            </div>
            <div className="mt-4 d-block d-md-none d-grid mx-2">
              <button
                className="bill-btn1"
                onClick={() => {
                  navigate('/user/change-email-password');
                  window.scrollTo(0, 0);
                }}
              >
                CHANGE PASSWORD
              </button>
            </div>
          </form>
        </div>
      </>
    </>
  );
};

export default ChangePassword;
