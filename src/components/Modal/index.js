import React from 'react';
import './Modal.css';

const urlToLink = 'http://localhost:3000/register/C05FAB66';
const qrParams = '&size=172x172&color=422b08&bgcolor=ddad74&format=svg';
const qrApiLink = `https://api.qrserver.com/v1/create-qr-code/?data=${urlToLink}${qrParams}`;

const Modal = () => (
  <div className="overlay">
    <div className="inner-modal">
      <p className="modal-text">Scan koden</p>
      <svg width="172" height="172">
        <image xlinkHref={qrApiLink} width="172" height="172" />
      </svg>
      <br />
      <p className="modal-text">Eller gå inn på linken</p>
      <a className="modal-link" href="nrk.no">{urlToLink}</a>
    </div>
  </div>
);


export default Modal;
