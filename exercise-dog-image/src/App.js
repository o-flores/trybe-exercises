import React from 'react';
import './App.css';
import Dog from './Dog';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dogObject: '',
      name: '',
      array: [],
    };
    this.fetchDog = this.fetchDog.bind(this);
    this.saveDog = this.saveDog.bind(this);
    this.onChangeDogName = this.onChangeDogName.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount() {
    if (localStorage.dogs) {
      const dogsObject = JSON.parse(localStorage.dogs);
      const lastDogMessage = dogsObject[dogsObject.length - 1].message;
      this.updateState(dogsObject, lastDogMessage);
    } else {
      this.fetchDog();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.dogObject.message.includes('terrier')) {
      return false;
    }
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    const { dogObject } = this.state;
    if (prevState.dogObject !== dogObject) {
      const breed = dogObject.message.split('/')[4];
      alert(breed);
    }
  }

  onChangeDogName(event) {
    const { value } = event.target;
    this.setState({ name: value });
  }

  updateState(object, array) {
    this.setState({ dogObject: { message: array }, array: object });
  }

  async fetchDog() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    this.setState({ dogObject: data });
  }

  saveDog() {
    const { name, array, dogObject: { message } } = this.state;
    const dogInfo = { message, name };
    const newArray = [...array, dogInfo];
    this.setState({ name: '', array: newArray });
    localStorage.setItem('dogs', JSON.stringify(newArray));
  }

  render() {
    const { dogObject } = this.state;
    if (dogObject === '') return '...loading';
    return (
      <div>
        <div className="App">
          <Dog image={ dogObject.message } onClick={ this.fetchDog } />
          <button type="button" onClick={ this.fetchDog }>Next Dog</button>
        </div>
        <div>
          <input
            type="text"
            placeholder="digite um nome para o dog"
            onChange={ this.onChangeDogName }
          />
          <button type="button" onClick={ this.saveDog }>Save Dog</button>
        </div>
      </div>
    );
  }
}

export default App;
