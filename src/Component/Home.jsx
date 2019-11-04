import React, { Component } from 'react'
import { BrowserRouter , Switch, Route, NavLink } from 'react-router-dom';
import { Image, Container, Row,Col, Navbar, Nav, Carousel } from 'react-bootstrap'
//image
import logo from "../image/logo_transparent.png"
//component
import Recipes from './Recipes';
import Posts from './Posts';
import Articals from '../Articals'

export default class Home extends Component {
    state ={
        articals : Articals.artical
    }
    
    render() {
        const post = this.state.articals.map( item => {
            return <Col><Posts post={item} ></Posts></Col>
        }
        )
        return (
            <div className='home'>
                <BrowserRouter>
                    <Container>
                        <Row className="justify-content-md-center">
                            <Image src={logo} alt="logo" style={{ width: 350, height: 120 }} rounded />
                        </Row>
                        <Row className="justify-content-md-center fontlogo">
                            <p>===  There is no love sincerer than the love of food.  ===</p>
                        </Row>
                        <hr />
                        <Navbar bg='light' variant="light" expand="lg">
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto Font">
                                    <NavLink className="nav-link" to="/home">Home</NavLink>
                                    <NavLink className="nav-link" to="/recipes">Recipes</NavLink>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                        <hr />
                        <Carousel>
                            <Carousel.Item>
                                <Image
                                    className="d-block w-100"
                                    src={this.props.slide1.strMealThumb}
                                    alt="First slide"
                                    style={{ width: 200, height: 500, overflow: 'hidden', opacity: 0.8 }}
                                />
                                <Carousel.Caption>
                                    <h2 className="Font">{this.props.slide1.strMeal}</h2>
                                    <p>{this.props.slide1.strTags}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image
                                    className="d-block w-100"
                                    src={this.props.slide2.strMealThumb}
                                    alt="second slide"
                                    style={{ width: 200, height: 450, overflow: 'hidden', opacity: 0.8 }} />

                                <Carousel.Caption>
                                    <h2 className="Font">{this.props.slide2.strMeal}</h2>
                                    <p>{this.props.slide2.strTags}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image
                                    className="d-block w-100"
                                    src={this.props.slide3.strMealThumb}
                                    alt="Third slide"
                                    style={{ width: 200, height: 450, overflow: 'hidden', opacity: 0.8 }}
                                />

                                <Carousel.Caption>
                                    <h2 className="Font">{this.props.slide3.strMeal}</h2>
                                    <p>{this.props.slide3.strTags}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>

                   
                    <Row className="justify-content-md-center font">
                        <p>=== Healthy Tips ===</p>
                    </Row>
                    <Row>
                    {post}
                    </Row>
                    </Container>
                    <Switch>
                        <Route path='/recipes' component={Recipes} />
                        <Route path='/home' />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
