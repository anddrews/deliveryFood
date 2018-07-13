import React, { Component } from 'react';
import DishCard from '../dishCard/DishCard';

const name = { DishCard:  DishCard };

class Constructor extends Component {
    
    render() {
        return (React.createElement('div', this.props, <h1>Hello world!</h1>));
    }
}

export default Constructor;
