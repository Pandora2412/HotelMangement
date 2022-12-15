import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../css/Header_style.css';
import axios from '../../api/axios';

class Header extends Component {

    render() {
        return (
            <nav className="header">
                <div className="quanly">
                    <Link to="/admin/quanly" activeClassName="activeClass">Quản lý</Link>
                </div>
                <div className="letan">
                    <Link to="/admin/" activeClassName="activeClass">Lễ tân</Link>
                </div>
                <Link to="/" className="quanly" style={{marginRight: 35}} onClick={async () => {
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
            </nav>
        );
    }
}
export default Header;
