import React from 'react';
import './Subscription.css';

const AutoDelivery = () => {
  return (
    <>
      <div className="row border-small-box d-none d-md-block">
        <h6 className="step-box">Select Delivery Method</h6>
        <div className="row pt-2">
          <div className="col-12 col-md-5 ">
            <div className="form-check">
              <input
                className="form-check-input "
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                defaultValue="option1"
                defaultChecked
                style={{ boxShadow: 'none' }}
              />
              <label className="auto-deliver-lab" htmlFor="exampleRadios1">
                Deliver one-time
              </label>
            </div>
          </div>
          <div className="col-12 col-md-7  ">
            <div className="row ps-md-0 ps-3">
              <div className="col-md-6 col-lg-7 form-check ">
                <input
                  className="form-check-input "
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  defaultValue="option1"
                  style={{ boxShadow: 'none' }}
                />
                <label className="auto-deliver-lab " htmlFor="exampleRadios2">
                  Auto delivar every
                </label>
              </div>
              <div className="col-md-6 col-lg-5 col-12 ">
                <select name="service" className="service ">
                  <option value="Residential">3 Months</option>
                  <option value="Business">4 Months</option>
                  <option value="other">6 Months</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <p
                  className="deliver-lab"
                  style={{
                    color: '#D75D39',
                    marginBottom: '0px',
                    fontWeight: '400',
                  }}
                >
                  Save 5% with Auto Delivery{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row d-md-none">
        <div className="row pt-2 ps-4">
          <div className="col-12 form-check py-2 ">
            <input
              className="form-check-input "
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              defaultValue="option1"
              defaultChecked
              style={{ boxShadow: 'none' }}
            />
            <label className=" auto-deliver-lab" htmlFor="exampleRadios1">
              Deliver one-time
            </label>
          </div>
          <div className="col-8 form-check">
            <input
              className="form-check-input "
              type="radio"
              name="exampleRadios"
              id="exampleRadios2"
              defaultValue="option1"
              style={{ boxShadow: 'none' }}
            />
            <label className="auto-deliver-lab" htmlFor="exampleRadios2">
              Auto delivar every
            </label>
          </div>
          <div className="col-4 ">
            <select name="service" className="service">
              <option value="Residential">3 Months</option>
              <option value="Business">4 Months</option>
              <option value="other">6 Months</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p
              className="deliver-lab pt-3 pb-2"
              style={{
                color: '#D75D39',
                marginBottom: '0px',
                fontWeight: '400',
                textAlign: 'center',
              }}
            >
              *Save 5% with Auto Delivery{' '}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AutoDelivery;
