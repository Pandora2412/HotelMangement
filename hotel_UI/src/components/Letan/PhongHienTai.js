import * as React from 'react';
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
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { Navigate, useLocation } from 'react-router-dom';

const NowRoomTable = (props) => {  
  
    const [rowDataNow, setRowDataNow] = useState([]);
    const axiosPrivate = useAxiosPrivate();
    const location = useLocation();

    useEffect(() => {
        
        let isMounted = true
        const controller = new AbortController();

        const getRoom = async () => {
            try {
                const res = await axiosPrivate.get(
                    `/room/3/${props.toa}`,
                    {
                        signal: controller.signal
                    });
                isMounted && setRowDataNow(sortArray(res.data, props.orderDirection, props.orderColumn));
            } catch (err) {
                console.error(err);
                <Navigate to="/" state={{ from: location }} replace />
            }
        }

        getRoom();

        return () => {
            isMounted = false;
            controller.abort();
        }

    }, [props.toa, props.checkin, props.checkout, props.form, props.trong]);

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
            align: 'center'
        },
        {
            id: 'type',
            label: 'Loại phòng',
            sort: true,
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
            sort: false,
            align: 'right'
        },
        {
            id: 'formnum',
            label: 'Mã đơn',
            sort: false,
            align: 'right'
        }
    ];

    const [page, setPage] = useState(0);

    const sortArray = (arr, order, orderBy) => {
        if (orderBy) {
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
        }
        return arr;
    };

    const handleSortRequest = (id) => {
        props.setOrderColumn(id);
        setRowDataNow(sortArray(rowDataNow, props.orderDirection, id));
        props.setOrderDirection(props.orderDirection === "asc" ? "desc" : "asc");
    };    

  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="Rooms">
        <TableHead>
          <TableRow>
              {headCell.map(head => 
                  head.sort
                  ?<StyledTableCell key={head.id} align={head.align} onClick={() => handleSortRequest(head.id)}>
                      <TableSortLabel active={head.id === props.orderColumn} direction={props.orderDirection}>    
                          {head.label}
                      </TableSortLabel>
                  </StyledTableCell>
                  :<StyledTableCell key={head.id} align={head.align}>{head.label}</StyledTableCell>
              )}
          </TableRow>
        </TableHead>
        <TableBody>
          {rowDataNow
            .slice(page * 9, page * 9 + 9)
            .map((phong) => {
                const day = phong.bookday.find(book=>((new Date(book.checkin).getTime() <= new Date().getTime()) && (new Date(book.checkout).getTime() >= new Date().getTime())));
                return (
                    <StyledTableRow key={phong.id}>
                        <StyledTableCell key ="1" align="left">{phong.id}</StyledTableCell>
                        <StyledTableCell key ="2" align="center">{phong.singlebed}</StyledTableCell>
                        <StyledTableCell key ="3" align="center">{phong.doublebed}</StyledTableCell>
                        <StyledTableCell key ="4" align="center">{phong.num}</StyledTableCell>
                        <StyledTableCell key ="5" align="left">{phong.type}</StyledTableCell>
                        <StyledTableCell key ="6" align="left">{phong.view}</StyledTableCell>
                        <StyledTableCell key ="7" align="left">{phong.bancong}</StyledTableCell>
                        <StyledTableCell key ="8" align="right">{phong.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</StyledTableCell>
                        <StyledTableCell key ="9" align="right"><button className="fixdon" onClick={() => props.setForm(day.formnum)}>{day.formnum}</button></StyledTableCell>
                    </StyledTableRow>
                )
        })}
        </TableBody>
      </Table>
      <TablePagination className="Pages"
        component="div"
        count={rowDataNow.length}
        page={page}
        onPageChange={(e, newPage) => setPage(newPage)}
        rowsPerPage={9}
        rowsPerPageOptions={[]}
      />
    </TableContainer>
  );
}

export default NowRoomTable;