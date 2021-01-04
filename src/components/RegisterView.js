import React, { Component } from 'react'
import '../styles/login.css'

export class RegisterView extends Component {
    render() {
        return (
            <div className="login">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-8 col-lg-6 mx-auto">
                            <div className="card card-signin my-5">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Sign Up</h5>
                                    <form className="form-signin">
                                        <div className="form-label-group ">
                                            <input type="text" id="TextField" className="form-control btn-shape" placeholder="TextField" required autoFocus/>
                                            <label htmlFor="TextField">Name</label>
                                        </div>
                                        <div className="form-label-group">
                                            <input type="email" id="inputEmail" className="form-control btn-shape" placeholder="Email address" required/>
                                            <label htmlFor="inputEmail">Email address</label>
                                        </div>
                                        <div className="form-label-group">
                                            <input type="password" id="inputPassword" className="form-control btn-shape" placeholder="Password" required/>
                                            <label htmlFor="inputPassword">Password</label>
                                        </div>
                                        <div className="form-label-group">
                                            <input type="password" id="inputconfirmPassword" className="form-control btn-shape" placeholder="Password" required/>
                                            <label htmlFor="inputconfirmPassword">Confirm Password</label>
                                        </div>
                                        <select className="form-select btn-shape" aria-label="Default select example">
                                            <option defaultValue>Select Gender</option>
                                            <option value="1">Male</option>
                                            <option value="2">Female</option>
                                        </select>
                                        <button className="btn btn-lg btn-primary btn-block text-uppercase mt-2 btn-shape" type="submit">Sign up</button>
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

export default RegisterView
