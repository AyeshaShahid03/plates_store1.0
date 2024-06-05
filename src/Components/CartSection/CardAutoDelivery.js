import React from 'react';

const CardAutoDelivery = () => {
  return (
    <>
      <div className="d-none d-lg-block px-0">
        <div
          style={{
            backgroundColor: '#385F59',
            borderRadius: '10px 10px 0px 0px',
            padding: '4px 10px',
            color: 'white',
          }}
        >
          <h6 className="step-h">
            <span style={{ fontStyle: 'italic' }}>Step 2:</span> Select Delivery
            Method
          </h6>
        </div>

        <div style={{ padding: '20px 15px ' }}>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              defaultValue="option1"
              defaultChecked
              style={{ boxShadow: 'none' }}
            />
            <label className="deliver-lab" htmlFor="exampleRadios1">
              Deliver one-time
            </label>
          </div>

          <div className="auto-delivar pt-3">
            <div className="form-check">
              <input
                className="form-check-input "
                type="radio"
                name="exampleRadios"
                id="exampleRadios2"
                defaultValue="option1"
                style={{ boxShadow: 'none' }}
              />
              <label className=" deliver-lab" htmlFor="exampleRadios2">
                Auto delivar every
              </label>
            </div>

            <div className="">
              <select
                name="service"
                className="service"
                style={{
                  background: '#FCF7EF',
                  borderRadius: '5px',
                  padding: '5px 20px',
                  border: 'none',
                }}
              >
                <option value="Residential">3 Months</option>
                <option value="Business">4 Months</option>
                <option value="other">6 Months</option>
              </select>
            </div>

            <p
              className="deliver-lab-save"
              style={{
                marginBottom: '0px',
                fontWeight: '400',
              }}
            >
              Save 5% with Auto Delivery{' '}
            </p>
          </div>
        </div>
      </div>
      <div className="d-block d-lg-none">
        <div
          style={{
            backgroundColor: '#385F59',
            borderRadius: '10px 10px 0px 0px',
            padding: '4px 10px',
            color: 'white',
          }}
        >
          <h6 className="step-h">
            <span style={{ fontStyle: 'italic' }}>Step 2:</span> Select Delivery
            Method
          </h6>
        </div>

        <div style={{ padding: '20px 15px ' }}>
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
            <label
              className="form-check-label deliver-lab"
              htmlFor="exampleRadios1"
            >
              Deliver one-time
            </label>
          </div>

          <div className="auto-delivar pt-3">
            <div className="d-flex me-2">
              <div className="col-8 form-check ">
                <input
                  className="form-check-input "
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  defaultValue="option1"
                  style={{ boxShadow: 'none' }}
                />
                <label
                  className="form-check-label deliver-lab"
                  htmlFor="exampleRadios2"
                >
                  Auto delivar every
                </label>
              </div>

              <div className="col-4 ">
                <select
                  name="service"
                  className="service"
                  style={{
                    background: '#FCF7EF',
                    borderRadius: '5px',
                    // padding: '5px 15px',
                    // width: '6em',
                    border: 'none',
                  }}
                >
                  <option value="Residential">3 Months</option>
                  <option value="Business">4 Months</option>
                  <option value="other">6 Months</option>
                </select>
              </div>
            </div>
            <p
              className="deliver-lab-save text-center pt-2"
              style={{
                marginBottom: '0px',
                fontWeight: '400',
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

export default CardAutoDelivery;
