import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axiosInstance from '../Axios'

export default function CreateQueue() {

    const initialFormData = Object.freeze({
        name: '',
        estimated_time: ''
    })
    const [formData, updateFormData] = useState(initialFormData)

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const handleSubmit = () => {
        axiosInstance.post(`queues/`, {
            name: formData.name,
            estimated_time: formData.estimated_time
        })
        .then((res) => {
            console.log(res)
            console.log(res.data)
        })
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
                            <input name="name" onChange={handleChange} type="text" id="TextField" className="form-control btn-shape mt-2" placeholder="Queue name" required autoFocus />
                            <input name="estimated_time" onChange={handleChange} type="number" id="TextField2" className="form-control btn-shape mt-2" placeholder="Estimated time" />
                            
                            <a href="/queues" onClick = {handleSubmit} className="btn btn-primary btn-shape ">Submit</a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
