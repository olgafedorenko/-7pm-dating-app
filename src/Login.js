import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

import Card from "./Card"

/*import jsonData from 'json!./data.json'; */

class Login extends Component {
    constructor (props){
        super(props);

        this.state={
            email:"",
            password:""
        }
    }

    handleSubmit(e) {
        var cookies = new Cookies();
        var lastUrl = '/';
        if (cookies.get('last')) {
          lastUrl = cookies.get('last');
          cookies.remove('last', { path: '/' });
        }
      
        e.preventDefault();
        Storage.prototype.setObject = function(key, value) {
            this.setItem(key, JSON.stringify(value));
        }
        sessionStorage.setItem('email', this.state.email)
        //.then(() => this.props.router.replace(lastUrl))
       // e.preventDefault();
        //this.setState({email: email})
        //console.log("bla " + email)
        Storage.prototype.setObject = function(key, value) {
            this.setItem(key, JSON.stringify(value));
        }
        sessionStorage.setItem('email', this.state.email)
        this.props.login(this.state.email)
    }

    render(){
        if( this.state.email != null){
            console.log("sf")
        }
       
        console.log(this.state.email)
        return(
           
       <div className="wrapper">

        <form>
            <div className="form-group row">
                <p className="App-title" style={{margin: '0 auto'}} >Welcome</p>
                <label for="inputEmail3" className="col-sm-2 col-form-label">Username</label>
                <div className="col-sm-7">
                <input type="text" className="form-control" id="inputEmail3" onChange={event =>this.setState({email: event.target.value})} placeholder="Username" required/>
                </div>
            </div>
            <div className="form-group row">
                <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-7">
                <input type="password" className="form-control" id="inputPassword3" placeholder="Password" required/>
                </div>
            </div>
            
            <div className="form-group row" onClick={this.handleSubmit.bind(this)}  style={{marginLeft: '40px'}}>
                <Link  to='/cards'>
                    <div className="col-sm-10">
                        <button type="submit"  className="btn btn-primary signin">Sign in</button>
                    </div>
                </Link>
                
            </div>
        </form>
        
</div>
       
        )
    }

}
export default Login
