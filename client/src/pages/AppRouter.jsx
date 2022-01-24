import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import HomeWindow from "../components/mainMenu/HomeWindow";
import GameWindow from "../components/game/GameWindow";
import { Provider } from "react-redux";
import store from "../store/store";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<HomeWindow />} />

          <Route path="/game" element={<GameWindow />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};
export default AppRouter;
