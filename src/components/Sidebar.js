import '../App.css';
import { AiOutlineDoubleLeft } from 'react-icons/ai';
import { IoPersonOutline } from 'react-icons/io5';
import { BiBed } from 'react-icons/bi';
import { RiCustomerService2Line } from 'react-icons/ri';
import { BiBell } from 'react-icons/bi';
import { IoPeopleOutline } from 'react-icons/io5';
import { GrLogout } from 'react-icons/gr';

const Sidebar = (props) => {
    return (
        <div className='Sidebar'>
            <button  className="Leftbutton" onClick={() => props.handleView(false)}><AiOutlineDoubleLeft className="icon"/></button>
            <div>
                <img src={require('../Image/logo.png')} alt="logo"/>
                <h3>HOTEL</h3>
                <h2>FICTION</h2>
            </div>
            <ul>
                <li><button onClick={() => props.handleSidebar(0)} style={props.tab === 0?{color: "white", background: "black"}:{color: "black", background: "#E1963C"}}>
                    <IoPersonOutline className="functionicon"/>
                    <span>{props.list[0]}</span>
                </button></li>
                <li><button onClick={() => props.handleSidebar(1)} style={props.tab === 1?{color: "white", background: "black"}:{color: "black", background: "#E1963C"}}>
                    <BiBed className="functionicon"/>
                    <span>{props.list[1]}</span>
                </button></li>
                <li><button onClick={() => props.handleSidebar(2)} style={props.tab === 2?{color: "white", background: "black"}:{color: "black", background: "#E1963C"}}>
                    <RiCustomerService2Line className="functionicon"/>
                    <span>{props.list[2]}</span>
                </button></li>
                <li><button onClick={() => props.handleSidebar(3)} style={props.tab === 3?{color: "white", background: "black"}:{color: "black", background: "#E1963C"}}>
                    <BiBell className="functionicon"/>
                    <span>{props.list[3]}</span>
                </button></li>
                <li><button onClick={() => props.handleSidebar(4)} style={props.tab === 4?{color: "white", background: "black"}:{color: "black", background: "#E1963C"}}>
                    <IoPeopleOutline className="functionicon"/>
                    <span>{props.list[4]}</span>
                </button></li>
            </ul>       
            <button className="Logout">
                <GrLogout className="functionicon"/>
                Đăng xuất
            </button>  
        </div>
    )
}

export default Sidebar