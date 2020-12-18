import React, { Component } from 'react'
import '../styles/login.css'

export class Home extends Component {
    render() {
        return (
            <div class="login">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                            <div class="card card-signin my-5">
                                <div class="card-body">
                                    <h5 class="card-title text-center">Sign Up</h5>
                                    <form class="form-signin">
                                        <div class="form-label-group ">
                                            <input type="text" id="TextField" class="form-control btn-shape" placeholder="TextField" required autofocus />
                                            <label for="TextField">Username</label>
                                        </div>
                                        <div class="form-label-group">
                                            <input type="email" id="inputEmail" class="form-control btn-shape" placeholder="Email address" required autofocus />
                                            <label for="inputEmail">Email address</label>
                                            </div>
                                        <div class="form-label-group">
                                            <input type="password" id="inputPassword" class="form-control btn-shape" placeholder="Password" required />
                                            <label for="inputPassword">Password</label>
                                        </div>
                                        <div class="form-label-group">
                                            <input type="password" id="inputconfirmPassword" class="form-control btn-shape" placeholder="Password" required />
                                            <label for="inputconfirmPassword">Confirm Password</label>
                                        </div>
                                        <select class="form-select btn-shape" aria-label="Default select example">
                                            <option selected>Select Gender</option>
                                            <option value="1">Male</option>
                                            <option value="2">Female</option>
                                        </select>
                                        <button class="btn btn-lg btn-primary btn-block text-uppercase mt-2 btn-shape" type="submit">Sign up</button>
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

export default Home
