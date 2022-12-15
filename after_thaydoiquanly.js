import React, { Component } from "react";
import './quanly_style.css';
import Header from "./Header";
import ql from './ql.png';
import thaydoi from './thaydoi.png';
import xoa from './xoa.png';
import trangthai from './trangthai.png';
import { Link } from "react-router-dom";

console.log(ql);
console.log(thaydoi);
console.log(xoa);
console.log(trangthai);

class After_thaydoiquanly extends Component {
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
                                    Nguyễn Thị XYZ
                                </label>
                                <div className="empty"></div>
                                <label>SĐT:
                                    <br></br>
                                    0377 384 182
                                </label>
                            </div>
                            <div className="part2">
                                <label>CCCD:
                                    <br></br>
                                    1111111111
                                </label>
                                <div className="empty"></div>
                                <label>Email:
                                    <br></br>
                                    xyz@gmail.com
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
                                    1111111111
                                </label>
                            </div>
                            <div className="part2">
                                <label>Mật khẩu:
                                    <br></br>
                                    QL01
                                </label>
                            </div>
                        </form>
                    </div>
                    <div className="img">
                        <img src={ql} alt="" />
                    </div>
                </div>
                <div className="empty"></div>
                <div className="button1">
                    <Link to="/after_themquanly">
                        <img src={thaydoi} alt="" />
                    </Link>
                </div>
                <div className="button1">
                    <Link to="/quanly">
                        <img src={xoa} alt="" />
                    </Link>
                </div>
                <div className="button1">
                    <Link to="/trangthai">
                        <img src={trangthai} alt="" />
                    </Link>
                </div>
            </div>
        );
    }
}

export default After_thaydoiquanly;