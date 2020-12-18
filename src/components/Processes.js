import React, { Component } from 'react'

export class Processes extends Component {

    render() {

        let processesItems = ["Process 1", "Process 2", "Process 3", "Process 4", "Process 5"];
        

        return (
            <div className="container">
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-4">Processes</h1>
                        <p class="lead">a description about processes</p>
                    </div>
                </div>          
                <br/><br/>    
                <div className="row">
                    {processesItems.map(processItem => (
                    <div class="col-xl-4 col-lg-6 col-md-6">
                        <div className="card-container">
                            <div class="card">
                                <div className="box">
                                    <div className="content">
                                    <h3 className="card-title">{processItem}</h3>
                                    <div className="card-text">
                                        <ul className="list-unstyled">
                                            <li className="card-text"><a href="#">Queue 1</a></li>
                                            <li><a href="#">Queue 2</a></li>
                                            <li><a href="#">Queue 3</a></li>
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

export default Processes
