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
      <form
        id="registration-form"
        acceptCharset="UTF-8"
      >
        <legend>Registrer ny koker</legend>
        <input
          id="signup-name-field"
          type="text"
          placeholder="Fullt Navn"
          value={this.state.name}
          spellCheck="false"
          onChange={this.handleChange.bind(this)}
        />

        <br />

        <input type="radio" className="study-option" id="komtek" name="study-options" checked="checked" />

        <label htmlFor="data">Data</label>
        <input type="radio" className="study-option" id="data" name="study-options" />

      </form>
    );
  }
}

export default Registration;
