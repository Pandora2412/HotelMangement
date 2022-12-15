import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../css/Header_style.css';
import logo from '../../Image/lgo.png';
import axios from '../../api/axios';

class Header extends Component {
    render() {
        return (
            <nav className="header">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="hotelname">
                    HOTEL<br></br>
                    FICTION
                </div>
                <div className="quanly">
                    <Link to="/Khachhang/quanly" activeClassName="activeClass">Quản lý</Link>
                </div>
                <div className="letan">
                    <Link to="/Khachhang/" activeClassName="activeClass">Lễ tân</Link>
                </div>
                <div className="logout">
                    <Link to="/" onClick={async () => {
                        try {
                            await axios.get('/logout',{withCredentials: true});
                            await axios.post(`/history/Admin ${localStorage.getItem("username")} logout.`);
                            localStorage.removeItem("username");
                            localStorage.removeItem("roles");
                            localStorage.removeItem("accessToken");
                        } catch (err) {
                            console.log(err);
                        }
                    }}>
                        Đăng xuất
                    </Link>
                </div>
            </nav>
        );
    }
}
export default Header;