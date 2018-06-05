import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChooseItem from './ChooseItem';
import styles from './Player.css';

export default class Player extends Component {

  static = {
    propTypes: {
      player: PropTypes.object.isRequired,
      onUse: PropTypes.func.isRequired,
      onNameChange: PropTypes.func.isRequired
    }
  };

  state = {
    editing: false
  };

  handleEdit = () => {
    this.setState(prev => ({ editing: !prev.editing }));
  };

  render() {
    const { editing } = this.state;
    const { player, onUse, onNameChange } = this.props;
    const { name, inventory } = player;

    return (
      <div className={styles.player}>
        {editing ? 
          <input value={name} onChange={({ target }) => onNameChange(target.value)}/> :
          <span>{name}</span>
        }
        &nbsp;
        <button onClick={this.handleEdit}>{editing ? 'X' : '✎'}</button>
        <ChooseItem items={inventory} onChoose={onUse}/>
      </div>
    ); 
  }
}