import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import About from './About'
import NotFound from './NotFound'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import PokemonDetails from './PokemonDetails';
import Favorites from './Favorites';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      favorite:false,
    }
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <h1> Pokedex </h1>
          <nav>
            <Link className='link' to='/'>HOME</Link>
            <Link className='link' to='/about'>ABOUT</Link>
            <Link className='link' to='/favorites'>FAVORITES</Link>
          </nav>
          <Switch>
            <Route exact path="/about" >{About}</Route>
            <Route exact path="/pokemon/:id" render={(props) => <PokemonDetails {...props} pokemons={pokemons} />} />
            <Route exact path="/" render={() => <Pokedex pokemons={pokemons} />} />
            <Route exact path='/favorites'component={Favorites}/>
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;