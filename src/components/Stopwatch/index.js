import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    isTimerRunning: false,
    timerElapsedInSeconds: 0,
  }

  componentWillUnmount() {
    clearInterval(this.TimeInterval)
  }

  onTimerReset = () => {
    clearInterval(this.TimeInterval)
    this.setState({isTimerRunning: false, timerElapsedInSeconds: 0})
  }

  onTimerStop = () => {
    clearInterval(this.TimeInterval)
    this.setState({isTimerRunning: false})
  }

  updateTimer = () => {
    this.setState(prevState => ({
      timerElapsedInSeconds: prevState.timerElapsedInSeconds + 1,
    }))
  }

  onTimerStart = () => {
    this.TimeInterval = setInterval(this.updateTimer, 1000)
    this.setState({isTimerRunning: true})
  }

  renderMinutes = () => {
    const {timerElapsedInSeconds} = this.state
    const minutes = Math.floor(timerElapsedInSeconds / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  renderSeconds = () => {
    const {timerElapsedInSeconds} = this.state
    const seconds = Math.floor(timerElapsedInSeconds % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  render() {
    const {isTimerRunning} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`

    return (
      <div className="bg-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="timer-container">
          <div className="header-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="image"
            />
            <p className="description">Timer</p>
          </div>
          <h1 className="timer-count">{time}</h1>
          <div className="button-container">
            <button
              className="button1"
              type="button"
              disabled={isTimerRunning}
              onClick={this.onTimerStart}
            >
              Start
            </button>
            <br />
            <button
              className="button2"
              type="button"
              onClick={this.onTimerStop}
            >
              Stop
            </button>
            <br />
            <button
              className="button3"
              type="button"
              onClick={this.onTimerReset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
