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
                                    <form class="form-signin">

                                        <div className="align-left-h">
                                            <label id="l1" className="p-1 txt-dec">Name:</label>
                                            <label id="l2" className="p-1 txt-dec">Mohamed Rashad</label>
                                        </div>
                                        <div className="align-left-h">
                                            <label id="l1" className="p-1 txt-dec">Station ID:</label>
                                            <label id="l2" className="p-1 txt-dec">#1235</label>   
                                        </div>
                                        <div className="align-left-h">
                                            <label id="l1" className="p-1 txt-dec">Queue:</label>
                                            <label id="l2" className="p-1 txt-dec">Payment</label>   
                                        </div>
                                        <div className="align-left-h">
                                        <button type="button" className="btn btn-primary btn-shape btn-add " >Advance</button>
                                        </div>
                                        <button className="btn btn-primary btn-circle">10<div className="est-time">Current in queue</div></button>
                                        
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
		);
    }
}

export default ProviderHome
