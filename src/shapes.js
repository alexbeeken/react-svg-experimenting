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
      return { color: this.randomColor() }
    })
  }

  render() {
    return (
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" >
        <rect
          width="100px"
          height="100px"
          fill={this.state.color}
          onClick={this.handleClick.bind(this)}
          x={this.props.cursorPosition.x}
          y={this.props.cursorPosition.y}/>
      </svg>
    )
  }
}

export default Shapes;
