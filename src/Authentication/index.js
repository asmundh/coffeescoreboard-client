import React, { Component } from 'react';
import './Registration.css';


class Registration extends Component {
  constructor() {
    super();
    this.state = {
      name: undefined,
      study: undefined,
      rfid: undefined,
      studyOptions: ['data', 'komtek'],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const change = { [event.target.name]: event.target.value };
    this.setState(change);
  }

  handleSubmit(event) {
    alert(`This was submitted: ${this.state}`);
    event.preventDefault();
  }

  render() {
    return (
      <form id="registration-form">
        <h2>Registrer ny koker</h2>

        <div id="signup-name">
          <label id="signup-name-field" className="sign-up-field">Fullt navn </label>
          <input
            id="signup-name-field"
            type="text"
            placeholder="Navn Navnesen"
            value={this.state.name}
            onChange={this.handleChange.bind(this)}
          />
        </div>

        <br />

        <label id="signup-study-field" className="sign-up-field">Hva studerer du? </label>
        <div id="signup-study">
          <label htmlFor="komtek">Komtek</label>
          <input type="radio" className="study-option" id="komtek" name="study-options" checked="checked" />

          <label htmlFor="data">Data</label>
          <input type="radio" className="study-option" id="data" name="study-options" />
        </div>

      </form>
    );
  }
}

export default Registration;
