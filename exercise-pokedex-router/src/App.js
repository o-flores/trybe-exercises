import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import PokemonDetails from './PokemonDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1> Pokedex </h1>
        <nav>
          <Link to='/'>HOME</Link>
        </nav>
        <Route exact path="/" render={() => <Pokedex pokemons={pokemons}/>} />
        <Route exact path="/:id" render={(props) => <PokemonDetails {...props} pokemons={pokemons} />}/>
      </div>
    </BrowserRouter>
  );
}

export default App;