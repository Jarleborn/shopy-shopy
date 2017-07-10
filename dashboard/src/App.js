import React, { Component } from 'react'
import './App.css'
import { Navbar, NavItem, Row, Col } from 'react-materialize'
import Sidebar from './components/blocks/sidebar'
class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar brand='Nässel Tjosan' right>
      </Navbar>
      <Row>
        <Col s={4}>
        <Sidebar />
        </Col>
        <Col s={8}>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </Col>
          </Row>
        </div>
    )
  }
}

export default App
