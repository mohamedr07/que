import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class AssignProvider extends Component {
    render() {
        return (
            <div className="container">
				<div className="jumbotron jumbotron-fluid">
					<div className="container">
						<h1 className="display-4">Assign provider</h1>
					</div>
				</div>
				<br/><br/>
				<div class="col-sm-12 col-md-8 col-lg-6 mx-auto">
                    <div className="card card-signin my-5">
                        <div className="card-body">
                            <form class="form-signin">
                                <input class="form-control btn-shape" id="search" type="text" placeholder="Select user to set as a provider" />
                                <button type="submit" className="btn btn-primary btn-shape ">Set as provider</button>
                                <Link to="/createprovider" className="btn btn-primary btn-shape ">Create new provider</Link>
                            </form>
                        </div>
                    </div>
                </div>
			</div>
        )
    }
}

export default AssignProvider
