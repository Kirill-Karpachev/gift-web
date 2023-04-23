import styles from "./app.module.css";
import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import MyGiftsPage from "../../pages/my-gifts-page/my-gifts-page";
import Layout from "../layout/layout";
import FriendsGiftsPage from "../../pages/friends-gifts-page/friends-gifts-page";
import ProfilePage from "../../pages/profile-page/profile-page";
import RandomGiftsPage from "../../pages/random-gifts-page/random-gifts-page";
import NotFoundPage from "../../pages/not-found-page/not-found-page";
import CreateGiftPage from "../../pages/create-gift-page/create-gift-page";

const App: FC = () => {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MyGiftsPage />} />
          <Route path="friends" element={<FriendsGiftsPage />} />
          <Route path="random-gift" element={<RandomGiftsPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="create-gift" element={<CreateGiftPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
