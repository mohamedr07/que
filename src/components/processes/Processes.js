import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"
import {  deleteProcess } from "../../actions" 
import axiosInstance from '../Axios';


function Processes() {

    const [processesItems, setProcessesItems] =  useState(useSelector(state => state.processReducer))
    
    useEffect(() => {
        axiosInstance.get(`processes/`).then(res => {
            setProcessesItems(res.data)
        })
    }, [])

    function deleteProcessQueue(id) {
        axiosInstance.delete(`processes/${id}`).then(() => {
            window.location.reload(false)
            console.log("deleted")
        })
    }
    
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
                                        <li><Link to= {`/editprocess/${processItem.id}`} className="dropdown-item" href="#">Edit</Link></li>
                                        <li><a onClick = {() => deleteProcessQueue(processItem.id)} className="dropdown-item" href="#">Delete</a></li>
                                    </ul>
                                </div>
                                <div className="content">
                                    <h3 className="card-title">{processItem.name}</h3>
                                    <hr></hr>
                                    <div className="card-text">
                                        <ul className="list-unstyled">
                                            {processItem.queues ? processItem.queues.map((q, i) => {
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

