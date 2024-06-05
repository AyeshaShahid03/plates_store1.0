import React from 'react';
const CartsSmall = ({ cartData }) => {
  return (
    <>
      <div className="row check-product pb-3 d-md-flex align-items-center">
        <div className="col-4  pb-3 pb-md-0 ">
          <img src={cartData.img} alt="" className="img-fluid" />
        </div>
        <div className="col-5 pb-3 pb-md-0">
          <h5 className="check-product-head" style={{ color: '#385F59' }}>
            {cartData.name}
          </h5>
        </div>
        <div className="col-3">
          <h4
            className="checked-heading text-start"
            style={{ color: '#D75D39' }}
          >
            ${cartData.price}
          </h4>
        </div>
      </div>
    </>
  );
};

export default CartsSmall;
