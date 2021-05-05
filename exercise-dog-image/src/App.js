import React from 'react';
import './App.css';
import Dog from './Dog';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dogObject: '',
      loading: true,
    };
    this.fetchDog = this.fetchDog.bind(this);
  }

  componentDidMount() {
    this.fetchDog();
  }

  async fetchDog() {
    this.setState({ loading: true });
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    this.setState({ loading: false, dogObject: data });
  }

  render() {
    const { loading, dogObject } = this.state;
    return (
      <div className="App">
        { loading ? '...loading' : <Dog object={ dogObject.message } onClick={ this.fetchDog } />}
      </div>
    );
  }
}

export default App;
