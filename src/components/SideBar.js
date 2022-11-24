import { GrLogout } from 'react-icons/gr';
import { AiOutlineDoubleLeft } from 'react-icons/ai';

const SideBar = (props) => (
    <div className = 'Sidebar'>
        <button  className="Leftbutton" onClick={() => props.handleView(false)}><AiOutlineDoubleLeft className="icon"/></button>
        <div>
            <img src={require('../Image/logo.png')} alt="logo"/>
            <h3>HOTEL</h3>
            <h2>FICTION</h2>
        </div>
        <ul>
            {
                props.nav_list.map((nav_item, index) => (
                    <li key = {index}>
                        <button onClick = {() => {props.handleSidebar(index); props.handleView(false)}} style = {props.tab  === index ?{color: "white", background: "black"}:{color: "black", background: "#E1963C"}}>
                            {nav_item[0]}
                            <span>{nav_item[1]}</span>
                        </button>
                    </li>
                ))
            }
        </ul>
            <button className="Logout">
                <GrLogout className="functionicon"/>
                Đăng xuất
            </button>  
        </div>
)

export default SideBar
