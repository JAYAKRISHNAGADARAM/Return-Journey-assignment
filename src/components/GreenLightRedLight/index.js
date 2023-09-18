import React, {Component} from 'react'

import './index.css'

class GreenLightRedLight extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gameStarted: false,
      gameInProgress: false,
      score: 0,
      timeLeft:
        this.props.difficulty === 'easy'
          ? 40
          : this.props.difficulty === 'medium'
          ? 40
          : 40,
      greenLight: false,
    }
    this.timer = null
  }

  startGame = () => {
    this.setState({gameStarted: true}, this.startColorChange)
  }

  startColorChange = () => {
    this.setState({gameInProgress: true})
    this.timer = setInterval(this.changeColor, this.getRandomTime())
  }

  changeColor = () => {
    this.setState(prevState => ({
      greenLight: !prevState.greenLight,
      timeLeft: prevState.timeLeft - 1,
    }))

    if (this.state.timeLeft <= 0 || !this.state.greenLight) {
      this.endGame(false)
    }
  }

  getRandomTime = () => {
    // Generate a random time between 1 to 2 seconds in milliseconds
    return Math.floor(Math.random() * 1000) + 1000
  }

  handleClick = () => {
    if (this.state.greenLight) {
      this.setState(
        prevState => ({
          score: prevState.score + 1,
          greenLight: false,
        }),
        () => {
          if (this.state.score >= this.props.targetClicks) {
            this.endGame(true)
          }
        },
      )
    } else {
      this.endGame(false)
    }
  }

  endGame = win => {
    clearInterval(this.timer)
    this.setState({
      gameInProgress: false,
      gameStarted: false,
    })

    if (win) {
      alert('You Win!')
    } else {
      alert('Game Over!')
    }
  }

  render() {
    const {
      gameStarted,
      gameInProgress,
      greenLight,
      score,
      timeLeft,
    } = this.state

    return (
      <div className="GreenLightRedLight">
        {!gameStarted ? (
          <button onClick={this.startGame}>Start Game</button>
        ) : (
          <div>
            <div
              className={`box ${greenLight ? 'green' : 'red'}`}
              onClick={gameInProgress ? this.handleClick : null}
            ></div>
            <p>Score: {score}</p>
            <p>Time Left: {timeLeft} seconds</p>
          </div>
        )}
      </div>
    )
  }
}

export default GreenLightRedLight
