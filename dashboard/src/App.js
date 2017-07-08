import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavItem } from 'react-materialize'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar brand='Nässel Tjosan' right>
        <NavItem href='#'>Help</NavItem>
      </Navbar>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
