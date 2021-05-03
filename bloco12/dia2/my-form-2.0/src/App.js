import React from 'react';
import Form from './Components/Form'
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      cpf: '',
      adress: '',
      city: '',
    }
  }

  changeHandler = (event) => {
    let { name, value } = event.target;
    if (name === 'name') value = value.toUpperCase();

    this.setState( {
      [name]: value,
    });
  }
  render() {
    return (
      <Form changeHandler={this.changeHandler} state={this.state}/>
        
    )
  }
}

export default App;
