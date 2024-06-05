import React from "react";
import "./Category.css";
import Standard from "./Standard";
import Elipse from "../../assets/images/Ellipse 39.png";
import Client from "../Client/Client";
import FaqSection from "../FaqSection";
import BuyNow from "../BuyNow";
const Category = () => {
  return (
    <>
      <div className="main-heading d-md-none">
        <h1>Order Now</h1>
      </div>
      <div className="container my-5">
        <div
          style={{
            border: "solid 1px #80808040",
            borderRadius: "10px",
            backgroundColor: "#385F59",
            color: "white",
          }}
          className=" d-md-none"
        >
          <h1 className="text-center py-2">Product Name</h1>
        </div>
        <div className="row">
          <div className="col-xl-12" style={{ margin: "10px auto" }}>
            <div className="row">
              <div className="col-md-6 pb-4" style={{}}>
                <div className="bigFilter d-flex align-items-center justify-content-center">
                  <img className=" img-fluid" src={Elipse}></img>
                </div>
                <div className="description-container d-none d-md-block">
                  <div
                    style={{
                      backgroundColor: "#385F59",
                      padding: "6px 10px",
                      color: "white",
                      borderRadius: "10px 10px 0px 0px",
                    }}
                  >
                    <h6 className="des-heading">Description</h6>
                  </div>

                  <div className="des-p pt-4">
                    <i
                      className="bi bi-circle-fill"
                      style={{ color: "#D75D39", margin: "0px 10px" }}
                    ></i>
                    <p>Actual Size:11.25x11.25x1</p>
                  </div>

                  <div className="des-p">
                    <i
                      className="bi bi-circle-fill"
                      style={{ color: "#D75D39", margin: "0px 10px" }}
                    ></i>
                    <p>Model: </p>
                  </div>
                  <div className="des-p pb-4">
                    <i
                      className="bi bi-circle-fill"
                      style={{ color: "#D75D39", margin: "0px 10px" }}
                    ></i>
                    <p>Other fields </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 brand-name-heading">
                <form>
                  <div
                    style={{
                      border: "solid 1px #80808040",
                      borderRadius: "10px",
                      backgroundColor: "#385F59",
                      color: "white",
                    }}
                    className="d-none d-md-block"
                  >
                    <h1 className="text-center py-2">Product Name</h1>
                  </div>
                  <Standard />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="description-container d-block d-md-none pb-3 mt-0 mb-5">
          <div
            style={{
              backgroundColor: "#385F59",
              padding: "6px 10px",
              color: "white",
              borderRadius: "10px 10px 0px 0px",
            }}
          >
            <h6 className="des-heading">Description</h6>
          </div>

          <div className="des-p ">
            <i
              className="bi bi-circle-fill"
              style={{ color: "#385F59", margin: "0px 10px" }}
            ></i>
            <p>Actual Size:11.25x11.25x1</p>
          </div>

          <div className="des-p">
            <i
              className="bi bi-circle-fill"
              style={{ color: "#385F59", margin: "0px 10px" }}
            ></i>
            <p>Model: </p>
          </div>
        </div>
      </div>
      <div className="shop-card-background mb-4">
        <div className="container px-md-5">
          <div className="row shop-by-size-main-container ">
            <h1 className="pb-md-5 py-4 d-lg-block d-none">
              See our products below
            </h1>
            <h1 className="pb-md-5 py-4 d-lg-none d-block small-screen">
              See our products
            </h1>

            <p className="pb-5 text-center mx-auto ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod temp <br /> incididunt ut labore et dolore magna aliqua.
            </p>
            <BuyNow />
          </div>
        </div>
      </div>
      
        <Client />
      

      <FaqSection />
    </>
  );
};

export default Category;
