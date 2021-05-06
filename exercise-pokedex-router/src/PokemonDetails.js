import React from 'react';
import Pokemon from './Pokemon';

class PokemonDetails extends React.Component {
  render() {
    const { id } = this.props.match.params
    const { pokemons } = this.props;
    const pokemon = pokemons.find((pokemon) => pokemon.id === parseInt(id));
    return (
      <div>
        <h1>Pokemon Details</h1>
        <div className="pokedex">
          <Pokemon className="pokemon" pokemon={pokemon} />
        </div>
      </div>
    )
  }
}

export default PokemonDetails;
