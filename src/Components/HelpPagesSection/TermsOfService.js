import React from 'react';
import './TermsOfService.css';
import { termData } from '../Data/TermServiceData';

const TermsOfService = () => {
  return (
    <>
      <div className="main-heading">
        <h1>Terms and Service</h1>
      </div>
      <div className="container py-2">
        <div className="row">
          <div className="col-md-12 terms-service-container px-4">
            {termData.map((term) => (
              <div key={term.id}>
                <h5>{term.title}</h5>
                <p>{term.description1}</p>
                <p>{term.description2}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;
