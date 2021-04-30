import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {

    constructor() {

        super();

        this.state = {
            index: 0,
            filterType: 'Fire',
        }

        this.nextPokemon = this.nextPokemon.bind(this);
        this.verifyIndex = this.verifyIndex.bind(this);
        this.setPokemonType = this.setPokemonType.bind(this);
        this.FilterPokemonsByType = this.FilterPokemonsByType.bind(this);
    }


    nextPokemon() {
        this.setState((initialState, _props) => ({
            index: initialState.index + 1,

        }))
    }

    verifyIndex(index) {
        if (index === this.FilterPokemonsByType().length) {
            this.setState({ index: 0 })
            return 0;
        }
        return index;
    }

    filteredPokemon() {

    }

    setPokemonType(event) {
        this.setState({
            index: this.state.index,
            filterType: event.target.innerText
        })
    }

    FilterPokemonsByType() {
        const { filterType } = this.state
        return this.props.pokemons.filter((pokemon) => pokemon.type === filterType)
    }

    render() {
        const { verifyIndex, nextPokemon, setPokemonType, FilterPokemonsByType } = this;
        const { pokemons } = this.props;
        const { index, filterType } = this.state;

        const pokemonTypes = pokemons.reduce((types, { type }) => [...types, type], [])

        return (
            <div>
                <div className="pokedex">
                    <Pokemon
                        key={pokemons.id}
                        pokemon={FilterPokemonsByType()[verifyIndex(index)]} />
                </div>
                <div>
                    <button
                        onClick={nextPokemon}>
                        Próximo
                    </button>

                    <button
                        onClick={setPokemonType}>
                        Fire
                        </button>

                    <button
                        onClick={setPokemonType}>
                        Psychic
                        </button>
                </div>
            </div>
        );
    }
}

export default Pokedex;