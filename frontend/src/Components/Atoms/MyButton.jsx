import PropTypes from "prop-types";
import React from "react";

const MyButton = ({ type, className, disabled, name, onClick, icon }) => {
  return (
    <button
      type={type}
      className={className}
      disabled={disabled}
      onClick={onClick}
    >
      {icon && <span style={{ marginRight: "6px" }}>{icon}</span>}
      {disabled ? `${name}...` : name}

    </button>
  );
};

MyButton.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.node,
};

MyButton.defaultProps = {
  type: "submit",
  className: "",
  disabled: false,
  name: "",
  onClick: () => {},
  icon: null,
};

export default MyButton;
