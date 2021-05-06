import React, { Component } from 'react';

class Dog extends Component {
  render() {
    const { object } = this.props;
    return (
      <div className="dogContainer">
        <h1>Dog de respeito</h1>
        <img className="dogPhoto" src={ object } alt="" />
      </div>
    );
  }
}

export default Dog;
