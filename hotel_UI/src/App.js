import "@fontsource/playfair-display";
import './App.css';
import {Routes, Route} from "react-router-dom";
import Layout from './components/Layout'
import RequireAuth from './components/RequireAuth';
import Unauthorized from './pages/Unauthorized';
import Login from './pages/Login.js';

import Letan from "./routes/Letan";
import Thongtin from "./pages/letan/Thongtin";
import Phong from './pages/letan/Phong';
import Thongbao from './pages/letan/Thongbao';
import KhachhangLetan from './pages/letan/Khachhang';
import Tuvan from './pages/letan/Tuvan';

import QuanLy from "./routes/QuanLy";
import ThongtinQuanly from "./pages/quanly/ThongTin";
import NhanVien from "./pages/quanly/NhanVien";
import PhongQuanly from "./pages/quanly/Phong";
import HoaDon from "./pages/quanly/HoaDon";
import HuyDon from "./pages/quanly/HuyDon";
import BaoCao from "./pages/quanly/BaoCao";
import ThongbaoQuanly from "./pages/quanly/ThongBao";

import Admin from "./routes/Admin";
import Letan_app from './pages/Admin/letan_app';
import Quanly_app from './pages/Admin/quanly_app';
import Addletan from './pages/Admin/addletan';
import Aferter_addletan from './pages/Admin/after_addletan';
import Trangthai from './pages/Admin/trangthai';
import Thaydoi from './pages/Admin/thaydoi';
import After_thaydoiletan from './pages/Admin/after_thaydoiletan';
import After_themquanly from './pages/Admin/after_themquanly';
import Thaydoiquanly from './pages/Admin/thaydoiquanly';
import After_thaydoiquanly from './pages/Admin/after_thaydoiquanly';

import Khachhang from "./routes/Khachhang";
import Home from './pages/khachhang/Home.js';
import Booking from './pages/khachhang/Booking.js';
import Services from './pages/khachhang/Services.js';
import Contact from './pages/khachhang/Contact.js';
import Search from './pages/khachhang/Search.js';
import EmptyRoom from './pages/khachhang/EmptyRoom.js';
import BookingInfo from './pages/khachhang/BookingInfo.js';
import SearchPage from './pages/khachhang/SearchPage.js';

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
            <Route path="unauthorized" element={<Unauthorized />} />

            <Route path="khachhang" element={<Khachhang />}>
              <Route path="" element={<Home />} />
              <Route path="booking" element={<Booking />} />
              <Route path="services" element={<Services />} />
              <Route path="contact" element={<Contact />} />
              <Route path="search" element={<Search />} />
              <Route path="emptyroom" element={<EmptyRoom />} />
              <Route path="bookinginfo" element={<BookingInfo />} />
              <Route path="searchpage" element={<SearchPage />} />
            </Route>

            <Route element={<RequireAuth allowedRoles={[ROLES.Quanly, ROLES.Letan]}/>}>
              <Route path="letan" element={<Letan />}>
                <Route path="" element={<Thongtin />} />
                <Route path="phong" element={<Phong />} />
                <Route path="tuvan" element={<Tuvan />} />
                <Route path="thongbao" element={<Thongbao />} />
                <Route path="khachhang" element={<KhachhangLetan />} />
              </Route>            
            </Route>

            <Route element={<RequireAuth allowedRoles={[ROLES.Quanly]}/>}>
              <Route path="quanly" element={<QuanLy />}>
                <Route path="" element={<ThongtinQuanly />} />
                <Route path="nhanvien" element={<NhanVien />}/>
                <Route path="phong" element={<PhongQuanly />} />
                <Route path="hoadon" element={<HoaDon />} />
                <Route path="baocao" element={<BaoCao />} />
                <Route path="huydon" element={<HuyDon />} />
                <Route path="thongbao" element={<ThongbaoQuanly />} />
              </Route>
            </Route>

            <Route element={<RequireAuth allowedRoles={[ROLES.Admin]}/>}>
               <Route path="admin" element={<Admin />}>
                  <Route path="" element={<Letan_app />} />
                  <Route path="quanly" element={<Quanly_app />} />
                  <Route path="addletan" element={<Addletan />} />
                  <Route path="after_addletan" element={<Aferter_addletan />} />
                  <Route path="trangthai" element={<Trangthai />} />
                  <Route path="thaydoi" element={<Thaydoi />} />
                  <Route path="after_thaydoiletan" element={<After_thaydoiletan />} />
                  <Route path="after_themquanly" element={<After_themquanly />} />
                  <Route path="thaydoiquanly" element={<Thaydoiquanly />} />
                  <Route path="after_thaydoiquanly" element={<After_thaydoiquanly />} />
                </Route>
              </Route>

        </Route>
    </Routes>
  );
}

export {App};