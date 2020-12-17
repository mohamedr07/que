import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Navbar extends Component {
    render() {
        return (
            <div>

                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon">bla</span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link to="/home" class="nav-link">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/admin" class="nav-link">Admin</Link>
                        </li>
                    </ul>
                </div>

                </nav>
                
            </div>

                
        )
    }
}

export default Navbar
