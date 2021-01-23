import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom'
import axiosInstance from '../Axios'


export default function EditStation({match}) {

    const editedStationId  = match.params.id
    
    const [availableQueues, setAvailableQueues] = useState(useSelector(state => state.queuesReducer))
    const [providers, setProviders] = useState(useSelector(state => state.providersReducer))
    const [stationLocation, setStationLocation] = useState('')
    const [selectedQueue, setSelectedQueue] = useState('')
    const [selectedProvider, setSelectedProvider] = useState('')

    useEffect(() => {
        axios.all([
            axiosInstance.get(`stations/${editedStationId}`),
            axiosInstance.get(`queues`),
            axiosInstance.get(`users/providers`)
        ]).then(res => {
            setStationLocation(res[0].data.name)
            setSelectedQueue(res[0].data.queue)
            setSelectedProvider(res[0].data.provider.id)
            setAvailableQueues(res[1].data)
            setProviders(res[2].data)
        })
    }, [])

    const handleSubmit = () => {
        axiosInstance.put(`stations/${editedStationId}`, {
            name: stationLocation,
            provider: selectedProvider,
            queue: selectedQueue
        }).then(console.log("edited"))
    }
    const handleSelectedQueueChange = (e) => {
        setSelectedQueue(e.target.value);
    }

    const handleStationLocationChange = (e) => {
        setStationLocation(e.target.value);
    }

    const handleSelectedProviderChange = (e) => {
        setSelectedProvider(e.target.value);
    }


    return (

        <div className="container">
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Edit station</h1>
                </div>
            </div>
            <br/><br/>
            <div className="col-sm-12 col-md-8 col-lg-6 mx-auto">
                <div className="card card-signin my-5">
                    <div className="card-body">
                        <form className="form-signin">
                            <input value={stationLocation} onChange={handleStationLocationChange} type="text" id="TextField" className="form-control btn-shape" placeholder="Station Location" required autoFocus />
                            <div className="form-label-group">
                                <select value={selectedQueue} onChange={handleSelectedQueueChange} className="form-select btn-shape" aria-label="Default select example">
                                    <option defaultValue>Select queue</option>
                                    {availableQueues.map((queue, index) => (
                                        <option key={index} value={queue.id}>{queue.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-label-group">
                                <select value={selectedProvider} onChange={handleSelectedProviderChange} className="form-select btn-shape" aria-label="Default select example">
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
