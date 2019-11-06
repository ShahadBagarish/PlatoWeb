import React, { Component } from 'react'
import { Card, Row, Image } from 'react-bootstrap'
import { Button, Icon } from 'semantic-ui-react'
import Axios from 'axios'
import { Link } from 'react-router-dom'

export default class RecipDessert extends Component {
    state = {
        recipe: false,
        Recipe: [],
        instructions : []
    }
    componentDidMount() {

        Axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.props.match.params.idMeal}`)
            .then((res) => {
                this.setState({ recipe: res.data.meals[0], Recipe: res.data.meals[0], instructions: res.data.meals[0].strInstructions.split(". ") })
            })
    }
    render() {
        var strIngredientArray = []
        var strMeasureArray = []
        Object.keys(this.state.Recipe).map(ele => {
            for (let i = 1; i <= Object.keys(this.state.Recipe).length; i++) {
                if (ele === ('strIngredient' + i)) {
                    strIngredientArray.push(this.state.Recipe[ele])
                }
                if (ele === ('strMeasure' + i)) {
                    strMeasureArray.push(this.state.Recipe[ele])
                }
            }
        })
        var strInstructions = this.state.instructions.map( (ele,index) => {
            return <p>{`${++index}-  ${ele}`}</p>
        })
        
        var mes = strMeasureArray.map(ele => { return (!ele) ? '' : <Row style={{ padding: '15px' }}>{ele}</Row> })
        var ing = strIngredientArray.map(ele => { return (!ele) ? '' : <Row style={{ padding: '15px' }}>{ele}</Row> })
        return (
            <div>
                 <Row className="justify-content-md-center">
                    {this.state.recipe &&
                        <Card style={{ width: '50%' }}>
                            <Row className="justify-content-md-center " >
                                <Image roundedCircle style={{ width: '50%' }} variant="top" src={this.state.recipe.strMealThumb} /></Row>
                            <Card.Body className="cardBody">
                                <Card.Title><p>{this.state.recipe.strMeal}</p></Card.Title>
                                <p className='taste'>Taste the {this.state.recipe.strArea} plate</p>
                                <hr />
                                <Row >
                                    <h4 style={{ padding: '15px', 'fontSize': '18px' }}>INGREDIENTS</h4>
                                </Row>
                                <Row>
                                    <ul className="font">{mes}</ul>
                                    <ul className="font"><b>{ing}</b></ul>
                                </Row>
                                <hr />
                                <Row >
                                    <h4 style={{ padding: '15px', 'fontSize': '18px' }}>INSTRUCTIONS</h4>
                                </Row>
                                <p style={{'text-align': 'left', padding: '15px', 'fontSize': '17px'}} className='font'>{strInstructions}</p>
                                <Button basic inverted color='black' className="fluid" animated='vertical' as={Link} to='/dessert'>
                                    <Button.Content visible><p style={{ color: 'rgb(252, 117, 130)', 'fontSize': '16px' }}>Back</p></Button.Content>
                                    <Button.Content hidden>
                                        <Icon name='arrow left' />
                                    </Button.Content>
                                </Button>
                            </Card.Body>
                        </Card>
                    }
                </Row>
            </div>
        )
    }
}
