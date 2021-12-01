
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import Home from './Home';

const AppRouter = () => {
return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element = {<Home />} />
    </Routes>
    </BrowserRouter>
)
}
export default AppRouter;