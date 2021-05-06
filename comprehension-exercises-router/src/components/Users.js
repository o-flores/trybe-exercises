import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Users extends Component {
  render() {
    const { greetingMessage, match: { params: { id } }  } = this.props;
    console.log(this.props);
    return (
      <main>
        <h2> Users </h2>
        <p> { greetingMessage } User { id }, this is my awesome Users component</p>
        <Link to='/'>Home</Link>
      </main>
    );
  }
}

export default Users;
