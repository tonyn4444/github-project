import React, { Component } from 'react';
import './App.css';
import Popular from './components/Popular';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Popular />
      </div>
    );
  }
}

export default App;
