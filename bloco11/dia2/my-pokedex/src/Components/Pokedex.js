import React, { Component } from 'react';
import Pokemon from './Pokemon';
import '../styles/Pokedex.css'

class Pokedex extends Component {
  render() {
    return (
      <div className='card'>
        {this.props.pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
      </div>
    )
  }
}

export default Pokedex