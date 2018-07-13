import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BusinessLunch from '../businessLunch/BusinessLunch';


const FoodMakers = () => (
  <Switch>
      <Route exact path='/businessLunch' component={ BusinessLunch} />
  </Switch>
  
);
export default FoodMakers;