import React, { Component } from 'react'

export class CreateStation extends Component {
    render() {
        let queues = ['queue 1', 'queue 2', 'queue 3'];
        let providers = ['provider 1', 'provider 2', 'provider 3'];

        return (
            <div className="container">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">Add Station</h1>
                    </div>
                </div>
                <br/><br/>
                <div className="col-sm-12 col-md-8 col-lg-6 mx-auto">
                    <div className="card card-signin my-5">
                        <div className="card-body">
                            <form className="form-signin">
                                <div className="form-label-group">
                                    <input type="text" id="TextField" className="form-control btn-shape" placeholder="TextField" required autoFocus />
                                    <label htmlFor="TextField">Name</label>
                                </div>
                                <div className="form-label-group">
                                    <select className="form-select btn-shape" aria-label="Default select example">
                                        <option defaultValue>Select queue</option>
                                        {queues.map((queue, index) => (
                                            <option key={index} value={index}>{queue}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-label-group">
                                    <select className="form-select btn-shape" aria-label="Default select example">
                                        <option defaultValue>Select provider</option>
                                        {providers.map((provider, index) => (
                                            <option key={index} value={index}>{provider}</option>
                                        ))}
                                    </select>
                                </div>
                                <button type="submit" className="btn btn-primary btn-shape">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateStation