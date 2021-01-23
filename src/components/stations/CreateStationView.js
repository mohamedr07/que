import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux"
import {Link} from "react-router-dom";
import axiosInstance from '../Axios'
import axios from 'axios'

export default function CreateStation() {

    const [availableQueues, setAvailableQueues] = useState(useSelector(state => state.queuesReducer))
    const [providers, setProviders] = useState(useSelector(state => state.providersReducer))
    const [stationLocation, setStationLocation] = useState('')
    const [selectedProvider, setSelectedProvider] = useState('')
    const [selectedQueue, setSelectedQueue] = useState('')

    useEffect(() => {
        axios.all([
            axiosInstance.get(`queues`),
            axiosInstance.get(`users/providers`)
        ]).then(res => {
            setAvailableQueues(res[0].data)
            setProviders(res[1].data)
        })
    }, [])

    const handleStationLocationChange = (e) => {
        setStationLocation(e.target.value);
    }

    const handleQueueChange = (e) => {
        setSelectedQueue(e.target.value);
    }
    
    const handleProviderChange = (e) => {
        setSelectedProvider(e.target.value);
    }

    const handleSubmit = () => {
        axiosInstance.post(`stations/`, {
            name: stationLocation,
            provider: selectedProvider,
            queue: selectedQueue
        }).then(console.log("added"))
    }

    return (
        <div className="container">
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Add Station</h1>
                </div>
            </div>
            <br/><br/>
            <div className="col-sm-12 col-md-8 col-lg-6 mx-auto">
                <div className="card card-signin my-5">
                    <div className="card-body">
                        <form className="form-signin">
                            <div className="form-label-group">
                                <input value={stationLocation} onChange={handleStationLocationChange} type="text" id="TextField" className="form-control btn-shape" placeholder="TextField" required autoFocus />
                                <label htmlFor="TextField">Location</label>
                            </div>
                            <div className="form-label-group">
                                <select value={selectedQueue} onChange={handleQueueChange} className="form-select btn-shape" aria-label="Default select example">
                                    <option defaultValue>Select queue</option>
                                    {availableQueues.map((queue, index) => (
                                        <option key={index} value={queue.id}>{queue.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-label-group">
                                <select value={selectedProvider} onChange={handleProviderChange} className="form-select btn-shape" aria-label="Default select example">
                                    <option defaultValue>Select provider</option>
                                    {providers.map((provider, index) => (
                                        <option key={index} value={provider.id}>{provider.email}</option>
                                    ))}
                                </select>
                            </div>
                            <Link to="/stations" onClick = {handleSubmit} className="btn btn-primary btn-shape ">Submit</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}