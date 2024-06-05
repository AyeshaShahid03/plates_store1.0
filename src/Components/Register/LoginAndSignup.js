import React from 'react';
import './LoginAndSignup.css';
import { useNavigate } from 'react-router-dom';
const LoginAndSignup = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/user/order');
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xl-8" style={{ margin: '100px auto' }}>
            <div className="row">
              <div className="col-md-6 col-11 login-main-container">
                <h1 className="login-h">Log In</h1>
                <form onSubmit={handleSubmit}>
                  <div className="form-group login-container focus-none">
                    <input
                      type="text"
                      className="form-control input-form1"
                      placeholder="Email Address"
                    />
                  </div>

                  <div className="form-group login-container focus-none">
                    <input
                      type="password"
                      className="form-control input-form1"
                      placeholder="Password"
                    />
                  </div>

                  <div className="login-btn-container">
                    <button className="login-btn" type="submit">
                      Log in
                    </button>
                  </div>
                </form>
              </div>

              <div className="col-md-6 col-11 border-left singup-main-container">
                <h1 className="signup-h"> Sign Up</h1>

                <form onSubmit={handleSubmit}>
                  <div className="form-group signup-container focus-none">
                    <input
                      type="text"
                      className="form-control input-form1"
                      placeholder="Email Address"
                    />
                  </div>

                  <div className="form-group signup-container focus-none">
                    <input
                      type="password"
                      className="form-control input-form1"
                      placeholder="Password"
                    />
                  </div>

                  <div className="form-group signup-container focus-none">
                    <input
                      type="password"
                      className="form-control input-form1"
                      placeholder="Confirm Password"
                    />
                  </div>

                  <div className="form-group signup-container focus-none">
                    <input
                      type="text"
                      className="form-control input-form1"
                      placeholder="First Name"
                    />
                  </div>

                  <div className="form-group signup-container focus-none">
                    <input
                      type="text"
                      className="form-control input-form1"
                      placeholder="Last Name"
                    />
                  </div>

                  <div className="signup-btn-container">
                    <button className="signup-btn" type="submit">
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginAndSignup;
