import Navbar from "../components/Khachhang/Navbar";
import Header from "../components/Khachhang/Header";
import Footer from '../components/Khachhang/Footer';
import boxchat from "../Image/Customer/boxchat.png";
import { Outlet } from 'react-router-dom';
import { useState } from "react";
import { FaPlus, FaArrowRight } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { borderBottom } from "@mui/system";

const Khachhang = () => {
    const [chat, setChat] = useState(false);
    const [curentMess, setCurentMess] = useState("");
    const [chatList, setChatList] = useState([
        {
            "person": false,
            "mess": "The Fiction Hotel xin chào quý khách. vui lòng nhập tên của bạn"
        }        
    ]); 

    return (
        <div className="Customer">
            <div className="header">
                <Navbar />
                <Header />
            </div>
            {!chat && <div id="boxchat" onClick={() => setChat(true)}> <img src={boxchat} alt="boxchat"/></div>}
            {chat && 
                <div id="boxchat" style={{width: 320, height: 420}}>
                    <div style={{background: '#FFE5CF', width: 320, height: 50, borderTopLeftRadius: 10, borderTopRightRadius: 10, border: '1px solid black', overflow: 'hidden'}}>
                        <button style={{height: '100%', border: 'none', background: 'transparent'}} onClick={() => setChat(false)}><FaArrowRight style={{fontSize: '200%', color: 'hsla(0, 0%, 0%, 0.3)'}}/></button>
                        <BsThreeDots style={{float: 'right', fontSize: '200%', color: 'hsla(0, 0%, 0%, 0.3)', marginTop: 7, marginRight: 5}}/>
                        <div style={{float: 'right', marginRight: 100}}>
                            <b  style={{fontSize: '90%'}}>The Fiction Hotel</b>
                            <p style={{fontSize: '90%', color: 'hsla(0, 0%, 0%, 0.8)'}}>Online</p>
                        </div>
                    </div>
                    <div style={{height: 330, overflowY: 'auto', width: '100%', padding: '10px 0', background: 'white', borderLeft: '1px solid black', borderRight: '1px solid black'}}>
                        {chatList.map(message => 
                            <div style={{width: '96%', margin: '0 2%', display: 'inline-block'}}>
                                <div style={message.person?{float: 'right', textAlign: 'right', borderTopLeftRadius: 15, borderTopRightRadius: 15, borderBottomLeftRadius: 15, background:'#CFDCFF', color: 'black', fontSize: '80%', padding: '6px 6px'}:{float: 'left', textAlign: 'left', borderBottomLeftRadius: 15, borderTopRightRadius: 15, borderBottomRightRadius: 15, background: '#FFE5CF', color: 'black', fontSize: '80%', padding: '6px 6px'}}>
                                    <b>{message.mess}</b>
                                </div>
                            </div>
                        )}
                    </div>
                    <div style={{background: '#F5EADC', width: 320, height: 40, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, border: '1px solid black', overflow: 'hidden'}}>
                        <FaPlus style={{fontSize: '100%', color: 'hsla(0, 0%, 0%, 0.3)', marginLeft: 5}}/>
                        <input placeholder="Nhập tin nhắn của bạn..." value={curentMess} onChange={(e) => setCurentMess(e.target.value)} style={{border: 'none', height: '100%', width: '75%', background: 'transparent', fontSize: '90%', marginLeft: 20}}/>
                        <button style={{height: '100%', border: 'none', background: 'transparent', float: 'right'}} onClick={() => {
                            chatList.length !== 1 && chatList.length !== 3 && setChatList([...chatList, {"person": 1, "mess": curentMess}]);
                            chatList.length === 1 && setChatList([...chatList, {"person": 1, "mess": curentMess}, {"person": 0, "mess": `Xin chào ${curentMess}. Vui lòng nhập SĐT của bạn`}]);
                            chatList.length === 3 && setChatList([...chatList, {"person": 1, "mess": curentMess}, {"person": 0, "mess": "Xin quý khách vui lòng đợi trong giây lát, lễ tân của chùng tôi sẽ kết nối với quý khách ngay"}]);
                            setCurentMess("");
                        }}><FaArrowRight style={{fontSize: '100%', color: 'hsla(0, 0%, 0%, 0.3)'}}/></button>
                    </div>
                </div>
            }
            <Outlet />
            <Footer></Footer>
        </div>
    )
}

export default Khachhang