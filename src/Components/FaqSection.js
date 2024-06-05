import React, { useState, useEffect } from 'react';
import './FaqSection.css';
import { filterData1, filterData } from './Data/FaqsData';
const FAQSection = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1530);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const containerClassName = isDesktop ? 'container' : 'container-fluid';
  return (
    <>
      <div className={`${containerClassName} padding-bottom`}>
        <div className="row">
          <div className="col-12 ">
            <h1 className="faq-heading pb-2">FAQs</h1>
          </div>
          <div className="col-xl-11 mx-auto">
            <div className="row">
              <div className="col-md-6">
                <div
                  className="accordion accordion-flush "
                  id="accordionFlushExample"
                >
                  {filterData1.map((filter) => (
                    <div
                      className="accordion-item accordion-radius accordian-btn-color"
                      key={filter.id}
                    >
                      <h2 className="accordion-header" id="flush-heading">
                        <button
                          className="accordion-button collapsed accordButton"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#${filter.id}`}
                          aria-expanded="false"
                          aria-controls="flush-collapse"
                        >
                          {filter.title}
                        </button>
                      </h2>
                      <div
                        id={filter.id}
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-heading"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body accordianBody">
                          {filter.explain}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className="accordion accordion-flush "
                  id="accordionFlushExample1"
                >
                  {filterData.map((filter) => (
                    <div
                      className="accordion-item accordion-radius accordian-btn-color"
                      key={filter.id}
                    >
                      <h2 className="accordion-header" id="flush-heading">
                        <button
                          className="accordion-button collapsed accordButton"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#${filter.id}`}
                          aria-expanded="false"
                          aria-controls="flush-collapse"
                        >
                          {filter.title}
                        </button>
                      </h2>
                      <div
                        id={filter.id}
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-heading"
                        data-bs-parent="#accordionFlushExample1"
                      >
                        <div className="accordion-body accordianBody">
                          {filter.explain}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQSection;
