import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import TablePagination from '@mui/material/TablePagination';
import NewFormCustomer from './NewFormCustomer';
import FormCustomer from './FormCustomer';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import { Navigate, useLocation } from 'react-router-dom';

const Khachhang = () => {

    const [orderDirection, setOrderDirection] = useState("asc");
    const [orderColumn, setOrderColumn] = useState("")
    const [searchString, setSearchString] = useState("");
    const [khachhangList, setKhachhangList] = useState([]);
    const [display, setDisplay] = useState([]);
    const [form, setForm] = useState("");
    const [newForm, setNewForm] = useState(false);

    const axiosPrivate = useAxiosPrivate();
    const location = useLocation();

    useEffect(() => {
        
        let isMounted = true;
        const controller = new AbortController();

        const getKhachhang = async () => {
            try {
                const res = await axiosPrivate.get(`/customer`, {
                    signal: controller.signal
                });
                isMounted && setKhachhangList(res.data);
                isMounted && setDisplay(res.data);
            } catch (err) {
                console.error(err);
                <Navigate to="/" state={{ from: location }} replace />
            }
        }

        getKhachhang();

        return () => {
            isMounted = false;
            controller.abort();
        }

    }, [form, newForm]);

    const StyledTableCell = styled(TableCell)(() => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: '#E1963C',
          color: 'black',
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
    }));
    
    const StyledTableRow = styled(TableRow)(() => ({
        "&:last-child th, &:last-child td": {
            borderBottom: '1px solid black'
        },
    }));

    const headCell = [
        {
            id: 'name',
            label: 'Họ tên',
            sort: true,
            align: 'left'
        },
        {
            id: 'CCCD',
            label: 'CCCD',
            sort: false,
            align: 'left'
        },
        {
            id: 'sex',
            label: 'Giới tính',
            sort: false,
            align: 'left'
        },
        {
            id: 'phone',
            label: 'Số điện thoại',
            sort: false,
            align: 'left'
        },
        {
            id: 'bday',
            label: 'Ngày sinh',
            sort: false,
            align: 'left'
        },
        {
            id: 'emal',
            label: 'Email',
            sort: false,
            align: 'left'
        },
        {
            id: 'score',
            label: 'Tích điểm',
            sort: true,
            align: 'left'
        },
        {
            id: 'rank',
            label: 'Phân loại',
            sort: false,
            align: 'left'
        }
    ];
    
    const [page, setPage] = useState(0);

    const sortArray = (arr, order, orderBy) => {
        switch (order) {
        case "asc":
        default:
            return arr.sort((a, b) =>
            a[orderBy] > b[orderBy] ? 1 : b[orderBy] > a[orderBy] ? -1 : 0
            );
        case "desc":
            return arr.sort((a, b) =>
            a[orderBy] < b[orderBy] ? 1 : b[orderBy] < a[orderBy] ? -1 : 0
            );
        }
    };

    const handleSortRequest = (id) => {
        setKhachhangList(sortArray(khachhangList, orderDirection, id));
        setOrderColumn(id);
        setOrderDirection(orderDirection === "asc" ? "desc" : "asc");
    };  

    return (
        <div className="Khachhang">
            <div>
                <input 
                    type="text" 
                    style={{height: 39, borderRadius: 10, width: '25%', fontSize: 19, marginRight: '7.7%', padding: '0px 5px', display: 'inline-block'}}
                    placeholder="Nhập tìm kiếm..."
                    value={searchString}
                    onChange={(e) => {
                        setDisplay(khachhangList.filter(khachhang => khachhang.name.includes(e.target.value) || khachhang.id.includes(e.target.value) || khachhang.phone.includes(e.target.value)));
                        setSearchString(e.target.value);
                    }}
                />
                <button className="taodon" style={{borderRadius: 10, float: 'right', marginTop: 10}} onClick={() => setNewForm(true)}>Thêm</button>
            </div>

            <div className="Customers">
                <TableContainer>
                    <Table sx={{ minWidth: 650 }} aria-label="Rooms">
                        <TableHead>
                            <TableRow>
                                {headCell.map(head => 
                                    head.sort
                                    ?<StyledTableCell key={head.id} align={head.align} onClick={() => handleSortRequest(head.id)}>
                                        <TableSortLabel active={head.id === orderColumn} direction={orderDirection}>    
                                            {head.label}
                                        </TableSortLabel>
                                    </StyledTableCell>
                                    :<StyledTableCell key={head.id} align={head.align}>{head.label}</StyledTableCell>
                                )}
                                <StyledTableCell align="right"></StyledTableCell> 
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {display
                            .slice(page * 9, page * 9 + 9)
                            .map(khachhang => (
                                <StyledTableRow key={khachhang.id}>
                                    <StyledTableCell align="left">{khachhang.name}</StyledTableCell>
                                    <StyledTableCell align="left">{khachhang.id}</StyledTableCell>
                                    <StyledTableCell align="left">{khachhang.sex?"Nữ":"Nam"}</StyledTableCell>
                                    <StyledTableCell align="left">{khachhang.phone}</StyledTableCell>
                                    <StyledTableCell align="left">{khachhang.bday}</StyledTableCell>
                                    <StyledTableCell align="left">{khachhang.email}</StyledTableCell>
                                    <StyledTableCell align="left">{khachhang.score}</StyledTableCell>
                                    <StyledTableCell align="left">{khachhang.rank}</StyledTableCell>
                                    <StyledTableCell align="right"><button className="fixdon" onClick={() => setForm(khachhang.id)}>Thay đổi</button></StyledTableCell>
                                </StyledTableRow>
                        ))}
                        </TableBody>
                    </Table>
                    <TablePagination className="Pages"
                        component="div"
                        count={display.length}
                        page={page}
                        onPageChange={(e, newPage) => setPage(newPage)}
                        rowsPerPage={9}
                        rowsPerPageOptions={[]}
                    />
                </TableContainer>
                {newForm && 
                    <div className="model" style={{background: "rgba(49,49,49,0.8)"}}>
                        <NewFormCustomer 
                            setNewForm={setNewForm} 
                        />
                    </div>
                }
                {form !== "" && 
                    <div className="model" style={{background: "rgba(49,49,49,0.8)"}}>
                        <FormCustomer 
                            form={form}
                            setForm={setForm} 
                        />
                    </div>
                }
            </div>
        </div>
    )
}

export default Khachhang