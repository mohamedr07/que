import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/login.css'

export class LoginView extends Component {
    render() {
        return (
            <div class="login">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-8 col-lg-6 mx-auto">
                            <div class="card card-signin my-5">
                                <div class="card-body">
                                    <h5 class="card-title text-center">Sign In</h5>
                                    <form class="form-signin">
                                        <div class="form-label-group">
                                            <input type="email" id="inputEmail" class="form-control btn-shape" placeholder="Email address" required autofocus />
                                            <label for="inputEmail">Email address</label>
                                        </div>

                                        <div class="form-label-group">
                                            <input type="password" id="inputPassword" class="form-control btn-shape" placeholder="Password" required />
                                            <label for="inputPassword">Password</label>
                                        </div>

                                        <div class="custom-control custom-checkbox mb-2">
                                            <input type="checkbox" class="custom-control-input btn-shape" id="customCheck1" />
                                            <label class="custom-control-label" for="customCheck1">Stay signed in</label>
                                            <input type="checkbox" class="custom-control-input btn-shape" id="customCheck1" />
                                            <label class="custom-control-label" for="customCheck1">Sign in as provider</label>
                                        </div>
                                        <a href="#">Forget password</a>
                                        <br/>
                                        <button class="btn btn-primary btn-block text-uppercase mt-2 btn-shape" type="submit">Sign in</button>
                                        <Link to="/Register" class="btn btn-lg btn-primary btn-block text-uppercase mt-2 btn-shape">Sign up</Link>
                                        <hr class="my-4" />
                                        <button class="btn btn-google btn-block text-uppercase btn-shape" type="submit"><i class="bi bi-google mr-2"></i> Google</button>
                                        <button class="btn btn-facebook btn-block text-uppercase btn-shape" type="submit"><i class="bi bi-facebook mr-2"></i> Facebook</button>
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
