import React from 'react';
import redditAPI from '../services/redditAPI';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
    }
  }

  handleClick = async () => {
    const data = await redditAPI('reactjs')
    console.log(data.data.children);
  }

  render() {
    return (
      <div>
        <label htmlFor="textInput">
          Pesquisa:
          <input onChange={(e) => this.setState({ text: e.target.value })} type="text" name="textInput" />
        </label>
        <button type='button' onClick={this.handleClick}>Buscar</button>
      </div>
    )
  }
}

export default SearchBar;
