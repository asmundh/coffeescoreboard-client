import React from 'react';
import './Modal.css';
import { string } from 'prop-types';
import QRCodeWrapper from './QRCodeWrapper';


const generateLink = (rfidToLink) => {
  console.log(rfidToLink);
  return `http://localhost:8089/register/${rfidToLink}`;
};


const Modal = (props) => {
  const { rfid } = props;
  return (
    <div className="overlay">
      <div className="inner-modal">
        <p className="modal-text">Scan koden</p>
        <QRCodeWrapper urlToLink={generateLink(rfid)} />
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
