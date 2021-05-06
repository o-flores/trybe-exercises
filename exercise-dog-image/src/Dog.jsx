import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Dog extends Component {
  render() {
    const { image } = this.props;
    return (
      <div className="dogContainer">
        <h1>Dog de respeito</h1>
        <img className="dogPhoto" src={ image } alt="" />
      </div>
    );
  }
}

Dog.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Dog;
