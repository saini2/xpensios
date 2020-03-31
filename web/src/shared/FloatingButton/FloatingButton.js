// React Imports
import React from 'react';

// Node Modules Imports
import PropTypes from 'prop-types';

// Style Imports and Asset Import
import s from './FloatingButton.module.scss';
import {IoIosAdd} from "react-icons/io";

const FloatingButton = props => {
  return (
    <div className={`${s.floatingButton} ${props.classNameOuter}`}>
      <button
        onClick={props.onClick}
        className={`${s.button} ${props.classNamesStr}`}
      >
        {' '}
        {!props.noImage && <IoIosAdd size = {30}/>}
      </button>
    </div>
  );
};

export default FloatingButton;

FloatingButton.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string
};

FloatingButton.defaultProps = {
  status: 'inactive',
  onClickHnadler: () => {}
};
