import React, { Component } from "react";
import '../../css/quanly_style.css';
import Header from "../../components/Admin/Header";
import luu from '../../Image/luu.png';
import img from '../../Image/img.png';
import { Link } from "react-router-dom";


class Thaydoiquanly extends Component {
    render() {
        return (
            <div className="myForm">
                <Header></Header>
                <div className="empty"></div>
                <div className="r">
                    <div className="Col">
                        <div className="Info">Thông tin cá nhân</div>
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
                        <div className="Info">Thông tin tài khoản</div>
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
                    <Link to="/admin/after_thaydoiquanly">
                        <img src={luu} alt="" />
                    </Link>
                </div>
            </div>
        );
    }
}

export default Thaydoiquanly;