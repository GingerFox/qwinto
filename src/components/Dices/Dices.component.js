import React, { Component } from 'react';
import { Button, Dice, DiceSpan } from './Dices.styles';

class Dices extends Component {
  state = {
    dices: [
      {
        name: 'Red',
        color: '#f46242',
        value: 0,
        active: true,
      },
      {
        name: 'Purple',
        color: '#af41f4',
        value: 0,
        active: true,
      },
      {
        name: 'Yellow',
        color: '#f5f76c',
        value: 0,
        active: true,
      },
    ],
  };

  throwDices = () => {
    const newDices = this.state.dices.map(d => {
      if (d.active) {
        return {
          ...d,
          value: Math.floor(Math.random() * Math.floor(6)) + 1,
        };
      }
      return d;
    });
    this.setState({
      dices: newDices,
    });
  };

  toggleActive = event => {
    const diceIndexToToggle = event.target.name;
    const state = this.state;
    state.dices[diceIndexToToggle].active = !state.dices[diceIndexToToggle]
      .active;
    this.setState(state);
  };

  render() {
    const { dices } = this.state;
    return (
      <div>
        <Button onClick={this.throwDices}>Lancer les dés</Button>
        {dices.map((d, i) => (
          <Dice>
            <input
              name={i}
              type="checkbox"
              checked={d.active}
              onChange={this.toggleActive}
            />
            <DiceSpan color={d.color}>{d.value}</DiceSpan>
          </Dice>
        ))}
        <div>
          Total :
          {dices.reduce((acc, dice) => {
            if (dice.active) {
              return acc + dice.value;
            }
            return acc;
          }, 0)}
        </div>
      </div>
    );
  }
}

export default Dices;
