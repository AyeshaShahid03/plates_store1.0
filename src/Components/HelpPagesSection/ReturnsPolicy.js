import React from 'react';
import './ReturnsPolicy.css';
import { refundData, refundData1, refundData2 } from '../Data/RefundData';
const ReturnsPolicy = () => {
  return (
    <>
      <div className="main-heading">
        <h1>Refunds/returns Policy</h1>
      </div>

      <div className="container py-2">
        <div className="row">
          <div className="col-md-12 returns-policy-container px-4">
            {refundData.map((refund) => (
              <div key={refund.id}>
                <h5>{refund.title}</h5>
                <ul>
                  <li>{refund.unlist}</li>
                  <ol>
                    {refund.list.map((list) => (
                      <div key={list.id}>
                        <li>{list.list}</li>
                      </div>
                    ))}
                  </ol>
                </ul>
              </div>
            ))}
            {refundData1.map((refund) => (
              <div key={refund.id}>
                <h5>{refund.title}</h5>
                <ol>
                  {refund.list.map((list) => (
                    <div key={list.id}>
                      <li>{list.list}</li>
                    </div>
                  ))}
                </ol>
              </div>
            ))}
            {refundData2.map((refund) => (
              <div key={refund.id}>
                <h5>{refund.title}</h5>
                <ul>
                  <li>{refund.unlist}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ReturnsPolicy;
