import React from 'react';

const Carts = ({ cartData }) => {
  return (
    <>
      <div className="row check-product pb-3 d-md-flex align-items-center">
        <div className="col-5 col-lg-5 pb-3 pb-md-0  ">
          <img src={cartData.img} alt="" className="img-fluid" />
        </div>
        <div className="col-4 col-lg-4 pb-3 pb-md-0">
          <h5 className="check-product-head">{cartData.name}</h5>
        </div>
        <div className="col-3 col-lg-3 ">
          <h4 className="checked-heading">${cartData.price}</h4>
        </div>
      </div>
    </>
  );
};

export default Carts;
