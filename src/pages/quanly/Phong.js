import {useState} from 'react'
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableBody from '@mui/material/TableBody'
import TablePagination from '@mui/material/TablePagination';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import {HiPencilAlt} from 'react-icons/hi'

import {StyledTableRow, StyledTableCell, StyledTableHead} from '../../components/Table'
import { StyledButton } from '../../components/Button';
import {StyledModal, ConfirmModal} from '../../components/Modal';

const Room = (props) => {
  const handleChange = (e) => {
    setRoomInfo({
        ...room_info,
        [e.target.name]: e.target.value
    })
  }
  const [room_info, setRoomInfo] = useState(props.info)
  const [openConfirmModal, setOpenConfirmModal] = useState("")

  return (
    <>
    <StyledModal show={true} aria-labelledby="contained-modal-title-vcenter" centered backdrop="static" onHide={()=>{setOpenConfirmModal("Xác nhận hủy thay đổi?")}}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <h3>Thông tin phòng</h3>
          <form>
            <Container>
              <Row>
                <Col xs = {5} style = {{textAlign: 'right'}}><label>Tên phòng:</label></Col>
                <Col xs = {7}><input type="text" name = "id" value = {room_info.id} onChange = {handleChange}></input></Col>
              </Row>
              <Row>
                <Col xs = {5} style = {{textAlign: 'right'}}><label>Loại phòng:</label></Col>
                <Col xs = {7}>
                  <select type="text" name = "type" value = {room_info.type} onChange = {handleChange}>
                    {
                      ['Standard', 'Superior', 'VIP'].map((option) => (
                        <option value = {option}>{option}</option>
                      ))
                    }
                  </select>
                </Col>
              </Row>
              <Row>
                <Col xs = {5} style = {{textAlign: 'right'}}><label>View:</label></Col>
                <Col xs = {7}>
                  <select type="text" name="view" value = {room_info.view} onChange = {handleChange}>
                    {
                      ['Hồ bơi', 'Biển', 'Thành phố'].map((option) => (
                        <option value = {option}>{option}</option>
                      ))
                    }
                  </select>
                </Col>
              </Row>
              <Row>
                <Col xs = {5} style = {{textAlign: 'right'}}><label>Giường:</label></Col>
                <Col xs = {7}>
                  <select type="text" name="singlebed" value = {room_info.singlebed} onChange = {handleChange}>
                    {
                      [0,1,2,3,4].map((index) => (
                        <option value = {index}>{index}</option>
                      ))
                    }
                  </select>
                  <label style = {{margin: "0px 0.4rem"}}>đơn</label> 
                  <select type="text" name="doublebed" value = {room_info.doublebed} onChange = {handleChange}>
                    {
                      [0,1,2].map((index) => (
                        <option value = {index}>{index}</option>
                      ))
                    }
                  </select>
                  <label style = {{margin: "0px 0.4rem"}}>đôi</label> 
                </Col>
              </Row>
              <Row>
                <Col xs = {5} style = {{textAlign: 'right'}}><label>Ban công:</label></Col>
                <Col xs = {7}>
                  <select type="text" name="bancong" value = {room_info.bancong} onChange = {handleChange}>
                    <option value = {"Có"}>Có</option>
                    <option value = {"Không"}>Không</option>
                  </select>
                </Col>
              </Row>
            </Container>
          <StyledButton>Áp dụng</StyledButton>
          </form>
        </Modal.Body>
    </StyledModal>
    {openConfirmModal !== "" && <ConfirmModal text = {openConfirmModal} open = {setOpenConfirmModal} openParent = {props.open}></ConfirmModal>}
    </>
)}

const Cost = (props) => {
  const labels = ['Standard', 'Superior', 'VIP', 'Giường đơn', 'Giường đôi', 'Biển', 'Hồ bơi', 'Thành phố', 'Ban công']
  const handleChange = (e) => {
    setCostInfo({
        ...costInfo,
        [e.target.name]: e.target.value
    })
  }
  const [costInfo, setCostInfo] = useState(props.info)
  return (
    <StyledModal show = {true} aria-labelledby="contained-modal-title-vcenter" centered backdrop="static" onHide = {props.onHide}>
      <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <h3>Bảng giá</h3>
          <form>
            <Container>
              {
                Object.entries(props.info).map(([key, value], index) => (
                  <Row key = {index}>
                    <Col xs = {5} style = {{textAlign: 'right'}}><label>{labels[index]}</label></Col>
                    <Col xs = {7}><input type="text" name = {key} value = {costInfo[key]} onChange = {handleChange}></input><br></br></Col>
                  </Row>
                ))
              }
            </Container>
          <StyledButton>Áp dụng</StyledButton>
          </form>
        </Modal.Body>
    </StyledModal>
  )

}

const Phong = () => {
      const columns = [
        {
            id: 'id',
            label: 'Phòng',
            sort: true,
            align: 'left'
        },
        {
            id: 'singlebed',
            label: 'Giường đơn',
            sort: false,
            align: 'center'
        },
        {
            id: 'doublebed',
            label: 'Giường đôi',
            sort: false,
            align: 'center'
        },
        {
            id: 'num',
            label: 'Số người',
            sort: true,
            align: 'left'
        },
        {
            id: 'type',
            label: 'Loại phòng',
            sort: false,
            align: 'left'
        },
        {
          id: 'view',
          label: 'View',
          sort: false,
          align: 'left'
      },
      {
        id: 'bancong',
        label: 'Ban công',
        sort: false,
        align: 'left'
      },
      {
        id: 'price',
        label: 'Giá phòng',
        sort: true,
        align: 'right'
      },
      {

      },
    ];

    const phongDB = require('../../model/phong.json')
    const costDB = require('../../model/gia.json')
    const [openModalRoom, setOpenModalRoom] = useState("")
    const [openModalCost, setOpenModalCost] = useState("")
    const [orderByColumn, setOrderByColumn] = useState(columns[0].id)
    const [orderDirection, setOrderDirection] = useState("asc")
    const [page, setPage] = useState(0)
    const [toa, setToa] = useState("A")

    const handleSortRequest = (id) => {
      setOrderByColumn(id)
      setOrderDirection(id === orderByColumn && orderDirection === "asc" ? "desc" : "asc")
    } 

    return (
      <div className = "main">
        <Row className = "mb-2">
          <Col xs = "3"><StyledButton onClick = {() => setOpenModalCost({...costDB})}>Tổng quát</StyledButton></Col>
          <Col xs = "9">
            <Row>
              <Col xs = "10">
                <Form.Control 
                      type="search"
                      placeholder="Search"
                      className="me-2 float-end"
                      aria-label="Search"
                      style = {{maxWidth: '300px'}}
                />
              </Col>
              <Col xs = "2">
                <Form.Select className = "float-end" style = {{maxWidth: '60px', minWidth: '60px'}} aria-label="Default select example" value = {toa} onChange = {(option) => setToa(option.target.value)}>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                </Form.Select>
              </Col>
            </Row>
          </Col>
        </Row>
        
        
        
        <TableContainer>
          <Table>
            <StyledTableHead columns = {columns} orderByColumn = {orderByColumn} orderDirection = {orderDirection} handleSortRequest = {handleSortRequest}></StyledTableHead>
            <TableBody>
              {
                phongDB.filter(e => e.toa === toa).sort((a, b) => (orderDirection === "asc" ? a[orderByColumn] - b[orderByColumn] : b[orderByColumn] - a[orderByColumn])).slice(page * 10, page * 10 + 10).map((row) => (
                <StyledTableRow key={row.id}>
                  {
                      
                      Object.entries(row).map(([key, value], index) => {
                          if (key !== 'bookday' && key !== 'toa')
                          return (
                          <StyledTableCell align = {columns[index].align} key = {index}>{value}</StyledTableCell>
                      )})
                  }
                  <StyledTableCell><HiPencilAlt className = "btn-edit" onClick = {() => setOpenModalRoom({...row})}></HiPencilAlt></StyledTableCell>
                </StyledTableRow>
                ))}

            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination component="div" count = {phongDB.filter(e => e.toa === toa).length} page={page}
          onPageChange={(e, newPage) => setPage(newPage)}
          rowsPerPage={10}
          rowsPerPageOptions={[]}
        />
        {openModalRoom !== "" && <Room info = {openModalRoom} open = {setOpenModalRoom}></Room>}
        {openModalCost !== "" && <Cost info = {openModalCost} onHide = {() => setOpenModalCost("")}></Cost>}
      </div>
    );
}

export default Phong