import React, { Component } from 'react'

export class Queues extends Component {

    render() {

        let queuesItems = ["Queues 1", "Queues 2", "Queues 3", "Queues 4", "Queues 5"];
        

        return (
            <div className="container">
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-4">Queues</h1>
                        <p class="lead">a description about Queues</p>
                    </div>
                </div>          
                <br/><br/>    
                <div className="row">
                    {queuesItems.map(queueItem => (
                    <div class="col-xl-4 col-lg-6 col-md-6">
                        <div className="card-container">
                            <div class="card">
                                <div className="box">
                                    <div className="content">
                                    <h3 className="card-title">{queueItem}</h3>
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

export default Queues
