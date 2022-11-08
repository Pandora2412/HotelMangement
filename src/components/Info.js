import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Input from './Input'
import '../css/Info.css'
import {FaUserCircle} from 'react-icons/fa'

const Info = () => {
    return (
        <div className = "info">
            <Container fluid>
                <h4>Thông tin cá nhân</h4>
                <Row>
                    <Col xs = {{span: 12, order: 2}} sm = {{span: 12, order: 2}} md = {8} xl = {9}>
                        <Container fluid style = {{padding: '0'}}>
                            <Row>
                                <Col xs = {9}><Input.Normal type = "text" label = "Họ và tên"  placeholder = "Nhập tên nhân viên"></Input.Normal></Col>
                                <Col>
                                    <Input.Select label = "Giới tính" placeholder = "Chọn giới tính">
                                        <option value = {'Nam'}>Nam</option>
                                        <option value = {'Nữ'}>Nữ</option>
                                    </Input.Select>
                                </Col>
                            </Row> 
                            <Row>
                                <Col><Input.Date label = "Ngày sinh" placeholder = "Chọn ngày sinh"></Input.Date></Col>
                                <Col><Input.Normal type = "text" label = "Số CMND" placeholder = "Nhập số CMND"></Input.Normal></Col>
                            </Row>
                            <Row>
                                <Col><Input.Normal type = "text" label = "Quốc tịch" placeholder = "Nhập quốc tịch"></Input.Normal></Col>
                                <Col><Input.Normal type = "text" label = "Số bảo hiểm xã hội" placeholder = "Nhập số BHXH"></Input.Normal></Col>
                            </Row>
                        </Container>
                    </Col>  
                    <Col sm = {{span: 12, order: 1}} md = {{span: 4, order: 2}} xl = {3}>
                        <div className = "info__img">
                            <label for = "file-input"><FaUserCircle size = {'13rem'}/></label>
                            <input id="file-input" type="file"/>
                        </div>
                    </Col>
                </Row>
                <h4>Thông tin liên lạc</h4>
                <Row>
                    <Col><Input.Normal type = "tel" label = "Số điện thoại" placeholder = "Nhập số điện thoại"></Input.Normal></Col>
                    <Col><Input.Normal type = "email" label = "Email" placeholder = "Nhập email"></Input.Normal></Col>
                </Row>
                <Row>
                    <Col><Input.Normal type = "text" label = "Địa chỉ" placeholder = "Nhập địa chỉ"></Input.Normal></Col>
                </Row>
                <h4>Thông tin chuyển khoản</h4>
                <Row>
                    <Col><Input.Normal type = "text" label = "Ngân hàng" placeholder = "Nhập tên ngân hàng"></Input.Normal></Col>
                    <Col><Input.Normal type = "text" label = "Số tài khoản" placeholder = "Nhập số tài khoản"></Input.Normal></Col>
                </Row>
                <Row>
                    <Col><Input.Normal type = "text" label = "Chủ tài khoản" placeholder = "Nhập tên chủ tài khoản"></Input.Normal></Col>
                    <Col><Input.Normal type = "text" label = "Chi nhánh" placeholder = "Nhập tên chi nhánh"></Input.Normal></Col>
                </Row>
                <h4>Thông tin công việc</h4>
                <Row>
                    <Col><Input.Date type = "text" label = "Ngày bắt đầu làm việc" placeholder = "Chọn ngày bắt đầu làm việc"></Input.Date></Col>
                    <Col><Input.Normal type = "text" label = "Chức vụ" placeholder = "Nhập chức vụ"></Input.Normal></Col>
                </Row>
                <Row>
                    <Col><Input.Normal type = "text" label = "Ngày làm việc" placeholder = "Nhập ngày làm việc hàng tuần"></Input.Normal></Col>
                    <Col>
                        <Input.Select type = "text" label = "Tình trạng làm việc" placeholder = "Tình trạng làm việc">
                            <option value = "1">Đang làm việc</option>
                            <option value = "0">Đã nghỉ</option>
                        </Input.Select>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Info