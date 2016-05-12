/**
*
* Button
*
*/

import React from 'react';

import styles from './styles.css';

class Button extends React.Component {

  constructor(props) {
    super(props);
    this.state = { message: '' };
  }

  handleClick() {
  	this.setState({ message: 'clicked!' });
  }

  render() {
    return (
      <button onClick={this.handleClick.bind(this)} className={ styles.button }>
      	{this.props.children}{this.state.message}
      </button>
    );
  }
}

export default Button;
