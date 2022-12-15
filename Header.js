import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header_style.css';
import logo from './lgo.png';

console.log(logo);

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
                    <Link to="/quanly" activeClassName="activeClass">Quản lý</Link>
                </div>
                <div className="letan">
                    <Link to="/letan" activeClassName="activeClass">Lễ tân</Link>
                </div>
                <div className="logout">
                    <Link to="/" >Đăng xuất</Link>
                </div>
            </nav>
        );
    }
}
export default Header;
