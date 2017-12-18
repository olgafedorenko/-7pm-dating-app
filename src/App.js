import React,{Component} from 'react';
import { BrowserRouter} from 'react-router-dom'

import './App.css';

import Header from "./Header"
import Main from "./Main"

import not from './images/notification.svg'
import not2 from './images/notification_2.svg'


var notPictureApp="ho"
class PrimaryLayout extends Component  {
    constructor(props){
        super(props)
        this.state={
            name: not,
            login:"",
            redNot:""
        };
    }
    callback = (value) => {
        this.setState({ name: value });
        Storage.prototype.setObject = function(key, value) {
            this.setItem(key, JSON.stringify(value));
        }
        sessionStorage.setItem('notification_picture', not2)
    }
    callbackLogin=(value)=>{
        this.setState({login:value})
    }
    removeRedNot=(value)=>{
        this.setState({name:value})
        Storage.prototype.setObject = function(key, value) {
            this.setItem(key, JSON.stringify(value));
        }
        sessionStorage.setItem('notification_picture', not)
    }
    render(){
        return (      
            <div>
                <Header picture={this.state.name} loginApp={this.state.login}/>
                <Main setPicApp={this.callback} setLogin={this.callbackLogin} mainRemoveRedNot={this.removeRedNot}/>
                
            </div>

        )
    }
}

const App = () => (
    <BrowserRouter>
   
        <PrimaryLayout />
        
    </BrowserRouter>
)

export default App;