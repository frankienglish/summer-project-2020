import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
//import { Route } from 'react-router-dom';
import Account from './components/pages/Account';
import Cart from './components/pages/Cart';
import Categories from './components/pages/Categories';
import Sell from './components/pages/Sell';
import Search from './components/Search';
import Clothing from './components/pages/SubCategories/Clothing';
import Electronics from './components/pages/SubCategories/Electronics';
import Toys from './components/pages/SubCategories/Toys';
import Outdoors from './components/pages/SubCategories/Outdoors';
import Fitness from './components/pages/SubCategories/Fitness';
import Entertainment from './components/pages/SubCategories/Entertainment';


// Router links the different pages together using paths
// Route is the exact path that you are using
// div signals that you are creating an object


class App extends Component{
  render() {
    return (
      
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/"render={props => (
                <React.Fragment>
                  <Search search={this.search} />
                </React.Fragment>
              )}/>
            <Route path="/categories" component={Categories} />
            <Route path="/sell" component={Sell} />
            <Route path="/account" component={Account} />
            <Route path="/cart" component={Cart} />
            <Route path="/categories/clothing" component={Clothing} />
            <Route path="/categories/electronics" component={Electronics} />
            <Route path="/categories/toys" component={Toys} />
            <Route path="/categories/outdoors" component={Outdoors} />
            <Route path="/categories/fitness" component={Fitness} />
            <Route path="/categories/entertainment" component={Entertainment} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;