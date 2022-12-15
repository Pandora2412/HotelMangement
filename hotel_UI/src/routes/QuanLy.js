import {useState} from 'react';
import SideBar from '../components/Quanly/SideBar';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import { Outlet } from 'react-router-dom';

const QuanLy = () => {
    const [menuOn, setMenuOn] = useState(false)
    return (
        <>
            {!menuOn && <button className = 'Rightbutton' onClick = {() => setMenuOn(true)}><AiOutlineDoubleRight className="icon"/></button>}
            {/*tab_list[tab]*/}
            <Outlet/>
            {menuOn && <SideBar handleView={setMenuOn}/>}
        </>
    );
}

export default QuanLy
