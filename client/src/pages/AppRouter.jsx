
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import HomeWindow from '../components/mainMenu/HomeWindow';
import GameWindow from '../components/game/GameWindow';

const AppRouter = () => {
return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element = {<HomeWindow />} />
        <Route path="/game/:gameId" element={<GameWindow />} />
    </Routes>
    </BrowserRouter>
)
}
export default AppRouter;