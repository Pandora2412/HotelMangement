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
import { Checkbox } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import { Navigate, useLocation } from 'react-router-dom';

const EmptyRoomTable = (props) => {

    const [rowData, setRowData] = useState([]);
    const axiosPrivate = useAxiosPrivate();
    const location = useLocation();

    useEffect(() => {
        
        let isMounted = true;
        const controller = new AbortController();

        const getRoom = async () => {
            try {
                const res = await axiosPrivate.get(
                    `/room/1/${props.toa}/${props.checkin}/${props.checkout}`,
                    {
                        signal: controller.signal
                    });
                isMounted && setRowData(sortArray(res.data, props.orderDirection, props.orderColumn));
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

    }, [props.toa, props.checkin, props.checkout, props.newForm, props.trong]);

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

    const theme = createTheme({
        palette: {
            primary: {
                main: '#111',
            },
        },
    });

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
            align: 'left'
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

    const handleCheckbox = (e, rowName) => {
        if (e.target.checked) {
            props.setSelections([...props.selections, {"toa": props.toa, "id": rowName}]);
        }
        else {
            const index = props.selections.findIndex(selection => selection.toa === props.toa && selection.id === rowName);
            
            if (index === props.selections.length - 1) {
                props.setSelections(props.selections.slice(0, -1));
            } 
            else if (index === 0) {
                props.setSelections(props.selections.slice(1));
            } 
            else {
                props.setSelections([...props.selections.slice(0, index), ...props.selections.slice(index + 1)]);
            }
        }
    }

    const handleSortRequest = (id) => {
        props.setOrderColumn(id);
        setRowData(sortArray(rowData, props.orderDirection, id));
        props.setOrderDirection(props.orderDirection === "asc" ? "desc" : "asc");
    };    

    return (
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="Rooms" size='small'>
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
                <StyledTableCell align="right"></StyledTableCell> 
            </TableRow>
          </TableHead>
          <TableBody>
            {rowData
              .slice(page * 9, page * 9 + 9)
              .map((phong) => (
              <StyledTableRow key={phong.id}>
                <StyledTableCell key="1" align="left">{phong.id}</StyledTableCell>
                <StyledTableCell key="2" align="center">{phong.singlebed}</StyledTableCell>
                <StyledTableCell key="3" align="center">{phong.doublebed}</StyledTableCell>
                <StyledTableCell key="4" align="left">{phong.num}</StyledTableCell>
                <StyledTableCell key="5" align="left">{phong.type}</StyledTableCell>
                <StyledTableCell key="6" align="left">{phong.view}</StyledTableCell>
                <StyledTableCell key="7" align="left">{phong.bancong}</StyledTableCell>
                <StyledTableCell key="8" align="right">{phong.price}</StyledTableCell>
                <TableCell key="9" align="right">
                  <ThemeProvider theme={theme}>
                    <Checkbox color='primary' onClick={(e) => handleCheckbox(e, phong.id)} checked={props.selections.some(selection => selection.toa === props.toa && selection.id === phong.id)}/>
                  </ThemeProvider>
                </TableCell> 
              </StyledTableRow>
          ))}
          </TableBody>
        </Table>
        <TablePagination className="Pages"
          component="div"
          count={rowData.length}
          page={page}
          onPageChange={(e, newPage) => setPage(newPage)}
          rowsPerPage={9}
          rowsPerPageOptions={[]}
        />
      </TableContainer>
    );
}


export default EmptyRoomTable;