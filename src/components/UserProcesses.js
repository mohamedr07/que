import React, { Component, useState } from 'react'
import { useSelector } from "react-redux"

function UserProcesses(props) {

        const [processes, setProcesses] = useState(useSelector(state => state.processReducer));

        const handleOptionChange = (p) => {
            p.active= !p.active;
            setProcesses([...processes]);
        };

        return (
            
            <div className="container">
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-4">Processes</h1>
                        <p class="lead">Select a process or more to join queues</p>
                    </div>
                </div>   
                       
                <br/><br/> 
                <div className="row">
                    {processes.map(p => (
                    <div class="col-xl-4 col-lg-4 col-md-6 ">
                        <div className="form-signin hvr-grow-shadow">
                            <div className={p.active ? "card card-user processTrue": "card card-user processFalse"} onClick={() => handleOptionChange(p)}>
                                <div className="card-body">
                                    <img src={p.image} class="card-img-top"></img>
                                    <h3 className="card-title">{p.name}</h3>
                                    <div className="card-text">
                                    <ul className="list-unstyled">
                                            {p.processQueues.map((q, i) => {
                                                return <li>{q.name}</li>
                                            })}   
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    ))}
                </div>
                <button type="button" class="btn btn-primary btn-add">Select</button>
            </div>
        )
}

export default UserProcesses;
