import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TextField from "@mui/material/TextField";
import MenuItem from '@mui/material/MenuItem';
import {MessageBox, InformBox} from './MessageBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import { Navigate, useLocation } from 'react-router-dom';

const FormCustomer = (props) => {

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
    const [sex, setSex] = useState("");
    const [warning, setWarning] = useState("");

    useEffect(() => {

        let isMounted = true
        const controller = new AbortController();
        
        const getCustomer = async () => {
            try {
                const res = await axiosPrivate.get(
                    `/customer/${props.form}`,
                    {
                        signal: controller.signal
                    }
                );
                isMounted && setName(res.data.name);
                isMounted && setId(res.data.id);
                isMounted && setPhone(res.data.phone);
                isMounted && setEmail(res.data.email);
                isMounted && setSex(res.data.sex);
                isMounted && setBday(res.data.bday);
            } catch (err) {
                console.error(err);
                <Navigate to="/" state={{ from: location }} replace />
            }
        }

        getCustomer();

        return () => {
            isMounted = false;
            controller.abort();
        }

    }, [props.form])

    const [messageBoxSave, setMessageBoxSave] = useState(false);
    const [messageBoxClose, setMessageBoxClose] = useState(false);
    const [messageBoxDel, setMessageBoxDel] = useState(false);
    const [messageBoxWarnning, setMessageBoxWarnning] = useState(false);
    const [change, setChange] = useState(false); 

    const axiosPrivate = useAxiosPrivate();
    const location = useLocation();

    return (
        <div className = "Form">
            <Container fluid style = {{padding: '0'}}>
                <Row>
                    <Col style={{textAlign: 'right'}}><button className="Xbutton" style={{fontSize: '150%'}} onClick={()=>{
                        change && setMessageBoxClose(true);
                        !change && props.setForm("");
                    }}>X</button></Col>
                </Row>
                <Row style={{paddingBottom: 25}}>
                    <Col xl={3}><h4>Thông tin cá nhân</h4></Col>
                    <Col xl={9}></Col>
                </Row>
                <Row className="justify-content-md-center" style={{paddingBottom: 25}}>
                    <Col xl={5}>
                        <TextField label="Tên" type="text" variant="outlined" style = {{width: '100%'}} value={name}
                            onChange={(e)=>{
                                setName(e.target.value); setChange(true);}}
                        />
                    </Col>
                    <Col xl={1}></Col>
                    <Col xl={5}>
                        <TextField label="CCCD" type="text" variant="outlined" style = {{width: '100%'}} value={id}
                            onChange={(e)=>{setId(e.target.value); setChange(true);}}
                        />
                    </Col>
                </Row>
                <Row className="justify-content-md-center" style={{paddingBottom: 25}}>
                    <Col xl={5}>
                        <TextField label="SĐT" type="text" variant="outlined" style = {{width: '100%'}} value={phone}
                            onChange={(e)=>{setPhone(e.target.value); setChange(true);}}
                        />
                    </Col>
                    <Col xl={1}></Col>
                    <Col xl={5}>
                        <TextField label="Email" type="text" variant="outlined" style = {{width: '100%'}} value={email}
                            onChange={(e)=>{setEmail(e.target.value); setChange(true);}}
                        />
                    </Col>
                </Row>
                <Row className="justify-content-md-center" style={{paddingBottom: 25}}>
                    <Col xl={5}>
                    <TextField
                        label="Ngày sinh"
                        type="date"
                        value={bday}
                        onChange={(e)=>{setBday(e.target.value); setChange(true);}}
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
                            onChange={(e)=>{setSex(e.target.value); setChange(true);}}
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
                    <Col xl={9}></Col>
                    <Col xl={1} style={{textAlign: 'right'}}><button className="functionButton" onClick={() => setMessageBoxDel(true)}>Xóa</button></Col>
                    <Col xl={1} style={{textAlign: 'right'}}><button className="functionButton" onClick={() => {
                        const updateCustomer = async () => {
                            try {
                                await axiosPrivate.put(
                                    `/customer/${props.form}`,
                                    {
                                        "name": name,
                                        "id": id,
                                        "phone": phone,
                                        "email": email,
                                        "bday": bday,
                                        "sex": sex,
                                        "pay": 0
                                    }
                                );
                                setMessageBoxSave(true);
                            } catch (err) {
                                console.error(err);
                                if (err.response?.status === 409) setMessageBoxWarnning(true);
                                <Navigate to="/" state={{ from: location }} replace />
                            }
                        }
                    updateCustomer();
                    }}>Lưu</button></Col>
                </Row>
            </Container>
            {messageBoxClose && 
                <div className="model">
                    <MessageBox 
                        mess="Lưu thay đổi?" 
                        warning={warning}
                        handleYes={async () => {
                            const updateCustomer = async () => {
                                try {
                                    await axiosPrivate.put(
                                        `/customer/${props.form}`,
                                        {
                                            "name": name,
                                            "id": id,
                                            "phone": phone,
                                            "email": email,
                                            "bday": bday,
                                            "sex": sex,
                                            "pay": 0
                                        }
                                    );
                                    setMessageBoxClose(false);
                                    props.setForm("");
                                } catch (err) {
                                    console.error(err);
                                    err.response?.status === 409 && setWarning("Khách hàng đã tồn tại!");
                                    <Navigate to="/" state={{ from: location }} replace />
                                }
                            }
                        updateCustomer();
                        }}
                        handleNo={() => {
                            setMessageBoxClose(false);
                            props.setForm("");
                        }}
                    />
                </div>
            }

            {messageBoxSave && 
                <div className="model">
                    <InformBox 
                        mess="Lưu thành công!" 
                        handleYes={() => {
                            setMessageBoxSave(false);
                            setChange(false);
                            props.setForm(id);
                        }}
                    />
                </div>
            }

            {messageBoxWarnning && 
                <div className="model">
                    <InformBox 
                        mess="Khách hàng đã tồn tại!" 
                        handleYes={() => {
                            setMessageBoxWarnning(false);
                        }}
                    />
                </div>
            }

            {messageBoxDel && 
                <div className="model">
                    <MessageBox 
                        mess="Xác nhận xoá khách hàng?" 
                        handleYes={() => {
                            const deleteCustomer = async () => {
                                try {
                                    await axiosPrivate.delete(`/customer/${props.form}`);
                                    setMessageBoxDel(false);
                                    props.setForm("");
                                } catch (err) {
                                    console.error(err);
                                    <Navigate to="/" state={{ from: location }} replace />
                                }
                            }
                            deleteCustomer();
                        }}
                        handleNo={() => {
                            setMessageBoxDel(false);
                        }}
                    />
                </div>
            }
        </div>
    );
}

export default FormCustomer;