import React from 'react';
import { Route } from 'react-router-dom';
import FoodMakers from '../components/foodMakers/FoodMakers';

const routes = () => (
    <Route path="/" component={FoodMakers}>
    </Route>
)