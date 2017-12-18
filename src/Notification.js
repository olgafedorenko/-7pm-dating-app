import React, {Component} from 'react'

import { Link } from 'react-router-dom'

import Timer from "./Timer"
import not from './images/notification.svg'


class Notification extends Component {
    constructor (props){
        super(props);

        const date=new Date()
        const todaysDate = (date.getMonth() + 1).toString() +"/"+ date.getDate().toString();
        this.state={
            name:this.props.name,
            picture:this.props.thumbnail,
            date:date.getDate(),
            month:todaysDate,
            locationAddress:"",
            locationName:"",
            timerContainer: "card text-center none",
            timerContainer_1: "card text-center none", 
            container:"card text-center",
            buttons:"card-footer text-muted none"
        }
    }

    componentDidMount(){
        this.time()
        Storage.prototype.getObject = function(key) {
            var value = this.getItem(key);
            return value && JSON.parse(value);
        }   
        var name = window.sessionStorage.getItem('name');
        var picture = window.sessionStorage.getItem('picture');
        var locationName = window.sessionStorage.getItem('locationName');
        var locationAddress = window.sessionStorage.getItem('locationAddress');
        var buttons = window.sessionStorage.getItem('buttons');
        this.setState({
            name:name, 
            picture:picture,
            locationAddress:locationAddress,
            locationName:locationName,
        })
        if(buttons!== null){
            this.setState({
                buttons:buttons
            })
        }
    }

    decline=()=>{  
        var removeName= sessionStorage.removeItem('name')
        var removePicture= sessionStorage.removeItem('picture')
        var removeLocationName= sessionStorage.removeItem('locationName')
        var removeLocationAddresss= sessionStorage.removeItem('locationAddress')
        var removeButtons= sessionStorage.removeItem('buttons')
        this.setState({
            container:"card text-center none",
            timerContainer: "card text-center",
            name:removeName, 
            locationAddress:removeLocationAddresss,
            locationName:removeLocationName,
            picture:removePicture,
            buttons:"card-footer text-muted none"
        })

        Storage.prototype.setObject = function(key, value) {
            this.setItem(key, JSON.stringify(value));
        }
        sessionStorage.setItem('name', this.state.name)
        sessionStorage.setItem('container', "card text-center none")

        this.props.removeRedNotification(not)
    }
    time(){
        var date = new Date();
        var time = date.getHours();
        if(time>7){
            var nextDay= (date.getMonth() + 1).toString() +"/"+ (date.getDate()+1).toString();
            this.setState({month:nextDay})
        }
    }
    render(){
        return(
            <div>
                <div className={this.state.container}>
                    <div className="card-header">
                        When:
                    </div>
                    <p className="card-title"> {this.state.month} 7pm</p>
                    <div className="card-header">
                        Who: {this.state.name}
                    </div>
                    <div className="card-block">
                        <img className="profile-picture-card" src={this.state.picture} alt={"profile-picture"}/> 
                        <address>
                        <div className="card-header">
                        Where:
                    </div>
                        <h4 className="card-title">{this.state.locationName}</h4>
                        <p className="card-text"> {this.state.locationAddress}</p>
                        </address> 
                    </div>
                    <div className={this.state.buttons}>
                    <button type="button" onClick={this.decline.bind(this)} className="btn btn-danger">Decline</button>
                    </div>
                </div>
                <div className={this.state.timerContainer}>
                    <Timer />   
                </div>
            
            </div>
        )
    }
}

export default Notification