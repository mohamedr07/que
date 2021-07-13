import React, { useState } from 'react'
import axiosInstance from './Axios'
import { useHistory, useParams } from 'react-router-dom'
import '../styles/login.css'


export default function ResetPasswordView() {

    const urlParams = new URLSearchParams(window.location.search)

    const history = useHistory()
    const initialFormData = Object.freeze({
        password: '',
    })
    const initialFormErrors = Object.freeze({
        password: [],
        token: ''
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

        axiosInstance.post(`users/reset_password/confirm/`, {
            password: formData.password,
            token: urlParams.get('token')
        })
        .then((res) => {
            history.push({
                pathname: '/login',
                state: { message: 'Password Changed successfully!' }
            })
        })
        .catch((error) => {
            updateFormErrors({
                password: error.response.data.password,
                token: error.response.data.token
            });
        });
    }

    function ShowErrors() {
        if (formErrors.password) {

            console.log(formErrors.password)
            return formErrors.password.map((error, i) => 
                <span className="text-danger">{error}</span> 
            )
        }

        return null
    }

    return (
        <div className="login">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-8 col-lg-6 mx-auto">
                        <div className="card card-signin my-5">
                            <div className="card-body">
                                <h5 className="card-title text-center">Reset Password</h5>

                                <form className="form-signin">

                                    <div className="form-label-group">
                                        <input type="password" id="inputPassword" name="password" onChange={handleChange} className="form-control btn-shape" placeholder="Password" required/>
                                        <label htmlFor="inputPassword">New Password</label>
                                        <ShowErrors></ShowErrors>
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

