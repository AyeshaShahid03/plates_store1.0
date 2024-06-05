import React from 'react';
import frontImg from '../../assets/images/front-img1.png';

const Carousel = () => {
  return (
    <>
      <div
        id="carouselExample"
        className="carousel slide"
        // data-bs-ride="carousel"
        style={{
          backgroundColor: '#385F59',
        }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div
              className="container px-0"
              style={{
                backgroundColor: '#385F59',
              }}
            >
              <div className="row slider-main_container">
                <div className="position-relative slider-h-p-b_container pt-lg-0 pt-4">
                  <div className="h">
                    <h1>
                      Healthy <br /> Tableware
                    </h1>
                    <p>
                      From nature, feed back nature. A Greener <br /> Choice for
                      a Brighter Future!
                    </p>
                    <button
                      style={{
                        padding: '13px 80px',
                        backgroundColor: '#D75D39',
                        border: 'none',
                        borderRadius: '20120px',
                        color: 'white',
                      }}
                    >
                      SHOP NOW
                    </button>
                  </div>
                </div>
                <div className="slider-img-container">
                  <img
                    className="d-block img-fluid"
                    src={frontImg}
                    alt="First slide"
                    style={{ position: 'absolute', right: '-105px', top: '0' }}
                  />
                </div>
              </div>
            </div>
            <div className="slider-img-container1"></div>
          </div>
          <div className="carousel-item ">
            <div
              className="container px-0"
              style={{
                backgroundColor: '#385F59',
              }}
            >
              <div className="row slider-main_container">
                <div className="position-relative slider-h-p-b_container pt-lg-0 pt-4">
                  <div className="h">
                    <h1>
                      Healthy <br /> Tableware
                    </h1>
                    <p>
                      From nature, feed back nature. A Greener <br /> Choice for
                      a Brighter Future!
                    </p>
                    <button
                      style={{
                        padding: '13px 80px',
                        backgroundColor: '#D75D39',
                        border: 'none',
                        borderRadius: '20120px',
                        color: 'white',
                      }}
                    >
                      SHOP NOW
                    </button>
                  </div>
                </div>
                <div className="slider-img-container">
                  <img
                    className="d-block img-fluid"
                    src={frontImg}
                    alt="First slide"
                    style={{ position: 'absolute', right: '-105px', top: '0' }}
                  />
                </div>
              </div>
            </div>
            <div className="slider-img-container1 "></div>
          </div>
          <div className="carousel-item">
            <div
              className="container px-0"
              style={{
                backgroundColor: '#385F59',
              }}
            >
              <div className="row slider-main_container">
                <div className="position-relative slider-h-p-b_container pt-lg-0 pt-4">
                  <div className="h">
                    <h1>
                      Healthy <br /> Tableware
                    </h1>
                    <p>
                      From nature, feed back nature. A Greener <br /> Choice for
                      a Brighter Future!
                    </p>
                    <button
                      style={{
                        padding: '13px 80px',
                        backgroundColor: '#D75D39',
                        border: 'none',
                        borderRadius: '20120px',
                        color: 'white',
                      }}
                    >
                      SHOP NOW
                    </button>
                  </div>
                </div>
                <div className="slider-img-container">
                  <img
                    className="d-block img-fluid"
                    src={frontImg}
                    alt="First slide"
                    style={{ position: 'absolute', right: '-105px', top: '0' }}
                  />
                </div>
              </div>
            </div>
            <div className="slider-img-container1 "></div>
          </div>
        </div>
        <button
          className="carousel-control-prev d-none d-lg-block"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon visually-hidden"
            aria-hidden="true"
          />
          <span className="">
            <span
              className="material-symbols-outlined p"
              style={{
                color: '#257fa2',
                fontSize: '30px',
                fontWeight: 'bolder',
                // marginRight: '60px',
              }}
            >
              arrow_back_ios
            </span>
          </span>
        </button>
        <button
          className="carousel-control-next d-none d-lg-block"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon visually-hidden"
            aria-hidden="true"
          />
          <span className="">
            <span
              className="material-symbols-outlined n"
              style={{
                color: '#257fa2',
                fontSize: '30px',
                fontWeight: 'bolder',
                marginLeft: '60px',
              }}
            >
              arrow_forward_ios
            </span>
          </span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
