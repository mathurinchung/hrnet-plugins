import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './SelectMenu.css';

/**
 * SelectMenu component.
 *
 * This is a reusable select menu component that takes an id, an array of options, and a callback function onChange as props.
 * Each option is an object that should have 'option' and 'value' properties. 
 * This component maintains its own state to control visibility of options and the current selected option.
 * 
 * @component
 *
 * @param { string } id - The id of the select menu.
 * @param { Array.<{ option: string, value: string }> } options - An array of options for the select menu.
 * @param { function } onChange - A callback function that gets triggered when an option is selected.
 * 
 * @returns { React.Element } The rendered SelectMenu component.
 *
 * @example
 * // options array
 * const options = [
 *    { option: 'Option 1', value: '1' },
 *    { option: 'Option 2', value: '2' }
 * ];
 * 
 * // Handle change function
 * const handleChange = (event) => console.log(event.target.value);
 * 
 * <SelectMenu id="example" options={options} onChange={handleChange} />
 */
function SelectMenu({ id, options, onChange }) {
  const [ visible, setVisible ] = useState(false);
  const [ option, setOption ] = useState(options[0].option);
  const selectMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = event => {
      (selectMenuRef.current && !selectMenuRef.current.contains(event.target)) && setVisible(false);
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
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
  options: PropTypes.arrayOf(PropTypes.shape({
    option: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  })).isRequired,
  onChange: PropTypes.func.isRequired
};

export default SelectMenu;
