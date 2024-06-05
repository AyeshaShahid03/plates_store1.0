import React, { useState, useEffect } from 'react';
import './Client.css';
import { RatingData, aboutData } from '../Data/AboutData';
import Rating from '../Rating/Rating';
import firstClient from '../../assets/images/Ellipse 4.png';
const Client = () => {
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
      <div
        className={`${containerClassName} px-md-5`}
        style={{
          marginBottom: '10px',
          paddingBottom: '80px ',
          overflowX: 'hidden',
        }}
      >
        <div className="row ">
          <div className="col-12 client-h-container px-4">
            <h1 className="pt-md-5 pb-md-3 py-4 text-center ">
              What Our Clients Are Saying About Us
            </h1>
          </div>
          <div className="col-xl-12">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel"
              style={{}}
            >
              <div
                className="carousel-indicators d-md-none"
                style={{ marginBottom: '-36px' }}
              >
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={0}
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                  style={{
                    backgroundColor: '#1478b5',
                    borderRadius: '50%',
                    height: '15px',
                    width: '15px',
                    margin: '0px 5px',
                  }}
                />
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={1}
                  aria-label="Slide 2"
                  style={{
                    backgroundColor: '#1478b5',
                    borderRadius: '50%',
                    height: '15px',
                    width: '15px',
                    margin: '0px 5px',
                  }}
                />
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={2}
                  aria-label="Slide 3"
                  style={{
                    backgroundColor: '#1478b5',
                    borderRadius: '50%',
                    height: '15px',
                    width: '15px',
                    margin: '0px 5px',
                  }}
                />
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  {/* ?????????>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                  <div className="container-fluid">
                    <div
                      className="row"
                      style={{
                        display: 'flex',
                        justifyContent: 'space-evenly',
                      }}
                    >
                      {aboutData.map((data) => (
                        <div
                          className="col-md-3 hidden d-none d-md-block px-0"
                          key={data.id}
                        >
                          <div className="clientCard py-4">
                            <div className="row">
                              <div className="col-3">
                                <img src={data.img} className="img-fluid"></img>
                              </div>
                              <div className="col-9">
                                <div className="row">
                                  <h4
                                    style={{
                                      // textAlign: 'center',
                                      marginTop: '5px',
                                    }}
                                    className="client-heading"
                                  >
                                    {data.name}
                                  </h4>
                                </div>
                                <div className="row">
                                  {RatingData.map((re) => (
                                    <div key={re.id} className="client-rating">
                                      <Rating rating={re.review} />
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                            <div className="row pt-3">
                              <p className="client-para">{data.paragraph}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                      <div className="col-md-4 d-md-none d-block">
                        <div className="clientCard py-4">
                          <div className="row">
                            <div className="col-3">
                              <img
                                src={firstClient}
                                className="img-fluid"
                              ></img>
                            </div>
                            <div className="col-9">
                              <div className="row">
                                <h4
                                  style={{
                                    // textAlign: 'center',
                                    marginTop: '5px',
                                  }}
                                  className="client-heading"
                                >
                                  Kelly Cranko
                                </h4>
                              </div>
                              <div className="row">
                                {RatingData.map((re) => (
                                  <div key={re.id} className="client-rating">
                                    <Rating rating={re.review} />
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="row pt-3">
                            <p className="client-para">
                              “Sed ut perspiciatis unde omnis iste error sit
                              voluptatem accusantim doloremque laudantium, totam
                              rem aperiam, eaque ipsa quae inventore veritatis
                              et quasi architecto beatae vitae dicta.”
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item ">
                  <div className="container-fluid">
                    <div
                      className="row"
                      style={{
                        display: 'flex',
                        justifyContent: 'space-evenly',
                      }}
                    >
                      {aboutData.map((data) => (
                        <div
                          className="col-md-3 hidden d-none d-md-block px-0"
                          key={data.id}
                        >
                          <div className="clientCard py-4">
                            <div className="row">
                              <div className="col-3">
                                <img src={data.img} className="img-fluid"></img>
                              </div>
                              <div className="col-9">
                                <div className="row">
                                  <h4
                                    style={{
                                      // textAlign: 'center',
                                      marginTop: '5px',
                                    }}
                                    className="client-heading"
                                  >
                                    {data.name}
                                  </h4>
                                </div>
                                <div className="row">
                                  {RatingData.map((re) => (
                                    <div key={re.id} className="client-rating">
                                      <Rating rating={re.review} />
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                            <div className="row pt-3">
                              <p className="client-para">{data.paragraph}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                      <div className="col-md-4 d-md-none d-block">
                        <div className="clientCard py-4">
                          <div className="row">
                            <div className="col-3">
                              <img
                                src={firstClient}
                                className="img-fluid"
                              ></img>
                            </div>
                            <div className="col-9">
                              <div className="row">
                                <h4
                                  style={{
                                    // textAlign: 'center',
                                    marginTop: '5px',
                                  }}
                                  className="client-heading"
                                >
                                  Dave Bennett
                                </h4>
                              </div>
                              <div className="row">
                                {RatingData.map((re) => (
                                  <div key={re.id} className="client-rating">
                                    <Rating rating={re.review} />
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="row pt-3">
                            <p className="client-para">
                              “Sed ut perspiciatis unde omnis iste error sit
                              voluptatem accusantim doloremque laudantium, totam
                              rem aperiam, eaque ipsa quae inventore veritatis
                              et quasi architecto beatae vitae dicta.”
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item ">
                  <div className="container-fluid">
                    <div
                      className="row"
                      style={{
                        display: 'flex',
                        justifyContent: 'space-evenly',
                      }}
                    >
                      {aboutData.map((data) => (
                        <div
                          className="col-md-3 hidden d-none d-md-block px-0"
                          key={data.id}
                        >
                          <div className="clientCard py-4">
                            <div className="row">
                              <div className="col-3">
                                <img src={data.img} className="img-fluid"></img>
                              </div>
                              <div className="col-9">
                                <div className="row">
                                  <h4
                                    style={{
                                      // textAlign: 'center',
                                      marginTop: '5px',
                                    }}
                                    className="client-heading"
                                  >
                                    {data.name}
                                  </h4>
                                </div>
                                <div className="row">
                                  {RatingData.map((re) => (
                                    <div key={re.id} className="client-rating">
                                      <Rating rating={re.review} />
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                            <div className="row pt-3">
                              <p className="client-para">{data.paragraph}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                      <div className="col-md-4 d-md-none d-block">
                        <div className="clientCard py-4">
                          <div className="row">
                            <div className="col-3">
                              <img
                                src={firstClient}
                                className="img-fluid"
                              ></img>
                            </div>
                            <div className="col-9">
                              <div className="row">
                                <h4
                                  style={{
                                    // textAlign: 'center',
                                    marginTop: '5px',
                                  }}
                                  className="client-heading"
                                >
                                  Allan Wentz
                                </h4>
                              </div>
                              <div className="row">
                                {RatingData.map((re) => (
                                  <div key={re.id} className="client-rating">
                                    <Rating rating={re.review} />
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="row pt-3">
                            <p className=" client-para">
                              “Sed ut perspiciatis unde omnis iste error sit
                              voluptatem accusantim doloremque laudantium, totam
                              rem aperiam, eaque ipsa quae inventore veritatis
                              et quasi architecto beatae vitae dicta.”
                            </p>
                          </div>
                        </div>
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

export default Client;
