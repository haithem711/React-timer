import React from 'react';
import ReactDOM from 'react-dom';
class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0,
            start: false
        };

        setInterval( 
            () => { this.state.start &&
                this.setState({
                    time: this.state.time + 1000
                })
            },
            1000
        )
    }
    start = () => {
        this.setState({start : !this.state.start})
    }
    reset = () => {
        this.setState({
            time : 0,
            start : false
        })
    }
    render() {

        var hours = Math.floor(this.state.time / 3600000) % 24
        var minutes = Math.floor(this.state.time / 60000) % 60
        var seconds = Math.floor(this.state.time / 1000) % 60
        console.log(Math.floor(hours) + "hours", minutes, seconds)
        return (<div className="container">
            <div className="time">
                <b className="hour">{String(hours).padStart(2 , '0')}</b>:
          <b className="hour">{String(minutes).padStart(2 , '0')}</b>:
          <b className="hour">{String(seconds).padStart(2 , '0')}</b>
            </div>
            <div className="titre">
                <p className="name">Hour</p>
                <p className="name"> Minute</p>
                <p className="Second"> Second</p>
            </div>
            <div className="button">
                <button onClick={this.start} className="btn1">{this.state.start ? "Pause" : "Start"}</button>
                <button onClick={this.reset} className="btn2">Reset</button>
            </div>
        </div>
        );
    }
}


export default Timer;