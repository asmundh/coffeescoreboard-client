import React from 'react';
import './ScoreboardPerson.css';
import {
  shape, number, string,
} from 'prop-types';

const coffeeIcon = require('../../public/coffeeIcon.svg').default;

const ScoreboardPerson = (props) => {
  const { person, index } = props;
  return (
    <div className="ScoreboardPerson">
      <div className="scoreboard-text">{index + 1}</div>
      <div className="scoreboard-text">{person.name}</div>
      <div className="score">
        <div className="scoreText">
          {person.kaffeScore}
        </div>
        <img src={coffeeIcon} alt="Icon of a coffee can" width="37" height="37" />
      </div>
    </div>
  );
};

ScoreboardPerson.propTypes = {
  person: shape(
    {
      name: string,
      rfid: string,
      score: number,
      rank: number,
      litresBrewed: number,
      gramsOfCoffee: number,
    },
  ).isRequired,
  index: number.isRequired,
};

export default ScoreboardPerson;
