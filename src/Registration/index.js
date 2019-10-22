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
      submitted: false,
      badSubmitText: undefined,
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
    if (name && study && year && match.params.rfid) {
      Axios.post('http://localhost:3000/users', {
        name: name,
        study: study,
        rfid: match.params.rfid,
        kaffeScore: 0,
        year: parseInt(`${year}`.substr(0, 1), 10),
      }).then((res) => {
        if (res.status === 201) {
          this.setState({ badSubmitText: undefined });
          this.setState({ submitted: true });
          console.log('TODO: Send tilbake til scoreboard');
        }
      }, (error) => {
        this.setState({ badSubmitText: 'Noe gikk gærent på backenden!' }); // TODO: Håndter så badSubmitText vises på frontenden ved feil på backend
      });
    } else {
      this.setState({ badSubmitText: 'Ugyldig informasjon!' });
      this.setState({ submitted: false });
    }
  }

  renderBadSubmit() {
    const { badSubmitText } = this.state;
    if (badSubmitText) {
      return (
        <p className="user-warning">{badSubmitText}</p>
      );
    }
    return <React.Fragment />;
  }

  render() {
    const {
      name, studyOptions, yearOptions, headerTitle, submitted,
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
            role="button"
            onClick={() => { this.handleSubmit(); }}
            className={`register-user${submitted ? '-selected' : ''}`}
            onKeyDown={() => this.handleSubmit()}
          >
            Registrer
          </p>
          {this.renderBadSubmit()}
        </div>

      </>
    );
  }
}

Registration.propTypes = {
  match: objectOf(string).isRequired,
};

export default Registration;
