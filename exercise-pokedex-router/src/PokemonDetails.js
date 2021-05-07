import React from 'react';
import Pokemon from './Pokemon';
import PokemonLocations from './PokemonLocations';

class PokemonDetails extends React.Component {
  render() {
    const { id } = this.props.match.params
    const { pokemons } = this.props;
    const pokemon = pokemons.find((pokemon) => pokemon.id === parseInt(id));
    return (
      <div>
        <h2>Pokemon Details</h2>
        <div className="pokedex">
          <Pokemon className="pokemon" pokemon={pokemon} />
        </div>
        <div className="summary">
          <h3>Summary</h3>
          <p>{ pokemon.summary}</p>
          <h3>Pokemon Locations</h3>
          <PokemonLocations locations={ pokemon.foundAt }/>
        </div>
      </div>
    )
  }
}

export default PokemonDetails;
