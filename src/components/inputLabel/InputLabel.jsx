import React from "react";
import PropTypes from "prop-types";

const InputLabel = (props) => {
    return (
        <div
            className={`dkInputLabel${
                props.className ? ` ${props.className}` : ""
            }`}
        >
            <label for={props.inputId} className="form-label">
                {props.labelText}
            </label>
            <input
                type={props.type}
                className="form-control"
                id={props.inputId}
                placeholder={props.placeholder}
                required={props.isRequired}
                onChange={props.onChange}
                value={props.value}
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
    value: PropTypes.string,
};

export default InputLabel;
