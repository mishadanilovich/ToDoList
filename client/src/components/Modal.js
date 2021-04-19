import React from 'react';
import '../style/Modal.css';

const Modal = props => {
  return (
    <div onClick={props.onDismiss} className="ui dimmer modals visible active">
      <div onClick={e => e.stopPropagation()} className="modal__box">
        <div className="modal__box-title">{props.title}</div>
        <div className="modal__box-content">{props.content}</div>
      </div>
    </div>
  );
};

export default Modal;
