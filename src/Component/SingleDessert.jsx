import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react'

const SingleDessert = (props) => {
    var id = props.meal.idMeal
    return (
        <div>
             <Col className="text-center" style={{ width: '30rem' }}>
                <Card >
                    <Card.Img variant="top" src={props.meal.strMealThumb} />
                    <Card.Body>
                    <Button as={Link} to={`/dessert/${id}`} fluid style={{ color: 'black', 'fontSize': '16px' }}><b>{props.meal.strMeal}</b></Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    )
}

export default SingleDessert
