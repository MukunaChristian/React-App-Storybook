import React from "react";
import PropTypes from 'prop-types';

import "./button.css";


export const Button = ({inputValue, setInputValue, handleSubmit,text, primary, backgroundColor, size, label}) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <>
      <button
        onClick={handleSubmit}
        className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
        style={backgroundColor && { backgroundColor , marginLeft:'100px'}}
      >
        {label}
      </button>
    </>
  );
};

export default Button;

Button.propTypes = {

  primary: PropTypes.bool,

  backgroundColor: PropTypes.string,

  size: PropTypes.oneOf(['small', 'medium', 'large']),

  label: PropTypes.string.isRequired,

  onClick: PropTypes.func,
};
Button.defaultProps = {
  backgroundColor: null,
  primary: true,
  size: 'medium',
  onClick: undefined,
};
