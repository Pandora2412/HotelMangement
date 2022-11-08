import {useState} from 'react';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import Thongtin from './Thongtin';
import Phong from './Phong';
import Thongbao from './Thongbao';
import Khachhang from './Khachhang';
import Tuvan from './Tuvan';
import Sidebar from './Sidebar';
import '../App.css';

const Letan = () => {
    
    document.body.style.backgroundImage = 'none';
    document.body.style.backgroundColor = '#FFF8F6';

    const list = ["Thông tin", "Phòng", "Tư vấn", "Thông báo", "Khách hàng"]

    const [tab, setTab] = useState(0);
    const [on, setOn] = useState(false);

    return (
        <div className="Letan">
            {!on && <button className='Rightbutton' onClick={() => setOn(true)}><AiOutlineDoubleRight className="icon"/></button>}
            {tab === 0 && <Thongtin />}
            {tab === 1 && <Phong />}
            {tab === 2 && <Tuvan />}
            {tab === 3 && <Thongbao />}
            {tab === 4 && <Khachhang />}
            {on && <Sidebar list={list} handleSidebar={setTab} handleView={setOn} tab={tab}/>}
        </div>
    )
}

export default Letan