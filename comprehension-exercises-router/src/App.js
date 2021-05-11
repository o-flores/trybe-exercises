import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import StrictAccess from './components/StrictAccess'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/users/1'>Users</Link>
          <Link to='/about'>About</Link>
          <Link to='/strictaccess'>Strict</Link>
        </nav>
        <main>
          <Switch>
            <Route
              exact path='/users/:id'
              render={(props) => <Users {...props} greetingMessage='Good Morning' />} />
            <Route
              exact path='/strictaccess'
              render={() => (<StrictAccess user={{ username: 'joao', password: '1234' }} />)} />
            <Route exact path='/about' component={About} />
            <Route exact path='/' component={Home} />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
