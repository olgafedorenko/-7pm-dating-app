import React, {Component} from 'react';

import './App.css';

import not2 from './images/notification_2.svg'
//import Notification from "./Notification"
//import { Link } from 'react-router-dom'
import Timer from "./Timer"
import Header from "./Header"

class UserCard extends Component {
    constructor (props){
        super(props);

        this.state={
            count:0,
            informCount:1,
            name:this.props.name,
            match:"",
            picture:this.props.thumbnail,
            placename:this.props.placeName,
            placeLocation:this.props.placeLocation,
            nameCount:1,
            buttons:"card-footer text-muted",
            container:"card text-center",
            timerContainer: "card text-center none",
            timerContainer_1: "card text-center none",
            notification:not2,
            clicked:false,
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            name:nextProps.name, 
            picture:nextProps.thumbnail,
            placename:nextProps.placeName,
            placeLocation:nextProps.placeLocation,
        })
       
    console.log(nextProps.container)
    
    }

    sayYes(){
        this.setState({
            match:"Great match. We hope you will have a great time",
            buttons:"card-footer text-muted none",
            clicked: true,
            timerContainer_1: "card text-center",
        });
    
        Storage.prototype.setObject = function(key, value) {
            this.setItem(key, JSON.stringify(value));
        }
        sessionStorage.setItem('name', this.state.name)
        sessionStorage.setItem('picture', this.state.picture)
        sessionStorage.setItem('locationName', this.state.placename)
        sessionStorage.setItem('locationAddress', this.state.placeLocation)
        sessionStorage.setItem('buttons', "card-footer text-muted")
    
        this.props.onKeyUp(this.state.notification)

    }
    sayNo(){
        var count_1=+1
        this.setState({count: this.state.count + 1, informCount: this.state.informCount+1})
        if(this.state.count !== 10){
            //console.log(this.state.count)
            const num=1
            Storage.prototype.getObject = function(key) {
                var value = this.getItem(key);
                return value && JSON.parse(value);
            } 
            var s= window.sessionStorage.getItem('informCount')
            if( s == null){
                Storage.prototype.setObject = function(key, value) {
                    this.setItem(key, JSON.stringify(value));
                }
                sessionStorage.setItem("informCount",this.state.informCount);

                this.props.sendData(num, this.state.informCount)
                console.log("this " + this.state.informCount)
            }else{
                
                s=parseInt(s)
                count_1=s+1 
                this.setState({informCount:count_1})
                
                Storage.prototype.setObject = function(key, value) {
                    this.setItem(key, JSON.stringify(value));
                }
                sessionStorage.setItem("informCount",count_1);

                this.props.sendData(num, count_1)
            }  
        }else{
            this.setState({
                count: 0,
                container:"card text-center none",
                timerContainer: "card text-center",
            })       
        }      
    }
    togglePopup() {
        this.props.toggleLog_in();
    }

    render(){
        //console.log(this.state.notification_picture)
        return(
            <div>
            <div className={this.state.container}>
                <p className="card-match">{this.state.match}</p>
                    <div className="card-header">
                        {this.state.name}
                    </div>
                    <div className="card-block">
                        <span onClick={this.togglePopup.bind(this)}>
                            <img className="profile-picture-card" src={this.state.picture} alt={"profile-picture"}/>
                        </span>
                        
                        <address>
                            <h4 className="card-title">{this.state.placename}</h4>
                            <p className="card-text"> {this.state.placeLocation[0]}, {this.state.placeLocation[1]} </p>
                            <p className="card-text"> Time: 7pm</p>
                        </address>
                        
                    </div>
                    <div className={this.state.buttons}>
                    <button type="submit" onClick={this.sayYes.bind(this)} className="btn btn-success card_button">Yes</button>
                    <button type="button"  onClick={this.sayNo.bind(this)} className="btn btn-danger card_button">No</button>
                    </div>
                    </div>
            <div className={this.state.timerContainer}>
                <Timer />   
            </div>
                
            </div>
        )
    }

}
export default UserCard
