import React from 'react';
import { useEffect, useState } from 'react';
import line1 from '../../assets/images/line1.svg';
import group1 from '../../assets/images/group-1.png';
import { chooseFilter } from '../Data/CompanyData';
import groupimg1 from '../../assets/images/groupimg-1.png';
const OurProduct = () => {
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
      <div className={`${containerClassName} pt-5`}>
        <div className="row d-flex align-items-center justify-content-center">
          <div className="d-block d-lg-none pb-5 text-center">
            <h1 className="to-make-first-h">Why our products?</h1>
            <p className="to-make-first-p pt-5 pb-3 px-5">
              To make sure yor're getting right air filter for your central air
              system make sure you know some of the basics
            </p>
          </div>

          <div className="col-md-6  d-flex align-items-center pb-5 ps-0 d-none d-lg-block">
            <img src={group1} className="img-fluid"></img>
          </div>
          <div className="col-md-6  d-flex align-items-center  pb-5 justify-content-center d-block d-lg-none">
            <img src={groupimg1} className="img-fluid"></img>
          </div>
          <div
            className="col-md-6 t  d-none d-md-block"
            style={{ padding: '0em 6em 0em 3em' }}
          >
            <div className="d-none d-lg-block">
              <h1 className="to-make-first-h">Why our products?</h1>
              <p className="to-make-first-p pt-5 pb-3">
                To make sure yor're getting right air filter for your central
                air system make sure you know some of the basics
              </p>
            </div>
            {chooseFilter.map((filter) => (
              <div key={filter.id}>
                <div className="how-to-counter-container">
                  <i className={filter.i}></i>

                  <h3 className="to-make-h ps-3">{filter.heading}</h3>
                </div>
                <p className="to-make-p ps-3">{filter.paragraph}</p>
              </div>
            ))}
          </div>

          <div className="col-md-6 t px-4 d-md-none ">
            <p
              className="to-make-first-p text-center pb-3"
              style={{ marginTop: '70px' }}
            >
              To make sure yor're getting right air filter for your central air
              system make sure you know some of the basics
            </p>
            <div
              className="how-to-counter-container"
              style={{ position: 'relative' }}
            >
              <i className="bi bi-1-circle-fill"></i>
              <div className="position-set">
                <img src={line1} alt="" className="svg1" width={20} />
              </div>
              <h3 className="to-make-h ps-2">Eco-Friendly </h3>
            </div>
            <p className="to-make-p">
              Our disposable tableware is made out of sustainable, biodegradable
              materials, making our products eco-firendly
            </p>

            <div
              className="how-to-counter-container"
              style={{ position: 'relative' }}
            >
              <i className="bi bi-2-circle-fill"></i>
              <div className="position-set">
                <img src={line1} alt="" className="svg2" width={20} />
              </div>
              <h3 className="to-make-h ps-2">Chemical-free </h3>
            </div>
            <p className="to-make-p">
              The manufacturing of our products do not involve any chemical
              treatment. Our products are completly healthy, non-toxic and
              harmless.
            </p>

            <div className="how-to-counter-container">
              <i className="bi bi-3-circle-fill"></i>
              <h3 className="to-make-h ps-2">organic </h3>
            </div>
            <p className="to-make-p">
              Our products are made from natural, sustainable materials like
              corn starch and wood.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurProduct;
