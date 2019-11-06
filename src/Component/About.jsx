import React, { Component } from 'react'
import { Image, Row } from 'react-bootstrap'
import logo from "../image/logo_transparent.png"

export default class About extends Component {
    render() {
        return (
            <div className='home'>
                <Row className="justify-content-md-center">
                        <Image src={logo} alt="logo" style={{ width: 350, height: 120 }} rounded />
                    </Row>
                    <Row className="justify-content-md-center fontlogo">
                        <p>===  There is no love sincerer than the love of food.  ===</p>
                    </Row>
                    <hr />
            </div>
        )
    }
}
