import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/login.css'

export class LoginView extends Component {
    render() {
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
                                            <input type="email" id="inputEmail" className="form-control btn-shape" placeholder="Email address" required autoFocus />
                                            <label htmlFor="inputEmail">Email address</label>
                                        </div>

                                        <div className="form-label-group">
                                            <input type="password" id="inputPassword" className="form-control btn-shape" placeholder="Password" required />
                                            <label htmlFor="inputPassword">Password</label>
                                        </div>

                                        <div className="custom-control custom-checkbox mb-2">
                                            <input type="checkbox" className="custom-control-input btn-shape" id="customCheck1" />
                                            <label className="custom-control-label" htmlFor="customCheck1">Stay signed in</label>
                                        </div>
                                        <div className="custom-control custom-checkbox mb-2">
                                            <input type="checkbox" className="custom-control-input btn-shape" id="customCheck2" />
                                            <label className="custom-control-label" htmlFor="customCheck2">Sign in as provider</label>
                                        </div>
                                        <div className="form-link"><a href="#">Forget password</a></div>
                                        <br/>
                                        <button className="btn btn-primary btn-block text-uppercase btn-shape" type="submit">Sign in</button>
                                        <Link to="/Register" className=" btn btn-primary btn-block text-uppercase btn-shape">Sign up</Link>
                                        <hr className="my-4" />
                                        <button className="btn btn-google btn-block text-uppercase btn-shape" type="submit"><i className="bi bi-google mr-2"></i> Google</button>
                                        <button className="btn btn-facebook btn-block text-uppercase btn-shape" type="submit"><i className="bi bi-facebook mr-2"></i> Facebook</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginView
