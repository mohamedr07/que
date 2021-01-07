import React, { useState } from 'react'
import {  useDispatch, useSelector } from "react-redux"
import { addQueue } from "../../actions"
import { Link } from 'react-router-dom'


export default function CreateQueue() {

    const dispatch = useDispatch();
    const availableQueues = useSelector(state => state.queuesReducer)
    const [queueName, setQueueName] = useState('')
    const [estimatedTime, setEstimatedTime] = useState(null)

    const handleNameChange = (e) => {
        setQueueName(e.target.value);
    }

    const handleEstimatedTimeChange = (e) => {
        setEstimatedTime(e.target.value);
    }


    return (


        <div className="container">
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Add queue</h1>
                </div>
            </div>
            <br/><br/>
            <div className="col-sm-12 col-md-8 col-lg-6 mx-auto">
                <div className="card card-signin my-5">
                    <div className="card-body">
                        <form className="form-signin">
                            <input value= {queueName} onChange={handleNameChange} type="text" id="TextField" className="form-control btn-shape mt-2" placeholder="Queue name" required autoFocus />
                            <input value={estimatedTime} onChange={handleEstimatedTimeChange} type="number" id="TextField2" className="form-control btn-shape mt-2" placeholder="Estimated time" />
                            
                            <Link to="/queues" onClick = {() => dispatch(addQueue(availableQueues.length, queueName, estimatedTime))} className="btn btn-primary btn-shape ">Submit</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
