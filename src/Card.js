import React, {Component} from 'react';

import './App.css';

import UserCard from './UserCard'
import OtherProfile from "./OtherProfile"
import Timer from "./Timer"

import inform from './data.json'

const yelp = require('yelp-fusion');

class Card extends Component {
    constructor (props){
        super(props);

        this.state={
            count:0,
            name_1:"Tom",
            match:"",
            fetching: true, users:[],
            userCount:1,
            places:"",
            yeplCount:0,
            location:"",
            log_inPopup: false,
            usercard:true,
            information:"",
            informCount:0,
            pic:"",
            p:this.props.passingProps,
            container:"",
            timer:false
        };
        this.toggleLog_in = this.toggleLog_in.bind(this);
    }

    getData = (data, count) =>{
        this.setState({userCount:data, yeplCount:this.state.yeplCount+1, informCount:count}) 
        this.updateData(data)
        this.updateYelp()
    }
    toggleLog_in(){
        //this.setState({ log_inPopup: true, usercard:false});
        this.setState(prevState => ({
            log_inPopup: !prevState.log_inPopup,
            usercard:!prevState.usercard
        }));
    }

    getRandomUsers(userCount=this.state.userCount) {
    const promise = fetch(`https://randomuser.me/api/?results=${userCount}&nat=US`)
        .then(response => {
        if(response.status >= 400) {
            throw `Response invalid ( ${response.status} )`;
            return;
        }
        return response.json();
        })
        .then(({results}) => {
        return results;
        })
        .catch(error => {
        console.log(error);
        });

    return promise;
    }
    updateData(){
        this.getRandomUsers(this.state.userCount)
        .then( data => {
        this.setState({
            users: data,
            fetching: false
        });
        });
    }

    getyelp() {

    fetch('http://localhost:5000/restaurants/37.786882/-122.399972')
        .then((resp) => resp.json())
        .then((data) =>{
            var jsonString = JSON.stringify(data); // convert data to JSON string
            var jsonBussObj = JSON.parse(jsonString).businesses[this.state.yeplCount]
            var jsonLocation = JSON.parse(jsonString).businesses[this.state.yeplCount].location.display_address 
            this.setState({places:jsonBussObj, location:jsonLocation })
        })
    }
    updateYelp(){
        this.getyelp()
    }

    componentDidMount() {
        Storage.prototype.getObject = function(key) {
            var value = this.getItem(key);
            return value && JSON.parse(value);
          }   
        var containerDecline =window.sessionStorage.getItem('container');
        this.setState({
              container:containerDecline
        })
        if(containerDecline!==null){
            this.setState(prevState => ({
                log_inPopup: false,
                usercard:false,
                timer:true
            }));
        }

        console.log("compont")
        this.updateData()
        this.updateYelp()

        let results = inform.map((item, index) => {
            this.setState({information:item})
        }); 
        
        
    }
    handleKeyUp=(notification_pic)=>{
        console.log(notification_pic)
        //this.setState({pic:notification_pic})
        
        this.props.olya(notification_pic)
    }

    render(){
    //console.log(this.state.pic)
        const renderCards=this.state.users.map((user) => {
        return (
            
            <div>
                
                {this.state.usercard &&
                    <UserCard
                    container={this.state.container}
                    timerContainer={this.state.timerContainer}
                    name={user.name.first}
                    thumbnail={user.picture.large}
                    sendData={this.getData}
                    placeName={this.state.places.name}
                    placeLocation={this.state.location}
                    placeZip={this.state.location.zip_code}
                    toggleLog_in={this.toggleLog_in}
                    onKeyUp={this.handleKeyUp}
                    
                    />
                }
                {this.state.log_inPopup && 
                    <OtherProfile 
                        name={user.name.first} 
                        toggleLog_in={this.toggleLog_in} 
                        thumbnail={user.picture.large}
                        lastName={user.name.last}
                        aboutme={inform[this.state.informCount].about_me}
                        age={inform[this.state.informCount].age}
                        
                    />
                }
                {this.state.timer &&
                    <Timer />
                }
                
                

                    </div>
            );
        })

        return(
        <div>
            {renderCards}  
        </div>
        )
    }

    }
    export default Card