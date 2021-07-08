import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axiosInstance from './Axios';
import store from '../index';
import { addUser } from '../actions/index';

import '../styles/login.css';

export default function LoginView({ setUser }) {
  const history = useHistory();
  const initialFormData = Object.freeze({
    email: '',
    password: '',
  });

  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosInstance
      .post(`login/`, {
        email: formData.email,
        password: formData.password,
      })
      .then((res) => {
        localStorage.setItem('access_token', res.data.access);
        localStorage.setItem('refresh_token', res.data.refresh);
        localStorage.setItem('id', res.data.id);
        axiosInstance.defaults.headers['Authorization'] =
          'JWT ' + localStorage.getItem('access_token');
        axiosInstance.get(`users/${res.data.id}`).then((res) => {
          setUser(res.data.user);
          if (res.data.user.is_superuser) history.push('/admin');
          else if (!res.data.user.is_superuser && res.data.user.is_staff)
            history.push('/providerHome');
          else history.push('/home');
        });
      });
  };

  return (
    <div className="login">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-8 col-lg-6 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Sign In</h5>
                <form className="form-signin">
                  <div className="form-label-group">
                    <input
                      type="email"
                      id="inputEmail"
                      name="email"
                      onChange={handleChange}
                      className="form-control btn-shape"
                      placeholder="Email address"
                      required
                      autoFocus
                    />
                    <label htmlFor="inputEmail">Email address</label>
                  </div>

                  <div className="form-label-group">
                    <input
                      type="password"
                      id="inputPassword"
                      name="password"
                      onChange={handleChange}
                      className="form-control btn-shape"
                      placeholder="Password"
                      required
                    />
                    <label htmlFor="inputPassword">Password</label>
                  </div>

                  <br />
                  <button
                    className="btn btn-primary btn-block text-uppercase btn-shape"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Sign in
                  </button>
                  <Link
                    to="/Register"
                    className=" btn btn-primary btn-block text-uppercase btn-shape"
                  >
                    Sign up
                  </Link>
                  <hr className="my-4" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
