import React, {useState, Component}  from 'react';
import './Signup.css';
import { render } from '@testing-library/react';
class Signup extends Component{

    render(){
        return(
            <div class='row justify-content-md-center'>
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <h2 class = "center">Sign Up</h2>
                                <div class="form-group">
                                    <label for="name">Name</label>
                                    <input class="form-control" type="text" id="first-name" placeholder="First Name"/>
                                    <input class="form-control" type="text" id="last-name" placeholder="Last Name"/>
                                </div>
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input class="form-control" type="email" id="email" placeholder="Email"/>
                                </div>
                                <div class="form-group">
                                    <label for="password">Password</label>
                                    <input class="form-control" type="password" id="password" placeholder="Password"/>
                                </div>
                                <div class="form-group">
                                    <label for="address">Address</label>
                                    <input class="form-control" type="text" id="address" placeholder="address"/>
                                </div>
                                <button type="button" id="submit-btn" class="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        )   
    }
}

export default Signup;
