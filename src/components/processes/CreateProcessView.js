import React, {Component} from 'react'

export class CreateProcess extends Component {

	constructor(props) {
		super(props);

		this.state = {
			queues: [{id: 1, name: 'queue 1'}, {id: 2, name: 'queue 2'}, {id: 3, name: 'queue 3'}],
			selectedQueueId: 0,
			selectedQueues: []
		}

		this.handleChange = this.handleChange.bind(this);
		this.addQueuesToSelected = this.addQueuesToSelected.bind(this);
		this.deleteQueueFromSelected = this.deleteQueueFromSelected.bind(this);
	}

	handleChange(e) {
		this.setState({ selectedQueueId: e.target.value });
	}

	addQueuesToSelected(id) {
		if (id === null || id === 0) return;

		const selectedQueueIndex = this.state.queues.findIndex(queue => queue.id === parseInt(id));
		const selectedQueue = this.state.queues[selectedQueueIndex];

		let queues = this.state.queues;
		queues.splice(selectedQueueIndex, 1);

		this.setState({
			selectedQueues: [...this.state.selectedQueues, selectedQueue],
			queues: queues,
			selectedQueueId: 0
		});
	}

	deleteQueueFromSelected(id) {
		const selectedIndex = this.state.selectedQueues.findIndex(queue => queue.id === id);
		const selectedQueue = this.state.selectedQueues[selectedIndex];

		let selectedQueues = this.state.selectedQueues;
		selectedQueues.splice(selectedIndex, 1);

		this.setState({
			selectedQueues: selectedQueues,
			queues: [...this.state.queues, selectedQueue]
		});
	}

    render() {
		return (
			<div className="container">
				<div className="jumbotron jumbotron-fluid">
					<div className="container">
						<h1 className="display-4">Add Process</h1>
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
                                <div className="form-label-group inlining">
									<div className="row">
										<div className="col-8">
											<select value={this.state.selectedQueueId} onChange={this.handleChange} className="form-select btn-shape" aria-label="Default select example">
												<option selected value="0" disabled>Select queues</option>
												{this.state.queues.map(queue => (
													<option value={queue.id}>{queue.name}</option>
												))}
											</select>
										</div>
										<div className="col-4">
											<button
												onClick={() => {
													this.addQueuesToSelected(this.state.selectedQueueId);
												}}
												type="button"
												className="btn btn-primary btn-add btn-shape">Add</button>
										</div>
									</div>
									<div className="row mt-1">
										<ul className="list-group">
										{this.state.selectedQueues.map(queue => (
											<li className="list-group-item d-flex justify-content-between">
												<p>{queue.name}</p>
												<i
													className="bi bi-trash text-danger"
													onClick={() => { this.deleteQueueFromSelected(queue.id); }}>
												</i>
											</li>
										))}
										</ul>
									</div>
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

export default CreateProcess