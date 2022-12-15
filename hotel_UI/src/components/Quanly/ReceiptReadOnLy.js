import {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TextField from "@mui/material/TextField";
import {ConfirmModal} from './Modal';


const ReceiptReadOnly = (props) => {
    const receipt = props.receipt
    
    const [openConfirmModal, setOpenConfirmModal] = useState("")

    const confirmPayBack = () => {
        props.setReceipts(props.receipts.filter(rec => rec['formnum'] !== receipt['formnum']))
    }
    return (
        <div className = "Form" style={{margin: '30px auto'}}>
            <Container fluid style = {{padding: '0'}}>
                <Row>
                    <Col style={{textAlign: 'right'}}><button className="Xbutton" style={{fontSize: '150%'}} onClick={()=>{props.open("")}}>X</button></Col>
                </Row>
                <Row style={{paddingBottom: 25}}>
                    <Col xs={3}><h4>Chủ phòng</h4></Col>
                    <Col xs={7}></Col>
                    <Col xs={2}style={{textAlign: 'left'}}>
                        <div style={{width: '71%', textAlign: 'right',textDecoration: 'underline', fontWeight: 300, fontSize: '130%'}}>{receipt.formnum}</div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center" style={{paddingBottom: 25}}>
                    <Col xs={5}>
                        <TextField label="Tên" type="text" variant="outlined" style = {{width: '100%'}} value={receipt.customer.name} disabled/>
                    </Col>
                    <Col xs={1}></Col>
                    <Col xs={5}>
                        <TextField label="CCCD" type="text" variant="outlined" style = {{width: '100%'}} value={receipt.customer.id} disabled/>
                    </Col>
                </Row>
                <Row className="justify-content-md-center" style={{paddingBottom: 25}}>
                    <Col xs={5}>
                        <TextField label="SĐT" type="text" variant="outlined" style = {{width: '100%'}} value={receipt.customer.phone} disabled/>
                    </Col>
                    <Col xs={1}></Col>
                    <Col xs={5}>
                        <TextField label="Email" type="text" variant="outlined" style = {{width: '100%'}} value={receipt.customer.email} disabled/>
                    </Col>
                </Row>
                <Row className="justify-content-md-center" style={{paddingBottom: 25}}>
                    <Col xs={5}>
                    <TextField
                        label="Ngày sinh"
                        type="date"
                        value={receipt.customer.bday}
                        variant="outlined"
                        style = {{width: '100%'}}
                        disabled
                    />
                    </Col>
                    <Col xs={1}></Col>
                    <Col xs={5}>
                        <TextField
                            style = {{width: '100%'}}
                            label="Giới tính"
                            value={receipt.customer.sex}
                            variant="outlined"
                            disabled
                        />
                    </Col>
                </Row>
                <Row className="justify-content-md-center" style={{paddingBottom: 25}}>
                    <Col xs={5}>
                        <TextField
                            label="Ngày giờ Check-in"
                            type="datetime-local"
                            value={receipt.customer.checkin}
                            variant="outlined"
                            style = {{width: '100%'}}
                            disabled
                        />
                    </Col>
                    <Col xs={1}></Col>
                    <Col xs={5}>
                        <TextField
                            label="Ngày giờ Check-out"
                            type="datetime-local"
                            value={receipt.customer.checkout}
                            variant="outlined"
                            style = {{width: '100%'}}
                            disabled
                        />
                    </Col>
                </Row>

                <Row style={{paddingBottom: 25}}>
                    <Col xs={3}><h4>Các khách đi cùng</h4></Col>
                    <Col xs={9}></Col>
                </Row>
                {(receipt.accompanies.length > 0) && 
                    <Row className="justify-content-md-center" style={{paddingBottom: 25}}>
                        <Col xs={3} style={{fontWeight: 600, fontSize: '120%'}}>Tên khách hàng</Col>
                        <Col xs={3} style={{fontWeight: 600, fontSize: '120%'}}>Số CCCD</Col>
                        <Col xs={5}></Col>
                    </Row>}
                {receipt.accompanies.map((accom,index) => 
                    <Row className="justify-content-md-center" style={(index === receipt.accompanies.length - 1)?{paddingBottom: 25}:{paddingBottom: 0}}>
                        <Col xs={3} style={{fontWeight: 400}}>{accom.name}</Col>
                        <Col xs={3} style={{fontWeight: 400}}>{accom.id}</Col>
                        <Col xs={4}></Col>
                        <Col xs={1} style={{textAlign: 'right'}}>
                        </Col> 
                    </Row>
                )}

                <Row style={{paddingBottom: 25}}>
                    <Col xs={3}><h4>Các dịch vụ sử dụng:</h4></Col>
                    <Col xs={9}></Col>
                </Row>

                <Row className="justify-content-md-center" style={{paddingBottom: 25}}>
                    <Col xs={4} style={{fontWeight: 600, fontSize: '120%'}}>Tên dịch vụ</Col>
                    <Col xs={2} style={{fontWeight: 600, fontSize: '120%', textAlign: 'right'}}>Số lượng</Col>
                    <Col xs={2} style={{fontWeight: 600, fontSize: '120%', textAlign: 'right'}}>Đơn giá</Col>
                    <Col xs={2} style={{fontWeight: 600, fontSize: '120%', textAlign: 'right'}}>Thành tiền</Col>
                    <Col xs={1}></Col>
                </Row>
                {receipt.rooms.map((s,index) => 
                    <Row className="justify-content-md-center" style={(index === receipt.rooms.length - 1)?{paddingBottom: 25}:{paddingBottom: 0}}>
                        <Col xs={4} style={{fontWeight: 400}}>{s.name}</Col>
                        <Col xs={2} style={{fontWeight: 400, textAlign: 'right'}}>{s.quantity} (h)</Col>
                        <Col xs={2} style={{fontWeight: 400, textAlign: 'right'}}>{s.price}</Col>
                        <Col xs={2} style={{fontWeight: 400, textAlign: 'right'}}>{s.totalPrice}</Col>
                        <Col xs={1}></Col> 
                    </Row>
                )}
                {receipt.services.map((s,index) => 
                    <Row className="justify-content-md-center" style={(index === receipt.services.length - 1)?{paddingBottom: 40}:{paddingBottom: 0}}>
                        <Col xs={4} style={{fontWeight: 400}}>{s.name}</Col>
                        <Col xs={2} style={{fontWeight: 400, textAlign: 'right'}}><input defaultValue={s.quantity} type="number" min="1" style={{width : '30%', textAlign: "right"}}/></Col>
                        <Col xs={2} style={{fontWeight: 400, textAlign: 'right'}}>{s.price}</Col>
                        <Col xs={2} style={{fontWeight: 400, textAlign: 'right'}}>{s.totalPrice}</Col>
                        <Col xs={1} style={{textAlign: 'right'}}>
                        </Col> 
                    </Row>
                )}

                {
                    "cancel" in receipt ? 
                    <>
                    <Row style={{paddingBottom: 25}}>
                        <Col xs={3}><h4>Chi tiết hủy</h4></Col>
                        <Col xs={9}></Col>
                    </Row>
                    <Row className="justify-content-md-center" style={{paddingBottom: 25}}>
                        <Col xs={5}>
                            <TextField label="Thanh toán" type="text" variant="outlined" style = {{width: '100%'}} value={receipt.payby} disabled/>
                        </Col>
                        <Col xs={1}></Col>
                        <Col xs={5}>
                            <TextField label="Số tài khoản" type="text" variant="outlined" style = {{width: '100%'}} value={receipt.payaccount} disabled/>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center" style={{paddingBottom: 25}}>
                        <Col xs={5}>
                            <TextField label="Thời gian đăng kí" type="datetime-local" variant="outlined" style = {{width: '100%'}} value={receipt.book} disabled/>
                        </Col>
                        <Col xs={1}></Col>
                        <Col xs={5}>
                            <TextField label="Thời gian hủy" type="datetime-local" variant="outlined" style = {{width: '100%'}} value={receipt.cancel} disabled/>
                        </Col>
                    </Row>
                    </>

                     :
                    <></>
                }
                <Row className="justify-content-md-center">
                    <Col xs={7}></Col>
                    <Col xs={2} style={{fontWeight: 600, fontSize: '120%', textAlign: 'right'}}>Tổng cộng:</Col>
                    <Col xs={2} style={{fontWeight: 600, fontSize: '120%', textAlign: 'right'}}>{receipt.total}</Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs={7}></Col>
                    <Col xs={2} style={{fontWeight: 600, fontSize: '120%', textAlign: 'right'}}>Đã thanh toán:</Col>
                    <Col xs={2} style={{fontWeight: 600, fontSize: '120%', textAlign: 'right'}}  className="Rest">
                        <input value={receipt.paid} type="number" min="0" style={{width : '100%', textAlign: "right", height: '90%'}} disabled/>
                    </Col>
                </Row>
                <Row className="justify-content-md-center" style={{paddingBottom: 25}}>
                    <Col xs={7}></Col>
                    <Col xs={2} style={{fontWeight: 600, fontSize: '120%', textAlign: 'right'}}>Còn lại:</Col>
                    <Col xs={2} style={{fontWeight: 600, fontSize: '120%', textAlign: 'right'}}>{receipt.total - receipt.paid}</Col>
                </Row>
                {
                    "cancel" in receipt ? 
                    <Row className="justify-content-md-center" style={{paddingBottom: 25}}>
                        <Col xs={7}></Col>
                        <Col xs={1}></Col>
                        <Col xs={3} style={{textAlign: 'right'}}><button className="functionButton" style={{width: '60%'}} onClick={()=>{setOpenConfirmModal("Xác nhận đã thanh toán cho khách?")}}>Đã thanh toán</button></Col>
                    </Row> : <></>
                }
            </Container>
            {openConfirmModal !== "" && <ConfirmModal text = {openConfirmModal} open = {setOpenConfirmModal} openParent = {props.open} action={confirmPayBack}></ConfirmModal>} 
        </div>
    );
}

export default ReceiptReadOnly;
