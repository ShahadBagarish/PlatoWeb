import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Image } from 'react-bootstrap'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react'
import './App.css'
import Axios from 'axios'
import 'semantic-ui-css/semantic.min.css'
//image
import twitter from "./image/twitter.png"
import gmail from "./image/gmail.png"
import linkedln from "./image/linkedln.png"
//component
import Home from './Component/Home';
import Appetizer from './Component/Appetizer';
import About from './Component/About';
import Contact from './Component/Contact';
import RecipeAppetizer from './Component/RecipeAppetizer '
import mainCourse from './Component/mainCourse';

export default class App extends Component {

  state = {
    categories: null,
    slide1: '',
    slide2: '',
    slide3: ''
  }

  componentDidMount() {
    Axios.all([
      Axios.get('https://www.themealdb.com/api/json/v1/1/random.php'),
      Axios.get('https://www.themealdb.com/api/json/v1/1/random.php'),
      Axios.get('https://www.themealdb.com/api/json/v1/1/random.php'),
      Axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
    ])
      .then(Axios.spread((res1, res2, res3, res4) => {
        // console.log(res4.data);
        this.setState({
          slide1: res1.data.meals[0], slide2: res2.data.meals[0], slide3: res3.data.meals[0],
          categories: res4.data
        });
      }
      ))
  }


  render() {
    // if(!this.state.categories.length) return <div className="App"></div>   
    // console.log(this.state.categories)
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar bg="light" expand="lg">
            <Navbar.Collapse id="basic-navbar-nav">
              <Button animated as={Link} to='/home'>
                <Button.Content visible >Home</Button.Content>
                <Button.Content hidden>
                  <Icon name='arrow left' />
                </Button.Content>
              </Button>
              <Nav className="ml-auto">
                <a href="https://twitter.com/shahadabdullahb"><Image src={twitter} alt="twitter logo" rounded style={{ width: 20, height: 20, overflow: 'hidden', margin: 7 }} /></a>
                <a href="mailto:shahad.bagarish@gmail.com?body=Contact Me"><Image href="#Home" src={gmail} alt="gmail logo" rounded style={{ width: 20, height: 20, overflow: 'hidden', margin: 7 }} /></a>
                <a href="https://www.linkedin.com/in/shahad-bagarish/"><Image src={linkedln} alt="linkedln logo" rounded style={{ width: 20, height: 20, overflow: 'hidden', margin: 7 }} /></a>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <div className='home'>
            <Switch>
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
              <Route exact path='/mainCourse' component={mainCourse} />
              <Route exact path='/appetizer' component={Appetizer} />
              <Route path='/appetizer/:idMeal' render={(props)=> <RecipeAppetizer {...props}/>} />
              <Route path='/home' render={() => this.state.categories !== null && <Home slide1={this.state.slide1} slide2={this.state.slide2} slide3={this.state.slide3}
                categories={this.state.categories} />} /> */}
            {<Route path='/' render={() => this.state.categories !== null && <Home slide1={this.state.slide1} slide2={this.state.slide2} slide3={this.state.slide3} categories={this.state.categories} />} />}
            </Switch>
          </div>
        </BrowserRouter>
        <Navbar bg="light" expand="lg">
          <p className="footer"> &copy; Copyright 2019. - Shahad Bagsrish </p>
        </Navbar>
      </div>
    )
  }
}
