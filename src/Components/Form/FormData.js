import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { formData } from '../Data/FormData';
const FormData = () => {
  let [hideBilling, setHideBilling] = useState(true);
  let changeHandler = () => {
    setHideBilling(!hideBilling);
  };

  return (
    <>
      <form className=" check-border">
        <div className="row">
          <div className="col-12 pb-2">
            <h3 className="shipping-heading">Shipping Address</h3>
          </div>

          <div className="col-12  mb-4">
            <input
              type="email"
              className="form-control input-form"
              placeholder="Email Address*"
            />
          </div>
          <div className="col-12 col-md-6 mb-4">
            <input
              type="text"
              className="form-control input-form"
              placeholder="First Name*"
            />
          </div>
          <div className="col-12 col-md-6 mb-4">
            <input
              type="text"
              className="form-control input-form"
              placeholder="Last Name*"
            />
          </div>
          <div className="col-12  mb-4">
            <input
              type="text"
              className="form-control input-form"
              placeholder="Company Name*"
            />
          </div>
          <div className="col-12  mb-4">
            <input
              type="text"
              className="form-control input-form"
              placeholder="Address*"
            />
          </div>
          <div className="col-12 col-md-6  mb-4">
            <input
              type="text"
              className="form-control input-form"
              placeholder="City*"
            />
          </div>
          <div className="col-12  col-md-6 mb-4">
            <input
              type="text"
              className="form-control input-form"
              placeholder="State*"
            />
          </div>
          <div className="col-12  mb-4">
            <input
              type="number"
              className="form-control input-form"
              placeholder="ZipCode*"
            />
          </div>
          <div className="col-12  mb-4">
            <input
              type="number"
              className="form-control input-form"
              placeholder="Phone Number*"
            />
          </div>
          <div className="">
            <Link className="check-link">*We do not ship to PO boxes</Link>
          </div>
          <div className="col-12 my-4 form-check form-left d-flex">
            <div className="align-items-center">
              <input
                type="checkbox"
                className="form-check-input check-padding"
                id="check"
                onClick={changeHandler}
              />
            </div>
            <label
              className="form-check-label px-2 pt-md-1 shipping-check"
              htmlFor="check"
            >
              My billing and shipping price are the same
            </label>
          </div>
        </div>

        {hideBilling && (
          <div className="row ">
            <div className="col-12 pb-3">
              <h3 className="shipping-heading d-none d-md-block">
                Billing Address
              </h3>
            </div>
            <div className="col-12  mb-4">
              <input
                type="email"
                className="form-control input-form"
                placeholder="Email Address*"
              />
            </div>
            <div className="col-12 col-md-6 mb-4">
              <input
                type="text"
                className="form-control input-form"
                placeholder="First Name*"
              />
            </div>
            <div className="col-12 col-md-6 mb-4">
              <input
                type="text"
                className="form-control input-form"
                placeholder="Last Name*"
              />
            </div>
            <div className="col-12  mb-4">
              <input
                type="text"
                className="form-control input-form"
                placeholder="Company Name*"
              />
            </div>
            <div className="col-12  mb-4">
              <input
                type="text"
                className="form-control input-form"
                placeholder="Address*"
              />
            </div>
            <div className="col-12 col-md-6  mb-4">
              <input
                type="text"
                className="form-control input-form"
                placeholder="City*"
              />
            </div>
            <div className="col-12  col-md-6 mb-4">
              <input
                type="text"
                className="form-control input-form"
                placeholder="State*"
              />
            </div>
            <div className="col-12  mb-4">
              <input
                type="number"
                className="form-control input-form"
                placeholder="ZipCode*"
              />
            </div>
            <div className="col-12  mb-4">
              <input
                type="number"
                className="form-control input-form"
                placeholder="Phone Number*"
              />
            </div>
            <div>
              <Link className="check-link">*We do not ship to PO boxes</Link>
            </div>
          </div>
        )}

        <div className="checked-header pt-md-5 pt-0">
          <h3 className="shipping-heading">Payment Method</h3>
        </div>
        <div className="row">
          {formData.map((data) => (
            <div
              className="col-12 col-md-2 mb-4 form-check form-left"
              key={data.id}
            >
              <input
                className="form-check-input check-padding"
                type="radio"
                name="card"
                id={data.cardId}
              />
              <label
                className="form-check-label ps-2 fs-5"
                htmlFor={data.cardId}
              >
                {data.card}
              </label>
            </div>
          ))}

          <div className="col-12  mb-4">
            <input
              type="text"
              className="form-control input-form"
              placeholder="Name on Card*"
            />
          </div>
          <div className="col-12  mb-4">
            <input
              type="text"
              className="form-control input-form"
              placeholder="Card number*"
            />
          </div>
          <div className="col-12 col-md-6 mb-4">
            <input
              type="text"
              className="form-control input-form"
              placeholder="Expiry*"
            />
          </div>
          <div className="col-12 col-md-6 mb-4">
            <input
              type="text"
              className="form-control input-form"
              placeholder="CVV*"
            />
          </div>
          <div className="col-12 mb-4 form-check form-left d-flex">
            <div className="align-items-center">
              <input
                type="checkbox"
                className="form-check-input check-padding"
                id="check"
              />
            </div>
            <label
              className="form-check-label ps-3 pt-md-1  card-check"
              htmlFor="check"
            >
              I have read and accept all of the
              <Link className="check-link ps-1">Terms and Conditions</Link>
            </label>
          </div>
          <div className="proceed-to-checkout d-grid ">
            <button type="submit">Submit Order</button>
          </div>
        </div>
      </form>

      <form className="check-border1">
        <div className="row">
          <div className="col-12 pb-2">
            <h3 className="shipping-heading">Shipping Address</h3>
          </div>

          <div className="col-12  mb-4">
            <input
              type="email"
              className="form-control input-form1"
              placeholder="Email Address*"
            />
          </div>
          <div className=" col-6 mb-4">
            <input
              type="text"
              className="form-control input-form1"
              placeholder="First Name*"
            />
          </div>
          <div className="col-6 mb-4">
            <input
              type="text"
              className="form-control input-form1"
              placeholder="Last Name*"
            />
          </div>
          <div className="col-12  mb-4">
            <input
              type="text"
              className="form-control input-form1"
              placeholder="Company Name*"
            />
          </div>
          <div className="col-12  mb-4">
            <input
              type="text"
              className="form-control input-form1"
              placeholder="Address*"
            />
          </div>
          <div className="col-6  mb-4">
            <input
              type="text"
              className="form-control input-form1"
              placeholder="City*"
            />
          </div>
          <div className=" col-6 mb-4">
            <input
              type="text"
              className="form-control input-form1"
              placeholder="State*"
            />
          </div>
          <div className="col-12  mb-4">
            <input
              type="number"
              className="form-control input-form1"
              placeholder="ZipCode*"
            />
          </div>
          <div className="col-12  mb-4">
            <input
              type="number"
              className="form-control input-form1"
              placeholder="Phone Number*"
            />
          </div>
          <div className="">
            <Link className="check-link">*We do not ship to PO boxes</Link>
          </div>
          <div className="col-12 my-4 form-check form-left d-flex">
            <div className="align-items-center">
              <input
                type="checkbox"
                className="form-check-input check-padding"
                id="check"
                onClick={changeHandler}
              />
            </div>
            <label
              className="form-check-label px-2 pt-md-1 shipping-check"
              htmlFor="check"
            >
              My billing and shipping price are the same
            </label>
          </div>
        </div>

        {hideBilling && (
          <div className="row ">
            <div className="col-12 pb-3">
              <h3 className="shipping-heading d-none d-md-block">
                Billing Address
              </h3>
            </div>
            <div className="col-12  mb-4">
              <input
                type="email"
                className="form-control input-form1"
                placeholder="Email Address*"
              />
            </div>
            <div className="col-6 mb-4">
              <input
                type="text"
                className="form-control input-form1"
                placeholder="First Name*"
              />
            </div>
            <div className="col-6 mb-4">
              <input
                type="text"
                className="form-control input-form1"
                placeholder="Last Name*"
              />
            </div>
            <div className="col-12  mb-4">
              <input
                type="text"
                className="form-control input-form1"
                placeholder="Company Name*"
              />
            </div>
            <div className="col-12  mb-4">
              <input
                type="text"
                className="form-control input-form1"
                placeholder="Address*"
              />
            </div>
            <div className="col-6  mb-4">
              <input
                type="text"
                className="form-control input-form1"
                placeholder="City*"
              />
            </div>
            <div className="col-6 mb-4">
              <input
                type="text"
                className="form-control input-form1"
                placeholder="State*"
              />
            </div>
            <div className="col-12  mb-4">
              <input
                type="number"
                className="form-control input-form1"
                placeholder="ZipCode*"
              />
            </div>
            <div className="col-12  mb-4">
              <input
                type="number"
                className="form-control input-form1"
                placeholder="Phone Number*"
              />
            </div>
            <div>
              <Link className="check-link">*We do not ship to PO boxes</Link>
            </div>
          </div>
        )}

        <div className="checked-header pt-md-5 pt-0">
          <h3 className="shipping-heading">Payment Method</h3>
        </div>
        <div className="row px-1">
          {formData.map((data) => (
            <div className="col-3 mb-4  form-check form-left" key={data.id}>
              <input
                className="form-check-input check-padding fs-6"
                type="radio"
                name="card"
                id={data.cardId}
                style={{ boxShadow: 'none' }}
              />
              <label className="form-check-label ps-1" htmlFor={data.cardId}>
                {data.card}
              </label>
            </div>
          ))}
        </div>
        <div className="row ">
          <div className="col-12  mb-4">
            <input
              type="text"
              className="form-control input-form1"
              placeholder="Name on Card*"
            />
          </div>
          <div className="col-12  mb-4">
            <input
              type="text"
              className="form-control input-form1"
              placeholder="Card number*"
            />
          </div>
          <div className="col-6 mb-4">
            <input
              type="text"
              className="form-control input-form1"
              placeholder="Expiry*"
            />
          </div>
          <div className="col-6 mb-4">
            <input
              type="text"
              className="form-control input-form1"
              placeholder="CVV*"
            />
          </div>
          <div className="col-12  form-check form-left d-flex">
            <div className="align-items-center">
              <input
                type="checkbox"
                className="form-check-input check-padding"
                id="check"
              />
            </div>
            <label
              className="form-check-label ps-3 pt-md-1 card-check"
              htmlFor="check"
            >
              I have read and accept all of the
              <Link className="check-link ps-1 text-decoration-underline">
                Terms and Conditions
              </Link>
            </label>
          </div>
          <div className="proceed-to-checkout d-grid ">
            <button type="submit">Submit Order</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormData;
