import React, {Component} from 'react';

import { Link } from 'react-router-dom'

import './App.css';
import Card from "./Card"

import people from './images/people.jpg'



class Layout extends Component {
    constructor (props){
        super(props);
        
        this.state={
            path:"/login",
            p:props.pathLogin
        }
    }
    

    componentDidMount(){
        Storage.prototype.getObject = function(key) {
          var value = this.getItem(key);
          return value && JSON.parse(value);
        }   
        var name =window.sessionStorage.getItem('email');
       
        this.setState({name:name})
        if(name!==null){
          this.setState({path:"/cards"})
        }
        
    }
    
    render(){
       console.log(this.state.p)
      
        return(
            <div className="App">
                <p className="App-text">Find a friend and spend a great evening tonight</p>
                <img  className="people" alt={"people"} src={people}/>
                
                <Link  to={this.state.path}>
                    <button type="button"  className="btn btn-primary">Find company for tonight</button>
                </Link>
            </div>
        )
    }

}
export default Layout