import React from 'react';
import Header from '../Layout/Header';
import './PrivacyPolicy.css';
import { privacyData, privacyData1, privacyData2 } from '../Data/PrivacyData';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <>
      <div className="main-heading">
        <h1>Privacy Policy</h1>
      </div>
      <div className="container py-2">
        <div className="row">
          <div className="col-md-12 Privacy-Policy-container px-4">
            {privacyData.map((privacy) => (
              <div key={privacy.id}>
                <h5>{privacy.title}</h5>
                <p>{privacy.description1}</p>
              </div>
            ))}
            {privacyData1.map((privacy) => (
              <div key={privacy.id}>
                <h5>{privacy.title}</h5>
                {privacy.description.map((description) => (
                  <p>{description.description}</p>
                ))}
              </div>
            ))}

            {privacyData2.map((privacy) => (
              <div key={privacy.id}>
                <h5>{privacy.title}</h5>
                <p>{privacy.description}</p>
                <p className="d-inline">{privacy.description1} </p>
              </div>
            ))}

            <h5>Contacting us</h5>
            <p>
              If you have any questions about this Privacy Policy, the practices
              of this site, or your dealings with this site, please contact us
              at:
              <Link
                to={'mailto:support@airfiltersfactory.com'}
                className="mail-link"
              >
                support@airfiltersfactory.com
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
