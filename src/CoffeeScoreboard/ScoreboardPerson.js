import React from 'react';
import './CoffeeScoreboardPerson.css';

const ScoreboardPerson = ({ props }) => {
  const { person, index } = props;
  return (
    <div className="ScoreboardPerson" key={index}>
      <div id="rank">{index + 1}</div>
      <div id="name">{person.name}</div>
      <div id="score">
        {person.score}
        { ' kaffer traktet'}
      </div>
    </div>
  );
};


export default ScoreboardPerson;
