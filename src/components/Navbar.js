import React, { Component } from 'react'
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
                            <Link to="/AdminView">Admin View</Link>
                        </li>
                        </ul>
                    </div>
                        <Switch>
                            <Route path="/AdminView">
                                <AdminView/>
                            </Route>
                        </Switch>
                    </Router>
                </nav>

                    <Link to="/AdminView">Admin View</Link>
    

            </div>

                
        )
    }
}

export default Navbar
