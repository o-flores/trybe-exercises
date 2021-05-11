import React, { Component } from 'react';
import './pokemonLocations.css'

class PokemonLocations extends Component {
  render() {
    const { locations } = this.props;
    return (
      <div className="locationsContainer">
        { locations.map((location) =>
          <div className="locations" key={location.location}>
            <h3>{location.location}</h3>
            <img src={location.map} alt="pokemons map"></img>
          </div>
        )}
      </div>
    )
  }
}

export default PokemonLocations;
