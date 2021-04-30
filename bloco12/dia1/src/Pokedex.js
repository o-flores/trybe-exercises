import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {

    constructor() {

        super();

        this.state = {
            index: 0,
        }

        this.changePokemon = this.changePokemon.bind(this);
        this.verifyIndex = this.verifyIndex.bind(this);

    }



    changePokemon() {
        this.setState((initialState, _props) => ({
            index: initialState.index + 1,
        }))
    }

    verifyIndex(index) {
        if (index === this.props.pokemons.length) {
            this.setState({ index: 0 })
            return 0;
        }
        return index;
    }

    render() {
        return (
            <div className="pokedex">
                <Pokemon key={this.props.pokemons.id} pokemon={this.props.pokemons[this.verifyIndex(this.state.index)]} />
                <button onClick={this.changePokemon}>Próximo</button>
            </div>
        );
    }
}

export default Pokedex;