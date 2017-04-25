import React, { Component } from 'react';
import Shapes from './shapes'
import './App.css';
import ReactCursorPosition from 'react-cursor-position';

class App extends Component {

  render() {
    return (
      <div>
        <ReactCursorPosition>
          <Shapes />
        </ReactCursorPosition>
      </div>
    );
  }
}

export default App;
