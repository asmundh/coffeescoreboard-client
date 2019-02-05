import React from 'react';
import './ScoreboardPerson.css';
import {
  shape, number, string,
} from 'prop-types';

const ScoreboardPerson = (props) => {
  const { person, index } = props;
  console.log(person);
  return (
    <div className="ScoreboardPerson">
      <div id="rank">{index + 1}</div>
      <div id="name">{person.name}</div>
      <div id="score">
        {person.score}
        { ' kanner traktet'}
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
