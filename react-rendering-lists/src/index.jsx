import React from 'react';
import ReactDOM from 'react-dom';

class Pokemon extends React.Component {
  render() {
    const pokedex = [
      { number: '001', name: 'Bulbasaur' },
      { number: '004', name: 'Charmander' },
      { number: '007', name: 'Squirtle' },
      { number: '025', name: 'Pikachu' },
      { number: '039', name: 'Jigglypuff' }
    ];
    const listPokemon = pokedex.map(pokemon =>
      <li key={pokemon.number}>{pokemon.name}</li>);
    return (
      <ul>{listPokemon}</ul>
    );
  }
}

ReactDOM.render(<Pokemon />, document.querySelector('#root'));
