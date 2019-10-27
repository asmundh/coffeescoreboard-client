import React, { Component } from 'react';
import axios from 'axios';
import ScoreboardPerson from './ScoreboardPerson';
import './CoffeeScoreboard.css';
import { socket } from '../App';
import { CoffeeBrewedEvent, CardNotFoundEvent } from '../websocket/event';
import Header from '../Header';
import Modal from '../components/Modal';


// const data = require('../../public/sampleData.json');

const fetchScores = () => axios
  .get('http://localhost:3000/users/')
  .then(response => response.data);

class CoffeeScoreboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scoreboard: [{
        _id: '123',
        name: 'Laget av Åsmund Haugse',
        study: 'data',
        rfid: '1337',
        kaffeScore: 1,
      }],
      headerTitle: 'Største kaffekokerne i Abakus',
      showModal: false,
      rfidToLink: null,
    };
  }


  componentDidMount() {
    this.fetchScores();
    socket.on(CoffeeBrewedEvent, this.onCoffeeBrewed.bind(this));
    socket.on(CardNotFoundEvent, data => this.onCardNotFound(data).bind(this));
  }

  componentWillUnmount() {
    socket.off(CoffeeBrewedEvent, this.onCoffeeBrewed);
  }

  onCoffeeBrewed() {
    console.log('Refreshing scores');
    this.fetchScores();
  }

  onCardNotFound(data) {
    console.log(data);
    this.setState({ showModal: true, rfidToLink: data.rfid });

    setTimeout(() => {
      this.setState({ showModal: false });
    }, 10 * 1000);
  }


  sortJSON = (JSONobject, keyToSortBy) => {
    // Legal keys: kaffeScore, rfid
    const sortedPeople = JSONobject.sort((obj1, obj2) => obj2[keyToSortBy] - obj1[keyToSortBy]);
    for (let x = 0; x < sortedPeople.length; x += 1) {
      sortedPeople[x].rank = x + 1;
    }
    return sortedPeople;
  };

  displayModal() {
    const { showModal, rfidToLink } = this.state;
    console.log(rfidToLink);
    if (showModal) {
      return <Modal rfid={rfidToLink} />;
    }
    return <></>;
  }

  fetchScores() {
    fetchScores().then((scores) => {
      this.setState({ scoreboard: scores });
    });
  }

  renderScoreboard() {
    const { scoreboard } = this.state;
    return this.sortJSON(scoreboard, 'kaffeScore').map((entry, index) => (
      <ScoreboardPerson person={entry} index={index} />
    ));
  }

  render() {
    const { headerTitle } = this.state;
    return (
      <>
        <Header headerTitle={headerTitle} />
        <div className="Scoreboard">
          {this.renderScoreboard()}
        </div>
        {this.displayModal()}
      </>
    );
  }
}


export default CoffeeScoreboard;
