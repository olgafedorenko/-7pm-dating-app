import React, {Component} from 'react';

import avatar from "./images/avatar.png"

import "./App.css"


class Signin extends Component {
    constructor (props){
        super(props);

        this.state={
            file: '',
            imagePreviewUrl: avatar
        }
        this.handleImageChange = this.handleImageChange.bind(this);

    }
    handleImageChange(e) {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
    
        reader.onloadend = () => {
          this.setState({
            file: file,
            imagePreviewUrl: reader.result
          });
        }
    
        reader.readAsDataURL(file)
    }
    render(){
        return(
           
       <div className="wrapper">

            <form>
            <img className="profile-picture-card avatar" src={this.state.imagePreviewUrl} alt={"profile-picture"}/>
                <label className="fileContainer" >
                    <p>Update profile picture</p>
                    <input type="file" id="file" onChange={this.handleImageChange} name="file" multiple />
                </label> 
                <div id='verify-check'>
                        <p id="verify-text"></p>
                    </div>  
            <div className="form-group row">
                <label for="inputEmail3" className="col-sm-4 col-form-label">Name</label>
                <div className="col-sm-7">
                <input type="name" className="form-control" id="inputEmail3" placeholder="Name"/>
                </div>
            </div>
            <div className="form-group row">
                <label for="inputPassword3" className="col-sm-4 col-form-label">Last Name</label>
                <div className="col-sm-7">
                <input type="password" className="form-control" id="inputPassword3" placeholder="Last Name"/>
                </div>
            </div>
            <div className="form-group row">
                <label for="inputEmail3" className="col-sm-4 col-form-label">Age</label>
                <div className="col-sm-7">
                <input type="number" className="form-control" id="inputEmail3" placeholder="Age"/>
                </div>
            </div>
            <div className="form-group row">
                <label for="inputEmail3" className="col-sm-4 col-form-label">Gender</label>
                <div className="col-sm-7">
                <input type="gender" className="form-control" id="inputEmail3" placeholder="Gender"/>
                </div>
            </div>
            <div className="form-group row">
                <label for="inputEmail3" className="col-sm-4 col-form-label">Location</label>
                <div className="col-sm-7">
                <input type="location" className="form-control" id="inputEmail3" placeholder="Location"/>
                </div>
            </div>
            <div className="form-group row">
                <label for="inputEmail3" className="col-sm-4 col-form-label">About me</label>
                <div className="col-sm-7">
                <textarea type="aboutme" className="form-control" id="inputEmail3" ></textarea>
                </div>
            </div>
            
            <div className="form-group row">
                <div className="col-sm-7">
                <button type="submit" className="btn btn-primary signin">Sign up</button>
                </div>
            </div>
           
        </form>
</div>
       
        )
    }

}
export default Signin