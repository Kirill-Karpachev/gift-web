
import styles from "./card.module.css";
import { FC, useState } from "react";

const Card: FC = () => {
  const [arr, setArr] = useState();
  return (
    <div className={styles.gift}>
      card
    </div>
  );
};

export default Card;