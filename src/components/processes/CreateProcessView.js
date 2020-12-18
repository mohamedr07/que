import React, { Component } from 'react'

export class CreateProcess extends Component {
    render() {
		let queues = ['queue1', 'queue2', 'queue3'];
		let providers = ['provider1', 'provider2', 'provider3'];

		return (
			<div className="container">
				<div className="jumbotron jumbotron-fluid">
					<div className="container">
						<h1 className="display-4">Add Process</h1>
						<p className="lead">a description about processes</p>
					</div>
				</div>
				<br/><br/>
				<div className="row">
					<div className="card">
						<div className="card-body">
							<form>
								<div className="form-group">
									<label htmlFor="processName">Name</label>
									<input type="text" className="form-control" id="processName" placeholder="Enter the name of the process" />
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

export default CreateProcess