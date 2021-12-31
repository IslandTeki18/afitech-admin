import React from "react";

const Message = (props) => {
  return (
    <div className="dkMessage">
      <div
        className={`alert alert-${props.variant || "secondary"} ${
          props.isDismissable && "alert-dismissible fade show"
        }`}
        role="alert"
      >
        {props.children}
        {props.isDismissable && (
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        )}
      </div>
    </div>
  );
};

export default Message;
