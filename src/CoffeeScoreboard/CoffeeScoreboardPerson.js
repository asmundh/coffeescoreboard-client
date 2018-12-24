import React, { Component } from 'react';
import { object, objectOf } from 'prop-types';
import './CoffeeScoreboardPerson.css';

class ScoreboardPerson extends Component {
  static propTypes = {
    person: objectOf(object),
  }

  static defaultProps = {
    person: { name: 'Abakule', rank: -1, score: 0 },
  }

  render() {
    const { person, index } = this.props;
    return (
      <div className="ScoreboardPerson" index={index}>
        <div id="rank">{person.rank}</div>
        <div id="name">{person.name}</div>
        <div id="score">
          {person.score}
          { ' kaffer traktet'}
        </div>
      </div>
    );
  }
}


/*

const ScoreboardPerson = () =>
  // const { name, score, rank } = this.props.person;
     <div className="ScoreboardPerson">
      <div id="rank">{rank}</div>
      <div id="name">{name}</div>
      <div id="score">{score}</div>
    </div>
);

*/
export default ScoreboardPerson;
