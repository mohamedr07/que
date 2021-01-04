import React, { useState, useEffect } from 'react'
import {  useDispatch, useSelector } from "react-redux"
import {Link} from "react-router-dom";

export default function Queues() {

    const [availableQueues, setAvailableQueues] = useState(useSelector(state => state.queuesReducer))
    
    return (
        <div className="container">
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Queues</h1>
                    <p className="lead">a description about Queues</p>
                </div>
            </div>          
            <br/><br/>    
            <div className="row">
                {availableQueues.map(queue => (
                <div key={queue.id} className="col-xl-4 col-lg-6 col-md-6">
                    <div className="card-container">
                        <div className="card">
                            <div className="box">
                                <div className="v-menu-btn dropdown">
                                    <button className="btn" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="bi bi-three-dots-vertical v-menu-icon"></i> 
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <li><a className="dropdown-item" href="#">Edit</a></li>
                                        <li><a className="dropdown-item" href="#">Delete</a></li>
                                    </ul>
                                </div>
                                <div className="content">
                                <h3 className="card-title">{queue.name}</h3>
                                <div className="card-text">
                                    <ul className="list-unstyled">
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
            <Link to="createQueue" className="btn btn-primary btn-add">Add</Link>
        </div>
    );
}
