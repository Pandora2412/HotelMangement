import "@fontsource/playfair-display";
import './App.css';
import Login from './components/Login.js';
import Letan from "./components/Letan";
import Thongtin from "./components/Thongtin";
import Phong from './components/Phong';
import Thongbao from './components/Thongbao';
import Khachhang from './components/Khachhang';
import Tuvan from './components/Tuvan';
import RequireAuth from './components/RequireAuth';
import Unauthorized from './components/Unauthorized';
import {Routes, Route} from "react-router-dom";
import Layout from './components/Layout'

const ROLES = {
  "Admin": 1000,
  "Quanly": 2000,
  "Letan": 3000
}

function App() {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
            <Route path="/" element={<Login />} />
            <Route path="/Unauthorized" element={<Unauthorized />} />

            <Route element={<RequireAuth allowedRoles={[ROLES.Quanly, ROLES.Letan]}/>}>
              <Route path="letan" element={<Letan />}>
                <Route path="" element={<Thongtin />} />
                <Route path="phong" element={<Phong />} />
                <Route path="tuvan" element={<Tuvan />} />
                <Route path="thongbao" element={<Thongbao />} />
                <Route path="khachhang" element={<Khachhang />} />
              </Route>            
            </Route>
        </Route>
    </Routes>
  );
}

export {App};