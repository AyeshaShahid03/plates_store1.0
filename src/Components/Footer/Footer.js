import React, { useState } from 'react';
import './Footer.css';
import cards from '../../assets/images/credit-card-pay-pal-icons 1.png';
import footerlogo from '../../assets/images/footer-logo.png';
import { Link } from 'react-router-dom';
import { footerHelpData, footerLinkData } from '../Data/FooterData';
const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="py-3" style={{ backgroundColor: '#385F59' }}>
        <div className="container px-4">
          <div className="row footer-main-container">
            <div className="col-md-3 f-s1 ">
              <div className=" py-md-4 ">
                <Link
                  className="footer-logo d-none d-md-block"
                  to={'/'}
                  onClick={handleScrollToTop}
                >
                  <img src={footerlogo} className="img-fluid"></img>
                </Link>
                <Link
                  className="footer-logo py-3 d-md-none d-block text-center"
                  to={'/'}
                  onClick={handleScrollToTop}
                >
                  <img src={footerlogo} className="img-fluid"></img>
                </Link>
                <form
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                  method="GET"
                >
                  <label
                    className="label form-label pb-2 pt-3"
                    style={{
                      color: 'white',
                      fontSize: '14px',
                      marginBottom: '15px',
                    }}
                  >
                    Subscribe to get exclusive offers
                  </label>
                  <input
                    type="email"
                    className="footer-input form-control "
                    placeholder="EMAIL"
                  />
                  <button type="" className="footer-signup-btn py-2">
                    SUBSCRIBE
                  </button>
                </form>
                <div className="pt-5 text-lg-start text-center">
                  <span className="pe-4">
                    <svg
                      width="34"
                      height="35"
                      viewBox="0 0 34 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M33.8891 17.5C33.8891 8.11115 26.3277 0.5 17.0002 0.5C7.67274 0.5 0.111328 8.11115 0.111328 17.5C0.111328 25.9852 6.28734 33.0182 14.3613 34.2935V22.4141H10.0731V17.5H14.3613V13.7547C14.3613 9.49406 16.8827 7.14063 20.7405 7.14063C22.5883 7.14063 24.5211 7.47266 24.5211 7.47266V11.6563H22.3914C20.2934 11.6563 19.6391 12.9667 19.6391 14.3111V17.5H24.3231L23.5744 22.4141H19.6391V34.2935C27.7131 33.0182 33.8891 25.9852 33.8891 17.5Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <span className="pe-4">
                    <svg
                      width="34"
                      height="34"
                      viewBox="0 0 34 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17 3.06313C21.5392 3.06313 22.0768 3.0804 23.8694 3.16219C25.5269 3.23783 26.427 3.51478 27.0261 3.74752C27.8196 4.05591 28.3859 4.42436 28.9808 5.01921C29.5756 5.61406 29.9441 6.18044 30.2524 6.97389C30.4852 7.57299 30.7622 8.47313 30.8378 10.1305C30.9196 11.9232 30.9369 12.4608 30.9369 17C30.9369 21.5393 30.9196 22.0769 30.8378 23.8695C30.7622 25.5269 30.4852 26.4271 30.2524 27.0262C29.9441 27.8196 29.5756 28.386 28.9808 28.9809C28.3859 29.5757 27.8196 29.9442 27.0261 30.2525C26.427 30.4853 25.5269 30.7622 23.8694 30.8379C22.0771 30.9197 21.5395 30.9369 17 30.9369C12.4605 30.9369 11.9229 30.9197 10.1305 30.8379C8.47306 30.7622 7.57292 30.4853 6.97389 30.2525C6.18037 29.9442 5.614 29.5757 5.01915 28.9809C4.4243 28.386 4.05585 27.8196 3.74752 27.0262C3.51471 26.4271 3.23777 25.5269 3.16212 23.8695C3.08033 22.0769 3.06306 21.5393 3.06306 17C3.06306 12.4608 3.08033 11.9232 3.16212 10.1306C3.23777 8.47313 3.51471 7.57299 3.74752 6.97389C4.05585 6.18044 4.4243 5.61406 5.01915 5.01921C5.614 4.42436 6.18037 4.05591 6.97389 3.74752C7.57292 3.51478 8.47306 3.23783 10.1305 3.16219C11.9231 3.0804 12.4607 3.06313 17 3.06313ZM17 0C12.383 0 11.8042 0.0195697 9.99092 0.102302C8.1814 0.1849 6.94568 0.472236 5.86429 0.892512C4.74639 1.32696 3.79834 1.90824 2.85326 2.85332C1.90818 3.7984 1.32689 4.74645 0.892444 5.86435C0.472169 6.94575 0.184832 8.18147 0.102235 9.99099C0.0195022 11.8042 0 12.3831 0 17C0 21.617 0.0195022 22.1959 0.102235 24.0091C0.184832 25.8186 0.472169 27.0543 0.892444 28.1357C1.32689 29.2535 1.90818 30.2017 2.85326 31.1467C3.79834 32.0918 4.74639 32.6731 5.86429 33.1076C6.94568 33.5278 8.1814 33.8152 9.99092 33.8978C11.8042 33.9805 12.383 34 17 34C21.6169 34 22.1958 33.9805 24.009 33.8978C25.8185 33.8152 27.0543 33.5278 28.1356 33.1076C29.2535 32.6731 30.2016 32.0918 31.1467 31.1467C32.0918 30.2017 32.673 29.2536 33.1075 28.1357C33.5278 27.0543 33.8151 25.8186 33.8977 24.0091C33.9804 22.1959 34 21.617 34 17C34 12.3831 33.9804 11.8042 33.8977 9.99099C33.8151 8.18147 33.5278 6.94575 33.1075 5.86435C32.673 4.74645 32.0918 3.7984 31.1467 2.85332C30.2016 1.90824 29.2535 1.32696 28.1356 0.892512C27.0543 0.472236 25.8185 0.1849 24.009 0.102302C22.1958 0.0195697 21.6169 0 17 0ZM17 8.27028C12.1787 8.27028 8.27021 12.1787 8.27021 17C8.27021 21.8213 12.1787 25.7298 17 25.7298C21.8213 25.7298 25.7297 21.8213 25.7297 17C25.7297 12.1787 21.8213 8.27028 17 8.27028ZM17 22.6667C13.8704 22.6667 11.3333 20.1296 11.3333 17C11.3333 13.8704 13.8704 11.3333 17 11.3333C20.1296 11.3333 22.6667 13.8704 22.6667 17C22.6667 20.1296 20.1296 22.6667 17 22.6667ZM28.1146 7.92538C28.1146 9.05205 27.2013 9.96541 26.0746 9.96541C24.948 9.96541 24.0346 9.05205 24.0346 7.92538C24.0346 6.7987 24.948 5.88541 26.0746 5.88541C27.2013 5.88541 28.1146 6.7987 28.1146 7.92538Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <span>
                    <svg
                      width="34"
                      height="34"
                      viewBox="0 0 34 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.0012 0C7.61195 0 0 7.61118 0 16.9984C0 23.9612 4.18526 29.9411 10.1765 32.5702C10.1257 31.3821 10.1654 29.9587 10.4697 28.6676C10.7983 27.2866 12.6594 19.4026 12.6594 19.4026C12.6594 19.4026 12.1169 18.3171 12.1169 16.7139C12.1169 14.194 13.5767 12.313 15.3936 12.313C16.9416 12.313 17.6869 13.4751 17.6869 14.8649C17.6869 16.4185 16.6969 18.7449 16.1875 20.8977C15.7619 22.7015 17.0915 24.1729 18.8688 24.1729C22.0905 24.1729 24.2603 20.0343 24.2603 15.1339C24.2603 11.4089 21.7508 8.6199 17.1864 8.6199C12.0287 8.6199 8.81806 12.4651 8.81806 16.7602C8.81806 18.2421 9.25252 19.2857 9.93829 20.0939C10.2515 20.4665 10.2956 20.6165 10.1809 21.0421C10.0993 21.3553 9.91403 22.1083 9.83467 22.4059C9.72206 22.8371 9.37376 22.9904 8.98351 22.8327C6.60872 21.8612 5.5039 19.2625 5.5039 16.338C5.5039 11.5081 9.5767 5.71845 17.6517 5.71845C24.1433 5.71845 28.4168 10.4138 28.4168 15.4558C28.4168 22.1247 24.7079 27.1079 19.2415 27.1079C17.4069 27.1079 15.6803 26.1144 15.0893 24.9876C15.0893 24.9876 14.1015 28.9057 13.8943 29.6609C13.5326 30.9707 12.827 32.2823 12.183 33.3032C13.7112 33.7542 15.3275 34 17.0012 34C26.3903 34 34 26.389 34 16.9983C34 7.61118 26.3903 0 17.0012 0Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-6 col-md-3 footer-link-container d-flex flex-column justify-content-start align-items-center">
              <div className=" py-md-5 pt-3">
                <h4>Quick Links</h4>
                <div className="link-container">
                  {footerLinkData.map((data) => (
                    <div
                      onClick={handleScrollToTop}
                      key={data.id}
                      className="pb-2"
                    >
                      <Link to={data.link}>{data.name}</Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-6 col-md-3 footer-link-container d-flex flex-column justify-content-start align-items-center">
              <div className=" py-md-5 pt-3">
                <h4>Help</h4>
                <div className="link-container">
                  {footerHelpData.map((data) => (
                    <div
                      key={data.id}
                      onClick={handleScrollToTop}
                      className="pb-2"
                    >
                      <Link to={data.link}>{data.name}</Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-md-3 footer-link-container ps-4">
              <div className="py-md-5">
                <h4>Contact</h4>
                <div className="link-container">
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginTop: '20px',
                    }}
                  >
                    <div>
                      <svg
                        width={32}
                        height={32}
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_1_176)">
                          <path
                            d="M16 31.625C7.384 31.625 0.375 24.615 0.375 16C0.375 7.384 7.384 0.375 16 0.375C24.615 0.375 31.625 7.384 31.625 16C31.625 24.615 24.615 31.625 16 31.625Z"
                            fill="white"
                          />
                          <path
                            d="M16 0.75C24.409 0.75 31.25 7.591 31.25 16C31.25 24.409 24.409 31.25 16 31.25C7.591 31.25 0.75 24.409 0.75 16C0.75 7.591 7.591 0.75 16 0.75ZM16 0C7.163 0 0 7.163 0 16C0 24.836 7.163 32 16 32C24.837 32 32 24.836 32 16C32 7.163 24.837 0 16 0Z"
                            fill="
                            #385F59"
                          />
                          <path
                            d="M16 5.53418C12.27 5.53418 9.24597 8.55818 9.24597 12.2882C9.24597 12.9132 9.33097 13.5192 9.48997 14.0942C9.55397 14.3242 9.62897 14.5502 9.71597 14.7692L9.92097 15.2342L16 26.4662L22.087 15.2172L22.272 14.7982C22.364 14.5692 22.443 14.3342 22.51 14.0932C22.669 13.5182 22.754 12.9132 22.754 12.2872C22.754 8.55818 19.73 5.53418 16 5.53418ZM16 15.2142C14.35 15.2142 13.012 13.8762 13.012 12.2262C13.012 10.5762 14.35 9.23818 16 9.23818C17.65 9.23818 18.988 10.5762 18.988 12.2262C18.988 13.8772 17.65 15.2142 16 15.2142Z"
                            fill="#385F59"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_176">
                            <rect width={32} height={32} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <Link
                      href="/"
                      style={{ marginTop: '0px', marginLeft: '10px' }}
                    >
                      Patricia C. Amedee 4401 waldeck Street Mexico, Tx 76051
                    </Link>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginTop: '20px',
                    }}
                  >
                    <div>
                      <svg
                        width={32}
                        height={32}
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_1_195)">
                          <path
                            d="M16 31.625C7.385 31.625 0.375 24.615 0.375 16C0.375 7.384 7.385 0.375 16 0.375C24.615 0.375 31.625 7.384 31.625 16C31.625 24.615 24.615 31.625 16 31.625Z"
                            fill="white"
                          />
                          <path
                            d="M16 0.75C24.409 0.75 31.25 7.591 31.25 16C31.25 24.409 24.409 31.25 16 31.25C7.591 31.25 0.75 24.409 0.75 16C0.75 7.591 7.591 0.75 16 0.75ZM16 0C7.163 0 0 7.163 0 16C0 24.836 7.163 32 16 32C24.837 32 32 24.836 32 16C32 7.163 24.837 0 16 0Z"
                            fill="
                            
#385F59"
                          />
                          <path
                            d="M21.7601 17.4088L19.8691 18.8867L23.49 23.5196L25.381 22.0416L21.7601 17.4088Z"
                            fill="
                         
#385F59"
                          />
                          <path
                            d="M22.5136 24.2843L18.8926 19.6513C18.8926 19.6513 16.5316 19.0983 14.8496 16.9473C13.1686 14.7963 13.2026 12.3713 13.2026 12.3713L9.58155 7.73828C9.58155 7.73828 6.15055 12.6533 11.5326 19.5393C16.9146 26.4253 22.5136 24.2843 22.5136 24.2843Z"
                            fill="
                          
#385F59"
                          />
                          <path
                            d="M12.4496 5.49669L10.5586 6.97461L14.1795 11.6075L16.0705 10.1295L12.4496 5.49669Z"
                            fill="
                            
#385F59"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_195">
                            <rect width={32} height={32} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <Link
                      to="tel:+99(0)101 0000 888"
                      style={{ marginTop: '0px', marginLeft: '10px' }}
                    >
                      +99(0)101 0000 888
                    </Link>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginTop: '20px',
                    }}
                  >
                    <div>
                      <svg
                        width={32}
                        height={32}
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_1_184)">
                          <path
                            d="M16 31.625C7.384 31.625 0.375 24.615 0.375 16C0.375 7.384 7.384 0.375 16 0.375C24.615 0.375 31.625 7.384 31.625 16C31.625 24.615 24.615 31.625 16 31.625Z"
                            fill="white"
                          />
                          <path
                            d="M16 0.75C24.409 0.75 31.25 7.591 31.25 16C31.25 24.409 24.409 31.25 16 31.25C7.591 31.25 0.75 24.409 0.75 16C0.75 7.591 7.591 0.75 16 0.75ZM16 0C7.163 0 0 7.163 0 16C0 24.836 7.163 32 16 32C24.837 32 32 24.836 32 16C32 7.163 24.837 0 16 0Z"
                            fill="
                            #385F59"
                          />
                          <path
                            d="M6.51758 21.8151L11.7066 15.2911L6.51758 12.1191V21.8151Z"
                            fill="
                            #385F59"
                          />
                          <path
                            d="M19.4996 15.7461L15.9886 17.9081L12.4716 15.7581L7.10962 22.5001H24.8666L19.4996 15.7461Z"
                            fill="
                            #385F59"
                          />
                          <path
                            d="M15.9876 16.864L25.4816 11.017V9.5H6.51758V11.076L15.9876 16.864Z"
                            fill="
                            #385F59"
                          />
                          <path
                            d="M20.2617 15.2755L25.4807 21.8425V12.0615L20.2617 15.2755Z"
                            fill="
                            #385F59"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_184">
                            <rect width={32} height={32} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <Link
                      to="mailto:support@ecotablewarenow.com"
                      style={{ marginTop: '0px', marginLeft: '10px' }}
                      className="email-wrap"
                    >
                      support@ecotablewarenow.com
                      {/* info@yourdomain.com */}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="last-footer">
        <div className="container py-2">
          <div className="row d-flex justify-content-center flex-md-row flex-column-reverse text-center text-md-start align-items-center">
            <div className="col-md-9 ">
              {' '}
              <p
                className="copy-p pt-4 pt-md-0"
                style={{ color: 'white', marginBottom: '0px' }}
              >
                {' '}
                &copy; 2023 EcoTableWare. All Right Reserved{' '}
                <span>( Created by Hafiz Usman) </span>{' '}
              </p>
            </div>

            <div className="col-md-3">
              {' '}
              <img src={cards} className="img-fluid"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
