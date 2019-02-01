import React, { Component } from 'react';
import ScoreboardPerson from './CoffeeScoreboardPerson';
import './CoffeeScoreboard.css';

class CoffeeScoreboard extends Component {
  testData = [{
    name: 'åsmund',
    rfid: 1234,
    score: 24,
    rank: 1,
  }, {
    name: 'Sara',
    rfid: 12320,
    score: 19,
    rank: 2,
  },
  {
    name: 'åsmund',
    rfid: 1234,
    score: 24,
    rank: 3,
  },
  {
    name: 'åsmund',
    rfid: 1234,
    score: 24,
    rank: 4,
  },
  {
    name: 'åsmund',
    rfid: 1234,
    score: 24,
    rank: 5,
  },
  {
    name: 'åsmund',
    rfid: 1234,
    score: 24,
    rank: 6,
  }, {
    name: 'Sara',
    rfid: 12320,
    score: 19,
    rank: 7,
  },
  {
    name: 'åsmund',
    rfid: 1234,
    score: 24,
    rank: 8,
  }, {
    name: 'Sara',
    rfid: 12320,
    score: 19,
    rank: 9,
  },
  {
    name: 'åsmund',
    rfid: 1234,
    score: 24,
    rank: 10,
  }, {
    name: 'Sara',
    rfid: 12320,
    score: 19,
    rank: 11,
  }];

  renderScoreboard() {
    // const { data } = this.props;
    return this.testData.map((entry, index) => (
      <ScoreboardPerson person={entry} index={index} />
    ));
  }

  render() {
    return (
      <div className="Scoreboard">
        {this.renderScoreboard()}
      </div>
    );
  }
}


export default CoffeeScoreboard;
