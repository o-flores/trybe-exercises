import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../styles/Pokemons.css'

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image} = this.props.pokemon;
    return (
      <div className = 'pokemons'>
        <p>Nome: {name}</p>
        <p>Tipo: {type}</p>
        <p>Peso médio: {averageWeight.value}{averageWeight.measurementUnit}</p>
        <img src={image} alt={name}></img>
      </div>
    )
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number
    }),
    image: PropTypes.string,
  }).isRequired,
};

export default Pokemon