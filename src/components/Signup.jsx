import React, {useState, Component}  from 'react';
import './Signup.css';
import { render } from '@testing-library/react';
class Signup extends Component{

    render(){
        return(
            <div className="container">
                <input type="text" placeholder="What's your name?" />
                <button>
                Submit
                </button>
            </div>
        )   
    }
}

export default Signup;