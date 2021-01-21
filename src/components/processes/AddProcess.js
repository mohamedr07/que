import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux"
import axiosInstance from '../Axios'

export default function AddProcess() {

    useEffect(() => {
        axiosInstance.get(`queues/`).then(res => {
            setAvailableQueues(res.data)
        })
    }, [])

    const [processName, setProcessName] = useState('')
    const [selectedId, setSelectedId] = useState(0)
    const [selectedQueues, setSelectedQueues] = useState([])
    const [availableQueues, setAvailableQueues] = useState(useSelector(state => state.queuesReducer))

    const addProcess = () => {
        const ques = []
        selectedQueues.map(q => {
            ques.push(q.id)
        })
        
        axiosInstance.post(`processes/`, {
            name: processName,
            queues: ques
        }).then(() => {
            console.log("added")
        })
    }

    const handleSelectChange = (e) => {
        setSelectedId(e.target.value);
    }

    const handleNameChange = (e) => {
        setProcessName(e.target.value);
    }

    const addQueuesToSelected = (id) => {
        if (id === null || id === 0) return;
        const selectedQueIndex = availableQueues.findIndex(queue => queue.id === parseInt(id))
        setSelectedQueues([...selectedQueues, availableQueues[selectedQueIndex]])
        availableQueues.splice(selectedQueIndex, 1)
        setSelectedId(0)
    }

    const deleteQueueFromSelected = (id) => {
        const deletedQueIndex = selectedQueues.findIndex(queue => queue.id === parseInt(id))
        setAvailableQueues([...availableQueues, selectedQueues[deletedQueIndex]])
        selectedQueues.splice(deletedQueIndex, 1)
    }

   
    return (
        <div className="container">
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Add Process</h1>
                </div>
            </div>
            <br/><br/>
            <div className="col-sm-12 col-md-8 col-lg-6 mx-auto">
                <div className="card card-signin my-5">
                    <div className="card-body">
                        <form className="form-signin">
                            <input className="form-control btn-shape" value={processName} onChange={handleNameChange} type="text" placeholder="ProcessName" />

                            <div className="form-label-group inlining">
                                <div className="row">
                                    <div className="col-8">
                                        <select className="form-select btn-shape" value={selectedId} onChange={handleSelectChange} aria-label="Default select example" >
                                            <option defaultValue value="0" disabled>Select queues</option>
                                            {availableQueues.map(q => {
                                                return(<option key={q.id} value={q.id}>{q.name}</option>)
                                            })}
                                            
                                        </select>
                                    </div>
                                    <div className="col-4">
                                        <button
                                            onClick={() => {
                                                addQueuesToSelected(selectedId);
                                            }}
                                            type="button"
                                            className="btn-primary form-control btn-shape">Add</button>
                                    </div>
                                </div>
                                <div className="form-label-group">
                                       <ul className="list-unstyled">
                                        {selectedQueues.map(q => {
                                        return (
                                            <li key={q.id} className="form-control btn-shape d-flex justify-content-between">
                                            <label>{q.name}</label>
                                            <i className="bi bi-x delete-icon" onClick={() => deleteQueueFromSelected(q.id)}></i>
                                            </li>
                                        )})}
                                       </ul>
                                </div>
                            </div>
                            <a href="/processes" onClick = {() => addProcess()} className="btn btn-primary btn-shape ">Submit</a>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
}
