import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axiosInstance from '../Axios'


export default function EditQueue({match}) {

    const editedQueueId = match.params.id

    const initialFormData = {
        name: '',
        estimated_time: ''
    }
    const [formData, updateFormData] = useState(initialFormData)

    useEffect(() => {
        axiosInstance.get(`queues/${editedQueueId}`).then(res => {
            updateFormData({
                name: res.data.name,
                estimated_time: res.data.estimated_time
            })
        })
    }, [])

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {
        axiosInstance.put(`queues/${editedQueueId}`, {
            name: formData.name,
            estimated_time: formData.estimated_time
        })
        .then(() => {
            console.log("edited")
        })
    }


    return (


        <div className="container">
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Edit queue</h1>
                </div>
            </div>
            <br/><br/>
            <div className="col-sm-12 col-md-8 col-lg-6 mx-auto">
                <div className="card card-signin my-5">
                    <div className="card-body">
                        <form className="form-signin">
                            <input value={formData.name} name="name" onChange={handleChange} type="text" id="TextField" className="form-control btn-shape" placeholder="Queue name" required autoFocus />
                            <input value={formData.estimated_time} name="estimated_time" onChange={handleChange} type="number" step="0.25" id="TextField2" className="form-control btn-shape" placeholder="Estimated time" />
                            <a href="/queues" onClick = {handleSubmit} className="btn btn-primary btn-shape ">Submit</a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
