import React from 'react'
import {  useDispatch, useSelector } from "react-redux"
import {Link} from "react-router-dom";
import { deleteQueue } from "../../actions"


export default function Queues() {

    const availableQueues = useSelector(state => state.queuesReducer)
    const dispatch = useDispatch();
    
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
                {availableQueues.map((queue, index) => (
                <div key={queue.id} className="col-xl-4 col-lg-6 col-md-6">
                    <div className="card-container">
                        <div className="card">
                            <div className="box">
                                <div className="v-menu-btn dropdown">
                                    <button className="btn" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="bi bi-three-dots-vertical v-menu-icon"></i> 
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <li><Link to= {`/editqueue/${index}`} className="dropdown-item" href="#">Edit</Link></li>
                                        <li><a onClick = {() => dispatch(deleteQueue(index))} className="dropdown-item" href="#">Delete</a></li>
                                    </ul>
                                </div>
                                <div className="content">
                                <h3 className="card-title">{queue.name}</h3>
                                <div className="card-text">
                                    <h6 className="mt-3">Estimated time: {queue.estimatedTime} mins</h6>
                                    <hr></hr>
                                    <ul className="list-unstyled">
                                        {
                                            queue.providers ? queue.providers.map(p => {
                                                return <li className="">{p.name}</li>
                                            }) : null
                                        }
                                    </ul>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                ))}
            </div>
            <Link to="createqueue" className="btn btn-primary btn-add">Add</Link>
        </div>
    );
}
