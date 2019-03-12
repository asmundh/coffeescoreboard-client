import React from 'react';
import './ScoreboardPerson.css';
import {
  shape, number, string,
} from 'prop-types';

const coffeesTracted = (amount) => {
  if (amount === 1) {
    return ' kanne traktet';
  }
  return ' kanner traktet';
};

const ScoreboardPerson = (props) => {
  const { person, index } = props;
  return (
    <div className="ScoreboardPerson">
      <div id="rank">{index + 1}</div>
      <div id="name">{person.name}</div>
      <div id="score">
        {person.kaffeScore}
        {coffeesTracted(person.kaffeScore)}
      </div>
      <div id="kilos-used">
        {Math.round(person.kaffeScore * 0.105 * 100) / 100}
        {' kilo kaffepulver brukt'}
      </div>
      <div id="litres-tracted">
        {Math.round(person.kaffeScore * 2.2 * 100) / 100}
        {' liter traktet'}
      </div>
    </div>
  );
};


ScoreboardPerson.propTypes = {
  person: shape(
    {
      name: string,
      rfid: number,
      score: number,
      rank: number,
      litresBrewed: number,
      gramsOfCoffee: number,
    },
  ).isRequired,
  index: number.isRequired,
};

export default ScoreboardPerson;
