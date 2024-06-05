import React from 'react';

const EditShipping = () => {
  return (
    <>
      <div className="row pb-4 ">
        <h4 className=" order-heading ">
          Edit Your Shipping Address
          <div className="container">
            <div className="row">
              <div className="col-1 hr-line"></div>
            </div>
          </div>
        </h4>
      </div>
      <form>
        <div className="row form-border1 pt-md-4 pe-3 px-md-3">
          <h1 className="billing-detail-head pb-3 d-none d-md-block">
            Shipping Details
          </h1>
          <div className="col-12  mb-4">
            <input
              type="email"
              className="form-control input-form input-form-small"
              placeholder="Email Address*"
            />
          </div>
          <div className="col-6 mb-4">
            <input
              type="text"
              className="form-control input-form input-form-small"
              placeholder="First Name*"
            />
          </div>
          <div className="col-6 mb-4">
            <input
              type="text"
              className="form-control input-form input-form-small"
              placeholder="Last Name*"
            />
          </div>
          <div className="col-12  mb-4">
            <input
              type="text"
              className="form-control input-form input-form-small"
              placeholder="Company Name*"
            />
          </div>
          <div className="col-12  mb-4">
            <input
              type="text"
              className="form-control input-form input-form-small"
              placeholder="Address*"
            />
          </div>
          <div className="col-12  mb-4">
            <input
              type="text"
              className="form-control input-form input-form-small"
              placeholder="City*"
            />
          </div>
          <div className=" col-6 mb-4">
            <input
              type="text"
              className="form-control input-form input-form-small"
              placeholder="State*"
            />
          </div>
          <div className="col-6  mb-4">
            <input
              type="number"
              className="form-control input-form input-form-small"
              placeholder="ZipCode*"
            />
          </div>
          <div className="col-12  mb-4">
            <input
              type="number"
              className="form-control input-form input-form-small"
              placeholder="Phone Number*"
            />
          </div>
        </div>
        <div className="mt-4 d-none d-md-block">
          <button className="bill-btn">UPDATE</button>
        </div>
        <div className="mt-4 d-grid d-md-none mx-2">
          <button className="bill-btn">UPDATE</button>
        </div>
      </form>
    </>
  );
};

export default EditShipping;
