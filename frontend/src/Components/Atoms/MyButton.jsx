import PropTypes from "prop-types";
import React from "react";

const MyButton = ({type,className,disabled,name}) => {
  return (
    <button type={type} className={className} disabled={disabled || ""}>
      {disabled ? `${name} in...` : `${name}`}
    </button>
  );
};

MyButton.propTypes = {
  type:PropTypes.string,
  className:PropTypes,
  disabled:PropTypes.bool,
  name:PropTypes.string,
}

MyButton.defaultProp = {
  type:'submit',
  className:"",
  disabled:false,
  name:"",
}

export default MyButton;
