import React, { Component } from 'react';
import axios from 'axios';
import ScoreboardPerson from './ScoreboardPerson';
import './CoffeeScoreboard.css';
import { socket } from '../App';
import { CoffeeBrewedEvent, CardNotFoundEvent } from '../websocket/event';
import Header from '../Header';
import Modal from '../components/Modal';
import RegistrationModal from '../components/Modal/RegistrationModal';
import CoffeeBrewedModal from '../components/Modal/CoffeeBrewedModal';

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
      modalContent: null,
    };
  }

  componentDidMount() {
    this.fetchScores();
    socket.on(CoffeeBrewedEvent, data => this.onCoffeeBrewed(data));
    socket.on(CardNotFoundEvent, data => this.onCardNotFound(data));
  }

  componentWillUnmount() {
    socket.off(CoffeeBrewedEvent, this.onCoffeeBrewed);
  }

  onCoffeeBrewed(data) {
    const { score, name } = data.brewerInfo;
    this.fetchScores();
    this.setState({ modalContent: <CoffeeBrewedModal score={score} name={name} /> });
    this.setState({ showModal: true });
    setTimeout(() => {
      this.setState({ showModal: false });
    }, 10 * 1000);
  }

  onCardNotFound = (data) => {
    this.setState({ modalContent: <RegistrationModal rfid={data.rfid} /> });
    this.setState({ showModal: true });

    setTimeout(() => {
      this.setState({ showModal: false });
    }, 10 * 1000);
  }

  sortJSON = (JSONobject, keyToSortBy) => {
    // Legal keys: kaffeScore, rfid
    const sortedPeople = JSONobject.sort((obj1, obj2) => obj2[keyToSortBy] - obj1[keyToSortBy]);
    return sortedPeople;
  };

  displayModal() {
    const { showModal, modalContent } = this.state;
    if (showModal) {
      return (
        <Modal>
          {modalContent}
        </Modal>
      );
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
      <ScoreboardPerson person={entry} index={index} key={entry._id} />
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
