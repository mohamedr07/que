import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import axiosInstance from '../Axios'
import axios from 'axios'

export default function EditProcess({match}) {

    const editedProcessId  = match.params.id
    const [selectedQueues, setSelectedQueues] = useState([])
    const [processName, setProcessName] = useState('')
    const [selectedId, setSelectedId] = useState(0)
    const [availableQueues, setAvailableQueues] = useState([])

    useEffect(() => { 
        axios.all([
            axiosInstance.get(`processes/${editedProcessId}`),
            axiosInstance.get(`queues/`)
        ]).then(res => {
            setProcessName(res[0].data.name)
            setAvailableQueues(res[1].data)
            // setSelectedQueues(res[0].data.queues)
            
            // console.log(selectedQueues)
            // res[1].data.map(q => {
            //     const index = selectedQueues.findIndex(que => que.id === parseInt(q.id))
            //         if(index == -1) {
            //             availableQueues.push(q)
            //         }
            // })
            // setAvailableQueues([...availableQueues])
            // console.log(res[1].data)
            // console.log(availableQueues)
        })
    }, [])

    const updateProcess = () => {
        const ques = []
        selectedQueues.map(q => {
            ques.push(q.id)
        })

        axiosInstance.put(`processes/${editedProcessId}`, {
            name: processName,
            queues: ques
        }).then(() => {
            console.log("edited")
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
                            <a href="/processes" onClick = {() => updateProcess() } className="btn btn-primary btn-shape ">Submit</a>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
}
