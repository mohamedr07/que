import React, { Component } from 'react'

export class CreateStation extends Component {
    render() {
        return (
            <div className="container">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">Add Station</h1>
                        <p className="lead">a description about station</p>
                    </div>
                </div>
                <br/><br/>
                <div class="col-sm-12 col-md-8 col-lg-6 mx-auto">
                    <div className="card card-signin my-5">
                        <div className="card-body">
                            <form class="form-signin">
                                <div className="form-label-group">
                                    <input type="text" id="TextField" class="form-control btn-shape" placeholder="TextField" required autofocus />
                                    <label for="TextField">Name</label>
                                </div>
                                <div className="form-label-group">
                                    <select class="form-select btn-shape" aria-label="Default select example">
                                        <option selected>Select queue</option>
                                        <option value="1">Queue 1</option>
                                        <option value="2">Queue 2</option>
                                    </select>
                                </div>
                                <div className="form-label-group">
                                    <select class="form-select btn-shape" aria-label="Default select example">
                                        <option selected>Select provider</option>
                                        <option value="1">provider 1</option>
                                        <option value="2">provider 2</option>
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