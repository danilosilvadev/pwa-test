import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BurgerMenu from './burger-menu'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BurgerMenu />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button>Notifique-me</button>
      </div>
    );
  }
}

export default App;
