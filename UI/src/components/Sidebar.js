import '../App.css';
import { AiOutlineDoubleLeft } from 'react-icons/ai';
import { IoPersonOutline } from 'react-icons/io5';
import { BiBed } from 'react-icons/bi';
import { RiCustomerService2Line } from 'react-icons/ri';
import { BiBell } from 'react-icons/bi';
import { IoPeopleOutline } from 'react-icons/io5';
import { GrLogout } from 'react-icons/gr';
import { Link, useLocation } from 'react-router-dom';
import AuthContext from '../context/AuthProvider';
import { useContext, useState } from 'react';
import axios from '../api/axios';

const Sidebar = (props) => {
    const location = useLocation();
    const { setAuth } = useContext(AuthContext);
    const [err, setErr] = useState('');

    const list = [
        {
            "label": "Thông tin",
            "path" : "",
            "icon": <IoPersonOutline className="functionicon"/> 
        },
        {
            "label": "Phòng",
            "path" : "phong",
            "icon": <BiBed className="functionicon"/>
        },
        {
            "label": "Tư vấn",
            "path" : "tuvan",
            "icon": <RiCustomerService2Line className="functionicon"/>
        },
        {
            "label": "Thông báo",
            "path" : "thongbao",
            "icon": <BiBell className="functionicon"/>
        },
        {
            "label": "Khách hàng",
            "path" : "khachhang",
            "icon": <IoPeopleOutline className="functionicon"/> 
        },
    ]

    return (
        <div className='Sidebar'>
            <button  className="Leftbutton" onClick={() => props.handleView(false)}><AiOutlineDoubleLeft className="icon"/></button>
            <div>
                <img src={require('../Image/logo.png')} alt="logo"/>
                <h3>HOTEL</h3>
                <h2>FICTION</h2>
            </div>
            <ul>
                {list.map((item, index) => 
                    <li key={index} style={(location.pathname === ("/Letan/" + item.path) || location.pathname === "/Letan" + item.path)?{background: "black"}:{background: "#E1963C"}}>
                        <Link to={item.path} style={(location.pathname === ("/Letan/" + item.path) || location.pathname === "/Letan" + item.path)?{color: "white"}:{color: "black"}} className="link">
                            {item.icon}
                            <span>{item.label}</span>
                        </Link>
                    </li> 
                )}
            </ul>       
            <button className="Logout" onClick={async () => {
                try {
                    const res = await axios.get('/logout',{withCredentials: true});
                    setAuth({});
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

export default Sidebar