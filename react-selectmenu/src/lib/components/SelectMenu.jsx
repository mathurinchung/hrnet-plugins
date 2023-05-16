import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SelectMenu.css';

function SelectMenu({ id, options, onChange }) {
  const [ visible, setVisible ] = useState(false);
  const [ option, setOption ] = useState(options[0].option);

  const handleOption = event => {
    setOption(event.target.getAttribute('data-option'));
    const value = event.target.getAttribute('data-value');

    onChange({ currentTarget: { name: id, value } });
    setVisible(false);
  };

  return (
    <>
      <button id={ id } className="select-menu" type="button" onClick={ () => setVisible(!visible) }>
        <span className="select-menu-value">{ option }</span><i className="icon-dropdown"></i>
      </button>
      { visible && (
        <ul className="select-list">
          { options.map(item => <li key={ item.option } data-option={ item.option } data-value={ item.value } onClick={ handleOption }>{ item.option }</li>) }
        </ul>
      )}
    </>
  );
}

SelectMenu.propTypes = {
  id: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SelectMenu;
