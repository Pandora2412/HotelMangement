import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Input from './Input'
import {StyledButton} from './Button'
import '../css/Info.css'
import {FaUserCircle} from 'react-icons/fa'
import {useState, useEffect} from 'react'
import {StyledModal, ConfirmModal} from './Modal';

const Info = (props) => {
    //console.log(props)
    const [info, setInfo] = useState({"status": "Đang làm việc"})
    const [openConfirmModal, setOpenConfirmModal] = useState("")

    useEffect(() => {
        props.info.name ? setInfo(props.info) : setInfo(info)
    }, [])

    const handleChange = (e) => {
        console.log(e.target.name)
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        })
        console.log({
            ...info,
            [e.target.name]: e.target.value
        })
    }

    const handleEmployee = () => {
        if (props.info.name) {
            const new_employees = props.employees.map((employees) =>
                employees.id !== info.id ? employees : {...info}
            )
            props.setEmployees(new_employees)
        }
        else {
            const next_id = Math.max(...props.employees.map(o => o.id))
            props.employees.push({...info, ["id"]: next_id + 1})
            props.setEmployees(props.employees)
        }
        props.open("")
    }

    return (
        <>
            <style type = "text/css">
                {`
                    h4 {
                        display: inline-block;
                        color: white;
                        padding: 0.5rem;
                        padding-right: 1.5rem;
                        border-radius: 0 20px 20px 0;
                        background-color: #E1963C;
                        margin: 1.25rem 0 1.25rem calc(var(--bs-gutter-x) * -0.5 - 3rem);
                    }   
                    button {
                        margin: auto;
                        display: block !important;
                    }
                `}
            </style>
            <Container fluid>
                <h4>Thông tin cá nhân</h4>
                <Row>
                    <Col xs = {{span: 12, order: 2}} sm = {{span: 12, order: 2}} md = {8} xl = {9}>
                        <Container fluid style = {{padding: '0'}}>
                            <Row>
                                <Col xs = {9}><Input.Normal type = "text"  name = "name" label = "Họ và tên"  placeholder = "Nhập tên nhân viên" value = {info?.name} onChange = {handleChange}></Input.Normal></Col>
                                <Col>
                                    <Input.Select name = "sex" label = "Giới tính" placeholder = "Chọn giới tính" value={info?.sex} onChange = {handleChange}>
                                        <option value = {'Nam'}>Nam</option>
                                        <option value = {'Nữ'}>Nữ</option>
                                    </Input.Select>
                                </Col>
                            </Row> 
                            <Row>
                                <Col><Input.Normal type = "date" label = "Ngày sinh" placeholder = "Chọn ngày sinh" value={info?.birthday} onChange = {handleChange} name = "birthday"></Input.Normal></Col>
                                <Col><Input.Normal type = "text" label = "Số CMND" placeholder = "Nhập số CMND" value = {info?.ID} onChange = {handleChange} name = "ID"></Input.Normal></Col>
                            </Row>
                            <Row>
                                <Col><Input.Normal type = "text" label = "Quốc tịch" placeholder = "Nhập quốc tịch" value = {info?.nationality} onChange = {handleChange} name = "nationality"></Input.Normal></Col>
                                <Col><Input.Normal type = "text" label = "Số bảo hiểm xã hội" placeholder = "Nhập số BHXH" value = {info?.BHXH} onChange = {handleChange} name = "BHXH"></Input.Normal></Col>
                            </Row>
                        </Container>
                    </Col>  
                    <Col sm = {{span: 12, order: 1}} md = {{span: 4, order: 2}} xl = {3}>
                        <div className = "info__img">
                            <label htmlFor = "file-input"><FaUserCircle size = {'13rem'}/></label>
                            <input id="file-input" type="file"/>
                        </div>
                    </Col>
                </Row>
                <h4>Thông tin liên lạc</h4>
                <Row>
                    <Col><Input.Normal type = "tel" label = "Số điện thoại" placeholder = "Nhập số điện thoại" value = {info?.phone} onChange = {handleChange} name = "phone"></Input.Normal></Col>
                    <Col><Input.Normal type = "email" label = "Email" placeholder = "Nhập email" value = {info?.email} onChange = {handleChange} name = "email"></Input.Normal></Col>
                </Row>
                <Row>
                    <Col><Input.Normal type = "text" label = "Địa chỉ" placeholder = "Nhập địa chỉ" value = {info?.address} onChange = {handleChange} name = "address"></Input.Normal></Col>
                </Row>
                <h4>Thông tin chuyển khoản</h4>
                <Row>
                    <Col><Input.Normal type = "text" label = "Ngân hàng" placeholder = "Nhập tên ngân hàng" value = {info?.bank} onChange = {handleChange} name = "bank"></Input.Normal></Col>
                    <Col><Input.Normal type = "text" label = "Số tài khoản" placeholder = "Nhập số tài khoản" value = {info?.banknum} onChange = {handleChange} name = "banknum"></Input.Normal></Col>
                </Row>
                <Row>
                    <Col><Input.Normal type = "text" label = "Chủ tài khoản" placeholder = "Nhập tên chủ tài khoản" value = {info?.bankacc} onChange = {handleChange} name = "bankacc"></Input.Normal></Col>
                    <Col><Input.Normal type = "text" label = "Chi nhánh" placeholder = "Nhập tên chi nhánh" value = {info?.bankadd} onChange = {handleChange} name = "bankadd"></Input.Normal></Col>
                </Row>
                <h4>Thông tin công việc</h4>
                <Row>
                    <Col><Input.Date type = "text" label = "Ngày bắt đầu làm việc" placeholder = "Chọn ngày bắt đầu làm việc" value = {info?.startday} onChange = {handleChange} name = "startday"></Input.Date></Col>
                    <Col><Input.Normal type = "text" label = "Chức vụ" placeholder = "Nhập chức vụ" value = {info?.position} onChange = {handleChange} name = "position"></Input.Normal></Col>
                </Row>
                <Row>
                    <Col><Input.Normal type = "text" label = "Ngày làm việc" placeholder = "Nhập ngày làm việc hàng tuần" value = {info?.workday} onChange = {handleChange} name = "workday"></Input.Normal></Col>
                    <Col>
                        <Input.Select type = "text" label = "Tình trạng làm việc" placeholder = "Tình trạng làm việc" value = {info?.status} onChange = {handleChange} name = "status">
                            <option value = "Đang làm việc">Đang làm việc</option>
                            <option value = "Đã nghỉ">Đã nghỉ</option>
                        </Input.Select>
                    </Col>
                </Row>
                <StyledButton onClick={()=>{setOpenConfirmModal("Xác nhận thay đổi?")}}>Lưu</StyledButton>
            </Container>
            {openConfirmModal !== "" && <ConfirmModal text = {openConfirmModal} open = {setOpenConfirmModal} openParent={() => void(0)} action={handleEmployee}></ConfirmModal>}
        </>
    );
}

export default Info