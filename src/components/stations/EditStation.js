import React, { useState } from 'react'
import {  useDispatch, useSelector } from "react-redux"
import { editStation } from "../../actions"
import { Link } from 'react-router-dom'


export default function EditStation({match}) {

    const editedStationIndex  = match.params.id
    const dispatch = useDispatch();
    
    const availableQueues = useSelector(state => state.queuesReducer)
    const providers = useSelector(state => state.providersReducer)
    const [stationLocation, setStationLocation] = useState(useSelector(state => state.stationsReducer[editedStationIndex].location))
    const [selectedQueue, setSelectedQueue] = useState(useSelector(state => state.stationsReducer[editedStationIndex].queue))
    const [selectedProvider, setSelectedProvider] = useState(useSelector(state => state.stationsReducer[editedStationIndex].provider))

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
                                        <option key={index} value={queue.name}>{queue.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-label-group">
                                <select value={selectedProvider} onChange={handleSelectedProviderChange} className="form-select btn-shape" aria-label="Default select example">
                                    <option defaultValue>Select provider</option>
                                    {providers.map((provider, index) => (
                                        <option key={index} value={provider.name}>{provider.name}</option>
                                    ))}
                                </select>
                            </div>
                            <Link to="/stations" onClick = {() => dispatch(editStation(editedStationIndex, stationLocation, selectedQueue, selectedProvider))} className="btn btn-primary btn-shape ">Submit</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
