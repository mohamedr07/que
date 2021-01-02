import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import qImage from '../resources/Q.png'

export class Navbar extends Component {
    render() {
        return (
            <div>

                <nav className="navbar navbar-expand-sm navbar-grey">
                    <div className="container">
                        <Link to="/"><img className="navbar-brand" src={qImage}/></Link>
                        
                        <button className="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon "></span>
                        </button>

                        <div className="collapse navbar-collapse " id="navbarNav">
                            <ul className="navbar-nav ">
                                <li className="nav-item">
                                    <Link to="/home" className="nav-link navbar-text">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/admin" className="nav-link navbar-text">Admin</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/providerHome" className="nav-link navbar-text">Provider</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link navbar-text">Login</Link>
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
