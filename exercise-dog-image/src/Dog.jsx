import React, { Component } from 'react';

class Dog extends Component {
  render() {
    const { object, onClick } = this.props;
    return (
      <div className="dogContainer">
        <h1>Dog de respeito</h1>
        <img className="dogPhoto" src={ object } alt="" />
        <button type="button" onClick={ onClick }>Next Dog</button>
      </div>
    );
  }
}

export default Dog;
