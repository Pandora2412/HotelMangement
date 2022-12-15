import { useEffect, useState } from 'react';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { Navigate, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';   
import { FaUserCircle } from "react-icons/fa"; 

const Tuvan = () => {

    const chatList = [
        {
            "id": 0,
            "name": "Duy",
            "phone": "0909000777",
            "chat": [
                {
                    "person": 1,
                    "mess": "Xin chào Duy, tôi là Nguyễn Văn A, người sẽ phụ trách giải đáp những thắc mắc của quý khách về khách sạn, xin hãy cho tôi biết quý khách cần gì.",
                    "time": "16/12, 17:57"
                },
                {
                    "person": 0,
                    "mess": "Cho tôi hỏi làm sao để hủy đơn đặt phòng?",
                    "time": "16/12, 18:00"
                }
            ]
        },
        {
            "id": 1,
            "name": "Trang",
            "phone": "0909000778",
            "chat": [
                {
                    "person": 1,
                    "mess": "Xin chào Trang, tôi là Nguyễn Văn A, người sẽ phụ trách giải đáp những thắc mắc của quý khách về khách sạn, xin hãy cho tôi biết quý khách cần gì.",
                    "time": "16/12, 17:58"
                },
                {
                    "person": 0,
                    "mess": "Bên khách sạn có chính sách gì cho trẻ em không?",
                    "time": "16/12, 18:00"
                }
            ]
        },
        {
            "id": 2,
            "name": "a",
            "phone": "0909000677",
            "chat": [
                {
                    "person": 1,
                    "mess": "Xin chào a, tôi là Nguyễn Văn A, người sẽ phụ trách giải đáp những thắc mắc của quý khách về khách sạn, xin hãy cho tôi biết quý khách cần gì.",
                    "time": "16/12, 17:30"
                },
                {
                    "person": 0,
                    "mess": "Làm sao để xem lại đơn mình đã đặt?",
                    "time": "16/12, 18:02"
                }
            ]
        },
        {
            "id": 3,
            "name": "Trần Văn A",
            "phone": "0909000757",
            "chat": [
                {
                    "person": 1,
                    "mess": "Xin chào A, tôi là Nguyễn Văn A, người sẽ phụ trách giải đáp những thắc mắc của quý khách về khách sạn, xin hãy cho tôi biết quý khách cần gì.",
                    "time": "16/12, 17:00"
                },
                {
                    "person": 0,
                    "mess": "Bên mình có hỗ trợ xe đưa đón sân bay không em?",
                    "time": "16/12, 17:30"
                }
            ]
        },
        {
            "id": 4,
            "name": "Huy Hoàng",
            "phone": "0909110777",
            "chat": [
                {
                    "person": 1,
                    "mess": "Xin chào Hoàng, tôi là A, người sẽ phụ trách giải đáp những thắc mắc của quý khách về khách sạn, xin hãy cho tôi biết quý khách cần gì.",
                    "time": "16/12, 18:00"
                },
                {
                    "person": 0,
                    "mess": "Khoảng 21-25/12 bên khách sạn còn phòng trống không?",
                    "time": "16/12, 18:01"
                }
            ]
        }
    ]

    const [letan, setLetan] = useState({});
    const axiosPrivate = useAxiosPrivate();
    const location = useLocation();
    const [displayChat, setDisplayChat] = useState(chatList[0]);
    const [mess, setMess] = useState("");
    const [searchString, setSearchString] = useState("");

    useEffect(() => {
        
        let isMounted = true;
        const controller = new AbortController();

        const getLetan = async () => {
            try {
                const res = await axiosPrivate.get(`/employee/${localStorage.getItem("username")}`, {
                    signal: controller.signal
                });
                isMounted && setLetan(res.data);
            } catch (err) {
                console.error(err);
                <Navigate to="/" state={{ from: location }} replace />
            }
        }

        getLetan();

        return () => {
            isMounted = false;
            controller.abort();
        }

    }, []);

    return (
        <div className="Tuvan">
            <Container fluid style={{height: '100%'}}>
                <Row style={{height: '100%', padding: '25px 0px'}}>
                    <Col xl={2} style={{padding: 0, height: '100%'}}>
                        <div style={{width: '70%', margin: '0 15%', textAlign: 'center', height: '100%', paddingTop: 20, background: '#E1963C', borderRadius: '10pt'}}>
                            <img src={require('../../Image/Avatar.png')} alt="Avatar" style={{width: '70%'}}/>
                            <div style={{marginTop: 15, fontWeight: 600}}>{letan.name}</div>
                            <div style={{fontWeight: 400, fontSize: '70%'}}>{letan.email}</div>
                        </div>
                    </Col>
                    <Col xl={3} style={{textAlign: 'left', padding: 0}}>
                        <input 
                            type="text" 
                            style={{height: '7%', borderRadius: '10pt', width: '95%', fontSize: '120%', padding: '0px 5px', marginBottom: '3%'}}
                            placeholder="Tìm kiếm..."
                            value={searchString}
                            onChange={(e) => setSearchString(e.target.value)}
                        />
                        <div style={{overflowY: 'auto', height: '91.5%', background: 'white', borderRadius: '10pt', width: '90%', marginLeft: '2.5%'}}>
                        {chatList.map(person => 
                            <Row key={person.id} style={person.id === displayChat.id?{margin: '10px 5px', borderRadius: '10pt', background: 'hsla(33, 73%, 56%, 47%)'}:{margin: '10px 5px'}} onClick={() => setDisplayChat(chatList[person.id])}>
                                <Col sm={3}><FaUserCircle style={{fontSize: '320%', marginTop: 6}}/></Col>
                                <Col sm={9}> 
                                    <div style={{marginTop: 5, float: 'right', fontSize: '60%', fontWeight: 500}}>{person.chat[person.chat.length - 1].time}</div>
                                    <div style={{fontSize: '100%', fontWeight: 700}}>{person.name}</div>
                                    <div style={{fontSize: '80%', fontWeight: 600}}>{person.phone}</div>
                                    <div style={{fontSize: '80%', fontWeight: 600, textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '90%', color: 'hsla(0, 0%, 0%, 50%)', overflow: 'hidden'}}>{person.chat[person.chat.length - 1].mess}</div>
                                </Col>
                            </Row>
                        )}
                        </div>
                    </Col>
                    <Col xl={7}>
                        <div style={{background: 'white', borderRadius: '10pt', width: '95.8%', height: '100%', padding:'0 10px'}}>
                            <Row>
                                <Col xs={1}><FaUserCircle style={{fontSize: '320%', marginTop: 10}}/></Col>
                                <Col xs={11}>
                                    <div style={{fontSize: '120%', fontWeight: 700, paddingLeft: 10, marginTop: 10}}>{displayChat.name}</div>
                                    <div style={{fontSize: '100%', fontWeight: 600, paddingLeft: 10}}>{displayChat.phone}</div>
                                </Col>
                            </Row>
                            <Row style={{borderBottom: '1px solid black', margin: '10px 0 20px 0'}}></Row>
                            <Col style={{overflowY: 'auto', overflowX: 'hidden', height: 455}}>
                                {displayChat.chat.map((message, index) => 
                                    <div key={index} style={message.person === 1?{float: 'right', borderRadius: '10pt', background: 'hsla(33, 73%, 56%, 70%)', width: '60%', marginBottom: 15, padding: '10px 10px', fontSize: '90%', fontWeight: 600, textAlign: 'right'}:{float: 'left', borderRadius: '10pt', background: 'hsla(33, 73%, 56%, 20%)', width: '60%', marginBottom: 10, padding: '10px 10px', fontSize: '90%', fontWeight: 600}}>
                                        {message.mess}
                                        <div style={message.person === 0?{textAlign: 'left', fontSize: '70%', fontWeight: 400}:{textAlign: 'right', fontSize: '70%', fontWeight: 400}}>{message.time}</div>
                                    </div>   
                                )}
                            </Col>
                            <Row style={{borderBottom: '1px solid black', margin: '10px 0 10px 0'}}></Row>
                            <input 
                                type="text" 
                                style={{minHeight: '7%', maxHeight: '10%', borderRadius: '10pt', width: '100%', fontSize: '90%', padding: '5px 8px', background: 'hsla(33, 73%, 56%, 20%)', border: 'none', overflowX: 'hidden', overflowY: 'auto'}}
                                placeholder="Nhập tin nhắn..."
                                value={mess}
                                onChange={(e) => setMess(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        const now = new Date();
                                        let newChat = displayChat;
                                        newChat.chat = [...newChat.chat, {
                                            "person": 1,
                                            "mess": mess,
                                            "time": (now.getDate()<10?"0":"") + (now.getDate()) + "/" + (now.getMonth()+1<10?"0":"") + (now.getMonth()+1) + ", " + (now.getHours()<10?"0":"") + (now.getHours()) + ":" + (now.getMinutes()<10?"0":"") + (now.getMinutes())
                                        }]
                                        setDisplayChat(newChat);
                                        setMess("");
                                    }
                                }}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Tuvan