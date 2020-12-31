import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { addProcess, deleteProcess } from "../../actions"

function Processes() {

    const processesItems = useSelector(state => state.processReducer)
    const dispatch = useDispatch();
    
    return (
        <div className="container">
            {console.log(processesItems)}
            
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">Processes</h1>
                    <p class="lead">a description about process</p>
                </div>
            </div>          
            <br/><br/>    
            <div className="row">
                {processesItems.map((processItem, index)=> (
                <div class="col-xl-4 col-lg-6 col-md-6">
                    <div className="card-container">
                        <div className="card">
                            <div className="box">
                                <div class="v-menu-btn dropdown">
                                    <button class="btn" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="bi bi-three-dots-vertical v-menu-icon"></i> 
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <li><a class="dropdown-item" href="#">Edit</a></li>
                                        <li><a onClick = {() => dispatch(deleteProcess(index))} class="dropdown-item" href="#">Delete</a></li>
                                    </ul>
                                </div>
                                <div className="content">
                                <h3 className="card-title">{processItem}</h3>
                                <div className="card-text">
                                    <ul className="list-unstyled">
                                        <li><a href="#">Queue 1</a></li>
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
            <Link to="/createProcess" class="btn btn-primary btn-add">Add</Link>
            
        </div>
    );
}

export default Processes
