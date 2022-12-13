import './App.css';
import { BrowserRouter } from 'react-router-dom';

import {Routes, Route} from "react-router-dom";

import QuanLy from "./routes/QuanLy"
import ThongTin from "./pages/quanly/ThongTin"
import NhanVien from "./pages/quanly/NhanVien"
import Phong from "./pages/quanly/Phong"
import HoaDon from "./pages/quanly/HoaDon"
import HuyDon from "./pages/quanly/HuyDon"
import BaoCao from "./pages/quanly/BaoCao"
import ThongBao from "./pages/quanly/ThongBao"



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="quanly" element={<QuanLy/>}>
          <Route path="" element={<ThongTin/>} />
          <Route path="nhanvien" element={<NhanVien/>}/>
          <Route path="phong" element={<Phong />} />
          <Route path="hoadon" element={<HoaDon />} />
          <Route path="baocao" element={<BaoCao />} />
          <Route path="huydon" element={<HuyDon />} />
          <Route path="thongbao" element={<ThongBao />} />
        </Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
