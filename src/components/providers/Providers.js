import React from 'react'
import {Link} from "react-router-dom";
import {  useDispatch, useSelector } from "react-redux"
import { deleteProvider } from "../../actions"

export default function Providers() {

    const providers = useSelector(state => state.providersReducer)
    const dispatch = useDispatch();

    return (
        <div className="container">
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Providers</h1>
                    <p className="lead">a description about Providers</p>
                </div>
            </div>          
            <br/><br/>    
            <div className="row">
                {providers.map((provider, index) => (
                <div key={index} className="col-xl-4 col-lg-6 col-md-6">
                    <div className="card-container">
                        <div className="card">
                            <div className="box">
                                <div className="v-menu-btn dropdown">
                                    <button className="btn" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="bi bi-three-dots-vertical v-menu-icon"></i> 
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <li><Link to= {`/editprovider/${index}`} className="dropdown-item" href="#">Edit</Link></li>
                                        <li><a onClick = {() => dispatch(deleteProvider(index))} className="dropdown-item" href="#">Delete</a></li>
                                    </ul>
                                </div>
                                <div className="content">
                                <h3 className="card-title">{provider.name}</h3>
                                <div className="card-text">
                                    <ul className="list-unstyled">
                                        <li>Queue: <span className="font-bold">{provider.queue}</span></li>
                                        <li>Station: <span className="font-bold">{provider.station}</span></li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                ))}
            </div>
            <Link to="/assignprovider" className="btn btn-primary btn-add">Add</Link>
        </div>
    );
}
