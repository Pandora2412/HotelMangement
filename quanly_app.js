import React, { Component } from "react";
import './quanly_style.css';
import Header from "./Header";
import img from './img.png';
import create from './create.png';
import { Link } from "react-router-dom";

console.log(img);
console.log(create);

class Quanly_app extends Component {
    render() {
        return (
            <div className="myForm">
                <Header></Header>
                <div className="empty"></div>
                <div className="r">
                    <div className="c">
                        <div className="info">Thông tin cá nhân</div>
                        <form>
                            <div className="empty"></div>
                            <div className="part1">
                                <label>Họ tên:
                                    <br></br>
                                    <input type="text" />
                                </label>
                                <div className="empty"></div>
                                <label>SĐT:
                                    <br></br>
                                    <input type="text" />
                                </label>
                            </div>
                            <div className="part2">
                                <label>CCCD:
                                    <br></br>
                                    <input type="text" />
                                </label>
                                <div className="empty"></div>
                                <label>Email:
                                    <br></br>
                                    <input type="text" />
                                </label>
                            </div>
                        </form>
                        <div className="empty"></div>
                        <div className="info">Thông tin tài khoản</div>
                        <form>
                            <div className="empty"></div>
                            <div className="part1">
                                <label>Tên đăng nhập:
                                    <br></br>
                                    <input type="text" />
                                </label>
                            </div>
                            <div className="part2">
                                <label>Mật khẩu:
                                    <br></br>
                                    <input type="text" />
                                </label>
                            </div>
                        </form>
                    </div>
                    <div className="img">
                        <img src={img} alt="" />
                    </div>
                </div>
                <div className="empty"></div>
                <div className="button">
                    <Link to="/after_themquanly">
                        <img src={create} alt="" />
                    </Link>
                </div>
            </div>
        );
    }
}

export default Quanly_app;