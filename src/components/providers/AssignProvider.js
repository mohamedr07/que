import React, { useState } from 'react'
import axiosInstance from '../Axios'
export default function AssignProvider() {

    const [users, setUsers] = useState([])
    const [selectedUserID, setSelectedUserID] = useState(0) 
    const [display, setDisplay] = useState(false)
    const [search, setSearch] = useState('')

    const handleChange = (e) => {
        if(e.target.value != ''){
            axiosInstance.get(`users/addprovider/${e.target.value}`).then(res => {
                setUsers([])
                setUsers(res.data)
            })
        } else {
            setUsers([])
        }
        setSearch(e.target.value)
    }

    const handleSelect = (u) => {
        setDisplay(false)
        setSelectedUserID(u.id)
        setSearch(u.email)
    }
    const setProvider = () => {
        axiosInstance.put(`users/${selectedUserID}/`, {
            is_staff: true
        })
    }
    return (
        <div className="container">
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Assign provider</h1>
                </div>
            </div>
            <br/><br/>
            <div className="col-sm-12 col-md-8 col-lg-6 mx-auto">
                <div className="card">
                    <div className="card-body">
                        <form className="form">
                            <input className="form-control " value={search} onClick={() => setDisplay(true)} onChange={handleChange} placeholder="Select user to set as a provider" />
                            
                            {display && (
                                <ul className="list-group">
                                    {users.map((u, i) => {
                                        return (
                                            <li onClick={() => handleSelect(u)} className="list-group-item d-flex justify-content-between align-items-center" key={i}>
                                                <span>{u.email}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            )}
                            
                            <button onClick={setProvider} type="submit" className="btn btn-primary mt-3">Set as provider</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
