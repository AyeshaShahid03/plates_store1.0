import React, { useEffect, useState } from 'react';
import './BillingDetail.css';
import { Link } from 'react-router-dom';

const BillingDetail = () => {
  const bill = [
    {
      id: 1,
      billing: 'Default billing address',
      name: 'Mr.Jhone Doe',
      email: 'JhonDoe@gmil.com',
      address: '123HSR Layout, Bengaluru, 560102',
      contact: '*g1 12345-12345',
    },
  ];

  useEffect(() => {
    class Card {
      constructor(name, number1, number2, number3, number4) {
        this.name = name;
        this.number1 = number1;
        this.number2 = number2;
        this.number3 = number3;
        this.number4 = number4;
      }
    }

    class UI {
      addCard(card) {
        let tbody = document.getElementById('data');
        let tr = document.createElement('row');
        tr.innerHTML = `
        <div class="row bill-box">
        <div class="col-4">
          <div class="row pb-1">
            <div class="col head-color">
             ${card.name}
            </div>
          </div>
          <div class="row">
            <div class="col-1"></div>
            <div class="col head-color">${card.number1}</div>
            <div class="col head-color">${card.number2}</div>
            <div class="col head-color">${card.number3}</div>
            <div class="col head-color">${card.number4}</div>
          </div>
        </div>
        <div class="col-7 edit-color" data-bs-target="#modal"
        data-bs-toggle="modal" ><div style='cursor:pointer' class="col-1 edit-btn"> EDIT</div></div>
        <div class="col-1 " style='cursor:pointer'>
        <i class="fa-solid fa-trash remove-btn" style= 'color: #c7c7c7' ></i></div></div>
    `;
        tbody.append(tr);
      }
      removeCard(target) {
        target.parentElement.parentElement.remove();
      }

      clearFields() {
        document.getElementById('name').value = '';
        document.getElementById('cardNumber1').value = '';
        document.getElementById('cardNumber2').value = '';
        document.getElementById('cardNumber3').value = '';
        document.getElementById('cardNumber4').value = '';
      }
    }

    let form = document.getElementById('addCardForm');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      let name = document.getElementById('name').value;
      let number1 = document.getElementById('cardNumber1').value;
      let number2 = document.getElementById('cardNumber2').value;
      let number3 = document.getElementById('cardNumber3').value;
      let number4 = document.getElementById('cardNumber4').value;

      let card = new Card(name, number1, number2, number3, number4);
      let ui = new UI();

      ui.addCard(card);
      ui.clearFields();
    });

    let tbody = document.getElementById('data');

    tbody.addEventListener('click', function (event) {
      if (event.target.classList.contains('remove-btn')) {
        let ui = new UI();
        ui.removeCard(event.target);
      }
    });
    let tbody1 = document.getElementById('data');

    tbody1.addEventListener('click', function (event) {
      if (event.target.classList.contains('edit-btn')) {
        let ui = new UI();
        ui.editCard(event.target);
      }
    });
  }, []);

  useEffect(() => {
    document.querySelectorAll("input[type='number']").forEach((input) => {
      input.oninput = () => {
        if (input.value.length > input.maxLength)
          input.value = input.value.slice(0, input.maxLength);
      };
    });
  }, []);

  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="row">
        <h4 className="order-heading">
          Your Billing & Shipping
          <div className="container">
            <div className="row">
              <div className="col-1 hr-line"></div>
            </div>
          </div>
        </h4>
      </div>
      <div className="row pe-3 ps-3 ">
        <div className="col-12 d-md-flex justify-content-between px-0 ">
          <div className="bill-container ">
            <p className="bill-head">{bill[0].billing}</p>
            <p className="bill-para">{bill[0].name}</p>
            <p className="bill-para">{bill[0].email}</p>
            <p className="bill-para">{bill[0].address}</p>
            <p className="bill-para">{bill[0].contact}</p>
            <p className="bill-para">
              <Link
                className="bill-link"
                to={'/user/edit-billing-address'}
                onClick={handleScroll}
              >
                Change Billing Address
              </Link>
            </p>
          </div>
          <div className="bill-container">
            <p className="bill-head">{bill[0].billing}</p>
            <p className="bill-para">{bill[0].name}</p>
            <p className="bill-para">{bill[0].email}</p>
            <p className="bill-para">{bill[0].address}</p>
            <p className="bill-para">{bill[0].contact}</p>
            <p className="bill-para">
              <Link
                className="bill-link"
                to={'/user/edit-shipping-address'}
                onClick={handleScroll}
              >
                Change Shipping Address
              </Link>
            </p>
          </div>
        </div>
        <div className="row bill-sec-container">
          <div
            className="row "
            style={{ cursor: 'pointer' }}
            data-bs-target="#modal"
            data-bs-toggle="modal"
          >
            <div className="col-10 ps-0">
              <h6 className="bill-head">Save Cards</h6>
            </div>
            <div className="col-2 text-end pe-0 ">
              <h6 className="change-color">Add New Card</h6>
            </div>
          </div>
          <div className="col-12" id="data">
            <div className="row bill-box" id="row">
              <div className="col-4">
                <div className="row pb-1">
                  <div className="col head-color">
                    Accendo Banco Credit Card
                  </div>
                </div>
                <div className="row">
                  <div className="col-1"></div>
                  <div className="col head-color">****</div>
                  <div className="col head-color">****</div>
                  <div className="col head-color">****</div>
                  <div className="col head-color">0234</div>
                </div>
              </div>
              <div className="col-7 edit-color">EDIT</div>
              <div className="col-1">
                <i
                  className="fa-solid fa-trash"
                  style={{ color: '#c7c7c7' }}
                ></i>
              </div>
            </div>
            {/* <div className="row  bill-box" > */}
            {/* 
              <div className="col-md-12"> */}
            {/* <table className="table">
              <thead></thead>
              <tbody id="data"></tbody>
            </table> */}
            {/* </div> */}
            {/* </div> */}
          </div>
        </div>
        <div className="row bill-sec-container1 d-md-none">
          <div className="col-6 bill-head ps-0 ">Save Cards</div>
          <div
            className="col-6 "
            style={{ cursor: 'pointer' }}
            data-bs-target="#modal"
            data-bs-toggle="modal"
          >
            <h6 className="change-color d-flex justify-content-end">
              Add New Card
            </h6>
          </div>
          <div className="col-12" id="data">
            <div className="row bill-box1" id="row">
              <div className="col-10">
                <div className="row pb-1">
                  <div className="col-12 head-color">
                    Accendo Banco Credit Card
                  </div>
                </div>
                <div className="row">
                  <div className="col-2 head-color">****</div>
                  <div className="col-2 head-color">****</div>
                  <div className="col-2 head-color">****</div>
                  <div className="col-2 head-color">0234</div>
                </div>
              </div>

              <div className="col-2">
                <div className="row edit-color pb-3">EDIT</div>
                <div className="row">
                  <i
                    className="fa-solid fa-trash"
                    style={{ color: '#c7c7c7' }}
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal" id="modal" tabindex="-1" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" style={{ color: '#385F59' }}>
                Add new card
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form id="addCardForm" method="post">
                <div className="mb-3">
                  <label
                    htmlFor="name"
                    className="form-label"
                    style={{ color: '#385F59' }}
                  >
                    Card Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    required
                  />
                  <div className="invalid-feedback">Card Name is required</div>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="cardNumber1"
                    className="form-label"
                    style={{ color: '#385F59' }}
                  >
                    Card Number
                  </label>
                  <input
                    type="number"
                    name="cardNumber1"
                    id="cardNumber1"
                    className="form-control"
                    maxLength={4}
                    pattern="[0-9]{4}"
                    required
                  />
                  <div className="invalid-feedback">
                    Card Number is required
                  </div>
                </div>

                <div className="d-grid">
                  <button
                    className="btn modal-btn"
                    type="submit"
                    data-bs-dismiss="modal"
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn modal-close-btn"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BillingDetail;
