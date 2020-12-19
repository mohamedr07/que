import React, { Component } from 'react'

export class CreateQueue extends Component {
    render() {
        return (
			<div className="container">
				<div className="jumbotron jumbotron-fluid">
					<div className="container">
						<h1 className="display-4">Add queue</h1>
						<p className="lead">a description about queue</p>
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
                                    <input type="number" step="0.25" id="TextField2" class="form-control btn-shape" placeholder="TextField" />
                                    <label for="TextField2">Estimated time</label>
                                </div>
                                <button type="submit" className="btn btn-primary btn-shape ">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
			</div>
		);
    }
}

export default CreateQueue