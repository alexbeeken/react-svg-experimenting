import React, { Component } from 'react'
import './App.css';

class Shapes extends Component {
  constructor() {
    super()
    this.state =
      { color: this.randomColor() }
  }

  randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  handleClick() {
    this.setState(() => {
      console.log('CALLED')
      return { color: this.randomColor() }
    })
  }

  render() {
    return (
      <div>
        <svg version="1.1" width="250" height="250" xmlns="http://www.w3.org/2000/svg" >
          <rect width="100%" height="100%" fill={this.state.color} onClick={this.handleClick.bind(this)}/>
        </svg>
      </div>
    )
  }
}

export default Shapes;
