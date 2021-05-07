import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import About from './About'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import PokemonDetails from './PokemonDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1> Pokedex </h1>
        <nav>
          <Link className='link' to='/'>HOME</Link>
          <Link className='link' to='/about'>ABOUT</Link>
          <Link className='link' to='/'>Home</Link>
        </nav>
        <Switch>
          <Route exact path="/about" >{About}</Route>
          <Route exact path="/:id" render={(props) => <PokemonDetails {...props} pokemons={pokemons} />} />
          <Route exact path="/" render={() => <Pokedex pokemons={pokemons} />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;