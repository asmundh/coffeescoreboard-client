import React, { Component } from 'react';
import axios from 'axios';
import ScoreboardPerson from './ScoreboardPerson';
import './CoffeeScoreboard.css';

// const data = require('../../public/sampleData.json');


class CoffeeScoreboard extends Component {
  constructor() {
    super();
    this.state = {
      scoreboard: [{
        _id: '123',
        name: 'Laget av Åsmund Haugse',
        study: 'data',
        rfid: 1337,
        kaffeScore: 1,
      }],
    };
  }


  componentDidMount() {
    axios
      .get('http://localhost:3000/users/')
      .then((response) => {
        // console.log(response.data);
        this.setState({ scoreboard: response.data });
      });
  }

  sortJSON = (JSONobject, keyToSortBy) => {
    // Legal keys: kaffeScore, rfid
    const sortedPeople = JSONobject.sort((obj1, obj2) => obj2[keyToSortBy] - obj1[keyToSortBy]);
    for (let x = 0; x < sortedPeople.length; x += 1) {
      sortedPeople[x].rank = x + 1;
    }
    return sortedPeople;
  };

  renderScoreboard() {
    return this.sortJSON(this.state.scoreboard, 'kaffeScore').map((entry, index) => (
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
