import React, { Component } from 'react';
import Shapes from './shapes'
import './App.css';
import ReactCursorPosition from 'react-cursor-position';

class App extends Component {

  render() {
    return (
      <div className='root'>
        <ReactCursorPosition>
          <Shapes width={100} height={100}/>
        </ReactCursorPosition>
      </div>
    );
  }
}

export default App;
