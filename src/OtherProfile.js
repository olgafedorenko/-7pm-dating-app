import React, {Component} from 'react';

import './App.css';

class OtherProfile extends Component {
    constructor (props){
        super(props);

        this.state={
            count:0,
            name:this.props.name,
            lastName:this.props.lastName,
            picture:this.props.thumbnail,
            placename:this.props.placeName,
            placeLocation:this.props.placeLocation,
            container:"card text-center",
            aboutme:this.props.aboutme,
            age:this.props.age
        }
    }
    closeWindow(){
        this.props.toggleLog_in()
    }

    render(){
        console.log(this.state.aboutme)
        return(
            <div>
                 <span onClick={this.closeWindow.bind(this)}>Close</span>
                 <div className={this.state.container}>
                
                <p className="card-match">{this.state.match}</p>
                    <div className="card-header">
                        {this.state.name} {this.state.lastName}, {this.props.age}
                    </div>
                    <div className="card-block">
                        <img className="profile-picture-card" src={this.state.picture} alt={"profile-picture"}/>   
                    </div>
                    <br/>
                    <hr/>
                    <div className="card-block">
                        <p className="card-title">{this.state.aboutme}</p>  
                    </div>
            </div>
            </div>
        )
    }

}
export default OtherProfile    