import React from "react";

const Loader = () => {
  return (
    <div className="dkLoader">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
