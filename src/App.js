import React, {Component} from 'react'
import './App.css'
import UserRegistration from '.components/UserRegistration'
import GreenLightRedLight from '.components/GreenLightRedLight'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userData: null,
    }
  }

  handleStartGame = userData => {
    this.setState({userData})
  }

  render() {
    return (
      <div className="App">
        <h1>Green Light Red Light Game</h1>

        {this.state.userData ? (
          <GreenLightRedLight
            difficulty={this.state.userData.difficulty}
            targetClicks={
              this.state.userData.difficulty === 'easy'
                ? 10
                : this.state.userData.difficulty === 'medium'
                ? 15
                : 25
            }
          />
        ) : (
          <UserRegistration onStartGame={this.handleStartGame} />
        )}
      </div>
    )
  }
}

export default App
