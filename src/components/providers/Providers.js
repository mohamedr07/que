import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Providers extends Component {

    render() {

        let ProvidersItems = ["Provider 1", "Provider 2", "Provider 3", "Provider 4", "Provider 5"];
        

        return (
            <div className="container">
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-4">Providers</h1>
                        <p class="lead">a description about Providers</p>
                    </div>
                </div>          
                <br/><br/>    
                <div className="row">
                    {ProvidersItems.map(providerItem => (
                    <div class="col-xl-4 col-lg-6 col-md-6">
                        <div className="card-container">
                            <div class="card">
                                <div className="box">
                                    <div className="content">
                                    <h3 className="card-title">{providerItem}</h3>
                                    <div className="card-text">
                                        <ul className="list-unstyled">
                                            <li><a href="#">Queue 1</a></li>
                                            <li><a href="#">Station 1</a></li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    ))}
                </div>
                <Link to="/assignprovider" class="btn btn-primary btn-add">Add</Link>
            </div>
        );
    }
}

export default Providers
