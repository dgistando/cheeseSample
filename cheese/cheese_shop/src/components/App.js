import React, { Component } from 'react';

import DynamicSearch from '../containers/search_parameters'
import CheeseGrid from './cheese_grid'
import Cheeses from './cheeses'
import Cart from './my_cart'

import {Switch, Route} from 'react-router-dom'

/**
 *  This page functions as a router for the whole 
 *  Sample.
 */
class App extends Component {

  getHome(){
    return(
      <div>
        <h2 className="boldLarge" style={{'textAlign':'center',
                   'color':'#2E60C2',}}>Welcome to Cheese Shop!</h2>
        <CheeseGrid />
      </div>
    );
  }

  render() {

    const {match} = this.props;

    return (
      <div className="container">
        <DynamicSearch />

          <Switch>
            <Route exact path={`/cheeseSample`} component={this.getHome}/>
            <Route path={`/cheeseSample/Cheeses`} component={Cheeses}/>
            <Route path={`/cheeseSample/MyCart`} component={Cart}/>
          </Switch>
      </div>
    );
  }
}

export default App;
