import React from "react";

const Message = (props) => {
  return (
    <div className="dkMessage">
      <div className={`alert alert-${props.variant || "secondary"}`} role="alert">
        {props.children}
      </div>
    </div>
  );
};

export default Message;
