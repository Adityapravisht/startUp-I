import PropTypes from "prop-types";
import React from "react";

const MyButton = ({ type, className, disabled, name, onClick }) => {
  return (
    <button
      type={type}
      className={className}
      disabled={disabled || ""}
      onClick={onClick}
    >
      {disabled ? `${name} in...` : `${name}`}
    </button>
  );
};


MyButton.propTypes = {
  type:PropTypes.string,
  className:PropTypes,
  disabled:PropTypes.bool,
  name:PropTypes.string,
   onClick: PropTypes.func,
}

MyButton.defaultProp = {
  type:'submit',
  className:"",
  disabled:false,
  name:"",
  onClick: () => {},
}

export default MyButton;
