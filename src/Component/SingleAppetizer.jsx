import React, { Component } from 'react'
import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react'


export default class SingleAppetizer extends Component {
    render() {
        var id = this.props.meal.idMeal
        
        return (
            <div>
                 <Col className="text-center" style={{ width: '30rem' }}>
                <Card >
                    <Card.Img variant="top" src={this.props.meal.strMealThumb} />
                    <Card.Body>
                    <Button as={Link} to={`/appetizer/${id}`} fluid style={{ color: 'black', 'fontSize': '16px' }}><b>{this.props.meal.strMeal}</b></Button>
                    </Card.Body>
                </Card>
            </Col>
            </div>
        )
    }
}

