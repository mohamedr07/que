import React, { Component } from 'react'
import AdminView from './AdminView'
import {
    BrowserRouter as Router, 
    Switch,
    Route,
    Link
  } from 'react-router-dom';

export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <Router>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <Link to="/AdminView">Admin</Link>
                        </li>
                        </ul>
                    </div>
                    </Router>
                </nav>
            </div>

                
        )
    }
}

export default Navbar
