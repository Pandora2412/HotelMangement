import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Letan_app from './Component/letan_app';
import Header from './Component/Header';
import Quanly_app from './Component/quanly_app';
import Layout from './Component/layout';
import Addletan from './Component/addletan';
import Aferter_addletan from './Component/after_addletan';
import Trangthai from './Component/trangthai';
import Thaydoi from './Component/thaydoi';
import After_thaydoiletan from './Component/after_thaydoiletan';
import After_themquanly from './Component/after_themquanly';
import Thaydoiquanly from './Component/thaydoiquanly';
import After_thaydoiquanly from './Component/after_thaydoiquanly';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes path="/" element={<Layout />}>
                    <Route path="/letan" element={<Letan_app />} />
                    <Route path="/quanly" element={<Quanly_app />} />
                    <Route path="/addletan" element={<Addletan />} />
                    <Route path="/after_addletan" element={<Aferter_addletan />} />
                    <Route path="/trangthai" element={<Trangthai />} />
                    <Route path="/thaydoi" element={<Thaydoi />} />
                    <Route path="/after_thaydoiletan" element={<After_thaydoiletan />} />
                    <Route path="/after_themquanly" element={<After_themquanly />} />
                    <Route path="/thaydoiquanly" element={<Thaydoiquanly />} />
                    <Route path="/after_thaydoiquanly" element={<After_thaydoiquanly />} />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default App;