import React from 'react';
import Pokemon from './Pokemon';
import PokemonLocations from './PokemonLocations';

class PokemonDetails extends React.Component {
  constructor() {
    super()
    this.state = {
      favorite: false,
    }
  }

  getPokemonsFromStorage = () => {
    const array = JSON.parse(localStorage.getItem('favoritesPokemons')) || [];
    return array;
  }

  saveOnLocalStorage = (pokemon) => {
    let newPokemon = pokemon;
    const favoritesPokemons = this.getPokemonsFromStorage();
    if (favoritesPokemons) {
      const newFavoritesPokemons = [...favoritesPokemons, pokemon]
      newPokemon = newFavoritesPokemons;
    }
    localStorage.setItem('favoritesPokemons', JSON.stringify(newPokemon));

  }

  deleteFromLocalStorage = (pokemon) => {
    const favoritesPokemons = this.getPokemonsFromStorage();
    const newFavoritesPokemons = favoritesPokemons.filter((item) => item.id !== pokemon.id);
    localStorage.setItem('favoritesPokemons', JSON.stringify(newFavoritesPokemons));
  }

  handleLocalStorage = (pokemon) => {
    this.state.favorite ? this.saveOnLocalStorage(pokemon) : this.deleteFromLocalStorage(pokemon);
  }

  handleInput = (event, pokemon) => {
    const { checked, name } = event.target;
    this.setState({ [name]: checked }, () => this.handleLocalStorage(pokemon));
  }

  componentDidMount() {
    const { id } = this.props.match.params
    const { pokemons } = this.props;
    const pokemon = pokemons.find((pokemon) => pokemon.id === parseInt(id));
    const favorites = this.getPokemonsFromStorage();
    const checked = favorites.some((item) => item.id === pokemon.id);
    this.setState({favorite:checked});
  }
  // verifyFavorite = (pokemon) => {
  //   const favorites = this.getPokemonsFromStorage();
  //   const checked = favorites.some((item) => item.id === pokemon.id);
  //   return checked;
  // }

  render() {
    const { id } = this.props.match.params
    const { pokemons } = this.props;
    const { favorite } = this.state;
    const pokemon = pokemons.find((pokemon) => pokemon.id === parseInt(id));
    // console.log(localStorage.length);
    return (
      <div>
        <h2>Pokemon Details</h2>
        <div className="pokedex">
          <Pokemon favorite={favorite} className="pokemon" pokemon={pokemon} />
        </div>
        <div className="summary">
          <h3>Summary</h3>
          <p>{pokemon.summary}</p>
          <h3>Pokemon Locations</h3>
          <PokemonLocations locations={pokemon.foundAt} />
          <label htmlFor='favorite'>Favoritar Pokemon
          <input checked={ this.state.favorite } onChange={(event) => this.handleInput(event, pokemon)} name='favorite' type="checkbox"></input>
          </label>
        </div>
      </div>
    )
  }
}

export default PokemonDetails;
