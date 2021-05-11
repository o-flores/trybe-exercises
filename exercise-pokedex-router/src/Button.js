import React from 'react';
import './button.css'

class Button extends React.Component {
    render() {

      const { type, onClick } = this.props;


        return (
         <button className='button' onClick={ onClick } >{type}</button>
        );
    }
}

export default Button;