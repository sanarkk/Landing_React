import React from "react";
import css from "./Modal.module.css";

const Modal = ({ open, children, onClose }) => {
  if (!open) return null;
  return (
    <>
      <div className={css.modal_overlay} />
      <div className={css.modal}>
        <div className={css.items}>
          <p className={css.modal_text}>{children}</p>
          <button className={css.modal_button} onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
