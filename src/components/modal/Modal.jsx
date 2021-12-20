import React from "react";
import PropTypes from "prop-types";

const Modal = (props) => {
  return (
    <div className="dkModal">
      <div
        className="modal fade"
        id={props.modalId}
        tabindex="-1"
        aria-labelledby="dynamicLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="dynamicLabel">
                {props.title}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{props.children}</div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  modalId: PropTypes.string.isRequired,
};

export default Modal;
