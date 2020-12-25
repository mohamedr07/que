import React, { Component } from 'react'

export class ProviderHome extends Component {
    render() {
        return (
                <div className="container ">
                    <br/><br/>

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
                                                        <label id="l1" className="p-1 txt-dec-bold">Station ID:</label>
                                                        <label id="l2" className="p-1 txt-dec">#1235</label>                                </div>
                                                    <div className="align-left-h">
                                                        <label id="l1" className="p-1 txt-dec-bold">Queue:</label>
                                                        <label id="l2" className="p-1 txt-dec">Payment</label>
                                                    </div>
                                                    <div className="align-left-h">
                                                        <button type="button" className="btn btn-primary btn-shape btn-add " >Advance</button>
                                                    </div>
                                                </div>
                                            </div>                                     
                                        </form>
                                        <div className="col-lg-6 col-md-12">
                                            <button className="btn btn-circle">10<div className="est-time">Current in queue</div></button>
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

export default ProviderHome
