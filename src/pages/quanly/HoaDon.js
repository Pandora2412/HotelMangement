import {useState, useEffect} from 'react'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import TextField from "@mui/material/TextField";
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableBody from '@mui/material/TableBody'
import TablePagination from '@mui/material/TablePagination';

import {StyledTableRow, StyledTableCell, StyledTableHead} from '../../components/Table'
import { StyledButton } from '../../components/Button';
import ReceiptReadOnLy from '../../components/ReceiptReadOnLy'
import Payment from '../../components/Payment'

const HoaDon = () => {
    const donthuDB = require('../../model/donthu.json')
    const [payments, setPayments] = useState([]) 
    const columns = [
        {
            id: 'formnum',
            label: 'Mã đơn',
            sort: false,
            align: 'center'
        },
        {
            id: 'checkin',
            label: 'Thời gian checkin',
            sort: true,
            align: 'center'
        },
        {
            id: 'checkout',
            label: 'Thời gian checkout',
            sort: true,
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
            id: 'total',
            label: 'Thu',
            sort: true,
            align: 'center'
        },
        {
            
        }
    ];

    const columnsPay = [
        {
            id: 'formnum',
            label: 'Mã đơn',
            sort: false,
            align: 'center'
        },
        {
            id: 'checkout',
            label: 'Thời gian',
            sort: true,
            align: 'center'
        },
        {
            id: 'company',
            label: 'Tên công ty',
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
            id: 'pay',
            label: 'Chi',
            sort: true,
            align: 'center'
        },
        {

        }
    ]
    useEffect(() => {
        setPayments(require('../../model/donchi.json'))
    }, [])

    const [orderByColumn, setOrderByColumn] = useState("checkout")
    const [orderDirection, setOrderDirection] = useState("desc")
    const [filter, setFilter] = useState("")
    const [page, setPage] = useState(0)

    const now = new Date();
    const [checkin, setCheckin] = useState(now.getFullYear() + "-" + (now.getMonth() + 1 > 9?"":"0") + (now.getMonth() + 1) + "-" + (now.getDate() > 9?"":"0") + now.getDate() + "T" + (now.getHours() > 9?"":"0") + now.getHours() + ":" + (now.getMinutes() > 9?"":"0") + now.getMinutes());
    const [checkout, setCheckout] = useState(now.getFullYear() + "-" + (now.getMonth() + 1 > 9?"":"0") + (now.getMonth() + 1) + "-" + (now.getDate() > 9?"":"0") + now.getDate() + "T" + (now.getHours() > 9?"":"0") + now.getHours() + ":" + (now.getMinutes() > 9?"":"0") + now.getMinutes());
    
    
    const [openModalReceipt, setOpenModalReceipt] = useState("");
    const [openModalPayment, setOpenModalPayment] = useState("")

    const handleSortRequest = (id) => {
      setOrderByColumn(id)
      setOrderDirection(id === orderByColumn && orderDirection === "asc" ? "desc" : "asc")
    } 
    
    return (
        <div className="main">
            <Tab.Container id="left-tabs-example" defaultActiveKey="thu">
                <Row>
                    <Col xs="3">
                        <Nav variant="pills" className="mb-3">
                            <Nav.Item>
                                <Nav.Link eventKey="thu">Thu</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="chi">Chi</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col xs="7">
                        <TextField
                            size='small'
                            id="checkinday"
                            label="Ngày Check-in"
                            type="date"
                            defaultValue={checkin.slice(0,10)}
                            onChange={(e) => e.target.value && setCheckin(e.target.value + "T" + checkin.slice(11,16))}
                            variant="standard"
                            className="Checkin"
                        />
                        <TextField
                            size='small'
                            id="checkintime"
                            label="Thời gian"
                            type="time"
                            defaultValue={checkin.slice(11,16)}
                            onChange={(e) => e.target.value && setCheckin(checkin.slice(0,10) + "T" + e.target.value)}
                            variant="standard"
                            className="Checkin"
                        />
                        <TextField
                            size='small'
                            id="checkoutday"
                            label="Ngày Check-out"
                            type="date"
                            defaultValue={checkout.slice(0,10)}
                            onChange={(e) => e.target.value && setCheckout(e.target.value + "T" + checkout.slice(11,16))}
                            variant="standard"
                            className="Checkout"
                        />
                        <TextField
                            size='small'
                            id="checkouttime"
                            label="Thời gian"
                            type="time"
                            defaultValue={checkout.slice(11,16)}
                            onChange={(e) => e.target.value && setCheckout(checkout.slice(0,10) + "T" + e.target.value)}
                            variant="standard"
                            className="Checkout"
                        />
                    </Col>
                    <Col xs="2">
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
                <Tab.Content>
                    <Tab.Pane eventKey="thu">
                        <TableContainer>
                            <Table>
                                <StyledTableHead columns = {columns} orderByColumn = {orderByColumn} orderDirection = {orderDirection} handleSortRequest = {handleSortRequest}></StyledTableHead>
                                <TableBody>
                                    {
                                        donthuDB.filter(receipt => receipt['formnum'].toLowerCase().includes(filter)).sort(
                                            function(a, b) {
                                                if (orderByColumn  === "checkin" || orderByColumn === "checkout") {
                                                    let da = new Date(a[orderByColumn]);
                                                    let db = new Date(b[orderByColumn]);
                                                    if (da === db) {
                                                        return 0;
                                                      }
                                                    if (orderDirection === "asc") {return da > db ? 1 : -1}
                                                    else return da > db ? -1 : 1
                                                }
                                                else return orderDirection === "asc" ? a[orderByColumn] - b[orderByColumn] : b[orderByColumn] - a[orderByColumn]
                                            }
                                        ).slice(page * 10, page * 10 + 10).map((row) => (
                                        
                                        <StyledTableRow key={row.id}>
                                            <StyledTableCell align = "center">{row['formnum']}</StyledTableCell>
                                            <StyledTableCell align = "center">{(new Date(row['customer']['checkin'])).toLocaleString()}</StyledTableCell>
                                            <StyledTableCell align = "center">{(new Date(row['customer']['checkout'])).toLocaleString()}</StyledTableCell>
                                            <StyledTableCell align = "center">{row['customer']['email']}</StyledTableCell>
                                            <StyledTableCell align = "center">{row['customer']['phone']}</StyledTableCell>
                                            <StyledTableCell align = "center">{row['paid']}</StyledTableCell>
                                            <StyledTableCell align = "center" onClick={() => setOpenModalReceipt(row)}><button style={{backgroundColor: 'transparent', border: 0, color: '#E1963C'}}>Xem</button></StyledTableCell>
                                        </StyledTableRow>
                                    ))}

                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination component="div" count = {donthuDB.length} page={page}
                            onPageChange={(e, newPage) => setPage(newPage)}
                            rowsPerPage={10}
                            rowsPerPageOptions={[]}
                        />
                    </Tab.Pane>
                    <Tab.Pane eventKey="chi">
                    <TableContainer>
                        <Table>
                            <StyledTableHead columns = {columnsPay} orderByColumn = {orderByColumn} orderDirection = {orderDirection} handleSortRequest = {handleSortRequest}></StyledTableHead>
                                <TableBody>
                                    {
                                        payments.filter(receipt => receipt['formnum'].toLowerCase().includes(filter)).sort(
                                            function(a, b) {
                                                if (orderByColumn === "checkout") {
                                                    let da = new Date(a[orderByColumn]);
                                                    let db = new Date(b[orderByColumn]);
                                                    if (da === db) {
                                                        return 0;
                                                      }
                                                    if (orderDirection === "asc") {return da > db ? 1 : -1}
                                                    else return da > db ? -1 : 1
                                                }
                                                else return orderDirection === "asc" ? a[orderByColumn] - b[orderByColumn] : b[orderByColumn] - a[orderByColumn]
                                            }
                                        ).slice(page * 10, page * 10 + 10).map((row) => (
                                        
                                        <StyledTableRow key={row.id}>
                                            <StyledTableCell align = "center">{row['formnum']}</StyledTableCell>
                                            <StyledTableCell align = "center">{(new Date(row['company']['time'])).toLocaleString()}</StyledTableCell>
                                            <StyledTableCell align = "center">{row['company']['name']}</StyledTableCell>
                                            <StyledTableCell align = "center">{row['company']['email']}</StyledTableCell>
                                            <StyledTableCell align = "center">{row['total']}</StyledTableCell>
                                            <StyledTableCell align = "center" onClick={() => setOpenModalPayment(row)}><button style={{backgroundColor: 'transparent', border: 0, color: '#E1963C'}}>Xem</button></StyledTableCell>
                                        </StyledTableRow>
                                    ))}

                                </TableBody>
                            </Table>
                            </TableContainer>
                            <Row style={{marginTop: "10px"}}>
                                <Col>
                                    <StyledButton onClick={() => setOpenModalPayment(true)}>Thêm đơn chi mới</StyledButton>
                                </Col>
                                <Col>
                                    <TablePagination component="div" count = {payments.length} page={page}
                                    onPageChange={(e, newPage) => setPage(newPage)}
                                    rowsPerPage={10}
                                    rowsPerPageOptions={[]}
                                    />
                                </Col>
                            </Row>
                    </Tab.Pane>
                </Tab.Content>
          </Tab.Container>
          {openModalReceipt !== "" &&  <div className="model" style={{background: "rgba(49,49,49,0.8)"}}><ReceiptReadOnLy receipt={openModalReceipt} open={setOpenModalReceipt}></ReceiptReadOnLy></div>}
          {openModalPayment !== "" && <div className="model" style={{background: "rgba(49,49,49,0.8)"}}><Payment payment={openModalPayment} open={setOpenModalPayment} payments={payments} setPayments = {setPayments}></Payment></div>}
        </div>
    )
}

export default HoaDon