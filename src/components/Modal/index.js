import React from 'react';
import './Modal.css';
import axios from 'axios';

const fetchQRCode = () => {
  axios.get('http://localhost:3000/users/').then(res => console.log(res));
};


const Modal = () => (
  <div className="overlay">
    <div className="inner-modal">
      <p className="modal-text">Scan koden</p>
      <p className="modal-text">Eller gå inn på linken</p>
      <a className="modal-link" href="nrk.no">http://kaffe.koskom.no/register/AB48F6</a>
      {fetchQRCode()}
    </div>

  </div>
);


export default Modal;
