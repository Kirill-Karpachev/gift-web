import { NavLink } from "react-router-dom";
import styles from "./my-gifts-page.module.css";
import { FC, useState } from "react";

const MyGiftsPage: FC = () => {
  const [gifts, setGifts] = useState();
  return (
    <div className={styles.gift}>
      {gifts ? (
        <ul></ul>
      ) : (
        <h2 className={styles.title}>Тут будет ваш список желаний!</h2>
      )}
      <NavLink className={styles.button} to={"/create-gift"}>Создать</NavLink>
    </div>
  );
};

export default MyGiftsPage;
