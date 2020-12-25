import React, { Component } from 'react'

export class Home extends Component {
    render() {
        return (
                <div className="container ">
                    {/* <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-4">Welcome</h1>
                            <p className="lead">please be patient</p>
                        </div>
                    </div>
                    <br/><br/> */}

                    <div className="row d-flex align-items-center min-vh-50">
                        <div class="col-12">
                            <div className="card card-signin">
                                <div className="card-body">
                                    <div className="row">

                                        <form class="form-signin col-lg-6 col-md-12">
                                            <div class="card">
                                                <div class="card-body">
                                                <div className="align-left-h">
                                                    <label id="l1" className="p-1 txt-dec-bold">Name:</label>
                                                    <label id="l2" className="p-1 txt-dec">Mohamed Rashad</label>
                                                </div>
                                                <div className="align-left-h">
                                                    <label id="l1" className="p-1 txt-dec-bold">ID:</label>
                                                    <label id="l2" className="p-1 txt-dec">#1235</label>                                </div>
                                                <div className="align-left-h">
                                                    <label id="l1" className="p-1 txt-dec-bold">Current service:</label>
                                                    <label id="l2" className="p-1 txt-dec">Dentist</label>
                                                </div>
                                                <div className="align-left-h">
                                                    <label id="l1" className="p-1 txt-dec-bold">Current queue:</label>
                                                    <label id="l2" className="p-1 txt-dec">Payment</label>
                                                </div>
                                                <div className="align-left-h">
                                                    <label id="l1" className="p-1 txt-dec-bold">Total estimated time:</label>
                                                    <label id="l2" className="p-1 txt-dec">15:00 mins</label>
                                                </div>
                                                </div>
                                            </div>
                                        </form>
                                        <div className="col-lg-6 col-md-12">
                                            <label className="btn btn-primary btn-circle">10<div className="est-time">Queue estimated time: 3:12 mins</div></label>
                                        </div>
                                        <div className="container container-2 row ">
                                            <h2 className="align-left-h">Listed Queues</h2>
                                            <div className="container d-flex justify-content-center align-items-center">
                                                <div class="progresses">
                                                    <div class="steps"> <span><i class="bi bi-check"></i></span> </div> <span class="line"></span>
                                                    <div class="steps"> <span><i class="bi bi-check"></i></span> </div> <span class="line"></span>
                                                    <div class="steps"> <span class="font-weight-bold">3</span> </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-12">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <h2 className="card-number">01</h2>
                                                        <h5 class="card-title">Payment</h5>
                                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-12">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <h2 className="card-number">02</h2>
                                                        <h5 class="card-title">Assessment</h5>
                                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-12">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <h2 className="card-number">03</h2>
                                                        <h5 class="card-title">Dentist clinic</h5>
                                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
		);
    }
}

export default Home
