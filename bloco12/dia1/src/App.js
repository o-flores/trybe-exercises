import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

class App extends React.Component {
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
    if (index === pokemons.length) {
      this.setState({ index: 0 })
      return 0;
    } 
    return index;
  }

  render() {
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <Pokedex pokemons={pokemons[this.verifyIndex(this.state.index)]} />
        <button onClick={this.changePokemon}>Próximo</button>
      </div>
    );
  }
}


export default App;