import React, { Component } from 'react'

export class Home extends Component {
    render() {
        return (
                <div className="container ">
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-4">Welcome</h1>
                            <p className="lead">please be patient</p>
                        </div>
                    </div>
                    <br/><br/>

                    <div className="row d-flex align-items-center min-vh-50">
                        <div class="col-12">
                            <div className="card card-signin">
                                <div className="card-body">
                                    <form class="form-signin">

                                        <div className="align-left-h">
                                            <label id="l1" className="p-1 txt-dec">Name:</label>
                                            <label id="l2" className="p-1 txt-dec">Mohamed Rashad</label>
                                        </div>
                                        <div className="align-left-h">
                                            <label id="l1" className="p-1 txt-dec">ID:</label>
                                            <label id="l2" className="p-1 txt-dec">#1235</label>                                </div>
                                        <div className="align-left-h">
                                            <label id="l1" className="p-1 txt-dec">Current service:</label>
                                            <label id="l2" className="p-1 txt-dec">Dentist</label>
                                        </div>
                                        <div className="align-left-h">
                                            <label id="l1" className="p-1 txt-dec">Current queue:</label>
                                            <label id="l2" className="p-1 txt-dec">Payment</label>
                                        </div>
                                        <div className="align-left-h">
                                            <label id="l1" className="p-1 txt-dec">Next queue:</label>
                                            <label id="l2" className="p-1 txt-dec">Assessment</label>
                                        </div>
                                        <button className="btn btn-primary btn-circle">10<div className="est-time">Estimated time: 3:12</div></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
		);
    }
}

export default Home
