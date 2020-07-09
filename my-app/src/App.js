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
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
