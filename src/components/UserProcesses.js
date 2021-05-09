import React, {  useEffect, useState } from 'react'
import { useSelector } from "react-redux"
import axiosInstance from './Axios';
import { useHistory } from "react-router-dom";


function UserProcesses() {

        const [processes, setProcesses] = useState(useSelector(state => state.processReducer));
        let history = useHistory();
    
        useEffect(() => {
            if(localStorage.getItem('id') == null){
                history.push('/login')
            }
            axiosInstance.get(`processes/`).then(res => {
                setProcesses(res.data)
            })
        }, [])
        
        const handleOptionChange = (p) => {
            p.active= !p.active;
            setProcesses([...processes]);
        };

        return (
            
            <div className="container">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">Processes</h1>
                        <p className="lead">Select a process or more to join queues</p>
                    </div>
                </div>   
                       
                <br/><br/> 
                <div className="row">
                    {processes.map(p => (
                    <div key={p.id} className="col-xl-3 col-lg-4 col-md-6 ">
                        <div className="form-signin hvr-grow-shadow">
                            <div className={p.active ? "card card-user processTrue": "card card-user processFalse"} onClick={() => handleOptionChange(p)}>
                                <div className="card-body">
                                    <img src={p.image} className="card-img-top" alt=""></img>
                                    <h3 className="card-title">{p.name}</h3>
                                    <div className="card-text">
                                    <ul className="list-unstyled">
                                            {p.processQueues ? p.processQueues.map((q) => {
                                                return <li key={q.id}>{q.name}</li>
                                            }): null }   
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    ))}
                </div>
                <button type="button" className="btn btn-primary btn-add">Select</button>
            </div>
        )
}

export default UserProcesses;
