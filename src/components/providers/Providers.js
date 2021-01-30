import React, { useState, useEffect } from 'react'
import {Link} from "react-router-dom";
import { useSelector } from "react-redux"
import axiosInstance from '../Axios'

export default function Providers() {

    const [providers, setProviders] = useState(useSelector(state => state.providersReducer))

    useEffect(() => {
        axiosInstance.get(`users/providers`).then(res => {
            setProviders(res.data)
        })
    }, [])

    const removeProvider = (id) => {
        axiosInstance.put(`users/setunsetprovider/${id}/`)
        window.location.reload(false)
    }
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
                                        <li><a onClick = {() => removeProvider(provider.id)} className="dropdown-item" href="#">Remove</a></li>
                                    </ul>
                                </div>
                                <div className="content">
                                <h3 className="card-title">{provider.full_name}</h3>
                                <hr></hr>
                                <div className="card-text">
                                    <ul className="list-unstyled">
                                        <li>Email: <span className="font-bold">{provider.email}</span></li>
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
