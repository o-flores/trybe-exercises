import React from 'react';
import Button from './Button';
import pokemons from './data';
import Pokemon from './Pokemon';
import './pokedex.css'

class Pokedex extends React.Component {

    constructor() {

        super();

        this.state = {
            index: 0,
            filterType: 'All',
        }

        this.nextPokemon = this.nextPokemon.bind(this);
        this.setPokemonType = this.setPokemonType.bind(this);
        this.pokemonsFiltered = this.pokemonsFiltered.bind(this);
    }


    nextPokemon() {
        if (this.state.index === this.pokemonsFiltered().length - 1) {
            this.setState(
                {
                    index: 0,
                    filterType: this.state.filterType,
                })
        } else {
            this.setState((initialState, _props) => ({
                index: initialState.index + 1,
                filterType: this.state.filterType,
            }))
        }

    }

    setPokemonType(event) {
        this.setState({
            index: 0,
            filterType: event.target.innerText,
        })
    }

    pokemonsFiltered() {
        const { filterType } = this.state
        if (this.state.filterType === 'All') return pokemons;
        return this.props.pokemons.filter((pokemon) => pokemon.type === filterType)
    }

    render() {
        const { nextPokemon, setPokemonType, pokemonsFiltered } = this;
        const { pokemons } = this.props;
        const { index } = this.state;

        const pokemonTypes = pokemons.reduce((types, { type }) =>
            types.includes(type) ? types : [...types, type], ['All']);

        return (
            <div>
                <div className="pokedex">
                    <Pokemon
                        key={pokemons.id}
                        pokemon={pokemonsFiltered()[index]} />
                </div>

                { pokemonTypes.map((type) => <Button key={type} onClick={setPokemonType} type={type}></Button>)}

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