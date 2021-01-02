import React from 'react'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import {  deleteProcess } from "../../actions" 

function Processes() {

    const processesItems =  useSelector(state => state.processReducer)
    const dispatch = useDispatch();
    return (
        <div className="container">
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Processes</h1>
                    <p className="lead">a description about process</p>
                </div>
            </div>          
            <br/><br/>    
            <div className="row">
                {processesItems.map((processItem, index)=> (
                <div key={index} className="col-xl-4 col-lg-6 col-md-6">
                    <div className="card-container">
                        <div className="card">
                            <div className="box">
                                <div className="v-menu-btn dropdown">
                                    <button className="btn" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="bi bi-three-dots-vertical v-menu-icon"></i> 
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <li><a className="dropdown-item" href="#">Edit</a></li>
                                        <li><a onClick = {() => dispatch(deleteProcess(index))} className="dropdown-item" href="#">Delete</a></li>
                                    </ul>
                                </div>
                                <div className="content">
                                    <h3 className="card-title">{processItem.name}</h3>
                                    <div className="card-text">
                                        <ul className="list-unstyled">
                                            {processItem.processQueues ? processItem.processQueues.map((q, i) => {
                                                return <li key={i}>{q.name}</li>
                                            }): null}   
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                ))}
            </div>
            <Link to="/addProcess" className="btn btn-primary btn-add">Add</Link>
            
        </div>
    );
}

export default Processes

