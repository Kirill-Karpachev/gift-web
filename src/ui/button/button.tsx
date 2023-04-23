import { FC } from "react";
import styles from "./button.module.css";

interface IButton {
  text?: string;
  onClick?: () => void;
}

const Button: FC<IButton> = ({ text, onClick, ...rest }) => {
  return (
    <button className={styles.button} onClick={onClick} {...rest}>
      {text}
    </button>
  );
};

export default Button;
