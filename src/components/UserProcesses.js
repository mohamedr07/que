import React, { Component, useState } from 'react'

function UserProcesses(props) {

        const [processes, setProcesses] = useState([
            {
                name: "Process 1",
                active: false
            },
            {
                name: "Process 2",
                active: false
            },
            {
                name: "Process 3",
                active: false
            },
            {
                name: "Process 4",
                active: false
            },
            {
                name: "Process 5",
                active: false
            }]);

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
                    <div class="col-xl-4 col-lg-4 col-md-6">
                        <div className="form-signin hvr-grow-shadow">
                            <div className={p.active ? "card processTrue": "card processFalse"} onClick={() => handleOptionChange(p)}>
                                <div className="card-body">
                                    <h3 className="card-title">{p.name}</h3>
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
                    ))}
                </div>
                <button type="button" class="btn btn-primary btn-add">Select</button>
            </div>
        )
}

export default UserProcesses;
