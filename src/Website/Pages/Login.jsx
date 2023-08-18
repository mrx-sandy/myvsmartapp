import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthUser from './AuthUser';

const Login = () => {
  const { http, Token, SetToken } = AuthUser();
  const navigate = useNavigate();
  const [disable, setDisable] = useState(0);
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });


  useEffect(() => {
    if (Token !== null) {
      navigate('/');
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [navigate, Token]);

  const onInputChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
    console.log(loginData);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    http.post('/user/login', loginData).then((res) => {
      console.log(res.data);
      if (res.data.Token) {
        SetToken(res.data.user_data, res.data.Token);
        navigate('/');
      } else {
        notify(res.data.message);
      }
      setDisable(0);
    });
  };
  return (
    <div className="login-page">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-12 col-lg-12 col-xl-10">
          <div className="user-form-logo">
            <a href="/">
              <img
                src="https://vsmart.ajspire.com/images/logo1.png"
                alt="logo"
              />
            </a>
          </div>
          <div className="user-form-card">
            <div className="user-form-title">
              <h2>welcome To VS Mart</h2>
              <p>Use your credentials to access</p>
            </div>
            <div className="user-form-group">
              <form action="/login" method="POST" className="user-form">
                <input
                  type="hidden"
                  name="_token"
                  defaultValue="fwKPJTxKPYeVJfgrR9OIGvU1OXUcKdQbOMUWnZ4i"
                />
                <div className="form-group">
                  <input
                    name="email"
                    type="text"
                    className="form-control"
                    placeholder="Enter your User Id | Mobile Numbar | Email Id"
                    onChange={(e) => OnInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <input
                    name="password"
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"
                    onChange={(e) => OnInputChange(e)}
                  />
                </div>
                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="check"
                  />
                  <label className="form-check-label" htmlFor="check">
                    Remember Me
                  </label>
                </div>
                <div className="form-button">
                  <button type="submit" value="Login" onClick={onSubmit}>
                    Login
                  </button>
                  <p>
                    Forgot your password?
                    <a href="/forgot-password">reset here</a>
                  </p>
                  <p>
                    Don't Have Any Account?
                    <a href="/register"> Register Here</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
          <div className="user-form-remind"></div>
          <div className="user-form-footer">
            <p>
              V S Mart | © Copyright 2022 by
              <a target="blank" href="/">
                {" "}
                VS Mart
              </a>{" "}
              &nbsp;&nbsp;All Rights Reserved{" "}
            </p>
            <br />
            <p>
              Designed by
              <a target="blank" href="https://www.SandipGadekar.com">
                Sandip Gadekar
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
