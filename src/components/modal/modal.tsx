import React from "react";
import ReactDom from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";
import styles from "./modal.module.css";
import { FC } from "react";
const modalContainer = document.querySelector("#popup") as HTMLElement;

type TModal = {
  onClose: () => void;
  children: JSX.Element;
};

const Modal: FC<TModal> = ({ onClose, children }) => {
  React.useEffect(() => {
    function closeEscModal(evt: KeyboardEvent) {
      if (evt.key === "Escape") onClose();
    }

    document.addEventListener("keydown", closeEscModal);

    return () => {
      document.removeEventListener("keydown", closeEscModal);
    };
  }, [onClose]);

  return ReactDom.createPortal(
    <div className={styles.modal}>
      <ModalOverlay onCloseModal={onClose} />
      <div className={`${styles.content} pr-10 pl-10`}>
        {children}
        <button
          className={styles.close}
          type="button"
          onClick={onClose}
        ></button>
      </div>
    </div>,
    modalContainer
  );
};

export default Modal;
