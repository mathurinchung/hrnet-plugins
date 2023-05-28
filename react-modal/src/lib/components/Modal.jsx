import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

/**
 * Modal component for displaying content in a pop-up window.
 *
 * @component
 *
 * @param { String } id The unique identifier for the Modal component.
 * @param { Boolean } isVisible A boolean value that determines whether the modal is visible or not.
 * @param { Function } onClose The function to call when the user clicks outside the modal or on the close button.
 * @param { React.ReactNode } children The child elements to display within the modal content.
 *
 *  * @returns { React.Element } The rendered Modal component.
 */
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
