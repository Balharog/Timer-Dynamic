import React, { Component } from 'react'

export default class App extends Component {
  state={
    time:0,
    timerstate: null,
    startpause: 'Start'
  }
  timeFormat= ms =>{
    const hours=(('0'+(Math.floor((ms/1000)/3600))).slice(-2));
    const minutes=(('0'+(Math.floor(((ms/1000)%3600)/60))).slice(-2))
    const seconds=(('0'+(Math.floor((ms/1000)%60))).slice(-2))
    return(hours+':'+minutes+':'+seconds)
  }
  startTimer=()=> {
    if (this.state.timerstate){
      clearInterval(this.state.timerstate);
      this.setState({timerstate:null})
      this.setState({ startpause: 'Start' })
    }
    else {
    const interval=setInterval(() => {
      this.setState({time: this.state.time+1000});
    }
    , 1000);
      this.setState( {timerstate:interval} );
      this.setState({startpause: 'Pause'});
  }
}
  resetTimer=()=>{
    clearInterval(this.state.timerstate);
    this.setState({time:0,timerstate:null})
  }
  render() {
    return (
      <div className="timer">
        <div className="time">
        <h1 className="time-display">
        {this.timeFormat(this.state.time)}
        </h1>
        <div className="label">
        <p className="labels">Hours</p>
        <p className="labels">Minutes</p>
        <p className="labels">Seconds</p>
        </div>
        </div>
        <div className="btn">
        <input className="start" type="button" value={this.state.startpause} onClick={this.startTimer}/>
        <input className="reset" type="button" value="Reset" onClick={this.resetTimer}/>
        </div>
      </div>
    )
  }
}

