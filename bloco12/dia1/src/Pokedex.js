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
        this.FilterPokemonsByType = this.FilterPokemonsByType.bind(this);
    }


    nextPokemon() {
        if (this.state.index === this.FilterPokemonsByType().length - 1) {
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

    FilterPokemonsByType() {
        const { filterType } = this.state
        if (this.state.filterType === 'All') return pokemons;
        return this.props.pokemons.filter((pokemon) => pokemon.type === filterType)
    }

    render() {
        const { nextPokemon, setPokemonType, FilterPokemonsByType } = this;
        const { pokemons } = this.props;
        const { index } = this.state;

        const pokemonTypes = pokemons.reduce((types, { type }) =>
            types.includes(type) ? types : [...types, type], ['All']);

        return (
            <div>
                <div className="pokedex">
                    <Pokemon
                        key={pokemons.id}
                        pokemon={FilterPokemonsByType()[index]} />
                </div>

                { pokemonTypes.map((type) => <Button key={type} onClick={setPokemonType} type={type}></Button>)}

                <div>
                    <button
                        className='next-pokemon'
                        disabled={FilterPokemonsByType().length <= 1}
                        onClick={nextPokemon}>
                        Próximo Pokemon
                    </button>
                </div>


            </div>
        );
    }
}

export default Pokedex;