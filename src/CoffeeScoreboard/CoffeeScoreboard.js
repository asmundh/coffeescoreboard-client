import React, { Component } from 'react';
import ScoreboardPerson from './ScoreboardPerson';
import './CoffeeScoreboard.css';

const data = require('../../public/sampleData.json');


class CoffeeScoreboard extends Component {
  sortJSON = (JSONobject, keyToSortBy) => {
    const sortedPeople = JSONobject.sort((obj1, obj2) => obj2[keyToSortBy] - obj1[keyToSortBy]);
    for (let x = 0; x < sortedPeople.length; x += 1) {
      sortedPeople[x].rank = x + 1;
    }
    return sortedPeople;
  };

  renderScoreboard() {
    return this.sortJSON(data, 'score').map((entry, index) => (
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
