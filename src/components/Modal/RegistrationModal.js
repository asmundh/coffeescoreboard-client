import React from 'react';
import './Modal.css';
import { string, arrayOf } from 'prop-types';
import QRCodeWrapper from './QRCodeWrapper';


const generateLink = (rfidToLink) => {
  console.log(rfidToLink);
  return `http://localhost:8089/register/${rfidToLink}`;
};


const RegistrationModal = (props) => {
  const { rfid } = props;
  return (
    <div className="inner-modal">
      <p className="modal-text">Scan koden</p>
      <QRCodeWrapper urlToLink={generateLink(rfid)} />
      <br />
      <p className="modal-text">Eller gå inn på</p>
      <a className="modal-link" href={`http://localhost:8089/register/${rfid}`}>{`http://localhost:8089/register/${rfid}`}</a>
    </div>
  );
};

RegistrationModal.propTypes = {
  rfid: string.isRequired,
};


export default RegistrationModal;
