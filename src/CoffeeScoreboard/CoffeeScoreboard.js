import React, { Component } from 'react';
import axios from 'axios';
import ScoreboardPerson from './ScoreboardPerson';
import './CoffeeScoreboard.css';
import { socket } from '../App';
import { CoffeeBrewedEvent } from '../websocket/event';

// const data = require('../../public/sampleData.json');

const fetchScores = () => axios
  .get('http://localhost:3000/users/')
  .then(response => response.data);

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
    this.fetchScores();
    socket.on(CoffeeBrewedEvent, this.onCoffeeBrewed.bind(this));
  }

  componentWillUnmount() {
    socket.off(CoffeeBrewedEvent, this.onCoffeeBrewed);
  }

  onCoffeeBrewed() {
    console.log('Refreshing scores');
    this.fetchScores();
  }

  sortJSON = (JSONobject, keyToSortBy) => {
    // Legal keys: kaffeScore, rfid
    const sortedPeople = JSONobject.sort((obj1, obj2) => obj2[keyToSortBy] - obj1[keyToSortBy]);
    for (let x = 0; x < sortedPeople.length; x += 1) {
      sortedPeople[x].rank = x + 1;
    }
    return sortedPeople;
  };

  fetchScores() {
    fetchScores().then((scores) => {
      this.setState({ scoreboard: scores });
    });
  }

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
