import {useState, useEffect} from 'react'
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
import Info from '../../components/Info';

const ModalInfo = (props) => {
  const [openConfirmModal, setOpenConfirmModal] = useState("")
  
  return (
    <>
    <style type = "text/css">
      {`
        h4 {
          margin-left: calc(var(--bs-gutter-x) * -0.5 - var(--bs-modal-padding)) !important;
        }
        label {
          background-color: #FFF8F6 !important;
        }
      `}
      </style>
    <StyledModal show={true} size="xl" centered backdrop="static" onHide={()=>{setOpenConfirmModal("Xác nhận hủy thay đổi?")}}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Info info = {props.info} employees={props.employees} setEmployees={props.setEmployees} open = {props.open}></Info>
      </Modal.Body>
      
    </StyledModal>
    {openConfirmModal !== "" && <ConfirmModal text = {openConfirmModal} open = {setOpenConfirmModal} openParent = {props.open} action={()=>void(0)}></ConfirmModal>}
    </>
    
  )
}

const NhanVien = () => {
      const columns = [
        {
            id: 'name',
            label: 'Họ và tên',
            sort: false,
            align: 'center'
        },
        {
            id: 'position',
            label: 'Chức vụ',
            sort: false,
            align: 'center'
        },
        {
            id: 'email',
            label: 'Email',
            sort: false,
            align: 'center'
        },
        {
            id: 'phone',
            label: 'Số điện thoại',
            sort: false,
            align: 'center'
        },
        {
            id: 'status',
            label: 'Trình trạng',
            sort: false,
            align: 'center'
        },
        {
            id: 'salary',
            label: 'Lương',
            sort: true,
            align: 'center'
        },
        {

        }
    ];

    const [employees, setEmployees] = useState([])

    useEffect(() => {
      setEmployees(require('../../model/nhanvien.json'))
    }, [])

    const [orderByColumn, setOrderByColumn] = useState("")
    const [orderDirection, setOrderDirection] = useState("asc")
    const [filter, setFilter] = useState("")
    const [page, setPage] = useState(0)
    const [openModalInfo, setOpenModalInfo] = useState("")
    const [status, setStatus] = useState("Đang làm việc")

    const handleSortRequest = (id) => {
      setOrderByColumn(id)
      setOrderDirection(id === orderByColumn && orderDirection === "asc" ? "desc" : "asc")
    } 

    
    return (
      <div className = "main">
        <Row className = "mb-2">
          <Col xs = "6">
            <div class="d-flex">
              <StyledButton onClick = {() => setOpenModalInfo(true)} style={{marginRight: "12px"}}>Thêm nhân viên mới</StyledButton>
              <Form.Select className = "float-end" style = {{maxWidth: '200px'}} aria-label="Default select example" onChange = {(option) => setStatus(option.target.value)}>
                  <option value="Đang làm việc">Đang làm việc</option>
                  <option value="Đã nghỉ">Đã nghỉ</option>
              </Form.Select>
            </div>
            
          </Col>
          <Col xs = "6">
              <Form.Control 
                      type="search"
                      placeholder="Search"
                      className="float-end"
                      aria-label="Search"
                      style = {{maxWidth: '300px'}}
                      onChange={(e)=>setFilter(e.target.value)}
                />
          </Col>
        </Row>
        <TableContainer>
          <Table>
            <StyledTableHead columns = {columns} orderByColumn = {orderByColumn} orderDirection = {orderDirection} handleSortRequest = {handleSortRequest}></StyledTableHead>
            
            <TableBody>
              {console.log(employees)}
              {
                
                employees.filter(e => e.status === status).filter(nhanvien => nhanvien['name'].toLowerCase().includes(filter)).sort((a, b) => (orderDirection === "asc" ? a[orderByColumn] - b[orderByColumn] : b[orderByColumn] - a[orderByColumn])).slice(page * 10, page * 10 + 10).map((row) => (
                  <StyledTableRow key={row.id}>
                    {
                      columns.slice(0, columns.length - 1).map((column, index) => {
                          return (
                              <StyledTableCell align = {column.align} key = {index}>{row[column.id]}</StyledTableCell>
                          )
                      })
                    }
                    <StyledTableCell><HiPencilAlt className = "btn-edit" onClick = {() => setOpenModalInfo({...row})}></HiPencilAlt></StyledTableCell>
                  </StyledTableRow>
                ))}

            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination component="div" count = {employees.length} page={page}
          onPageChange={(e, newPage) => setPage(newPage)}
          rowsPerPage={10}
          rowsPerPageOptions={[]}
        />
        {openModalInfo !== "" && <ModalInfo show={openModalInfo} info = {openModalInfo} open = {setOpenModalInfo} employees={employees} setEmployees={setEmployees}></ModalInfo>}
      </div>
    );
}

export default NhanVien