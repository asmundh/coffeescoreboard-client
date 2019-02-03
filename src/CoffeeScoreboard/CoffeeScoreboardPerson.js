import React, { Component } from 'react';
import { object, objectOf } from 'prop-types';
import './CoffeeScoreboardPerson.css';

class ScoreboardPerson extends Component {
  static propTypes = {
    person: objectOf(object),
  }

  static defaultProps = {
    person: { name: 'Abakule', rank: -1, score: 0 },
  }

  render() {
    const { person, index } = this.props;
    return (
      <div className="ScoreboardPerson" index={index}>
        <div id="rank">{index + 1}</div>
        <div id="name">{person.name}</div>
        <div id="score">
          {person.score}
          { ' kaffer traktet'}
        </div>
      </div>
    );
  }
}

export default ScoreboardPerson;
