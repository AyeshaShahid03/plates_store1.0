import React, { useState } from 'react';
import './AccountSetting.css';
const EmailPassword = () => {
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
            <div className="row pb-2 pt-md-4 ">
              <div className="col-md-7  mb-4">
                <div>
                  <label className="form-label label-font" htmlFor="email">
                    Email
                  </label>
                  <i
                    className="fa-solid fa-pen float-end"
                    style={{ color: '#D75D39' }}
                  ></i>
                </div>
                <input
                  type="email"
                  className="form-control input-form-pass input-form-small"
                  placeholder="niric983@gamify.com"
                  id="email"
                />
              </div>

              <div className="col-md-7  mb-4">
                <div>
                  <label className="form-label label-font" htmlFor="password">
                    Password
                  </label>
                  <i
                    className="fa-solid fa-pen float-end"
                    style={{ color: '#D75D39' }}
                  ></i>
                </div>
                <input
                  type="password"
                  className="form-control input-form-pass input-form-small"
                  placeholder="*******"
                  id="password"
                />
              </div>
            </div>
            <div className="mt-4 d-none d-md-block">
              <button className="bill-btn">Save</button>
            </div>
            <div className="mt-4 d-grid d-md-none">
              <button className="bill-btn1">SAVE</button>
            </div>
          </form>
        </div>
      </>
    </>
  );
};

export default EmailPassword;
