import React, { Component } from 'react'

export class CreateQueue extends Component {
    render() {
        return (
            <div className="container">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">Add Queue</h1>
                        <p className="lead">a description about processes</p>
                    </div>
                </div>
                <br/><br/>
                <div className="row">
                    <div className="card">
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="providerName">Name</label>
                                    <input type="text" className="form-control" id="providerName" placeholder="Enter the name of the provider" />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateQueue