import React from 'react';
import './Modal.css';


const Modal = (props) => {
  const { children } = props;
  return (
    <div className="overlay">
      {children}
    </div>
  );
};

export default Modal;
