import React from "react";
//import {Link} from "react-router-dom"

import {Navbar,  Nav} from "react-bootstrap"
import not from './images/notification.svg'
import not2 from './images/notification_2.svg'

import Notification from "./Notification"
import Bell from "./Bell.js"
import UserCard from "./UserCard"

export  default class Header extends React.Component {
    constructor(props){
        super(props)

        this.state={
          notification_picture:not,
          name:this.props.name,
          login:"login",
          class:"none",
          classReverse:"notNone"
        }
    }
    componentWillReceiveProps(nextProps) {
      console.log("props")
      console.log(nextProps.picture)
      this.setState({notification_picture:nextProps.picture, name:nextProps.loginApp})
      if(nextProps.loginApp != null){
        this.setState({
          class:"notNone",
          classReverse:"none",
        }) 
      }
    }
    
    componentDidMount(){
      Storage.prototype.getObject = function(key) {
        var value = this.getItem(key);
        return value && JSON.parse(value);
      }   
      var name =window.sessionStorage.getItem('email');
      var not_picture = sessionStorage.getItem('notification_picture')
      this.setState({name:name})
      if(not_picture!==null){
        this.setState({notification_picture:not_picture})
      }

      if(name != null){
        this.setState({
          class:"notNone",
          classReverse:"none",
        }) 
      }
    }
    logout=()=>{
        var removeName= sessionStorage.removeItem('email')
        this.setState({name:removeName})
        
    }
    render () {
        return (
            <Navbar inverse collapseOnSelect>
              <Navbar.Header>
                  <Navbar.Brand>
                    <a href="/" className="brand">7pm</a>
                  </Navbar.Brand>
                  <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav>
                  <Navbar.Link href="#"></Navbar.Link>
                  <Navbar.Link  className={this.state.class} href="cards">Find a company</Navbar.Link>
                </Nav>
                <Nav pullRight>
                  <Navbar.Link className={this.state.classReverse} href="login">Log in</Navbar.Link>
                  <Navbar.Link className={this.state.classReverse} href="signin">Sign in</Navbar.Link>
                <Navbar.Link onClick={this.logout} className={this.state.class} href="/">Log out</Navbar.Link>
                  <Navbar.Link className={this.state.class} href="myaccount">My account</Navbar.Link>
                </Nav>
              </Navbar.Collapse>
              <Navbar.Link href="myaccount">{this.state.name}</Navbar.Link>
              <Navbar.Link className={this.state.class} href="notification"><img src={this.state.notification_picture}/></Navbar.Link>
            </Navbar>
        );
    };
}