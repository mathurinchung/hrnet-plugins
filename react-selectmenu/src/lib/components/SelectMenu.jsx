import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './SelectMenu.css';

function SelectMenu({ id, options, onChange }) {
  const [ visible, setVisible ] = useState(false);
  const [ option, setOption ] = useState(options[0].option);
  const selectMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = event => {
      if (selectMenuRef.current && !selectMenuRef.current.contains(event.target)) setVisible(false);
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleOption = event => {
    setOption(event.target.getAttribute('data-option'));
    const value = event.target.getAttribute('data-value');

    onChange({ target: { value }, currentTarget: { name: id, value } });
    setVisible(false);
  };

  return (
    <div className="select-menu" ref={ selectMenuRef }>
      <button id={ id } className="select-menu-button" type="button" onClick={ () => setVisible(!visible) }>
        <span className="select-menu-value">{ option }</span><i className="icon-dropdown"></i>
      </button>
      { visible && (
        <ul className="select-list">
          { options.map(item => <li key={ item.option } data-option={ item.option } data-value={ item.value } onClick={ handleOption }>{ item.option }</li>) }
        </ul>
      )}
    </div>
  );
}

SelectMenu.propTypes = {
  id: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SelectMenu;
