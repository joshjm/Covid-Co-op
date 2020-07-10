import React, {useState, Component}  from 'react';
import './Signin.css';
import { render } from '@testing-library/react';
class Signin extends Component{

    render(){
        return(
            <div class='row justify-content-md-center'>
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <h2 class = "center">Sign In</h2>
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input class="form-control" type="email" id="email" placeholder="Email"/>
                                </div>
                                <div class="form-group">
                                    <label for="password">Password</label>
                                    <input class="form-control" type="password" id="password" placeholder="Password"/>
                                </div>
                                <button type="button" id="submit-btn" class="btn btn-primary">Sign In</button>
                        </div>
                    </div>
                </div>
            </div>
        )   
    }
}

export default Signin;
