// src/routes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/index';
import About from '../pages/about/index';
// import Contact from './pages/Contact';

const RoutesConfig = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
    );
};

export default RoutesConfig;
