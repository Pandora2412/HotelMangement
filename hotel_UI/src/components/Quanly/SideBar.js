import { GrLogout } from 'react-icons/gr';
import { AiOutlineDoubleLeft } from 'react-icons/ai';
import { IoPersonOutline } from 'react-icons/io5'
import {FiUsers} from 'react-icons/fi'
import {MdOutlineBedroomParent, MdNotificationsNone} from 'react-icons/md'
import {BiReceipt} from 'react-icons/bi'
import {SiSimpleanalytics} from 'react-icons/si'
import {HiOutlineReceiptRefund} from 'react-icons/hi'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from '../../api/axios';

const list = [
    {
        "label": "Thông tin",
        "path" : "",
        "icon": <IoPersonOutline className="functionicon"/> 
    },
    {
        "label": "Nhân viên",
        "path": "nhanvien",
        "icon": <FiUsers className = 'functionicon'/>
    },
    {
        "label": "Phòng",
        "path" : "phong",
        "icon": <MdOutlineBedroomParent className = 'functionicon'/>
    },
    {
        "label": "Hóa đơn",
        "path" : "hoadon",
        "icon": <BiReceipt className = 'functionicon'/>
    },
    {
        "label": "Báo cáo",
        "path" : "baocao",
        "icon": <SiSimpleanalytics className = 'functionicon'/>
    },
    {
        "label": "Hủy đơn",
        "path" : "huydon",
        "icon": <HiOutlineReceiptRefund className = 'functionicon'/> 
    },
    {
        "label": "Thông báo",
        "path" : "thongbao",
        "icon": <MdNotificationsNone className = 'functionicon'/> 
    }
]

const SideBar = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [err, setErr] = useState('');
    return (
    <div className='Sidebar'>
        <button  className="Leftbutton" onClick={() => props.handleView(false)}><AiOutlineDoubleLeft className="icon"/></button>
        <div>
            <img src={require('../../Image/logo.png')} alt="logo"/>
            <h3>HOTEL</h3>
            <h2>FICTION</h2>
        </div>
        <ul>
                {list.map((item, index) => 
                    <li key={index} style={(location.pathname === ("/quanly/" + item.path) || location.pathname === "/quanly" + item.path)?{background: "black"}:{background: "#E1963C"}} onClick={() => props.handleView(false)}>
                        <Link to={item.path} style={(location.pathname === ("/quanly/" + item.path) || location.pathname === "/quanly" + item.path)?{color: "white"}:{color: "black"}} className="link">
                            {item.icon}
                            <span>{item.label}</span>
                        </Link>
                    </li> 
                )}
            
        </ul>
            <button className="Logout" style={{ marginTop: '55%'}} onClick={async () => {
                try {
                    await axios.get('/logout',{withCredentials: true});
                    await axios.post(`/history/Quản lý ${localStorage.getItem("username")} logout.`);
                    localStorage.removeItem("username");
                    localStorage.removeItem("roles");
                    localStorage.removeItem("accessToken");
                    navigate('/', {replace: true});
                } catch (err) {
                    if (!err?.response) {
                        setErr("Sever không phản hồi.");
                    }
                    else setErr("Đăng xuất thất bại.");
                }
            }}>
                <GrLogout className="functionicon"/>
                Đăng xuất
            </button> 
            {err && <p aria-live="assertive" style={{color: 'red', paddingLeft: 35}}>{err}</p>} 
        </div>
    )
}

export default SideBar
