import React, { useState, useEffect } from 'react'
import { editProcess } from "../../actions"
import {  useDispatch, useSelector } from "react-redux"
import { Link } from 'react-router-dom'

export default function EditProcess({match}) {

    useEffect(() => { 
        addAvailableQueues()
    }, [])

    const editedProcessIndex  = match.params.index
    const dispatch = useDispatch();
    const [selectedQueues, setSelectedQueues] = useState(useSelector(state => state.processReducer[editedProcessIndex].processQueues))
    const [processName, setProcessName] = useState(useSelector(state => state.processReducer[editedProcessIndex].name))
    const [selectedId, setSelectedId] = useState(0)
    const allAvailableQueues =  useSelector(state => state.queuesReducer)
    const [availableQueues, setAvailableQueues] = useState([])

    const addAvailableQueues = () => {

        const queues = []
        allAvailableQueues.map(q => {
            const index = selectedQueues.findIndex(que => que.id === parseInt(q.id))
            if(index == -1) {
                queues.push(q)
            }
        })
        setAvailableQueues(queues)
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
        console.log(allAvailableQueues)
        console.log(availableQueues)
    }

    const deleteQueueFromSelected = (id) => {
        const deletedQueIndex = selectedQueues.findIndex(queue => queue.id === parseInt(id))
        setAvailableQueues([...availableQueues, selectedQueues[deletedQueIndex]])
        selectedQueues.splice(deletedQueIndex, 1)
        console.log(allAvailableQueues)
        console.log(availableQueues)
    }

   
    return (
        <div className="container">
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Edit Process</h1>
                </div>
            </div>
            <br/><br/>
            <div className="col-sm-12 col-md-8 col-lg-6 mx-auto">
                <div className="card card-signin my-5">
                    <div className="card-body">
                        <form className="form-signin">
                            <input className="form-control btn-shape" value={processName} onChange={handleNameChange}type="text" placeholder="ProcessName" />

                            <div className="form-label-group">
                                <div className="row">
                                    <div className="col-8">
                                        <select className="form-select btn-shape" value={selectedId} onChange={handleSelectChange} aria-label="Default select example" >
                                            <option defaultValue value="0" disabled>Select queues</option>
                                            {
                                                availableQueues.map(que => {
                                                    return(<option key={que.id} value={que.id}>{que.name}</option>)
                                                })
                                            }
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
                                <hr></hr>
                                <div className="form-label-group">
                                       <ul className="list-unstyled">
                                        {selectedQueues.map(q => {
                                        return (
                                        <li key= {q.id} className="form-control btn-shape d-flex justify-content-between">
                                            <label >{q.name}</label>
                                            <i className="bi bi-x delete-icon" onClick={() => deleteQueueFromSelected(q.id)}></i>
                                        </li>)
                                        })}
                                       </ul>
                                </div>
                            </div>
                            <Link to="/processes" onClick = {() => {
                                dispatch(editProcess(editedProcessIndex, processName, selectedQueues))
                                }} className="btn btn-primary btn-shape ">Submit</Link>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
}
