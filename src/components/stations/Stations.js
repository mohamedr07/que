import React, { Component } from 'react'

export class Stations extends Component {

    render() {

        let stationsItems = ["station 1", "station 2", "station 3", "station 4", "station 5"];
        

        return (
            <div className="container">
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-4">stations</h1>
                        <p class="lead">a description about stations</p>
                    </div>
                </div>          
                <br/><br/>    
                <div className="row">
                    {stationsItems.map(stationItem => (
                    <div class="col-xl-4 col-lg-6 col-md-6">
                        <div className="card-container">
                            <div class="card">
                                <div className="box">
                                    <div className="content">
                                    <h3 className="card-title">{stationItem}</h3>
                                    <div className="card-text">
                                        <ul className="list-unstyled">
                                            <li><a href="#">Queue 1</a></li>
                                            <li><a href="#">Provider 1</a></li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    ))}
                </div>
                <button type="button" class="btn btn-primary btn-add">Add</button>
            </div>
        );
    }
}

export default Stations
