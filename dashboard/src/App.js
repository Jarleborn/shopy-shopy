import React, { Component } from 'react'
import './App.css'
import { Navbar, NavItem, Row, Col } from 'react-materialize'
import Sidebar from './components/blocks/sidebar'
import Pages from './components/pages/pages'
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
          <Pages />
        </Col>
          </Row>
        </div>
    )
  }
}

export default App
