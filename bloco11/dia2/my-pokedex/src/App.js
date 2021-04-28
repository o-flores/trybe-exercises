import Pokedex from './Components/Pokedex'
import pokemons from './data'
import '../src/App.css';

function App() {
  return (
    <div>
      <h1>Pokemons</h1>
      <Pokedex pokemons={pokemons} />
    </div>
  )
}

export default App;
