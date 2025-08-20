import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledInput = styled.input`
 color:${({theme}) => theme.textPrimary}
`;

const MyInput = ({
  type,
  className,
  placeholder,
  name,
  register,
  required,
  minLength,
  pattern,
  ...props
}) => {
  const registerProps = register
    ? register(name, {
        required: required
          ? typeof required === "string"
            ? required
            : "This field is required"
          : false,
        ...(minLength && {
          minLength: {
            value: minLength.value,
            message:
              minLength.message ||
              `Minimum ${minLength.value} characters required`,
          },
        }),
        ...(pattern && {
          pattern: {
            value: pattern.value,
            message: pattern.message || `Pattern is not valid`,
          },
        }),
      })
    : {};

  return (
      <StyledInput
        type={type}
        className={className}
        placeholder={placeholder}
        {...registerProps}
        {...props}
      />
  );
};

MyInput.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  register: PropTypes.func,
  required: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  minLength: PropTypes.shape({
    value: PropTypes.number.isRequired,
    message: PropTypes.string,
  }),
  pattern: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.instanceOf(RegExp), PropTypes.string])
      .isRequired,
    message: PropTypes.string,
  }),
};

MyInput.defaultProps = {
  type: "text",
  className: "",
  placeholder: "",
  register: null,
  required: false,
  minLength: null,
  pattern: null,
};

export default MyInput;
