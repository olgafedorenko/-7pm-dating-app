import React, {Component} from 'react';

//import {Button} from 'react-bootstrap'
import { Switch, Route, Router } from 'react-router-dom'

import './App.css';
import Card from "./Card"
import Layout from "./Layout"
import Signin from "./Sign_in"
import Login from "./Login"
import Notification from "./Notification"
import Myaccount from "./Myaccount"
import OtherProfile from "./OtherProfile"


class Main extends Component {
  constructor (props){
      super(props);

      this.state={
        loginPath:"",
        container:""
      }
      
  }
  getPic=(value)=>{
    console.log(value)
   this.props.setPicApp(value)
  }
  getLogin=(value)=>{
    this.props.setLogin(value)
    this.setState({loginPath:value})

  }
  removeRedNotification=(value)=>{
    this.setState({container:"card text-center none"})
    this.props.mainRemoveRedNot(value)

  }
  

  render(){
    console.log("main")
    return(
      <main>
       
        <Switch>
          <Route exact path='/' render={props => <Layout  pathLogin={this.state.loginPath}/>}/>
          <Route path='/cards' 
              render={props => 
                  <Card  olya={this.getPic} container={this.props.container}/>}/>
          <Route path='/signin' component={Signin}/>
          <Route path='/login' render={props => <Login  login={this.getLogin}/>}/>
          <Route path='/notification' render={props => <Notification removeRedNotification={this.removeRedNotification}/>}/>
          <Route path='/myaccount' component={Myaccount}/>
          <Route path='/otherprofile' component={OtherProfile}/>
        </Switch>
      
      </main>
    )
  }
    
}

  export default Main