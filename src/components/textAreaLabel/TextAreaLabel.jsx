import React from "react";
import PropTypes from "prop-types";

const TextAreaLabel = (props) => {
  return (
    <div className="dkTextAreaLabel">
      <div className="d-flex flex-column">
        <label htmlFor={props.id} className="pb-2">
          {props.labelText}
        </label>
        <textarea
          className={props.className ? props.className : "form-control"}
          rows={props.rows}
          placeholder={props.placeholder}
          value={props.value}
          id={props.id}
          onChange={props.onChange}
        />
      </div>
    </div>
  );
};

TextAreaLabel.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
  rows: PropTypes.number,
  labelText: PropTypes.string,
};

export default TextAreaLabel;
