import React, {Component} from 'react';

import './App.css';

import ben from './images/photo2.jpg'


class Myaccount extends Component {
    constructor (props){
        super(props);
        this.state={
            file: '',
            imagePreviewUrl: ben
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
                <form>
                    <label className="fileContainer">
                        <img className="profile-picture-card avatar" src={this.state.imagePreviewUrl} alt={"profile-picture"}/>
                            <input type="file" id="file" name="file" onChange={this.handleImageChange} multiple/>
                    </label>   
                </form>
                <div className="form-group row">
                    <label for="inputEmail3" className="col-sm-4 col-form-label">Name</label>
                    <div className="col-sm-7">
                    <input type="name" className="form-control myaccount" id="inputEmail3" placeholder="Olga"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label for="inputPassword3" className="col-sm-4 col-form-label">Last Name</label>
                    <div className="col-sm-7">
                    <input type="password" className="form-control myaccount" id="inputPassword3" placeholder="Fedorenko"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label for="inputEmail3" className="col-sm-4 col-form-label">Age</label>
                    <div className="col-sm-7">
                    <input type="number" className="form-control myaccount" id="inputEmail3" placeholder="25"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label for="inputEmail3" className="col-sm-4 col-form-label">Gender</label>
                    <div className="col-sm-7">
                    <input type="gender" className="form-control myaccount" id="inputEmail3" placeholder="Female"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label for="inputEmail3" className="col-sm-4 col-form-label">Location</label>
                    <div className="col-sm-7">
                    <input type="location" className="form-control myaccount" id="inputEmail3" placeholder="94105"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label for="inputEmail3" className="col-sm-4 col-form-label">About me</label>
                    <div className="col-sm-7">
                    <textarea type="aboutme" className="form-control" id="inputEmail3" > I am an ambitious person and enjoy meeting new people and finding ways to help them have an uplifting experience.</textarea>
                    </div>
                </div>
                
            
            </form>
    </div>
        )
    }

}
export default Myaccount