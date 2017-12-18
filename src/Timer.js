import React, {Component} from 'react';

import {Form, FormControl, Button} from 'react-bootstrap'

import './App.css';
import Clock from "./Clock"


class Timer extends Component {
    constructor(props){
        super(props)        
    }

    render(){
        return(
        <div className="App">
            <div className="App-title">Sorry, next try in</div> 
                <Clock />  
                <div className="App-title">Have a great day!!!</div>    
        </div>
        )
    }
}

export default Timer;