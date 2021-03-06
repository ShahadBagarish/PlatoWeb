import React, { Component } from 'react'
import { Image, Row, Navbar, Nav, Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from "../image/logo_transparent.png"
import Axios from 'axios'
import SingleAppetizer from './SingleAppetizer'
import { Button } from 'semantic-ui-react'

export default class Appetizer extends Component {
    state = {
        appetizer: [],
    }
    componentDidMount() {

        Axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Side')
            .then((res) => {
                this.setState({
                    appetizer: res.data.meals
                })
            })
    }
    render() {
        var appetizer = this.state.appetizer.map(meal => {
            return <SingleAppetizer meal={meal} />
        })
        return (
            <div >
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
                <Row className="justify-content-md-center">{appetizer}</Row>
            </div>
        )
    }
}

