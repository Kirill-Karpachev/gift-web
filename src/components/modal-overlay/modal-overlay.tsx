import styles from "./modal-overlay.module.css";
import { FC } from "react";

const ModalOverlay: FC<{ onCloseModal: () => void }> = ({ onCloseModal }) => {
  return <div className={styles.overlay} onClick={onCloseModal} />;
};

export default ModalOverlay;
