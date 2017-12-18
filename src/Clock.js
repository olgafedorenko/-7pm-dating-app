import React, {Component} from 'react';

import './App.css';

class Clock extends Component {
    constructor (props){
        super(props);

        this.state ={
            hours:0,
            minutes:0,
            seconds:0
        }
    }
    componentWillMount(){
        setInterval(() => this. getTimeUntill(), 1000)
    }


    getTimeUntill(){
        var now = new Date();
        var hoursleft = 23-now.getHours();
       
      
        var minutesleft = 59-now.getMinutes();
        if(minutesleft<10) minutesleft = "0"+minutesleft;
    
        var secondsleft = 59-now.getSeconds();
        if(secondsleft<10) secondsleft = "0"+secondsleft;
        

        this.setState({hours:hoursleft, minutes:minutesleft, seconds:secondsleft})
    }

    render(){
        
        
        return(
            <div>
                <div className="Clock-hours">{this.state.hours} hours</div>
                <div className="Clock-minutes">{this.state.minutes} minutes</div>
                <div className="Clock-seconds"> {this.state.seconds} seconds</div>
            </div>
        )
    }

}
export default Clock