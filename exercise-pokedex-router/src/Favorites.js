import React, { Component } from 'react';
import Pokemon from './Pokemon';
import './favorites.css'

class Favorites extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: 0,
    }
  }

  getPokemonsFromStorage = () => {
    const array = JSON.parse(localStorage.getItem('favoritesPokemons')) || [];
    return array;
  }

  render() {
    const favoritesPokemons = this.getPokemonsFromStorage();
    return (
      <div className='favorites'>
        {favoritesPokemons.map((pokemon) => (
          <Pokemon
            key={pokemon.id}
            pokemon={ pokemon }
            favorite='true'
          />))}
      </div>

    )
  }
}

export default Favorites;