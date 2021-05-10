
import React from 'react';
import Button from './Button';
import pokemons from './data';
import Pokemon from './Pokemon';
import './pokedex.css'

class Pokedex extends React.Component {

    constructor() {

        super();

        this.state = {
            pokemonId: 0,
            index: 0,
            filterType: 'All',
        }

        this.nextPokemon = this.nextPokemon.bind(this);
        this.setPokemonType = this.setPokemonType.bind(this);
        this.pokemonsFiltered = this.pokemonsFiltered.bind(this);
    }

    componentDidMount() {
        const { index } = this.state;
        this.setState({
            pokemonId: this.pokemonsFiltered()[index].id,
        })
    }


    nextPokemon() {
        const { index } = this.state;
        if (index === this.pokemonsFiltered().length - 1) {
            const pokemon = this.pokemonsFiltered()[0]
            this.setState(
                {
                    index: 0,
                    pokemonId: pokemon.id,
                })
        } else {
            const pokemon = this.pokemonsFiltered()[index +1 ]
            this.setState((initialState) => ({
                index: initialState.index + 1,
                pokemonId: pokemon.id,
            }))
        }
    }
    updatePokemonId = () => {
        const pokemon = this.pokemonsFiltered()[0]
        this.setState({ pokemonId: pokemon.id})
    }

    setPokemonType(event) {
        this.setState({
            index: 0,
            filterType: event.target.innerText,
        }, () => this.updatePokemonId())
    }

    pokemonsFiltered() {
        const { filterType } = this.state
        if (filterType === 'All') return pokemons;
        return this.props.pokemons.filter((pokemon) => pokemon.type === filterType)
    }

    verifyFavorite = (pokemonId) => {
        const localStoragePokemons = JSON.parse(localStorage.getItem('favoritesPokemons'));
        const isFavorite = localStoragePokemons.some((pokemon) => pokemonId ===  pokemon.id);
        return isFavorite;
    }

    render() {
        const { nextPokemon, setPokemonType, pokemonsFiltered, verifyFavorite } = this;
        const { pokemons } = this.props;
        const { index, pokemonId } = this.state;
        const pokemon = pokemonsFiltered()[index];
        const pokemonTypes = pokemons.reduce((types, { type }) =>
            types.includes(type) ? types : [...types, type], ['All']);
        const isFavorite = verifyFavorite(pokemonId);

        return (
            <div>
                <div className="pokedex">
                    <Pokemon
                        favorite={ isFavorite }
                        key={pokemons.id}
                        pokemon={pokemon} />
                </div>

                { pokemonTypes.map((type) => <Button
                    key={type}
                    onClick={setPokemonType}
                    type={type}>
                </Button>)}

                <div>
                    <button
                        className='next-pokemon'
                        disabled={pokemonsFiltered().length <= 1}
                        onClick={nextPokemon}>
                        Próximo Pokemon
                    </button>
                </div>


            </div>
        );
    }
}

export default Pokedex;