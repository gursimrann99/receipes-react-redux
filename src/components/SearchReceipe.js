import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setReceipes } from '../actions';

class SearchReceipe extends Component {
    constructor() {
        super();
        this.state = {
            ingredients: '',
            dish: ''
        }
    }

    search = () => {
        let { ingredients, dish } = this.state;
        const url = `http://www.recipepuppy.com/api?i=${ingredients}&q=${dish}`

        fetch(url, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(json => this.props.setReceipes(json.results));
    }
    
    render() {
        return (
            <Form inline>
                <FormGroup>
                    <label>Ingredients</label>
                    <FormControl onChange={event => this.setState({ ingredients: event.target.value })}
                        type="text" placeholder="garlic"></FormControl>
                </FormGroup>
                {' '}
                <FormGroup>
                    <label>Dish</label>
                    <FormControl onChange={event => this.setState({ dish: event.target.value })}
                        type="text" placeholder="Your dish"></FormControl>
                </FormGroup>
                {' '}
                <Button onClick={() => this.search()}>Submit</Button>
            </Form>
        )
    }
}

export default connect(null, {setReceipes})(SearchReceipe);