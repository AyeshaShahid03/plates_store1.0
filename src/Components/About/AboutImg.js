import React from 'react';
import './About.css';
import img1 from '../../assets/images/contact-1.png';
import img3 from '../../assets/images/contact-3.png';
import img4 from '../../assets/images/contact-4.png';
const AboutImg = () => {
  return (
    <>
      <div className="container ">
        <div className="contact-main-section mx-auto pb-3">
          <h1>
            Welcome to EcoTableWare
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-md-6 pb-4">
            <img src={img1} alt="" className="img-fluid" />
          </div>
          <div className="col-md-6 contact-second-section">
            <h3>At EcoTableWare, we care about your health.</h3>
            <p>
              We are committed to providing high-quality tableware. We understand the importance of clean and healthy meal prep, not just for humans but for the environment too, and that's why we offer a wide range of eco-friendly tableware that caters to different needs.
            </p>
            <br />
            <p>
            Our collections are designed to have minimal impact on the planet. Our tableware such as plates, utensils, and other dining accessories are made from sustainable materials and we also made sure that these eco-friendly tableware are free from harmful chemicals and other toxins that are usually found in plastic tableware.
            </p>
            <br />
            <p>This ensures that your tableware is safe for both human health and the environment!</p>
          </div>
        </div>
      </div>
      <div className="contact-back-img my-5"></div>
      <div className="container py-2 ">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-md-6 contact-section3-heading ">
            <h1>Our Mission</h1>
            <h4 className="d-none d-lg-block pt-2">
              Lorem ipsum dolor sit amet
            </h4>
            <p>
            Improving lifestyle has always been our top priority and it’s what eco-friendly tablewares are made for. We are dedicated to standing behind our mission and we will continue to work hard in making sure we are providing one of the most efficient and effective tableware out there.
            </p>
            
          </div>
          <div className="col-md-6 pt-5">
            <img src={img3} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
      <div className="container py-5 ">
        <div className="row d-flex align-items-center justify-content-center flex-md-row flex-column-reverse">
          <div className="col-md-6 pt-5">
            <img src={img4} alt="" className="img-fluid" />
          </div>
          <div className="col-md-6 contact-section3-heading">
            <h1>Our Services and Shipping</h1>
            <p>
            At EcoTableWare, we believe in providing exceptional customer service. Our knowledgeable and friendly customer service team is dedicated to ensuring that your shopping experience with us is hassle-free and enjoyable. We are always available to answer any questions or concerns you may have about our products.
            </p>
            <br />
            <p>
            We also offer FREE shipping, always! Rest easy and take the shipping fee out of your worry.
            </p>
            <br />
            <p>
            Thank you for choosing EcoTableWare as your eco-friendly tableware provider! We look forward to helping you achieve a cleaner, and healthier meal prepping.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutImg;
