import React from 'react';
const Rating = ({ rating, text }) => {
  const totalRating = [1, 2, 3, 4, 5];
  return (
    <div>
      {totalRating.map((rate, index) =>
        rate <= rating ? (
          <i className="fa-solid fa-star " key={index}></i>
        ) : rate - 0.5 === rating ? (
          <i className="fa-solid fa-star-half " key={index}></i>
        ) : (
          <i className="fa-regular fa-star " key={index}></i>
        )
      )}
      <span>{text}</span>
    </div>
  );
};

export default Rating;
