import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import tickbox from '../../Image/Customer/tickbox.png';
import '../../css/customer/SearchPage.css';
import TextField from '@mui/material/TextField';
import search from '../../Image/Customer/search.png';
import { useState } from 'react';

const SearchPage =() =>{
    const phongServices = [
        {
            "toa": "A",
            "id": 101,
            "name": "Phòng 101 tòa A: VIP 1 giường đơn, 0 giường đôi, view Biển, Không ban công",
            "price": 2000000,
            "quantity": 72,
            "totalPrice": 7500000
        },
        {
            "toa": "A",
            "id": 102,
            "name": "Phòng 102 tòa A: Superior 1 giường đơn, 0 giường đôi, view Hồ bơi, Có ban công",
            "price": 1000000,
            "quantity": 72,
            "totalPrice": 4200000
        }
    ]

    const [messageBoxHuy, setMessageBoxHuy] = useState(false);

    return(
        <div className='searchPage'>
            <div className='searchRow'>
                <div className='madatphong'>
                    <img src={search} alt="search"></img>
                    <TextField 
                        id="outlined-read-only-input"
                        label="Mã đặt phòng"
                        defaultValue="ABC0001"
                        InputProps={{readOnly: true,}}
                    />
                </div>
                <div className='dathanhtoan'>
                    <img src={tickbox} alt="tickbox"></img>
                    <div>
                        <p><b>Đã thanh toán</b></p>
                        <p><b>11.700.000</b> VNĐ</p>
                    </div>
                </div>
            </div>
            <div className = "Form" style={{overflowY: 'auto', margin: '30px auto', overflowX: 'hidden'}}>
                <Container fluid style = {{padding: '0'}}>
                    <Row style={{paddingBottom: 25}}>
                        <Col xl={3}><h4>Chủ phòng</h4></Col>
                        <Col xl={7}></Col>
                        <Col xl={2}style={{textAlign: 'left'}}>
                            <div style={{width: '71%', textAlign: 'right',textDecoration: 'underline', fontWeight: 300, fontSize: '130%'}}>ABC0001</div>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center" style={{paddingBottom: 25}}>
                        <Col xl={5}>
                            <TextField InputProps={{readOnly: true,}} label="Tên" type="text" variant="outlined" style = {{width: '100%'}} defaultValue="Nguyễn Văn A"/>
                        </Col>
                        <Col xl={1}></Col>
                        <Col xl={5}>
                            <TextField InputProps={{readOnly: true,}} label="CCCD" type="text" variant="outlined" style = {{width: '100%'}} defaultValue="123456789000"/>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center" style={{paddingBottom: 25}}>
                        <Col xl={5}>
                            <TextField InputProps={{readOnly: true,}} label="SĐT" type="text" variant="outlined" style = {{width: '100%'}} defaultValue="0123 456 789"/>
                        </Col>
                        <Col xl={1}></Col>
                        <Col xl={5}>
                            <TextField InputProps={{readOnly: true,}} label="Email" type="text" variant="outlined" style = {{width: '100%'}} defaultValue="nguyenvana@gmail.com" />
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center" style={{paddingBottom: 25}}>
                        <Col xl={5}>
                            <TextField InputProps={{readOnly: true,}} label="Ngày sinh" type="text" variant="outlined" style = {{width: '100%'}} defaultValue="01/01/1990" />
                        </Col>
                        <Col xl={1}></Col>
                        <Col xl={5}>
                            <TextField InputProps={{readOnly: true,}} label="Giới tính" type="text" variant="outlined" style = {{width: '100%'}} defaultValue="Nam" />
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center" style={{paddingBottom: 25}}>
                        <Col xl={5}>
                            <TextField InputProps={{readOnly: true,}} label="Thời gian Check-in" type="text" variant="outlined" style = {{width: '100%'}} defaultValue="19/10/2022, 12:00pm" />
                        </Col>
                        <Col xl={1}></Col>
                        <Col xl={5}>
                            <TextField InputProps={{readOnly: true,}} label="Thời gian Check-out" type="text" variant="outlined" style = {{width: '100%'}} defaultValue="21/10/2022, 12:00pm" />
                        </Col>
                    </Row>

                    <Row style={{paddingBottom: 25}}>
                        <Col xl={3}><h4>Các khách đi cùng</h4></Col>
                        <Col xl={9}></Col>
                    </Row>

                    <Row style={{paddingBottom: 25}}>
                        <Col xl={3}><h4>Các dịch vụ sử dụng:</h4></Col>
                        <Col xl={9}></Col>
                    </Row>
                    {phongServices.map((s,index) => 
                        <Row key={index} className="justify-content-md-center" style={(index === phongServices.length - 1)?{paddingBottom: 25}:{paddingBottom: 0}}>
                            <Col xl={4} style={{fontWeight: 400}}>{s.name}</Col>
                            <Col xl={2} style={{fontWeight: 400, textAlign: 'right'}}>{s.quantity} (h)</Col>
                            <Col xl={2} style={{fontWeight: 400, textAlign: 'right'}}>{s.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</Col>
                            <Col xl={2} style={{fontWeight: 400, textAlign: 'right'}}>{s.totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</Col>
                            <Col xl={1}></Col> 
                        </Row>
                    )}
                    
                    <Row className="justify-content-md-center">
                        <Col xl={7}></Col>
                        <Col xl={2} style={{fontWeight: 600, fontSize: '120%', textAlign: 'right'}}>Tổng cộng:</Col>
                        <Col xl={2} style={{fontWeight: 600, fontSize: '120%', textAlign: 'right'}}>11.700.000 VND</Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col xl={7}></Col>
                        <Col xl={2} style={{fontWeight: 600, fontSize: '120%', textAlign: 'right'}}>Đã thanh toán:</Col>
                        <Col xl={2} style={{fontWeight: 600, fontSize: '120%', textAlign: 'right'}}>11.700.000 VND</Col>
                    </Row>
                    <Row className="justify-content-md-center" style={{paddingBottom: 25}}>
                        <Col xl={7}></Col>
                        <Col xl={2} style={{fontWeight: 600, fontSize: '120%', textAlign: 'right'}}>Còn lại:</Col>
                        <Col xl={2} style={{fontWeight: 600, fontSize: '120%', textAlign: 'right'}}>0</Col>
                    </Row>
                    <Row className="justify-content-md-center" style={{paddingBottom: 25}}>
                        <Col xl={9}></Col>
                        <Col xl={2} style={{textAlign: 'right'}}><button className="functionButton" style={{width: '60%'}} onClick={() => setMessageBoxHuy(true)}>Hủy đơn</button></Col>
                    </Row>
                </Container>
            </div>

            {messageBoxHuy &&
                <div className="model" style={{background: "white", width: '50%', height: '35%', padding: '10px 10px', left: '25%', top: '32.5%', border: '1px solid black' }}>
                    <div>
                        <p>- Yêu cầu hủy đơn của quý khách sẽ được duyệt trực tiếp bởi bên khách sạn chúng tôi. Chính sách cho việc hủy đơn đã được nêu rất rõ trong <b>Điều khoản hủy đơn</b> được đính kèm trong <b>mail xác nhận thanh toán</b> được gửi cho quý khách khi quý khách tiến hành thanh toán thành công.</p>
                        <p>- Yêu cầu hủy đơn của quý khách sẽ được duyệt trong 1-2 ngày, xin hãy check mail trong thời gian này vì chúng tôi sẽ gửi kết quả duyệt đơn cùng với thông tin về vấn đề hoàn tiền cho quý khhachs qua mail sau khi duyệt yêu cầu hủy đơn của quý khách.</p>
                        <button className="btn btn-outline-success" style={{marginLeft: '34%', width: '15%', marginRight: '2%'}} onClick={() => setMessageBoxHuy(false)}>Xác nhận</button>  
                        <button className="btn btn-outline-success" style={{width: '15%'}} onClick={() => setMessageBoxHuy(false)}>Cancel</button>  
                    </div>
                </div>
            }

            <div className='searchInfo'>
            </div>
        </div>
    );

}

export default SearchPage;