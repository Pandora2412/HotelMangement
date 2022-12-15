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

import ReceiptReadOnLy from '../../components/ReceiptReadOnLy'

const DonThu = () => {
    const donthuDB = require('../../model/donthu.json')
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

    const [orderByColumn, setOrderByColumn] = useState("checkout")
    const [orderDirection, setOrderDirection] = useState("desc")
    const [filter, setFilter] = useState("")
    const [page, setPage] = useState(0)

    const now = new Date();
    const [checkin, setCheckin] = useState(now.getFullYear() + "-" + (now.getMonth() + 1 > 9?"":"0") + (now.getMonth() + 1) + "-" + (now.getDate() > 9?"":"0") + now.getDate() + "T" + (now.getHours() > 9?"":"0") + now.getHours() + ":" + (now.getMinutes() > 9?"":"0") + now.getMinutes());
    const [checkout, setCheckout] = useState(now.getFullYear() + "-" + (now.getMonth() + 1 > 9?"":"0") + (now.getMonth() + 1) + "-" + (now.getDate() > 9?"":"0") + now.getDate() + "T" + (now.getHours() > 9?"":"0") + now.getHours() + ":" + (now.getMinutes() > 9?"":"0") + now.getMinutes());

    const [openModalReceipt, setOpenModalReceipt] = useState("");

    const handleSortRequest = (id) => {
      setOrderByColumn(id)
      setOrderDirection(id === orderByColumn && orderDirection === "asc" ? "desc" : "asc")
    } 
}