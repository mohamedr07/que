import React from 'react'
import QueueUsers from './QueueUsers'

function ProviderHome() {

    const [showUsers, setShowUsers] = React.useState(false)
    const onClick = () => {
        setShowUsers(!showUsers)
    }

    return (
            <div className="container ">
                <br/><br/>

                <div className="row d-flex align-items-center min-vh-50">
                    <div className="col-12">
                        <div className="card card-signin">
                            <div className="card-body">
                                <div className="row">
                                    <form className="form-signin col-lg-6 col-md-12">
                                        <div className="card">
                                            <div className="card-body">
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
                                                    <button type="button" className="btn btn-primary btn-shape btn-add">Advance</button>
                                                </div>
                                            </div>
                                        </div>                                     
                                    </form>
                                    <div className="col-lg-6 col-md-12">
                                        <button className="btn btn-circle" onClick={onClick}>10<div className="est-time" >Current in queue</div></button>
                                    </div>
                                    <div>
                                        { showUsers ? <QueueUsers /> : null }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
    );
}

export default ProviderHome
