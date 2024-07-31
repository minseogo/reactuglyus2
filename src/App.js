
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './component/yys/Header';
import Footer from './component/yjy/Footer';
import Quickmenu from './component/pyj/quick/quickmenu';
 import Maincontent from './component/Maincontent';

function App() {
    return (
        <>
            <Header cls="fixed-top" />                        
            <Maincontent />
            <Footer /> 
            <Quickmenu />
        </>
    );
}

export default App;
