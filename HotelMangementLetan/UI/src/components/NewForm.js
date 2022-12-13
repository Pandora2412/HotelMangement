import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TextField from "@mui/material/TextField";
import MenuItem from '@mui/material/MenuItem';
import { MessageBox } from './MessageBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import { Navigate, useLocation } from 'react-router-dom';

const NewForm = (props) => {

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
    const [formNum, setFormNum] = useState(""); 
    const [total, setTotal] = useState(0);

    useEffect(() => {

        let isMounted = true
        const controller1 = new AbortController();
        const controller2 = new AbortController();
        const controller3 = new AbortController();

        const getPhongAndMenu = async () => {
            try {
                const resPhong = await axiosPrivate.post(
                    `/room/${props.checkin}/${props.checkout}`,
                    props.selections,
                    {
                        signal: controller1.signal
                    }
                );
                isMounted && setPhongServices(resPhong.data);
                isMounted && setTotal(resPhong.data.reduce((sum,a) => sum + a.totalPrice, 0));

                const resFormNum = await axiosPrivate.get(
                    '/customerbill',
                    {
                        signal: controller3.signal
                    }
                );
                isMounted && setFormNum(resFormNum.data);

                const resMenu = await axiosPrivate.get(
                    '/menu',
                    {
                        signal: controller2.signal
                    }
                );
                isMounted && setMenu(resMenu.data);
            } catch (err) {
                console.error(err);
                <Navigate to="/" state={{ from: location }} replace />
            }
        }

        getPhongAndMenu();

        return () => {
            isMounted = false;
            controller1.abort();
            controller2.abort();
            controller3.abort();
        }

    }, [])

    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [bday, setBday] = useState("1990-01-01");
    const [sex, setSex] = useState();
    const [service, setService] = useState('');
    const [accoms, setAccoms] = useState([]);
    const [accomName, setAccomName] = useState("");
    const [accomId, setAccomId] = useState("");
    const [services, setServices] = useState([]);
    const [pay, setPay] = useState(0);
    const [messageBoxCreate, setMessageBoxCreate] = useState(false);
    const [messageBoxClose, setMessageBoxClose] = useState(false);

    const handleQuantityChange = (e, index) => {
        if (isNaN(e.target.value) || e.target.value < 1) e.target.value = 1;
        services[index].quantity = parseInt(e.target.value);
        const old = services[index].totalPrice;
        services[index].totalPrice = services[index].price * e.target.value;  
        setTotal(total - old + services[index].totalPrice);
    }

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
                    <Col xl={3}><h4>Chủ phòng</h4></Col>
                    <Col xl={7}></Col>
                    <Col xl={2}style={{textAlign: 'left'}}>
                        <div style={{width: '71%', textAlign: 'right',textDecoration: 'underline', fontWeight: 300, fontSize: '130%'}}>{formNum}</div>
                    </Col>
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
                            onChange={(e)=>setAccomName(e.target.value)}
                        />
                    </Col>
                    <Col xl={1}></Col>
                    <Col xl={5}>
                        <TextField label="CCCD" type="text" variant="outlined" style = {{width: '100%'}} value={accomId}
                            onChange={(e)=>setAccomId(e.target.value)}
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
                            onChange={(e)=>setService(e.target.value)}
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
                        <Col xl={2} style={{fontWeight: 400, textAlign: 'right'}}><input defaultValue="1" type="number" min="1" style={{width : '30%', textAlign: "right"}} onChange={(e) => handleQuantityChange(e, index)}/></Col>
                        <Col xl={2} style={{fontWeight: 400, textAlign: 'right'}}>{s.price}</Col>
                        <Col xl={2} style={{fontWeight: 400, textAlign: 'right'}}>{s.totalPrice}</Col>
                        <Col xl={1} style={{textAlign: 'right'}}>
                            <button className="Xbutton" onClick={() => {
                                setTotal(total - s.totalPrice);
                                if (index === 0) setServices(services.slice(1));
                                else if (index === services.length - 1) setServices(services.slice(0, -1));
                                else setServices([...services.slice(0, index), ...services.slice(index + 1)]);
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
                        }}/>
                    </Col>
                </Row>
                <Row className="justify-content-md-center" style={{paddingBottom: 25}}>
                    <Col xl={7}></Col>
                    <Col xl={2} style={{fontWeight: 600, fontSize: '120%', textAlign: 'right'}}>Còn lại:</Col>
                    <Col xl={2} style={{fontWeight: 600, fontSize: '120%', textAlign: 'right'}}>{total - pay}</Col>
                </Row>
                <Row className="justify-content-md-center" style={{paddingBottom: 25}}>
                    <Col xl={10}></Col>
                    <Col xl={1}><button className="functionButton" onClick={() => setMessageBoxCreate(true)}>Tạo</button></Col>
                </Row>
            </Container>
            {messageBoxClose && 
                <div className="model">
                    <MessageBox 
                        mess="Xác nhận hủy tạo đơn mới?" 
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
                        mess="Xác nhận lưu và tạo đơn mới?" 
                        handleYes={() => {
                            const addBillAndBookdays = async () => {
                                try {
                                    await axiosPrivate.post(
                                        '/customerbill',
                                        {
                                            "formnum": formNum,  
                                            "customer": {
                                            "name": name,
                                            "id": id,
                                            "phone": phone,
                                            "email": email,
                                            "bday": bday,
                                            "sex": sex,
                                            "checkin": props.checkin,
                                            "checkout": props.checkout
                                            },
                                            "accompanies": accoms,
                                            "rooms": phongServices,
                                            "services": services,
                                            "total": total,
                                            "paid": pay
                                        }
                                    );
                                    await axiosPrivate.post(
                                        '/room',
                                        {
                                            "roomlist": props.selections,
                                            "bookday": {
                                                "name": name,
                                                "id": id,
                                                "formnum": formNum,
                                                "checkin": props.checkin,
                                                "checkout": props.checkout
                                            }
                                        }
                                    )
                                    props.setSelections([]);
                                    setMessageBoxCreate(false);
                                    props.setNewForm(false);
                                } catch (err) {
                                    console.error(err);
                                    <Navigate to="/" state={{ from: location }} replace />
                                }
                            }
                            addBillAndBookdays();
                        }}
                        handleNo={() => setMessageBoxCreate(false)}
                    />
                </div>
            }
        </div>
    );
}

export default NewForm;