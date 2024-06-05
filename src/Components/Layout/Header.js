import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import deskLogo from '../../assets/images/LOGO.png';
import { ListItem } from '../Data/HeaderData';
import { useParams } from 'react-router-dom';
const Header = () => {
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
  const params = useParams();

  useEffect(() => {
    let tabLink = document.querySelectorAll('.offcanvasChild');
    let tabLinkContainer = document.querySelector('.offcanvasParent');

    tabLinkContainer.addEventListener('click', function (e) {
      let click = e.target.closest('.offcanvasChild');
      // console.log(click)
      if (!click) return;

      tabLink.forEach((t) => {
        t.classList.remove('offcanvas-active');
      });
      click.classList.add('offcanvas-active');
    });
  }, []);
  useEffect(() => {
    let tabLink = document.querySelectorAll('.listChild');
    let tabLinkContainer = document.querySelector('.offcanvasParent');

    tabLinkContainer.addEventListener('click', function (e) {
      let click = e.target.closest('.listChild');
      // console.log(click)
      if (!click) return;

      tabLink.forEach((t) => {
        t.classList.remove('list-active');
      });
      click.classList.add('list-active');
    });
  }, []);

  const handlechat = () => {
    if (window.Tawk_API) {
      window.Tawk_API.toggle();
    }
  };

  return (
    <>
      <header>
        <div className="topbar-nav" style={{ backgroundColor: '#D75D39' }}>
          <div className={`${containerClassName} py-1`}>
            <div className="row px-4 d-flex align-items-center ">
              <div className="col-xl-3 topbar-right header-right-col">
                <p className=""> Track Order | Reviews</p>
              </div>
              <div className="col-xl-6  col-lg-12 col-12 header-left-col">
                <p className="featured-text desktop-desc">
                  Today Only: Save 10% With Code SAVE10 | Free Shipping | 24/7
                  Customer Service
                </p>
                <p className="featured-text-bold featured-text mobile-desc">
                  Save 10% With Code SAVE10
                </p>
              </div>
              <div className="col-xl-3  col-lg-12 col-12 topbar-right header-right-col">
                {' '}
                <p className="">
                  Call Toll Free Now:
                  <Link
                    to={'tel:+99(0)101 0000 888'}
                    className="text-decoration-underline text-light"
                  >
                    (888) 888-8888
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="primarybar-nav"
          style={{
            backgroundColor: '#FCF7EF',
            borderBottom: ' 0.5px solid #385F59',
          }}
        >
          <div className="container primary-nav-container py-1 py-md-0">
            <nav
              className="navbar navbar-expand-xl navbar-light"
              style={{ backgroundColor: '#FCF7EF' }}
            >
              <div className="mobile-header icon-controls mobile-view-content">
                <div className="mobile-header-left ">
                  <button
                    className="navbar-toggler ms-0"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasWithBothOptions"
                    aria-controls="offcanvasWithBothOptions"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-menu text-sgs-white"
                      style={{ color: '#385F59' }}
                    >
                      <line x1={3} y1={12} x2={21} y2={12} />
                      <line x1={3} y1={6} x2={21} y2={6} />
                      <line x1={3} y1={18} x2={21} y2={18} />
                    </svg>
                  </button>
                  <Link to="tel:+1 (888) 249-6340" className="text-light ps-1">
                    <svg
                      width="23"
                      height="23"
                      viewBox="0 0 23 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.9381 5C14.9149 5.19057 15.8125 5.66826 16.5162 6.37194C17.2199 7.07561 17.6976 7.97326 17.8881 8.95M13.9381 1C15.9674 1.22544 17.8597 2.13417 19.3044 3.57701C20.749 5.01984 21.6601 6.91101 21.8881 8.94M20.8881 16.92V19.92C20.8892 20.1985 20.8322 20.4742 20.7206 20.7293C20.6091 20.9845 20.4454 21.2136 20.2402 21.4019C20.035 21.5901 19.7927 21.7335 19.5289 21.8227C19.265 21.9119 18.9855 21.9451 18.7081 21.92C15.631 21.5856 12.6751 20.5341 10.0781 18.85C7.66194 17.3147 5.61345 15.2662 4.07812 12.85C2.38809 10.2412 1.33636 7.27099 1.00812 4.18C0.983127 3.90347 1.01599 3.62476 1.10462 3.36162C1.19324 3.09849 1.33569 2.85669 1.52288 2.65162C1.71008 2.44655 1.93792 2.28271 2.19191 2.17052C2.44589 2.05833 2.72046 2.00026 2.99812 2H5.99812C6.48342 1.99522 6.95391 2.16708 7.32188 2.48353C7.68985 2.79999 7.93019 3.23945 7.99812 3.72C8.12474 4.68007 8.35957 5.62273 8.69812 6.53C8.83266 6.88792 8.86178 7.27691 8.78202 7.65088C8.70227 8.02485 8.51698 8.36811 8.24812 8.64L6.97812 9.91C8.40167 12.4135 10.4746 14.4864 12.9781 15.91L14.2481 14.64C14.52 14.3711 14.8633 14.1858 15.2372 14.1061C15.6112 14.0263 16.0002 14.0555 16.3581 14.19C17.2654 14.5286 18.2081 14.7634 19.1681 14.89C19.6539 14.9585 20.0975 15.2032 20.4146 15.5775C20.7318 15.9518 20.9003 16.4296 20.8881 16.92Z"
                        stroke="#385F59"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
                <div className="mobile-header-center">
                  <Link className="navbar-brand default-logo fs-1" to="/">
                    <img src={deskLogo} alt="13" className="img-fluid" />
                  </Link>
                </div>
                <div className="mobile-header-right ">
                  {/* <i className="fa fa-search search-icon" aria-hidden="true" /> */}
                  <Link
                    onClick={handlechat}
                    className="text-light pe-md-3 pe-3"
                  >
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M25 12.3334C25.0046 14.0932 24.5934 15.8292 23.8 17.4C22.8592 19.2823 21.413 20.8656 19.6232 21.9724C17.8335 23.0792 15.771 23.6659 13.6666 23.6667C11.9068 23.6713 10.1708 23.2601 8.59999 22.4667L1 25L3.53333 17.4C2.73991 15.8292 2.32874 14.0932 2.33333 12.3334C2.33415 10.229 2.92081 8.16649 4.02762 6.37676C5.13443 4.58703 6.71766 3.14079 8.59999 2.20004C10.1708 1.40661 11.9068 0.99545 13.6666 1.00004H14.3333C17.1124 1.15336 19.7374 2.32638 21.7055 4.29451C23.6736 6.26264 24.8466 8.88756 25 11.6667V12.3334Z"
                        stroke="#385F59"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </Link>
                  <Link
                    to="/cart"
                    id="menu-cart-preview-mobile"
                    className="text-light position-relative pe-2"
                  >
                    <svg
                      width="32"
                      height="31"
                      viewBox="0 0 32 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1H6.45455L10.1091 19.491C10.2338 20.1267 10.5753 20.6978 11.0739 21.1043C11.5725 21.5108 12.1964 21.7267 12.8364 21.7143H26.0909C26.7309 21.7267 27.3548 21.5108 27.8533 21.1043C28.3519 20.6978 28.6935 20.1267 28.8182 19.491L31 7.90476H7.81818M13.2727 28.619C13.2727 29.3817 12.6622 30 11.9091 30C11.156 30 10.5455 29.3817 10.5455 28.619C10.5455 27.8564 11.156 27.2381 11.9091 27.2381C12.6622 27.2381 13.2727 27.8564 13.2727 28.619ZM28.348 28.619C28.348 29.3817 27.7375 30 26.9844 30C26.2312 30 25.6207 29.3817 25.6207 28.619C25.6207 27.8564 26.2312 27.2381 26.9844 27.2381C27.7375 27.2381 28.348 27.8564 28.348 28.619Z"
                        stroke="#385F59"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <div
                      className="position-absolute  text-light start-50 translate-middle badge rounded-pill rounded-color ms-2"
                      style={{ fontSize: '10px' }}
                    >
                      1
                    </div>
                  </Link>
                </div>
              </div>
              <div className="desktop-header">
                <Link
                  className="navbar-brand d-flex d-xl-inline-flex d-none default-logo me-2"
                  to="/"
                >
                  <img
                    src={deskLogo}
                    alt="AirFilter Logo"
                    className="img-fluid"
                  />
                </Link>
              </div>
              <div
                class="offcanvas offcanvas-start "
                data-bs-scroll="true"
                tabindex="-1"
                id="offcanvasWithBothOptions"
                aria-labelledby="offcanvasWithBothOptionsLabel"
              >
                <div class="offcanvas-header">
                  <h5
                    class="offcanvas-title"
                    id="offcanvasWithBothOptionsLabel"
                  >
                    <Link className="navbar-brand default-logo fs-1" to="/">
                      <img src={deskLogo} alt="13" className="img-fluid" />
                    </Link>
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="offcanvas-body">
                  <div className="search-bar mobile-search d-xl-none pb-4">
                    <form name="product_search " method="get">
                      <span
                        className="twitter-typeahead"
                        style={{
                          position: 'relative',
                          display: 'inline-block',
                        }}
                      >
                        <input
                          type="text"
                          className="form-control tt-hint"
                          aria-label="Search ..."
                          style={{
                            height: 30,
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            borderColor: 'transparent',
                            boxShadow: 'none',
                            opacity: 1,
                            background:
                              'none 0% 0% / auto repeat scroll padding-box padding-box rgb(255, 255, 255)',
                          }}
                          readOnly
                          autoComplete="off"
                          spellCheck="false"
                          tabIndex={-1}
                          dir="ltr"
                        />
                        <input
                          type="text"
                          name="q"
                          id="search_product"
                          className="form-control tt-input"
                          placeholder="Search..."
                          aria-label="Search ..."
                          style={{
                            height: 30,
                            position: 'relative',
                            verticalAlign: 'top',
                            backgroundColor: 'transparent',
                          }}
                          autoComplete="off"
                          spellCheck="false"
                          dir="auto"
                        />
                        <pre
                          aria-hidden="true"
                          style={{
                            position: 'absolute',
                            visibility: 'hidden',
                            whiteSpace: 'pre',
                            fontFamily: 'Montserrat, sans-serif',
                            fontSize: 16,
                            fontStyle: 'normal',
                            fontVariant: 'normal',
                            fontWeight: 400,
                            wordSpacing: 0,
                            letterSpacing: 0,
                            textIndent: 0,
                            textRendering: 'auto',
                            textTransform: 'none',
                          }}
                        />
                        <div
                          className="tt-menu"
                          style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            zIndex: 100,
                            display: 'none',
                          }}
                        >
                          <div className="tt-dataset tt-dataset-best-products" />
                        </div>
                      </span>
                    </form>

                    <div
                      class="accordion accordion-flush offcanvasParent pt-3"
                      id="accordionFlushExample"
                    >
                      {ListItem.map((list) => (
                        <div
                          class="accordion-item accordian-border"
                          key={list.id}
                        >
                          <h2
                            class="accordion-header offcanvas-active"
                            id="flush-headingOne"
                          >
                            <button
                              class="accordion-button collapsed header-button header-accordian py-2 px-0  offcanvasChild"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#${list.id}`}
                              aria-expanded="false"
                              aria-controls="flush-collapseOne"
                            >
                              {list.name}
                            </button>
                          </h2>
                          <div
                            id={list.id}
                            class="accordion-collapse collapse "
                            aria-labelledby="flush-headingOne"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div class="accordion-body list-active py-2 header-body">
                              {list.list.map((list) => (
                                <div key={list.id} className="">
                                  <h3 className="listChild">{list.list1}</h3>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <hr />
                    <div className="pb-2">
                      <Link
                        to="/login-and-signup "
                        className="a_link1 list-item"
                      >
                        My Accounts
                      </Link>
                    </div>
                    <div className="pb-2">
                      <Link to="/contactus" className="a_link1 list-item">
                        Contact Us
                      </Link>
                    </div>
                    <div>
                      <Link to="/faqs" className="a_link1">
                        FAQS
                      </Link>
                    </div>
                  </div>

                  <div className="icon-controls desktop-view-content d-none d-xl-flex">
                    <div className="search-bar">
                      <form name="product_search" method="post">
                        <span
                          className="twitter-typeahead"
                          style={{
                            position: 'relative',
                            display: 'inline-block',
                          }}
                        >
                          <input
                            type="text"
                            className="form-control tt-hint"
                            aria-label="Search ..."
                            style={{
                              height: 41,
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              borderColor: 'transparent',
                              boxShadow: 'none',
                              opacity: 1,
                              background:
                                'none 0% 0% / auto repeat scroll padding-box padding-box rgb(255, 255, 255)',
                            }}
                            readOnly
                            autoComplete="off"
                            spellCheck="false"
                            tabIndex={-1}
                            dir="ltr"
                          />
                          <input
                            type="text"
                            name="q"
                            id="search_product_desktop"
                            className="form-control tt-input"
                            style={{
                              height: 41,
                              position: 'relative',
                              verticalAlign: 'top',
                              backgroundColor: 'transparent',
                            }}
                            autoComplete="off"
                            spellCheck="false"
                            dir="auto"
                          />
                          <pre
                            aria-hidden="true"
                            style={{
                              position: 'absolute',
                              visibility: 'hidden',
                              whiteSpace: 'pre',
                              fontFamily: 'Montserrat, sans-serif',
                              fontSize: 16,
                              fontStyle: 'normal',
                              fontVariant: 'normal',
                              fontWeight: 400,
                              wordSpacing: 0,
                              letterSpacing: 0,
                              textIndent: 0,
                              textRendering: 'auto',
                              textTransform: 'none',
                            }}
                          />
                          <div
                            className="tt-menu"
                            style={{
                              position: 'absolute',
                              top: '100%',
                              left: 0,
                              zIndex: 100,
                              display: 'none',
                            }}
                          >
                            <div className="tt-dataset tt-dataset-best-products" />
                          </div>
                        </span>
                        <button
                          className="search-button srch_btn"
                          value="Search"
                          type="submit"
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                              fill="#FCF7EF"
                            />
                            <path
                              d="M19 19L14.65 14.65M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z"
                              stroke="#385F59"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </form>
                    </div>
                    <Link
                      to="tel:+99(0)101 0000 888"
                      className="text-light d-flex justify-content-end pe-0"
                    >
                      <svg
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.9381 5C14.9149 5.19057 15.8125 5.66826 16.5162 6.37194C17.2199 7.07561 17.6976 7.97326 17.8881 8.95M13.9381 1C15.9674 1.22544 17.8597 2.13417 19.3044 3.57701C20.749 5.01984 21.6601 6.91101 21.8881 8.94M20.8881 16.92V19.92C20.8892 20.1985 20.8322 20.4742 20.7206 20.7293C20.6091 20.9845 20.4454 21.2136 20.2402 21.4019C20.035 21.5901 19.7927 21.7335 19.5289 21.8227C19.265 21.9119 18.9855 21.9451 18.7081 21.92C15.631 21.5856 12.6751 20.5341 10.0781 18.85C7.66194 17.3147 5.61345 15.2662 4.07812 12.85C2.38809 10.2412 1.33636 7.27099 1.00812 4.18C0.983127 3.90347 1.01599 3.62476 1.10462 3.36162C1.19324 3.09849 1.33569 2.85669 1.52288 2.65162C1.71008 2.44655 1.93792 2.28271 2.19191 2.17052C2.44589 2.05833 2.72046 2.00026 2.99812 2H5.99812C6.48342 1.99522 6.95391 2.16708 7.32188 2.48353C7.68985 2.79999 7.93019 3.23945 7.99812 3.72C8.12474 4.68007 8.35957 5.62273 8.69812 6.53C8.83266 6.88792 8.86178 7.27691 8.78202 7.65088C8.70227 8.02485 8.51698 8.36811 8.24812 8.64L6.97812 9.91C8.40167 12.4135 10.4746 14.4864 12.9781 15.91L14.2481 14.64C14.52 14.3711 14.8633 14.1858 15.2372 14.1061C15.6112 14.0263 16.0002 14.0555 16.3581 14.19C17.2654 14.5286 18.2081 14.7634 19.1681 14.89C19.6539 14.9585 20.0975 15.2032 20.4146 15.5775C20.7318 15.9518 20.9003 16.4296 20.8881 16.92Z"
                          stroke="#385F59"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <h5 className="fw-bold">Available 24/7</h5>
                    </Link>
                    <Link
                      to="/login-and-signup"
                      className="text-light a_link d-flex justify-content-end ps-0"
                    >
                      <svg
                        width="28"
                        height="32"
                        viewBox="0 0 28 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M26 30V26.8889C26 25.2387 25.3679 23.656 24.2426 22.4891C23.1174 21.3222 21.5913 20.6667 20 20.6667H8C6.4087 20.6667 4.88258 21.3222 3.75736 22.4891C2.63214 23.656 2 25.2387 2 26.8889V30M20 8.22222C20 11.6587 17.3137 14.4444 14 14.4444C10.6863 14.4444 8 11.6587 8 8.22222C8 4.78578 10.6863 2 14 2C17.3137 2 20 4.78578 20 8.22222Z"
                          stroke="#385F59"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <h5 className="fw-bold">
                        <p className="">Sign in</p>Account
                      </h5>{' '}
                    </Link>
                    <Link
                      to="/cart"
                      id="menu-cart-preview-desktop"
                      className="text-light a_link d-flex justify-content-center ps-4"
                    >
                      <div className="position-relative">
                        <svg
                          width="34"
                          height="33"
                          viewBox="0 0 34 33"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 2H7.45455L11.1091 20.491C11.2338 21.1267 11.5753 21.6978 12.0739 22.1043C12.5725 22.5108 13.1964 22.7267 13.8364 22.7143H27.0909C27.7309 22.7267 28.3548 22.5108 28.8533 22.1043C29.3519 21.6978 29.6935 21.1267 29.8182 20.491L32 8.90476H8.81818M14.2727 29.619C14.2727 30.3817 13.6622 31 12.9091 31C12.156 31 11.5455 30.3817 11.5455 29.619C11.5455 28.8564 12.156 28.2381 12.9091 28.2381C13.6622 28.2381 14.2727 28.8564 14.2727 29.619ZM29.348 29.619C29.348 30.3817 28.7375 31 27.9844 31C27.2312 31 26.6207 30.3817 26.6207 29.619C26.6207 28.8564 27.2312 28.2381 27.9844 28.2381C28.7375 28.2381 29.348 28.8564 29.348 29.619Z"
                            stroke="#385F59"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span
                          className="position-absolute top-0 start-50 text-light translate-middle badge rounded-pill"
                          style={{ background: '#FF5050', padding: '4px 7px' }}
                        >
                          1
                        </span>
                      </div>
                      <h5 className="fw-bold">
                        <p className="">view</p>Cart
                      </h5>
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="primarybar-nav secondarybar-nav">
          <style
            dangerouslySetInnerHTML={{
              __html:
                '\n    .navbar-expand-xl .navbar-nav {\n        justify-content: space-evenly;\n        width: 100%;\n    }\n   .primarybar-nav nav .desktop-view-content {\n        display: flex;\n        justify-content: flex-end;\n        width: 100%;\n    }\n       .desktop-view-content a:last-child:after{\n       border: none;\n        width: 0;\n\n    }\n    .desktop-view-content a{\n        padding-right: 11px !important;\n\n    }\n    .secondarybar-nav .nav-link{\n        padding: 1rem 0.5rem !important;\n        font-size: 15px;\n        color: rgba(0,0,0,.7) !important;\n    }\n    .secondarybar-nav a.nav-link:hover{\n        color: rgba(255,0,0,.7);\n        background-color: white;\n    }\n\n    .primarybar-nav nav .desktop-view-content .search-bar {\n              position: relative;\n  margin-right:32px;\n margin-left:17px;\n        width: 80%;\n    }\n  \n',
            }}
          />
        </div>
        <nav
          className="navbar navbar-expand-lg navbar-light d-none d-xl-block py-0"
          style={{
            backgroundColor: '#FCF7EF',
            borderBottom: ' 0.5px solid #385F59',
          }}
        >
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto ul_container d-flex justify-content-center ">
              {ListItem.map((list) => (
                <li className="nav-item active " key={list.id}>
                  <div className="dropdown dropdown-main_container dropdown-hover">
                    <button
                      className="btn dropbtn  dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      // data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      style={{ fontSize: '18px' }}
                    >
                      <div className="d-inline pe-2 ">{list.name}</div>
                      <svg
                        width="14"
                        height="8"
                        viewBox="0 0 14 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L7 7L13 1"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <div
                      className="dropdown-menu dropdown-menu-1 drop-1 dropdown-content nav-head-order"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <div className="container">
                        <div className="row order-nav-container ">
                          <div className="col-6 py-3 pe-0">
                            <div style={{ borderRight: '2px solid #385F59' }}>
                              {list.list.map((li) => (
                                <ul
                                  className="brand-drop-down-ul ps-0"
                                  key={li.id}
                                >
                                  <li className="py-2 pe-5">
                                    <Link to={`/subcategory/${params.c1}`}>
                                      {li.list1}
                                    </Link>
                                  </li>
                                </ul>
                              ))}
                            </div>
                          </div>
                          <div className="col-6 py-3 listPadding">
                            {list.list.map((li) => (
                              <ul
                                className="brand-drop-down-ul ps-0"
                                key={li.id}
                              >
                                <li className="py-2">
                                  <Link to={`/subcategory/${params.c1}`}>
                                    {li.list2}
                                  </Link>
                                </li>
                              </ul>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
