import React, { useState } from 'react'
import {  useDispatch, useSelector } from "react-redux"
import { editStation } from "../../actions"
import { Link } from 'react-router-dom'


export default function EditProvider({match}) {

    const editedProviderIndex  = match.params.index
    const dispatch = useDispatch();
    
    const availableQueues = useSelector(state => state.queuesReducer)
    const availableStations = useSelector(state => state.stationsReducer)

    const [providerName, setProviderName] = useState(useSelector(state => state.providersReducer[editedProviderIndex].name))
    const [selectedStation, setSelectedStation] = useState(useSelector(state => state.providersReducer[editedProviderIndex].station))
    const [selectedQueue, setSelectedQueue] = useState(useSelector(state => state.providersReducer[editedProviderIndex].queue))

    
    const handleNameChange = (e) => {
        setProviderName(e.target.value);
    }

    const handleSelectedQueueChange = (e) => {
        setSelectedQueue(e.target.value);
    }

    const handleSelectedStationChange = (e) => {
        setSelectedStation(e.target.value);
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
                            <input value={providerName} onChange={handleNameChange} type="text" id="TextField" className="form-control btn-shape" placeholder="Name" required autoFocus />
                            <div className="form-label-group">
                                <select value={selectedQueue} onChange={handleSelectedQueueChange} className="form-select btn-shape" aria-label="Default select example">
                                    <option defaultValue>Select queue</option>
                                    {availableQueues.map((queue, index) => (
                                        <option key={index} value={queue.name}>{queue.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-label-group">
                                <select value={selectedStation} onChange={handleSelectedStationChange} className="form-select btn-shape" aria-label="Default select example">
                                    <option defaultValue>Select station</option>
                                    {availableStations.map((station, index) => (
                                        <option key={index} value={station.location}>{station.location}</option>
                                    ))}
                                </select>
                            </div>
                            <Link to="/stations" onClick = {() => dispatch(editStation(editedProviderIndex, providerName, selectedStation, selectedQueue))} className="btn btn-primary btn-shape ">Submit</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
