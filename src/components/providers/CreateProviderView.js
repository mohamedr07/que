import React, { Component } from 'react'

export class CreateProvider extends Component {
    render() {
        
        return (
			<div className="container">
				<div className="jumbotron jumbotron-fluid">
					<div className="container">
						<h1 className="display-4">Add provider</h1>
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
                                <div class="form-label-group">
                                    <input type="email" id="inputEmail" class="form-control btn-shape" placeholder="Email address" required autofocus />
                                    <label for="inputEmail">Email address</label>
                                </div>
                                <div class="form-label-group">
                                    <input type="password" id="inputPassword" class="form-control btn-shape" placeholder="Password" required />
                                    <label for="inputPassword">Password</label>
                                </div>
                                <div class="form-label-group">
                                    <input type="password" id="inputconfirmPassword" class="form-control btn-shape" placeholder="Password" required />
                                    <label for="inputconfirmPassword">Confirm Password</label>
                                </div>
                                <select class="form-select btn-shape" aria-label="Default select example">
                                    <option selected>Select Gender</option>
                                    <option value="1">Male</option>
                                    <option value="2">Female</option>
                                </select>
                                <button type="submit" className="btn btn-primary btn-shape ">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
			</div>
		);
    }
}

export default CreateProvider