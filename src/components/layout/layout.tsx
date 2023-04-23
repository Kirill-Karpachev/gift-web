import styles from "./layout.module.css";
import { FC } from "react";
import { NavLink, Outlet } from "react-router-dom";

const setActive = ({ isActive }: { isActive: boolean }) =>
  `${styles.link} ${isActive ? styles.active : ""}`;

const Layout: FC = () => {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.top}>
          <NavLink className={setActive} to="/">
            Мои желания
          </NavLink>
          <NavLink className={setActive} to="/friends">
            Желания друзей
          </NavLink>
          <NavLink className={setActive} to="/random-gift">
            Случайный подарок
          </NavLink>
        </div>

        <NavLink className={setActive} to="/profile">
          Профиль
        </NavLink>
      </nav>

      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
