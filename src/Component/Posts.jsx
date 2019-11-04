import React, { Component } from 'react'
import { Card } from 'react-bootstrap'


export default class Posts extends Component {
    render() {
        console.log(this.props.post);

        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.post.src} style={{ width: 287, height: 240 }}/>
                    <Card.Body>
                        <Card.Title>{this.props.post.title}</Card.Title>
                        <Card.Text>{this.props.post.overview} </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
