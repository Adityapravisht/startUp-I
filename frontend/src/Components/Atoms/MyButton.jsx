import PropTypes from "prop-types";
import React from "react";

const MyButton = ({type,className,disabled,name}) => {
  return (
    <button type={type} className={className} disabled={disabled || ""}>
      {disabled ? `${name} in...` : `${name}`}
    </button>
  );
};

MyButton.prototypes = {
  type:PropTypes.string,
  className:PropTypes,
  disabled:PropTypes.bool
}

MyButton.defaultProp = {
  type:'text',
  className:"",
  disabled:false,
}

export default MyButton;
