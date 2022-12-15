import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TextField from "@mui/material/TextField";
import MenuItem from '@mui/material/MenuItem';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

import { Navigate, useLocation } from 'react-router-dom';

const Form = (props) => {

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

    const [phongServices, setPhongServices] = useState([]);
    const [menu, setMenu] = useState([]);
    const [total, setTotal] = useState(0);
    const [services, setServices] = useState([]);
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [bday, setBday] = useState("1990-01-01");
    const [sex, setSex] = useState("");
    const [pay, setPay] = useState(0);
    const [accoms, setAccoms] = useState([]);


    const [service, setService] = useState('');
    const [accomName, setAccomName] = useState("");
    const [accomId, setAccomId] = useState("");
    const [messageBoxSave, setMessageBoxSave] = useState(false);
    const [messageBoxClose, setMessageBoxClose] = useState(false);
    const [messageBoxBill, setMessageBoxBill] = useState(false);
    const [change, setChange] = useState(false); 

    const handleQuantityChange = (e, index) => {
        if (isNaN(e.target.value) || e.target.value < 1) e.target.value = 1;
        services[index].quantity = parseInt(e.target.value);
        const old = services[index].totalPrice;
        services[index].totalPrice = services[index].price * e.target.value;  
        setTotal(total - old + services[index].totalPrice);
        setChange(true);
    }

    //const location = useLocation();

    return (
        <div className = "Form" style={{margin: '30px auto'}}>
            <Container fluid style = {{padding: '0'}}>
                <Row>
                    <Col style={{textAlign: 'right'}}><button className="Xbutton" style={{fontSize: '150%'}} onClick={()=>{
                        change && setMessageBoxClose(true);
                        !change && props.setForm("");
                    }}>X</button></Col>
                </Row>
                <Row style={{paddingBottom: 25}}>
                    <Col xl={3}><h4>Chủ phòng</h4></Col>
                    <Col xl={7}></Col>
                    <Col xl={2}style={{textAlign: 'left'}}>
                        <div style={{width: '71%', textAlign: 'right',textDecoration: 'underline', fontWeight: 300, fontSize: '130%'}}>{props.form}</div>
                    </Col>
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
                    <Col xl={5}>
                        <TextField
                            disabled
                            label="Ngày giờ Check-in"
                            type="datetime-local"
                            defaultValue={props.checkin}
                            variant="outlined"
                            style = {{width: '100%'}}
                        />
                    </Col>
                    <Col xl={1}></Col>
                    <Col xl={5}>
                        <TextField
                            disabled
                            label="Ngày giờ Check-out"
                            type="datetime-local"
                            defaultValue={props.checkout}
                            variant="outlined"
                            style = {{width: '100%'}}
                        />
                    </Col>
                </Row>

                <Row style={{paddingBottom: 25}}>
                    <Col xl={3}><h4>Các khách đi cùng</h4></Col>
                    <Col xl={9}></Col>
                </Row>
                <Row className="justify-content-md-center" style={{paddingBottom: 10}}>
                    <Col xl={5}>
                        <TextField label="Tên" type="text" variant="outlined" style = {{width: '100%'}} value={accomName}
                            onChange={(e)=>{setAccomName(e.target.value); setChange(true);}}
                        />
                    </Col>
                    <Col xl={1}></Col>
                    <Col xl={5}>
                        <TextField label="CCCD" type="text" variant="outlined" style = {{width: '100%'}} value={accomId}
                            onChange={(e)=>{setAccomId(e.target.value); setChange(true);}}
                        />
                    </Col>
                </Row>
                <Row className="justify-content-md-center" style={{paddingBottom: 25}}>
                    <Col xl={10}></Col>            
                    <Col xl={1}>
                        <button className="functionButton" onClick={() => {
                            if (accomName && accomId) {
                                setAccoms([...accoms, {
                                    "name": accomName,
                                    "id": accomId
                                }]);
                                setAccomId("");
                                setAccomName("");
                            }
                        }}>
                            Thêm
                        </button>
                    </Col>
                </Row>
                {(accoms.length > 0) && 
                    <Row className="justify-content-md-center" style={{paddingBottom: 25}}>
                        <Col xl={3} style={{fontWeight: 600, fontSize: '120%'}}>Tên khách hàng</Col>
                        <Col xl={3} style={{fontWeight: 600, fontSize: '120%'}}>Số CCCD</Col>
                        <Col xl={5}></Col>
                    </Row>}
                {accoms.map((accom,index) => 
                    <Row className="justify-content-md-center" style={(index === accoms.length - 1)?{paddingBottom: 25}:{paddingBottom: 0}}>
                        <Col xl={3} style={{fontWeight: 400}}>{accom.name}</Col>
                        <Col xl={3} style={{fontWeight: 400}}>{accom.id}</Col>
                        <Col xl={4}></Col>
                        <Col xl={1} style={{textAlign: 'right'}}>
                            <button className="Xbutton" onClick={() => {
                                if (index === 0) setAccoms(accoms.slice(1));
                                else if (index === accoms.length - 1) setAccoms(accoms.slice(0, -1));
                                else setAccoms([...accoms.slice(0, index), ...accoms.slice(index + 1)]);
                                setChange(true);
                            }}>X</button>
                        </Col> 
                    </Row>
                )}

                <Row style={{paddingBottom: 25}}>
                    <Col xl={3}><h4>Các dịch vụ sử dụng:</h4></Col>
                    <Col xl={9}></Col>
                </Row>
                <Row className="justify-content-md-center" style={{paddingBottom: 25}}>
                    <Col xl={5}>
                        <TextField
                            style = {{width: '100%'}}
                            select
                            label="Dịch vụ"
                            value={service}
                            onChange={(e)=>{setService(e.target.value); setChange(true);}}
                            variant="outlined"
                        >
                            {menu.map((option) => (
                                <MenuItem key={option.label} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Col>
                    <Col xl={5}></Col>
                    <Col xl={1}>
                        <button className="functionButton" onClick={() => {
                            const sv = menu.find(e => e.value === service); 
                            setMenu(menu.filter(e => 
                                [...services, {
                                "name": sv.label,
                                "price": sv.price,
                                "quantity": 1,
                                "totalPrice": sv.price
                            }].findIndex(service => service.name === e.label) === -1));
                            setServices([...services, {
                                "name": sv.label,
                                "price": sv.price,
                                "quantity": 1,
                                "totalPrice": sv.price
                            }]);
                            setService("");
                            setTotal(total + sv.price);
                        }}>
                            Thêm
                        </button>
                    </Col>
                </Row>
                <Row className="justify-content-md-center" style={{paddingBottom: 25}}>
                    <Col xl={4} style={{fontWeight: 600, fontSize: '120%'}}>Tên dịch vụ</Col>
                    <Col xl={2} style={{fontWeight: 600, fontSize: '120%', textAlign: 'right'}}>Số lượng</Col>
                    <Col xl={2} style={{fontWeight: 600, fontSize: '120%', textAlign: 'right'}}>Đơn giá</Col>
                    <Col xl={2} style={{fontWeight: 600, fontSize: '120%', textAlign: 'right'}}>Thành tiền</Col>
                    <Col xl={1}></Col>
                </Row>
                {phongServices.map((s,index) => 
                    <Row className="justify-content-md-center" style={(index === phongServices.length - 1)?{paddingBottom: 25}:{paddingBottom: 0}}>
                        <Col xl={4} style={{fontWeight: 400}}>{s.name}</Col>
                        <Col xl={2} style={{fontWeight: 400, textAlign: 'right'}}>{s.quantity} (h)</Col>
                        <Col xl={2} style={{fontWeight: 400, textAlign: 'right'}}>{s.price}</Col>
                        <Col xl={2} style={{fontWeight: 400, textAlign: 'right'}}>{s.totalPrice}</Col>
                        <Col xl={1}></Col> 
                    </Row>
                )}
                {services.map((s,index) => 
                    <Row className="justify-content-md-center" style={(index === services.length - 1)?{paddingBottom: 40}:{paddingBottom: 0}}>
                        <Col xl={4} style={{fontWeight: 400}}>{s.name}</Col>
                        <Col xl={2} style={{fontWeight: 400, textAlign: 'right'}}><input defaultValue={s.quantity} type="number" min="1" style={{width : '30%', textAlign: "right"}} onChange={(e) => handleQuantityChange(e, index)}/></Col>
                        <Col xl={2} style={{fontWeight: 400, textAlign: 'right'}}>{s.price}</Col>
                        <Col xl={2} style={{fontWeight: 400, textAlign: 'right'}}>{s.totalPrice}</Col>
                        <Col xl={1} style={{textAlign: 'right'}}>
                            <button className="Xbutton" onClick={() => {
                                setTotal(total - s.totalPrice);
                                if (index === 0) setServices(services.slice(1));
                                else if (index === services.length - 1) setServices(services.slice(0, -1));
                                else setServices([...services.slice(0, index), ...services.slice(index + 1)]);
                                setChange(true);
                            }}>X</button>
                        </Col> 
                    </Row>
                )}
                <Row className="justify-content-md-center">
                    <Col xl={7}></Col>
                    <Col xl={2} style={{fontWeight: 600, fontSize: '120%', textAlign: 'right'}}>Tổng cộng:</Col>
                    <Col xl={2} style={{fontWeight: 600, fontSize: '120%', textAlign: 'right'}}>{total}</Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xl={7}></Col>
                    <Col xl={2} style={{fontWeight: 600, fontSize: '120%', textAlign: 'right'}}>Đã thanh toán:</Col>
                    <Col xl={2} style={{fontWeight: 600, fontSize: '120%', textAlign: 'right'}}  className="Rest">
                        <input value={pay} type="number" min="0" style={{width : '100%', textAlign: "right", height: '90%'}} onChange={(e) => {         
                            if (isNaN(e.target.value) || e.target.value < 0 || e.target.value === "") e.target.value = 0;
                            setPay(parseInt(e.target.value));
                            setChange(true);
                        }}/>
                    </Col>
                </Row>
                <Row className="justify-content-md-center" style={{paddingBottom: 25}}>
                    <Col xl={7}></Col>
                    <Col xl={2} style={{fontWeight: 600, fontSize: '120%', textAlign: 'right'}}>Còn lại:</Col>
                    <Col xl={2} style={{fontWeight: 600, fontSize: '120%', textAlign: 'right'}}>{total - pay}</Col>
                </Row>
                <Row className="justify-content-md-center" style={{paddingBottom: 25}}>
                    <Col xl={8}></Col>
                    <Col xl={2} style={{textAlign: 'right'}}><button className="functionButton" style={{width: '60%'}} onClick={() => setMessageBoxBill(true)}>Xuất đơn</button></Col>
                    <Col xl={1}><button className="functionButton" onClick={() => {}}>Lưu</button></Col>
                </Row>
            </Container>


            
            
        </div>
    );
}

export default Form;
