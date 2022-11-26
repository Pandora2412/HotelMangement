import { useState } from 'react';
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

const Khachhang = () => {

    const KhachhangDB = {
        khachhangs: require('../model/Khachhang.json'),
        setKhachhangs: function (data) {
            this.khachhangs = data;
        }
    }

    const [orderDirection, setOrderDirection] = useState("asc");
    const [orderColumn, setOrderColumn] = useState("")
    const [newForm, setNewForm] = useState(false);
    const [searchString, setSearchString] = useState("");
    const [khachhangList, setKhachhangList] = useState(KhachhangDB.khachhangs);

    const StyledTableCell = styled(TableCell)(() => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: '#E1963C',
          color: 'black',
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
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
                    placeholder="Tìm kiếm số điện thoại..."
                    value={searchString}
                    onChange={(e) => setSearchString(e.target.value)}
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
                                    ?<StyledTableCell align={head.align} onClick={() => handleSortRequest(head.id)}>
                                        <TableSortLabel active={head.id === orderColumn} direction={orderDirection}>    
                                            {head.label}
                                        </TableSortLabel>
                                    </StyledTableCell>
                                    :<StyledTableCell align={head.align}>{head.label}</StyledTableCell>
                                )}
                                <StyledTableCell align="right"></StyledTableCell> 
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {khachhangList
                            .slice(page * 9, page * 9 + 9)
                            .map((khachhang) => (
                            <TableRow key={khachhang.id}>
                                <StyledTableCell align="left">{khachhang.name}</StyledTableCell>
                                <StyledTableCell align="left">{khachhang.CCCD}</StyledTableCell>
                                <StyledTableCell align="left">{khachhang.sex}</StyledTableCell>
                                <StyledTableCell align="left">{khachhang.phone}</StyledTableCell>
                                <StyledTableCell align="left">{khachhang.bday}</StyledTableCell>
                                <StyledTableCell align="left">{khachhang.email}</StyledTableCell>
                                <StyledTableCell align="left">{khachhang.score}</StyledTableCell>
                                <StyledTableCell align="left">{khachhang.rank}</StyledTableCell>
                                <StyledTableCell align="right"><button className="fixdon">Thay đổi</button></StyledTableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                    <TablePagination className="Pages"
                        component="div"
                        count={khachhangList.length}
                        page={page}
                        onPageChange={(e, newPage) => setPage(newPage)}
                        rowsPerPage={9}
                        rowsPerPageOptions={[]}
                    />
                </TableContainer>
            </div>
            {newForm && 
                <div className="model" style={{background: "rgba(49,49,49,0.8)"}}>
                    <NewFormCustomer 
                        KhachhangDB={KhachhangDB}
                        setNewForm={setNewForm} 
                        setKhachhangList={setKhachhangList}
                    />
                </div>
            }
        </div>
    )
}

export default Khachhang