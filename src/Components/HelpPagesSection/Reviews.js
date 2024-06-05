import React from 'react';
import './Reviews.css';
import { ReviewData } from '../Data/ReviesData';
import Rating from '../Rating/Rating';
const Reviews = () => {
  return (
    <>
      <div className="main-heading">
        <h1>Reviews</h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xl-12 reviews-main-container">
            <div className="row">
              <section>
                <div className="row text-center">
                  {ReviewData.map((review) => (
                    <div className="col-md-4 mb-5">
                      <div className="d-flex justify-content-center mb-4">
                        <img
                          src={review.img}
                          className="rounded-circle shadow-1-strong"
                          width={150}
                          height={150}
                        />
                      </div>
                      <h5 className="mb-3 review-head">{review.name}</h5>

                      <p className="px-xl-3 reviw-para">
                        <i className="fas fa-quote-left pe-2" />
                        {review.paragraph}
                      </p>
                      <ul className="list-unstyled d-flex justify-content-center mb-0 review-rating">
                        <li>
                          <Rating rating={review.review} />{' '}
                        </li>
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
