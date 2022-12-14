import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TextField from "@mui/material/TextField";
import MenuItem from '@mui/material/MenuItem';
import { MessageBox } from './MessageBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { Navigate, useLocation } from 'react-router-dom';
import axios from '../../api/axios';

const NewFormCustomer = (props) => {

    const options = [
        {
            value: true,
            label: "Nữ"
        },
        {
            value: false,
            label: "Nam"
        }
    ];

    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [bday, setBday] = useState("1990-01-01");
    const [sex, setSex] = useState();
    const [messageBoxCreate, setMessageBoxCreate] = useState(false);
    const [messageBoxClose, setMessageBoxClose] = useState(false);
    const [warning, setWarning] = useState("");

    const axiosPrivate = useAxiosPrivate();
    const location = useLocation();

    return (
        <div className = "Form">
            <Container fluid style = {{padding: '0'}}>
                <Row>
                    <Col style={{textAlign: 'right'}}><button className="Xbutton" style={{fontSize: '150%'}} onClick={()=>{
                        setMessageBoxClose(true);
                    }}>X</button></Col>
                </Row>
                <Row style={{paddingBottom: 25}}>
                    <Col xl={3}><h4>Thông tin cá nhân</h4></Col>
                    <Col xl={9}></Col>
                </Row>
                <Row className="justify-content-md-center" style={{paddingBottom: 25}}>
                    <Col xl={5}>
                        <TextField label="Tên" type="text" variant="outlined" style = {{width: '100%'}} value={name}
                            onChange={(e)=>setName(e.target.value)}
                        />
                    </Col>
                    <Col xl={1}></Col>
                    <Col xl={5}>
                        <TextField label="CCCD" type="text" variant="outlined" style = {{width: '100%'}} value={id}
                            onChange={(e)=>setId(e.target.value)}
                        />
                    </Col>
                </Row>
                <Row className="justify-content-md-center" style={{paddingBottom: 25}}>
                    <Col xl={5}>
                        <TextField label="SĐT" type="text" variant="outlined" style = {{width: '100%'}} value={phone}
                            onChange={(e)=>setPhone(e.target.value)}
                        />
                    </Col>
                    <Col xl={1}></Col>
                    <Col xl={5}>
                        <TextField label="Email" type="text" variant="outlined" style = {{width: '100%'}} value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                    </Col>
                </Row>
                <Row className="justify-content-md-center" style={{paddingBottom: 25}}>
                    <Col xl={5}>
                    <TextField
                        label="Ngày sinh"
                        type="date"
                        defaultValue={bday}
                        onChange={(e)=>setBday(e.target.value)}
                        variant="outlined"
                        style = {{width: '100%'}}
                    />
                    </Col>
                    <Col xl={1}></Col>
                    <Col xl={5}>
                        <TextField
                            style = {{width: '100%'}}
                            select
                            label="Giới tính"
                            value={sex}
                            onChange={(e)=>setSex(e.target.value)}
                            variant="outlined"
                        >
                            {options.map((option) => (
                                <MenuItem key={option.label} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Col>
                </Row>
                <Row className="justify-content-md-center" style={{paddingBottom: 25}}>
                    <Col xl={10}></Col>
                    <Col xl={1}><button className="functionButton" onClick={() => setMessageBoxCreate(true)}>Thêm</button></Col>
                </Row>
            </Container>

            {messageBoxClose && 
                <div className="model">
                    <MessageBox 
                        mess="Xác nhận hủy thêm khách hàng?" 
                        handleYes={() => {
                            setMessageBoxClose(false);
                            props.setNewForm(false);
                        }}
                        handleNo={() => setMessageBoxClose(false)}
                    />
                </div>
            }

            {messageBoxCreate && 
                <div className="model">
                    <MessageBox 
                        mess="Xác nhận lưu và thêm khách hàng mới?" 
                        warning={warning}
                        handleYes={() => {
                            const addCustomer = async () => {
                                try {
                                    await axiosPrivate.post(
                                        '/customer',
                                        {
                                            "name": name,
                                            "id": id,
                                            "phone": phone,
                                            "email": email,
                                            "bday": bday,
                                            "sex": sex
                                        }
                                    );
                                    await axios.post(`/history/Lễ tân ${localStorage.getItem("username")} thêm khách hàng ${id}.`);
                                    setMessageBoxCreate(false);
                                    props.setNewForm(false);
                                } catch (err) {
                                    console.error(err);
                                    err.response?.status === 409 && setWarning("Khách hàng đã tồn tại!");
                                    <Navigate to="/" state={{ from: location }} replace />
                                }
                            }
                            addCustomer();
                        }}
                        handleNo={() => {
                            setMessageBoxCreate(false);
                            setWarning("");
                        }}
                    />
                </div>
            }
        </div>
    );
}

export default NewFormCustomer;