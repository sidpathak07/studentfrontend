import React from "react";
import { ToastContainer } from "react-toastify";

const Base = ({ children }) => {
  return (
    <div className="align">
      <div className="container">
        <ToastContainer />

        {children}
      </div>
    </div>
  );
};
export default Base;
