import React from "react";

import "./Modal.css";

function Modal({ handleBackdropClick, handleCloseBtnClick, children }) {
  return (
    <div onClick={handleBackdropClick} className="backdrop">
      <article className="modal">
        <button onClick={handleCloseBtnClick} className="modal__close-btn" aria-label="Close">
          <svg className="modal__close-btn-icon w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        {children}
      </article>
    </div>
  );
}

export default Modal;