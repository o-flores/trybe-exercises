import React from 'react';
import './pokemon.css';
import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image, id } = this.props.pokemon;
    const { favorite } = this.props;
    return (
      <div className="pokemon">
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>
            Average weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
          <Link to={`/pokemon/${id}`}>Saiba mais</Link>
        </div>
        <div className='pokemon-images'>
          {favorite && <p className='icon'><FaRegStar /></p>}
          <img src={image} alt={`${name} sprite`} />
        </div>
      </div>
    );
  }
}

export default Pokemon;