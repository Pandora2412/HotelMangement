import {useState, useEffect} from 'react'

import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableBody from '@mui/material/TableBody'
import TablePagination from '@mui/material/TablePagination';
import Form from 'react-bootstrap/Form';
import {StyledTableRow, StyledTableCell, StyledTableHead} from '../../components/Quanly/Table'
import ReceiptReadOnLy from '../../components/Quanly/ReceiptReadOnLy'
const HuyDon = () => {
    const [receipts, setReceipts] = useState([])

    useEffect(() => {
        setReceipts(require('../../model/donhuy.json'))
    }, [])
    
    const columns = [
        {
            id: 'formnum',
            label: 'Mã đơn',
            sort: false,
            align: 'center'
        },
        {
            id: 'book',
            label: 'Thời gian đăng kí',
            sort: true,
            align: 'center'
        },
        {
            id: 'cancel',
            label: 'Thời gian hủy',
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
            label: 'Số tiền',
            sort: true,
            align: 'center'
        },
        {
            id: 'payby',
            label: 'Thanh toán',
            sort: false,
            align: 'center'
        },
        {

        }
    ];

    const [orderByColumn, setOrderByColumn] = useState("cancel")
    const [orderDirection, setOrderDirection] = useState("asc")
    const [filter, setFilter] = useState("")
    const [page, setPage] = useState(0)
    const [openModalReceipt, setOpenModalReceipt] = useState("");

    const handleSortRequest = (id) => {
        setOrderByColumn(id)
        setOrderDirection(id === orderByColumn && orderDirection === "asc" ? "desc" : "asc")
    }
    

    return (
        <div className="main">
            <Form.Control 
                type="search"
                placeholder="Search"
                className="float-end mb-3"
                aria-label="Search"
                style = {{maxWidth: '300px'}}
                onChange={(e)=>setFilter(e.target.value)}
            />
            <TableContainer>
                <Table>
                    <StyledTableHead columns = {columns} orderByColumn = {orderByColumn} orderDirection = {orderDirection} handleSortRequest = {handleSortRequest}></StyledTableHead>
                    <TableBody>
                        {
                            receipts.filter(receipt => receipt['formnum'].toLowerCase().includes(filter)).sort(
                                function(a, b) {
                                    if (orderByColumn  === "book" || orderByColumn === "cancel") {
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
                                    <StyledTableCell align = "center">{(new Date(row['book'])).toLocaleString()}</StyledTableCell>
                                    <StyledTableCell align = "center">{(new Date(row['cancel'])).toLocaleString()}</StyledTableCell>
                                    <StyledTableCell align = "center">{row['customer']['email']}</StyledTableCell>
                                    <StyledTableCell align = "center">{row['customer']['phone']}</StyledTableCell>
                                    <StyledTableCell align = "center">{row['paid']}</StyledTableCell>
                                    <StyledTableCell align = "center">{row['payby']}</StyledTableCell>
                                    <StyledTableCell align = "center" onClick={() => setOpenModalReceipt(row)}><button style={{backgroundColor: 'transparent', border: 0, color: '#E1963C'}}>Xem</button></StyledTableCell>
                                </StyledTableRow>
                        ))}

                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                        component="div"
                        count={receipts.length}
                        page={page}
                        onPageChange={(e, newPage) => setPage(newPage)}
                        rowsPerPage={8}
                        rowsPerPageOptions={[]}
            />
            {openModalReceipt !== "" &&  <div className="model" style={{background: "rgba(49,49,49,0.8)"}}><ReceiptReadOnLy receipt={openModalReceipt} open={setOpenModalReceipt} receipts={receipts} setReceipts={setReceipts}></ReceiptReadOnLy></div>}
        </div>
    )
}

export default HuyDon