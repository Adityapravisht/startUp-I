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

MyButton.prototypes = {
  type: PropTypes.string,
  className: PropTypes,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

MyButton.defaultProp = {
  type: "text",
  className: "",
  disabled: false,
  onClick: () => {},
};

export default MyButton;
