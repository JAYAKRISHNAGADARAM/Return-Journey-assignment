import React, {Component} from 'react'

import './index.css'

class UserRegistration extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      mobileNumber: '',
      difficulty: 'easy',
    }
  }

  handleInputChange = event => {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  handleSubmit = event => {
    event.preventDefault()
    // Pass the user registration data to the parent component
    this.props.onStartGame(this.state)
  }

  render() {
    return (
      <div>
        <h2>User Registration</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div>
            <label>Mobile Number:</label>
            <input
              type="tel"
              name="mobileNumber"
              value={this.state.mobileNumber}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div>
            <label>Difficulty Level:</label>
            <select
              name="difficulty"
              value={this.state.difficulty}
              onChange={this.handleInputChange}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <button type="submit">Start Game</button>
        </form>
      </div>
    )
  }
}

export default UserRegistration
