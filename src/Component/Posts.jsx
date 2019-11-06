import React, { Component } from 'react'
import { Card } from 'react-bootstrap'


export default class Posts extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' , opacity: 0.8}}>
                    <Card.Img variant="top" src={this.props.post.src} style={{  width: '18rem' }}/>
                    <Card.Body>
                        <Card.Title><b>{this.props.post.title}</b></Card.Title>
                        <Card.Text>{this.props.post.overview} </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
