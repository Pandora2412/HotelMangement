import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TextField from "@mui/material/TextField";
import MenuItem from '@mui/material/MenuItem';
import MessageBox from './MessageBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


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
    ]

    const menu = [
        {
            price: 1000000,
            label: "Spa cao cấp",
            value: "spaVip"
        },
        {
            price: 500000,
            label: "Spa thường",
            value: "spa"
        },
        {
            price: 50000,
            label: "Giặt sấy",
            value: "laundry"
        },
        {
            price: 25000,
            label: "Nước ngọt",
            value: "drinks"
        },
        {
            price: 18000,
            label: "Coffe",
            value: "coffe"
        },
        {
            price: 18000,
            label: "Coffe sữa",
            value: "milkcoffe"
        },
        {
            price: 18000,
            label: "Trà",
            value: "tea"
        },
        {
            price: 15000,
            label: "Nước suối",
            value: "water"
        }
    ]

    let phongService = props.selections.map(selection => {
        const phong = props.PhongDB.phongs.find(e => e.id === selection);    
        return {
            "name": "Phòng " + phong.type + " " + phong.singlebed + " giường đơn, " + phong.doublebed + " giường đôi, view " + phong.view + ", " + phong.bancong + " ban công",
            "price": phong.price,
            "quantity": ((props.checkout.getTime() - props.checkin.getTime()) / 3600000) + " (h)",
            "totalPrice": Math.round(phong.price / 24 * ((props.checkout.getTime() - props.checkin.getTime()) / 3600000))
        };
    })

    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [bday, setBday] = useState("1990-01-01");
    const [sex, setSex] = useState("");
    const [service, setService] = useState("");
    const [accoms, setAccoms] = useState([]);
    const [accomName, setAccomName] = useState("");
    const [accomId, setAccomId] = useState("");
    const [services, setServices] = useState([]);
    const [total, setTotal] = useState(phongService.reduce((sum,a) => sum + a.totalPrice, 0));
    const [pay, setPay] = useState(0);
    const [messageBoxCreate, setMessageBoxCreate] = useState(false);
    const [messageBoxClose, setMessageBoxClose] = useState(false);

    const handleQuantityChange = (e, index) => {
        if (isNaN(e.target.value) || e.target.value < 1) e.target.value = 1;
        services[index].quantity = e.target.value;
        const old = services[index].totalPrice;
        services[index].totalPrice = services[index].price * e.target.value;  
        setTotal(total - old + services[index].totalPrice);
    }

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
                        <div style={{width: '71%', textAlign: 'right',textDecoration: 'underline', fontWeight: 300, fontSize: '130%'}}>Madon</div>
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
                            defaultValue={props.checkin.getFullYear() + ((props.checkin.getMonth() + 1 > 9)?"-":"-0") + (props.checkin.getMonth() + 1) + ((props.checkin.getDate() > 9)?"-":"-0") + props.checkin.getDate() + "T" + ((props.checkin.getHours() > 9)?"":"0") + props.checkin.getHours() + ":" + ((props.checkin.getMinutes() > 9)?"":"0") + props.checkin.getMinutes()}
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
                            defaultValue={props.checkout.getFullYear() + ((props.checkout.getMonth() + 1 > 9)?"-":"-0") + (props.checkout.getMonth() + 1) + ((props.checkout.getDate() > 9)?"-":"-0") + props.checkout.getDate() + "T" + ((props.checkout.getHours() > 9)?"":"0") + props.checkout.getHours() + ":" + ((props.checkout.getMinutes() > 9)?"":"0") + props.checkout.getMinutes()}
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
                {phongService.map((s,index) => 
                    <Row className="justify-content-md-center" style={(index === phongService.length - 1)?{paddingBottom: 25}:{paddingBottom: 0}}>
                        <Col xl={4} style={{fontWeight: 400}}>{s.name}</Col>
                        <Col xl={2} style={{fontWeight: 400, textAlign: 'right'}}>{s.quantity}</Col>
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
                            setPay(e.target.value);
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
                            //Cap nhat DB don: Them dơn
                            //Cap nhat DB phong: Them bookday cho phong
                            props.selections.map(selection => {
                                let selectRoom = props.PhongDB.phongs.find(e => e.id === selection); 
                                selectRoom.bookday = [...selectRoom.bookday, {
                                    "checkin": props.checkin.getFullYear() + ((props.checkin.getMonth() + 1 > 9)?"-":"-0") + (props.checkin.getMonth() + 1) + ((props.checkin.getDate() > 9)?"-":"-0") + props.checkin.getDate() + "T" + ((props.checkin.getHours() > 9)?"":"0") + props.checkin.getHours() + ":" + ((props.checkin.getMinutes() > 9)?"":"0") + props.checkin.getMinutes(),
                                    "checkout": props.checkout.getFullYear() + ((props.checkout.getMonth() + 1 > 9)?"-":"-0") + (props.checkout.getMonth() + 1) + ((props.checkout.getDate() > 9)?"-":"-0") + props.checkout.getDate() + "T" + ((props.checkout.getHours() > 9)?"":"0") + props.checkout.getHours() + ":" + ((props.checkout.getMinutes() > 9)?"":"0") + props.checkout.getMinutes(),
                                    "id": id,
                                    "name": name,
                                    "formnum": "Madon" 
                                }]
                            })
                            props.setRowData(props.PhongDB.phongs.filter(phong => (phong.bookday.every(day => (new Date(day.checkin).getTime() > props.checkout.getTime()) || (new Date(day.checkout).getTime() < props.checkin.getTime())))));
                            props.setRowDataBook(props.PhongDB.phongs.filter(phong => (phong.bookday.some(day => (new Date(day.checkin).getTime() === props.checkin.getTime()) && (new Date(day.checkout).getTime() === props.checkout.getTime())))));
                            props.setSelections([]);
                            props.setSelectNum(0);
                            setMessageBoxCreate(false);
                            props.setNewForm(false);
                        }}
                        handleNo={() => setMessageBoxCreate(false)}
                    />
                </div>
            }
        </div>
    );
}

export default NewForm;