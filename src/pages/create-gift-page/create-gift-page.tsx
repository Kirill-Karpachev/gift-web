import Card from "../../components/card/card";
import Modal from "../../components/modal/modal";
import styles from "./create-gift-page.module.css";
import { FC, FormEvent, useState } from "react";

const CreateGiftPage: FC = () => {
  const [modal, setModal] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <form className={styles.form} onSubmit={onSubmit}>
        <div>
          <input type="text" placeholder="Введите название праздника"/>
          <button onClick={() => setModal(true)}>+</button>
        </div>
        <div className={styles.buttons}>
          <button className={styles.submit} type="submit">
            Сохранить
          </button>
          <button className={styles.reset} type="reset">
            Сбросить
          </button>
        </div>
      </form>

      {modal && (
        <Modal onClose={() => setModal(false)}>
          <Card />
        </Modal>
      )}
    </>
  );
};

export default CreateGiftPage;
