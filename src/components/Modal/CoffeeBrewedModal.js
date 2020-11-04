import React from 'react';
import './Modal.css';
import { string, number } from 'prop-types';


const CoffeeBrewedModal = (props) => {
  const { name, score } = props;
  console.log(score);
  return (
    <div className="inner-modal">
      <p className="modal-text">
        Godt jobbet,
        {}
        {` ${name}`}
      </p>
      <br />
      <p className="modal-text">
        Nå har du traktet
        {' '}
        {score === 1 ? `${score} kanne` : `${score} kanner`}
      </p>
    </div>
  );
};

CoffeeBrewedModal.propTypes = {
  name: string.isRequired,
  score: number.isRequired,
};


export default CoffeeBrewedModal;
