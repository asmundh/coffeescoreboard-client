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
    rank: 1,
  }, {
    name: 'Sara',
    rfid: 12320,
    score: 19,
    rank: 2,
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
