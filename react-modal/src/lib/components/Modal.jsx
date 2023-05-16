import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

function Modal({ id, isVisible, onClose, children }) {
  return isVisible && (
    <div className="bg-modal" onClick={ onClose }>
      <div id={ id } className="modal">
        <button className="close-modal" onClick={ onClose }><i className="icon-close"></i></button>
        { children }
      </div>
    </div>
  );
}

Modal.propTypes = {
  id: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default Modal;
