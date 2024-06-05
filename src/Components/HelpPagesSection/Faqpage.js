import React from 'react';
import './Faqpage.css';
import { filterData2 } from '../Data/FaqsData';

const Faqpage = () => {
  return (
    <>
      <div className="main-heading">
        <h1>FAQs</h1>
      </div>

      <div className="container">
        <div className="row">
          <div
            className="col-xl-12"
            style={{
              margin: 'auto',
              marginBottom: '50px',
              marginTop: '50px',
            }}
          >
            <div className="row">
              <div className="col-12">
                <div
                  className="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  {filterData2.map((filter) => (
                    <div
                      className="accordion-item accordian-btn-color"
                      key={filter.id}
                    >
                      <h2 className="accordion-header" id="flush-headingThree">
                        <button
                          className="accordion-button collapsed accordButton"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#${filter.id}`}
                          aria-expanded="false"
                          aria-controls="flush-collapseThree"
                        >
                          {filter.title}
                        </button>
                      </h2>
                      <div
                        id={filter.id}
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingThree"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body accordianBody">
                          {filter.explain}
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="accordion-item accordian-btn-color">
                    <h2 className="accordion-header" id="flush-headingOne">
                      <button
                        className="accordion-button collapsed accordButton"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        How do I replace my air filter?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body accordianBody">
                        <p>Here are some steps you can follow: </p>
                        <ol>
                          <li>
                            Before you start replacing the filter, make sure to
                            turn off the HVAC system for safety purposes.
                          </li>
                          <li>
                            Locate the air filter; you can refer to the owner's
                            manual or consult a professional if you're not sure
                            where it is located.
                          </li>
                          <li>
                            Remove the old filter by pulling it out of its slot.
                            Ensure proper disposal of the old filter.{' '}
                          </li>
                          <li>
                            Check the size of the old filter and make sure you
                            have the correct size for the replacement filter.
                          </li>
                          <li>
                            Slide the new filter into the filter slot, making
                            sure it is inserted correctly and securely.
                          </li>
                          <li>
                            Check the airflow direction printed on the filter,
                            and make sure it is installed in the right
                            direction. Most filters have an arrow indicating the
                            direction of airflow.
                          </li>
                          <li>
                            Once the new filter is installed, you can turn on
                            the HVAC system to see if it’s running properly.
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faqpage;
