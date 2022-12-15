import React, { Component } from "react";
import { Link } from "react-router-dom";

class Trangthai extends Component {
    render() {
        return (
            <div>
                <h1>Xác nhận trạng thái tài khoản</h1>
                Nghỉ việc
                <input type="checkbox" />
                <br></br>
                <Link to="/letan">
                    <button type="button">Xác nhận</button>
                </Link>
            </div>
        );
    }
}

export default Trangthai;