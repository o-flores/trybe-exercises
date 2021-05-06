import React from 'react';
import './App.css';
import Dog from './Dog';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dogObject: '',
    };
    this.fetchDog = this.fetchDog.bind(this);
  }

  componentDidMount() {
    this.fetchDog();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.dogObject === '') {
      return true;
    }
    if (nextState.dogObject.message.includes('terrier')) {
      return false;
    }
    return true;
  }

  componentDidUpdate() {
    const { dogObject } = this.state;
    // console.log(dogObject);
    localStorage.setItem('dogURL', dogObject.message);
    if (dogObject !== '') {
      const breed = dogObject.message.split('/')[4];
      alert(breed);
    }
  }

  async fetchDog() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    this.setState({ dogObject: data });
  }

  render() {
    const { dogObject } = this.state;
    if (dogObject === '') return '...loading';
    return (
      <div className="App">
        <Dog object={ dogObject.message } onClick={ this.fetchDog } />
        <button type="button" onClick={ this.fetchDog }>Next Dog</button>
      </div>
    );
  }
}

export default App;
