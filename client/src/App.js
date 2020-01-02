import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.scss"
import { Route, Switch } from "react-router-dom"

//import {Alert} from "reactstrap"
import NavBar from './components/NavBar/NavBar';

import Restaurants from './containers/Restaurants/Restaurants';
import RestaurantDetails from './components/RestaurantDetails/RestaurantDetails';


const App = () => {
  return (
    <div className="App">

      <NavBar />

      <Switch>
        <Route exact path="/" component={Restaurants} />
        <Route path="/details" component={RestaurantDetails} />

      </Switch>




    </div>
  );
}

export default App;
