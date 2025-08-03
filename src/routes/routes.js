// src/routes.js
import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../pages/home/index';
import About from '../pages/about/index';
// import Contact from './pages/Contact';

const RoutesConfig = () => {
    return (
        <>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/contact" component={Contact} /> */}
        </>
    );
};

export default RoutesConfig;
