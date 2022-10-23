import { Component } from "react";
import './index.css'

class Stopwatch extends Component {
    state = {minutes:0,seconds:0}
    
    onStartTime = () => {
        this.timerId = setInterval(this.tick,1000)
    }

    onStopTime = () => {
        clearInterval(this.timerId)
    }

    onResetTime = () => {
        clearInterval(this.timerId)
        this.setState({seconds:0,minutes:0})
    }

    tick = () => {
        const {seconds} = this.state
        if (seconds < 59) {
            this.setState(prevState => ({
                seconds:prevState.seconds + 1
            }))
        } else {
            this.setState(prevState => ({
                seconds:0,
                minutes:prevState.minutes + 1
            }))
        }
    }

    render() {
        const {minutes,seconds} = this.state

        let sec = seconds
        let min = minutes

        if (seconds.toString().length === 1) {
            sec = `0${seconds}`
        }


        if (minutes.toString().length === 1) {
            min = `0${minutes}`
        } 

        return (
            <div className="bg-container">
                <div className="card-container">
                    <div className="details-container">
                        <h1 className="heading">T I M E R</h1>
                        <h1 className="heading">{min}:{sec}</h1>
                        <div className="btn-container">
                            <button className="btn-1" onClick={this.onStartTime}>start</button>
                            <button className="btn-3" onClick={this.onResetTime}>reset</button>
                            <button className="btn-2" onClick={this.onStopTime}>stop</button>
                        </div>
                    </div>
                    <div className="img-container">
                        <img src="https://i.ibb.co/9s3Vfsc/woman-stopping-alarm-clock.png" alt='clock-woman' className="img"/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Stopwatch