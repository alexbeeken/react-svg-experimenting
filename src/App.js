import React, { Component } from 'react';
import Shapes from './shapes'
import './App.css';

class App extends Component {
  mouseEnter() {
    console.log('TOUCHED')
  }

  render() {
    return (
      <div>
        <Shapes onMouseEnter={this.mouseEnter()}/>
      </div>
    );
  }
}

export default App;
