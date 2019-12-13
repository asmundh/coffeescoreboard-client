import React from 'react';
import './Modal.css';
import { string } from 'prop-types';


const generateLink = (rfidToLink) => {
  console.log(rfidToLink);
  const urlToLink = `http://localhost:8089/register/${rfidToLink}`;
  const qrParams = '&size=172x172&color=422b08&bgcolor=ddad74&format=svg';
  return `https://api.qrserver.com/v1/create-qr-code/?data=${urlToLink}${qrParams}`;
};


const Modal = (props) => {
  const { rfid } = props;
  return (
    <div className="overlay">
      <div className="inner-modal">
        <p className="modal-text">Scan koden</p>
        <svg width="172" height="172">
          <image xlinkHref={generateLink(rfid)} width="172" height="172" />
        </svg>
        <br />
        <p className="modal-text">Eller gå inn på</p>
        <a className="modal-link" href={`http://localhost:8089/register/${rfid}`}>{`http://localhost:8089/register/${rfid}`}</a>
      </div>
    </div>
  );
};

Modal.propTypes = {
  rfid: string.isRequired,
};


export default Modal;
