import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { CategoryProduct } from '../../Components/Data/BuyNowData';
import Rating from '../Rating/Rating';
const Plates = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 9;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = (currentPage - 1) * recordPerPage;
  const record = CategoryProduct.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(CategoryProduct.length / recordPerPage);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const params = useParams();
  console.log(params.c1);
  return (
    <>
      <div className="container pt-md-1 pt-5 text-md-start text-center">
        <h1 className="friendly-head">Eco-friendly {params.c1}</h1>
        <p className="friendly-para py-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod temp incididunt ut labore et dolore magna aliqua. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp
          incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="row">
          <div className="col-xl-12 shop-by-size-container1 px-0">
            {record.map((product) => (
              <div className="categoryCard categoryCard1" key={product.id}>
                <img src={product.img} className="img-fluid"></img>
                <h4 className=" pb-2 ">{params.c1}</h4>
                <div className="d-flex justify-content-center">
                  <div className="category-rating">
                    <Rating rating={product.review} />
                  </div>
                  <span className="text-light ps-1">(3053)</span>
                </div>
                <p>${product.price}.00</p>
                <button>{product.btn}</button>
              </div>
            ))}
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div className="page-item">
            <a
              class="page-link"
              aria-label="Previous"
              onClick={handlePreviousPage}
            >
              <span aria-hidden="true">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 7L7 11M7 11L11 15M7 11H15M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z"
                    stroke="#D75D39"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>
          {Array.from({ length: totalPages }).map((_, index) => (
            <div className="page-item" key={index}>
              <a
                class={`page-link  mx-2 ${
                  currentPage === index + 1 ? 'page-num' : 'page-num1'
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </a>
            </div>
          ))}
          <div className="page-item">
            <a class="page-link" aria-label="Next" onClick={handleNextPage}>
              <span aria-hidden="true">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 15L15 11M15 11L11 7M15 11L7 11M1 11C1 5.47715 5.47715 0.999999 11 0.999999C16.5228 1 21 5.47715 21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11Z"
                    stroke="#D75D39"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plates;
