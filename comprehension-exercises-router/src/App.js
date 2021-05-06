import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path='/'><Home/></Route>
        <Route path='/about'><About/></Route>
        <Route path='/users'><Users/></Route>
      </BrowserRouter>
    );
  }
}

export default App;
