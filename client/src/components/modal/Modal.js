import React from "react";

import "./Modal.css";

function Modal({ handleBackdropClick, children }) {
  return (
    <div onClick={handleBackdropClick} className="backdrop">{children}</div>
  );
}

export default Modal;