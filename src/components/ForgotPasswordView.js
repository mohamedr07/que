import React, { useState } from 'react'
import axiosInstance from './Axios'
import { useHistory } from 'react-router-dom'
import '../styles/login.css'

export default function RegisterView() {

    const history = useHistory()
    const initialFormData = Object.freeze({
        email: '',
    })
    const initialFormErrors = Object.freeze({
        email: '',
    });

    const [formData, updateFormData] = useState(initialFormData)
    const [formErrors, updateFormErrors] = useState(initialFormErrors)

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        axiosInstance.post(`users/password_reset/`, {
            email: formData.email,
        })
        .then((res) => {
            history.push({
                pathname: '/login',
                state: { message: 'We have e-mailed your password reset link!' }
            })
        })
        .catch((error) => {
            updateFormErrors({
                email: error.response.data.email,
            });
        });
    }

    return (
        <div className="login">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-8 col-lg-6 mx-auto">
                        <div className="card card-signin my-5">
                            <div className="card-body">
                                <h5 className="card-title text-center">Forgot Password</h5>

                                <form className="form-signin">
                                    <div className="form-label-group">
                                        <input type="email" id="inputEmail" name="email" onChange={handleChange} className="form-control btn-shape" placeholder="Email address" required/>
                                        <label htmlFor="inputEmail">Email address</label>
                                        <span className="text-danger">{formErrors.email}</span>
                                    </div>
                                    
                                    <button 
                                    className="btn btn-lg btn-primary btn-block text-uppercase mt-2 btn-shape" 
                                    type="submit"
                                    onClick={handleSubmit}
                                    >Submit</button>
                                    <hr className="my-4" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

