import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import StrictAccess from './components/StrictAccess'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>         
          <Route exact path='/users/:id' render={(props) => <Users {...props} greetingMessage='Good Morning' />}></Route>
          <Route 
          exact path='/strictaccess' 
          render={()=> (<StrictAccess user={{username:'joao', password:'1235'}}/>)}></Route>
          <Route exact path='/about'><About /></Route>
          <Route exact path='/'><Home /></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
