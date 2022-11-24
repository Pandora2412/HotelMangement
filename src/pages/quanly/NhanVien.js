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
import {StyledModal} from '../../components/Modal';
import Info from '../../components/Info';

const ModalInfo = (props) => {
  return (
    <>
    <style type = "text/css">
      {`
        @media (min-width: 576px) {
          .modal-dialog {
            max-width: 85vw;
            //max-height: 90vh;
            //overflow: scroll;
          }
        }
        h4 {
          margin-left: calc(var(--bs-gutter-x) * -0.5 - var(--bs-modal-padding)) !important;
        }
        label {
          background-color: #FFF8F6 !important;
        }
      `}
      </style>
    <StyledModal show={true} centered backdrop="static" onHide = {props.onHide}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Info info = {props.info}></Info>
      </Modal.Body>
      
    </StyledModal>
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
            align: 'left'
        },
        {
            id: 'status',
            label: 'Trình trạng',
            sort: false,
            align: 'left'
        },
        {
            id: 'salary',
            label: 'Lương',
            sort: true,
            align: 'left'
        },
        {

        }
    ];

    const nhanVienDB = require('../../model/nhanvien.json')
    const [orderByColumn, setOrderByColumn] = useState("")
    const [orderDirection, setOrderDirection] = useState("asc")
    const [page, setPage] = useState(0)
    const [openModalInfo, setOpenModalInfo] = useState("")

    const handleSortRequest = (id) => {
      setOrderByColumn(id)
      setOrderDirection(id === orderByColumn && orderDirection === "asc" ? "desc" : "asc")
    } 

    return (
      <div className = "main">
        <Row className = "mb-2">
          <Col xs = "3"><StyledButton onClick = {() => setOpenModalInfo(true)}>Thêm nhân viên mới</StyledButton></Col>
          <Col xs = "9">
              <Form.Control 
                      type="search"
                      placeholder="Search"
                      className="float-end"
                      aria-label="Search"
                      style = {{maxWidth: '300px'}}
                />
          </Col>
        </Row>
        <TableContainer>
          <Table>
            <StyledTableHead columns = {columns} orderByColumn = {orderByColumn} orderDirection = {orderDirection} handleSortRequest = {handleSortRequest}></StyledTableHead>
            
            <TableBody>
              {
                nhanVienDB.sort((a, b) => (orderDirection === "asc" ? a[orderByColumn] - b[orderByColumn] : b[orderByColumn] - a[orderByColumn])).slice(page * 10, page * 10 + 10).map((row) => (
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
        <TablePagination component="div" count = {nhanVienDB.length} page={page}
          onPageChange={(e, newPage) => setPage(newPage)}
          rowsPerPage={10}
          rowsPerPageOptions={[]}
        />
        {openModalInfo !== "" && <ModalInfo show={openModalInfo} info = {openModalInfo} onHide = {() => setOpenModalInfo("")} ></ModalInfo>}
      </div>
    );
}

export default NhanVien