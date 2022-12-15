import React, { Component } from "react";
import Header from "./Header";
import './letan_style.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Addletan from "./addletan";
import them from './them.png';
import { Link } from 'react-router-dom';

console.log(them);

class Letan_app extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div className="add1">
                    <Link to="/addletan">
                        <img src={them} alt="" />
                    </Link>
                </div>
                <div className="Row">
                    <div className="ten">Họ và tên</div>
                    <div className="cccd">CCCD</div>
                    <div className="phone">Số điện thoại</div>
                    <div className="mail">Email</div>
                    <div className="tendangnhap">Tên đăng nhập</div>
                    <div className="matkhau">Mật khẩu</div>
                </div>
                <div className="row1">
                    <div className="name">Trần Ngọc A</div>
                    <div className="CCCD">100 000 000 000</div>
                    <div className="sdt">0909 000 000</div>
                    <div className="email">ATranNgoc@gmail.com</div>
                    <div className="username">100 000 000 000</div>
                    <div className="password">LT01</div>
                    <div className="trangthai">
                        <Link to="/trangthai">Trạng thái</Link>
                    </div>
                    <div className="thaydoi">
                        <Link to="/thaydoi">Thay đổi</Link>
                    </div>
                </div>
                <div className="row2">
                    <div className="name">Trần Ngọc B</div>
                    <div className="CCCD">100 000 000 001</div>
                    <div className="sdt">0909 000 001</div>
                    <div className="email">BTranNgoc@gmail.com</div>
                    <div className="username">100 000 000 001</div>
                    <div className="password">LT02</div>
                    <div className="trangthai">
                        <Link to="/trangthai">Trạng thái</Link>
                    </div>
                    <div className="thaydoi">
                        <Link to="/thaydoi">Thay đổi</Link>
                    </div>
                </div>
                <div className="row1">
                    <div className="name">Trần Ngọc C</div>
                    <div className="CCCD">100 000 000 002</div>
                    <div className="sdt">0909 000 002</div>
                    <div className="email">CTranNgoc@gmail.com</div>
                    <div className="username">100 000 000 002</div>
                    <div className="password">LT03</div>
                    <div className="trangthai">
                        <Link to="/trangthai">Trạng thái</Link>
                    </div>
                    <div className="thaydoi">
                        <Link to="/thaydoi">Thay đổi</Link>
                    </div>
                </div>
                <div className="row2">
                    <div className="name">Trần Ngọc D</div>
                    <div className="CCCD">100 000 000 003</div>
                    <div className="sdt">0909 000 003</div>
                    <div className="email">DTranNgoc@gmail.com</div>
                    <div className="username">100 000 000 004</div>
                    <div className="password">LT04</div>
                    <div className="trangthai">
                        <Link to="/trangthai">Trạng thái</Link>
                    </div>
                    <div className="thaydoi">
                        <Link to="/thaydoi">Thay đổi</Link>
                    </div>
                </div>
                <div className="row1">
                    <div className="name">Trần Ngọc E</div>
                    <div className="CCCD">100 000 000 004</div>
                    <div className="sdt">0909 000 004</div>
                    <div className="email">ETranNgoc@gmail.com</div>
                    <div className="username">100 000 000 004</div>
                    <div className="password">LT05</div>
                    <div className="trangthai">
                        <Link to="/trangthai">Trạng thái</Link>
                    </div>
                    <div className="thaydoi">
                        <Link to="/thaydoi">Thay đổi</Link>
                    </div>
                </div>
                <div className="row2">
                    <div className="name">Trần Ngọc F</div>
                    <div className="CCCD">100 000 000 005</div>
                    <div className="sdt">0909 000 005</div>
                    <div className="email">FTranNgoc@gmail.com</div>
                    <div className="username">100 000 000 005</div>
                    <div className="password">LT06</div>
                    <div className="trangthai">
                        <Link to="/trangthai">Trạng thái</Link>
                    </div>
                    <div className="thaydoi">
                        <Link to="/thaydoi">Thay đổi</Link>
                    </div>
                </div>
                <div className="row1">
                    <div className="name">Trần Ngọc G</div>
                    <div className="CCCD">100 000 000 006</div>
                    <div className="sdt">0909 000 006</div>
                    <div className="email">GTranNgoc@gmail.com</div>
                    <div className="username">100 000 000 006</div>
                    <div className="password">LT07</div>
                    <div className="trangthai">
                        <Link to="/trangthai">Trạng thái</Link>
                    </div>
                    <div className="thaydoi">
                        <Link to="/thaydoi">Thay đổi</Link>
                    </div>
                </div>
                <div className="row2">
                    <div className="name">Trần Ngọc H</div>
                    <div className="CCCD">100 000 000 007</div>
                    <div className="sdt">0909 000 007</div>
                    <div className="email">HTranNgoc@gmail.com</div>
                    <div className="username">100 000 000 007</div>
                    <div className="password">LT08</div>
                    <div className="trangthai">
                        <Link to="/trangthai">Trạng thái</Link>
                    </div>
                    <div className="thaydoi">
                        <Link to="/thaydoi">Thay đổi</Link>
                    </div>
                </div>
                <div className="row1">
                    <div className="name">Trần Ngọc I</div>
                    <div className="CCCD">100 000 000 008</div>
                    <div className="sdt">0909 000 008</div>
                    <div className="email">ITranNgoc@gmail.com</div>
                    <div className="username">100 000 000 008</div>
                    <div className="password">LT09</div>
                    <div className="trangthai">
                        <Link to="/trangthai">Trạng thái</Link>
                    </div>
                    <div className="thaydoi">
                        <Link to="/thaydoi">Thay đổi</Link>
                    </div>
                </div>
                <div className="row2">
                    <div className="name">Trần Ngọc K</div>
                    <div className="CCCD">100 000 000 009</div>
                    <div className="sdt">0909 000 009</div>
                    <div className="email">KTranNgoc@gmail.com</div>
                    <div className="username">100 000 000 009</div>
                    <div className="password">LT10</div>
                    <div className="trangthai">
                        <Link to="/trangthai">Trạng thái</Link>
                    </div>
                    <div className="thaydoi">
                        <Link to="/thaydoi">Thay đổi</Link>
                    </div>
                </div>
                <div className="row1">
                    <div className="name">Trần Ngọc L</div>
                    <div className="CCCD">100 000 000 010</div>
                    <div className="sdt">0909 000 010</div>
                    <div className="email">LTranNgoc@gmail.com</div>
                    <div className="username">100 000 000 010</div>
                    <div className="password">LT11</div>
                    <div className="trangthai">
                        <Link to="/trangthai">Trạng thái</Link>
                    </div>
                    <div className="thaydoi">
                        <Link to="/thaydoi">Thay đổi</Link>
                    </div>
                </div>
                <div className="row2">
                    <div className="name">Trần Ngọc M</div>
                    <div className="CCCD">100 000 000 011</div>
                    <div className="sdt">0909 000 011</div>
                    <div className="email">MTranNgoc@gmail.com</div>
                    <div className="username">100 000 000 011</div>
                    <div className="password">LT12</div>
                    <div className="trangthai">
                        <Link to="/trangthai">Trạng thái</Link>
                    </div>
                    <div className="thaydoi">
                        <Link to="/thaydoi">Thay đổi</Link>
                    </div>
                </div>
                <div className="row1">
                    <div className="name">Trần Ngọc N</div>
                    <div className="CCCD">100 000 000 012</div>
                    <div className="sdt">0909 000 012</div>
                    <div className="email">NTranNgoc@gmail.com</div>
                    <div className="username">100 000 000 012</div>
                    <div className="password">LT13</div>
                    <div className="trangthai">
                        <Link to="/trangthai">Trạng thái</Link>
                    </div>
                    <div className="thaydoi">
                        <Link to="/thaydoi">Thay đổi</Link>
                    </div>
                </div>
                <div className="row2">
                    <div className="name">Trần Ngọc O</div>
                    <div className="CCCD">100 000 000 013</div>
                    <div className="sdt">0909 000 013</div>
                    <div className="email">OTranNgoc@gmail.com</div>
                    <div className="username">100 000 000 013</div>
                    <div className="password">LT14</div>
                    <div className="trangthai">
                        <Link to="/trangthai">Trạng thái</Link>
                    </div>
                    <div className="thaydoi">
                        <Link to="/thaydoi">Thay đổi</Link>
                    </div>
                </div>
                <div className="row1">
                    <div className="name">Trần Ngọc P</div>
                    <div className="CCCD">100 000 000 014</div>
                    <div className="sdt">0909 000 014</div>
                    <div className="email">PTranNgoc@gmail.com</div>
                    <div className="username">100 000 000 014</div>
                    <div className="password">LT15</div>
                    <div className="trangthai">
                        <Link to="/trangthai">Trạng thái</Link>
                    </div>
                    <div className="thaydoi">
                        <Link to="/thaydoi">Thay đổi</Link>
                    </div>
                </div>
                <div className="row2">
                    <div className="name">Trần Ngọc Q</div>
                    <div className="CCCD">100 000 000 015</div>
                    <div className="sdt">0909 000 015</div>
                    <div className="email">QTranNgoc@gmail.com</div>
                    <div className="username">100 000 000 015</div>
                    <div className="password">LT16</div>
                    <div className="trangthai">
                        <Link to="/trangthai">Trạng thái</Link>
                    </div>
                    <div className="thaydoi">
                        <Link to="/thaydoi">Thay đổi</Link>
                    </div>
                </div>
                <div className="row1">
                    <div className="name">Trần Ngọc R</div>
                    <div className="CCCD">100 000 000 016</div>
                    <div className="sdt">0909 000 016</div>
                    <div className="email">RTranNgoc@gmail.com</div>
                    <div className="username">100 000 000 016</div>
                    <div className="password">LT17</div>
                    <div className="trangthai">
                        <Link to="/trangthai">Trạng thái</Link>
                    </div>
                    <div className="thaydoi">
                        <Link to="/thaydoi">Thay đổi</Link>
                    </div>
                </div>
                <div className="row2">
                    <div className="name">Trần Ngọc S</div>
                    <div className="CCCD">100 000 000 017</div>
                    <div className="sdt">0909 000 017</div>
                    <div className="email">STranNgoc@gmail.com</div>
                    <div className="username">100 000 000 017</div>
                    <div className="password">LT18</div>
                    <div className="trangthai">
                        <Link to="/trangthai">Trạng thái</Link>
                    </div>
                    <div className="thaydoi">
                        <Link to="/thaydoi">Thay đổi</Link>
                    </div>
                </div>
                <div className="row1">
                    <div className="name">Trần Ngọc T</div>
                    <div className="CCCD">100 000 000 018</div>
                    <div className="sdt">0909 000 018</div>
                    <div className="email">RTranNgoc@gmail.com</div>
                    <div className="username">100 000 000 018</div>
                    <div className="password">LT19</div>
                    <div className="trangthai">
                        <Link to="/trangthai">Trạng thái</Link>
                    </div>
                    <div className="thaydoi">
                        <Link to="/thaydoi">Thay đổi</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Letan_app;