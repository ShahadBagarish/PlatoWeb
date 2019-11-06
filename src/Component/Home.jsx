import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Image, Container, Row, Col, Navbar, Nav, Carousel, Dropdown } from 'react-bootstrap'
import { Button } from 'semantic-ui-react'
//image
import logo from "../image/logo_transparent.png"
//component
import Posts from './Posts';
import Articals from '../Articals'

export default class Home extends Component {
    state = {
        articals: Articals.artical,
    }

    render() {
        console.log(this.props.slide1.idMeal);
        const post = this.state.articals.map(item => {
            return <Col><Posts key={item.id} post={item}></Posts></Col>
        }
        )


        return (
            <div className='home'>
                <Container>
                    <Row className="justify-content-md-center">
                        <Image src={logo} alt="logo" style={{ width: 350, height: 120 }} rounded />
                    </Row>
                    <Row className="justify-content-md-center fontlogo">
                        <p>===  There is no love sincerer than the love of food.  ===</p>
                    </Row>
                    <hr />
                    <Row className="justify-content-md-center">
                        <Navbar bg='light' variant="light" expand="lg">
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto FontBar">
                                    <Dropdown>
                                        <Dropdown.Toggle as={Button} basic inverted color='black' id="dropdown-basic">
                                            <p style={{ color: 'rgb(252, 117, 130)', 'fontSize': '16px' }}>Main Course</p></Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Button as={Link} to='/beef' basic inverted color='black'> <p style={{ color: 'rgb(252, 117, 130)', 'fontSize': '16px' }}>Beef plates</p> </Button>
                                            <Button as={Link} to='/pasta' basic inverted color='black'> <p style={{ color: 'rgb(252, 117, 130)', 'fontSize': '16px' }}>Pasta plates</p> </Button>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Button as={Link} to='/appetizer' basic inverted color='black'> <p style={{ color: 'rgb(252, 117, 130)', 'fontSize': '16px' }}>Appetizer</p> </Button>
                                    <Button as={Link} to='/dessert' basic inverted color='black'> <p style={{ color: 'rgb(252, 117, 130)', 'fontSize': '16px' }}>Dessert</p> </Button>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Row>
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
                    <Row className="justify-content-md-center font" style={{ padding: '40px' }}>
                        <p>=== Healthy Tips ===</p>
                    </Row>
                    <Row>{post}</Row>

                </Container>
            </div>
        )
    }
}
