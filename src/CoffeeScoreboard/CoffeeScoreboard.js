import React, { Component } from 'react';
import ScoreboardPerson from './CoffeeScoreboardPerson';

class CoffeeScoreboard extends Component {
  testData = [{
    name: 'åsmund',
    rfid: 1234,
    score: 24,
    rank: 1,
  }, {
    name: 'åsmund',
    rfid: 1234,
    score: 24,
    rank: 1,
  }];

  renderScoreboard() {
    // const { data } = this.props;
    return this.testData.map(entry => (
      <ScoreboardPerson person={entry} />
    ));
  }

  render() {
    return (
      <div className="Scoreboard">
        <p>Hei</p>
        <p>{this.renderScoreboard()}</p>
      </div>
    );
  }
}


export default CoffeeScoreboard;
