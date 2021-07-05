import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axiosInstance from './Axios'

export default function Logout({setUser}) {
    const history = useHistory()

    useEffect(() => {
        const response = axiosInstance.post('users/logout/blacklist/', {
            refresh_token: localStorage.getItem('refresh_token'),
        }) 
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
        localStorage.removeItem('id')
        axiosInstance.defaults.headers['Authorization'] = null
        setUser(null)
        history.push('/login')

    })

    return (
        <div>
            Logout
        </div>
    )
}
