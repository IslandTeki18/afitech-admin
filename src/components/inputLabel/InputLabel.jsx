import React from "react";
import PropTypes from "prop-types";

const InputLabel = (props) => {
  return (
    <div
      className={`dkInputLabel${props.className ? ` ${props.className}` : ""}${
        props.type === `checkbox` ? ` form-check` : ``
      }${props.isToggle ? " form-switch" : ""}`}
    >
      <label htmlFor={props.inputId} className="form-label">
        {props.labelText}
      </label>
      <input
        type={props.type}
        className={
          props.type === "checkbox" ? "form-check-input" : "form-control"
        }
        id={props.inputId}
        placeholder={props.placeholder}
        required={props.isRequired}
        onChange={props.onChange}
        value={props.value}
        checked={props.checked}
      />
    </div>
  );
};

InputLabel.propTypes = {
  className: PropTypes.string,
  inputId: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  id: PropTypes.string,
  labelText: PropTypes.string,
  isRequired: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.any,
  checked: PropTypes.bool,
  isToggle: PropTypes.bool,
};

export default InputLabel;
