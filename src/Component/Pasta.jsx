import React, { Component } from 'react'
import { Image, Row, Navbar, Nav, Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from "../image/logo_transparent.png"
import Axios from 'axios'
import { Button } from 'semantic-ui-react'
import SinglePasta from './SinglePasta'

export default class Pasta extends Component {
    state = {
        pasta: [],
    }
    componentDidMount() {

        Axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Pasta')
            .then((res) => {
                this.setState({
                    pasta: res.data.meals
                })
            })
    }
    render() {
        var pasta = this.state.pasta.map(meal => {
            return <SinglePasta meal={meal} />
        })
        return (
            <div>
                 <div>
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
                <Row className="justify-content-md-center">{pasta}</Row>
            </div>
            </div>
        )
    }
}
