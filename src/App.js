import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Image } from 'react-bootstrap'
import './App.css'
import Axios from 'axios'
//image
import twitter from "./image/twitter.png"
import gmail from "./image/gmail.png"
import linkedln from "./image/linkedln.png"
//component
import Home from './Component/Home';



export default class App extends Component {

  state = {
    data: [],
    slide1: '',
    slide2: '',
    slide3: ''
  }
  componentDidMount() {
    Axios.all([
      Axios.get('https://www.themealdb.com/api/json/v1/1/random.php'),
      Axios.get('https://www.themealdb.com/api/json/v1/1/random.php'),
      Axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
    ])
      .then(Axios.spread((res1, res2, res3) => {
        this.setState({ slide1: res1.data.meals[0], slide2: res2.data.meals[0], slide3: res3.data.meals[0] });
      }
      ))
  }

  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#about" className="Font">About</Nav.Link>
              <Nav.Link href="#contact" className="Font">Contact</Nav.Link>
            </Nav>

            <Nav className="nav ml-auto">
              <a href="https://twitter.com/shahadabdullahb"><Image src={twitter} alt="twitter logo" rounded style={{ width: 20, height: 20, overflow: 'hidden', margin: 7 }} /></a>
              <a href="mailto:shahad.bagarish@gmail.com?body=Contact Me"><Image href="#Home" src={gmail} alt="gmail logo" rounded style={{ width: 20, height: 20, overflow: 'hidden', margin: 7 }} /></a>
              <a href="https://www.linkedin.com/in/shahad-bagarish/"><Image src={linkedln} alt="linkedln logo" rounded style={{ width: 20, height: 20, overflow: 'hidden', margin: 7 }} /></a>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Home slide1={this.state.slide1} slide2={this.state.slide2} slide3={this.state.slide3} />
        <Navbar bg="light" expand="lg">
          <p className="footer"> &copy; Copyright 2019. - Shahad Bagsrish </p>
        </Navbar>

      </div>
    )
  }
}
