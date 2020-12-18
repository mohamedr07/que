import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import qImage from '../resources/Q.png'

export class Navbar extends Component {
    render() {
        return (
            <div>

                <nav class="navbar navbar-expand-sm navbar-grey">
                    <div className="container">
                        <img class="navbar-brand" src={qImage}/>
                        <button class="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon "></span>
                        </button>

                        <div class="collapse navbar-collapse " id="navbarNav">
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
                            </ul>
                        </div>
                    </div>
                </nav>
                
            </div>

                
        )
    }
}

export default Navbar
