import React from "react";

const Message = (props) => {
  return (
    <div className="dkMessage">
      <div
        className={`alert alert-${props.variant || "secondary"} ${
          props.isDimissable && "alert-dismissible fade show"
        }`}
        role="alert"
      >
        {props.children}
        {props.isDimissable && (
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        )}
      </div>
    </div>
  );
};

export default Message;
