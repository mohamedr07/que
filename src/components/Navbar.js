import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Navbar extends Component {
    render() {
        return (
            <div>

                <nav class="navbar navbar-expand-sm navbar-grey">
                    <div className="container">
                        <a class="navbar-brand" href="#">Navbar</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav ">
                                <li class="nav-item">
                                    <Link to="/home" class="nav-link navbar-text">Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/admin" class="nav-link navbar-text">Admin</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/login" class="nav-link navbar-text">Login</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/register" class="nav-link navbar-text">Register</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                
            </div>

                
        )
    }
}

export default Navbar
