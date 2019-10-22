/* eslint-disable object-shorthand */
import React, { Component } from 'react';
import './Registration.css';
import Axios from 'axios';
import { objectOf, string } from 'prop-types';

import RadioButtons from '../components/RadioButtons';
import Header from '../Header';

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: undefined,
      study: undefined,
      studyOptions: ['Data', 'Komtek'],
      yearOptions: ['1.', '2.', '3.', '4.', '5.'],
      year: undefined,
      headerTitle: 'Registrer ny koker',
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleYearOption = this.handleYearOption.bind(this);
    this.handleStudyOption = this.handleStudyOption.bind(this);
  }

  handleNameChange(nameVal) {
    this.setState({ name: nameVal });
  }

  handleStudyOption(value) {
    this.setState({
      study: value,
    });
  }

  handleYearOption(value) {
    this.setState({
      year: value,
    });
  }

  handleSubmit() {
    const {
      name, study, year,
    } = this.state;
    const { match } = this.props;
    Axios.post('http://localhost:3000/users', {
      name: name,
      study: study,
      rfid: match.params.rfid,
      kaffeScore: 0,
      year: parseInt(`${year}`.substr(0, 1), 10),
    });
  }

  render() {
    const {
      name, studyOptions, yearOptions, headerTitle,
    } = this.state;
    return (
      <>
        <Header headerTitle={headerTitle} />
        <div
          className="registration-form"
          acceptCharset="UTF-8"
        >
          <p className="user-question">Vi trenger å vite tre ting om deg</p>
          <p className="user-question">Hva heter du?</p>
          <input
            className="signup-name-field"
            type="text"
            placeholder="Navn"
            name={name}
            spellCheck="false"
            onChange={event => this.handleNameChange(event.target.value)}
          />

          <p className="user-question">Hva går du?</p>
          <RadioButtons
            buttonOptions={studyOptions}
            onChoice={this.handleStudyOption}
          />

          <p className="user-question">Hvilket årstrinn går du?</p>
          <RadioButtons
            buttonOptions={yearOptions}
            onChoice={this.handleYearOption}
          />

          <p
            className="register-user"
            role="button"
            onClick={() => this.handleSubmit()}
            onKeyDown={() => this.handleSubmit()}
          >
Registrer

          </p>
        </div>

      </>
    );
  }
}

Registration.propTypes = {
  match: objectOf(string).isRequired,
};

export default Registration;
