import React, { Component } from 'react';
import { object, objectOf } from 'prop-types';

class ScoreboardPerson extends Component {
  static propTypes = {
    person: objectOf(object),
  }

  static defaultProps = {
    person: { name: 'Abakule', rank: 1, score: 10 },
  }

  testData = {
    name: 'åsmund',
    rfid: 1234,
    score: 24,
    rank: 1,
  };

  render() {
    const { person } = this.props;
    return (
      <div className="ScoreboardPerson">
        <p id="rank">{person.rank}</p>
        <p id="name">{this.testData.name}</p>
        <p id="score">{this.testData.score}</p>
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
