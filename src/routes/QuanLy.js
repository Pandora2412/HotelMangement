import {useState} from 'react'
import ThongTin from '../pages/quanly/ThongTin'
import NhanVien from '../pages/quanly/NhanVien'
import Phong from '../pages/quanly/Phong'
import HoaDon from '../pages/quanly/HoaDon'
import BaoCao from '../pages/quanly/BaoCao'
import HuyDon from '../pages/quanly/HuyDon'
import ThongBao from '../pages/quanly/ThongBao'
import SideBar from '../components/SideBar'
import { IoPersonOutline } from 'react-icons/io5'
import {FiUsers} from 'react-icons/fi'
import { AiOutlineDoubleRight } from 'react-icons/ai'
import {MdOutlineBedroomParent, MdNotificationsNone} from 'react-icons/md'
import {BiReceipt} from 'react-icons/bi'
import {SiSimpleanalytics} from 'react-icons/si'
import {HiOutlineReceiptRefund} from 'react-icons/hi'
import '../App.css';

const QuanLy = () => {
    const tab_list = [<ThongTin/>,<NhanVien/>,<Phong/>,<HoaDon/>,<BaoCao/>,<HuyDon/>,<ThongBao/>]
    const nav_list = [
        [<IoPersonOutline className = 'functionicon'/>, 'Thông Tin'],
        [<FiUsers className = 'functionicon'/>, 'Nhân viên'],
        [<MdOutlineBedroomParent className = 'functionicon'/>, 'Phòng'],
        [<BiReceipt className = 'functionicon'/>, 'Hóa đơn'],
        [<SiSimpleanalytics className = 'functionicon'/>, 'Báo cáo'],
        [<HiOutlineReceiptRefund className = 'functionicon'/>, 'Hủy đơn'],
        [<MdNotificationsNone className = 'functionicon'/>, 'Thông báo']
    ]
    const [tab, setTab] = useState(0)
    const [menuOn, setMenuOn] = useState(false)
    return (
        <>
            {!menuOn && <button className = 'Rightbutton' onClick = {() => setMenuOn(true)}><AiOutlineDoubleRight className="icon"/></button>}
            {tab_list[tab]}
            {menuOn && <SideBar nav_list = {nav_list} handleSidebar = {setTab} handleView={setMenuOn} tab = {tab}/>}
        </>
    );
}

export default QuanLy
