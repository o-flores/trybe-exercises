import React from 'react';
import { getRedditPostsThunk } from '../actions'; 
import { connect } from 'react-redux';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
    }
  }

  handleClick = async () => {
    const { text } = this.state;
    const { fetchAPI } = this.props;
    fetchAPI(text);
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

const mapDispatchToProps = (dispatch) => ({
  fetchAPI: (text) => dispatch(getRedditPostsThunk(text))
})

export default connect(null, mapDispatchToProps)(SearchBar);
