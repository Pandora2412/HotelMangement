import * as React from 'react';
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
import { Checkbox } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const EmptyRoomTable = (props) => {
    
    const StyledTableCell = styled(TableCell)(() => ({
      [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#E1963C',
        color: 'black',
      },
      [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
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

    const handleCheckbox = (e, rowName) => {
      if (e.target.checked) {
        props.setSelections([...props.selections, rowName]);
        props.setSelectNum(props.selectNum + 1); 
      }
      else {
        const index = props.selections.findIndex(selection => selection === rowName);
        if (index === props.selections.length - 1) {
          props.setSelections(props.selections.slice(0, -1));
        } else if (index === 0) {
          props.setSelections(props.selections.slice(1));
        } else {
          props.setSelections([...props.selections.slice(0, index), ...props.selections.slice(index + 1)]);
        }
        props.setSelectNum(props.selectNum - 1);
      }
    }

    const handleSortRequest = (id) => {
        props.setOrderColumn(id);
        props.setRowData(sortArray(props.rowData, props.orderDirection, id));
        props.setOrderDirection(props.orderDirection === "asc" ? "desc" : "asc");
    };    

    return (
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="Rooms" size='small'>
          <TableHead>
            <TableRow>
                {headCell.map(head => 
                    head.sort
                    ?<StyledTableCell align={head.align} onClick={() => handleSortRequest(head.id)}>
                        <TableSortLabel active={head.id === props.orderColumn} direction={props.orderDirection}>    
                            {head.label}
                        </TableSortLabel>
                    </StyledTableCell>
                    :<StyledTableCell align={head.align}>{head.label}</StyledTableCell>
                )}
                <StyledTableCell align="right"></StyledTableCell> 
            </TableRow>
          </TableHead>
          <TableBody>
            {props.rowData
              .slice(page * 9, page * 9 + 9)
              .map((phong) => (
              <TableRow key={phong.id}>
                <StyledTableCell align="left">{phong.id}</StyledTableCell>
                <StyledTableCell align="center">{phong.singlebed}</StyledTableCell>
                <StyledTableCell align="center">{phong.doublebed}</StyledTableCell>
                <StyledTableCell align="left">{phong.num}</StyledTableCell>
                <StyledTableCell align="left">{phong.type}</StyledTableCell>
                <StyledTableCell align="left">{phong.view}</StyledTableCell>
                <StyledTableCell align="left">{phong.bancong}</StyledTableCell>
                <StyledTableCell align="right">{phong.price}</StyledTableCell>
                <TableCell align="right">
                  <ThemeProvider theme={theme}>
                    <Checkbox color='primary' onClick={(e) => handleCheckbox(e, phong.id)} checked={props.selections.includes(phong.id)}/>
                  </ThemeProvider>
                </TableCell> 
              </TableRow>
          ))}
          </TableBody>
        </Table>
        <TablePagination className="Pages"
          component="div"
          count={props.rowData.length}
          page={page}
          onPageChange={(e, newPage) => setPage(newPage)}
          rowsPerPage={9}
          rowsPerPageOptions={[]}
        />
      </TableContainer>
    );
  }


const BookRoomTable = (props) => {  
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
      props.setOrderColumn(id);
      props.setRowDataBook(sortArray(props.rowDataBook, props.orderDirection, id));
      props.setOrderDirection(props.orderDirection === "asc" ? "desc" : "asc");
  };    

  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="Rooms">
        <TableHead>
          <TableRow>
              {headCell.map(head => 
                  head.sort
                  ?<StyledTableCell align={head.align} onClick={() => handleSortRequest(head.id)}>
                      <TableSortLabel active={head.id === props.orderColumn} direction={props.orderDirection}>    
                          {head.label}
                      </TableSortLabel>
                  </StyledTableCell>
                  :<StyledTableCell align={head.align}>{head.label}</StyledTableCell>
              )}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rowDataBook
            .slice(page * 9, page * 9 + 9)
            .map((phong) => (phong.bookday.some(day => (day.formnum.includes(props.searchString)) || (day.name.includes(props.searchString) || (day.id.includes(props.searchString))))) && (
            <TableRow key={phong.id}>
              <StyledTableCell align="left">{phong.id}</StyledTableCell>
              <StyledTableCell align="center">{phong.singlebed}</StyledTableCell>
              <StyledTableCell align="center">{phong.doublebed}</StyledTableCell>
              <StyledTableCell align="left">{phong.num}</StyledTableCell>
              <StyledTableCell align="left">{phong.type}</StyledTableCell>
              <StyledTableCell align="left">{phong.view}</StyledTableCell>
              <StyledTableCell align="left">{phong.bancong}</StyledTableCell>
              <StyledTableCell align="right">{phong.price}</StyledTableCell>
              <StyledTableCell align="right"><button className="fixdon">{phong.bookday.find(book=>((new Date(book.checkin).getTime() === props.checkin.getTime()) && (new Date(book.checkout).getTime() === props.checkout.getTime()))).formnum}</button></StyledTableCell>
            </TableRow>
        ))}
        </TableBody>
      </Table>
      <TablePagination className="Pages"
        component="div"
        count={props.rowDataBook.length}
        page={page}
        onPageChange={(e, newPage) => setPage(newPage)}
        rowsPerPage={9}
        rowsPerPageOptions={[]}
      />
    </TableContainer>
  );
}

const NowRoomTable = (props) => {  
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
      props.setOrderColumn(id);
      props.setRowDataNow(sortArray(props.rowDataNow, props.orderDirection, id));
      props.setOrderDirection(props.orderDirection === "asc" ? "desc" : "asc");
  };    

  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="Rooms">
        <TableHead>
          <TableRow>
              {headCell.map(head => 
                  head.sort
                  ?<StyledTableCell align={head.align} onClick={() => handleSortRequest(head.id)}>
                      <TableSortLabel active={head.id === props.orderColumn} direction={props.orderDirection}>    
                          {head.label}
                      </TableSortLabel>
                  </StyledTableCell>
                  :<StyledTableCell align={head.align}>{head.label}</StyledTableCell>
              )}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rowDataNow
            .slice(page * 9, page * 9 + 9)
            .map((phong) => (
            <TableRow key={phong.id}>
              <StyledTableCell align="left">{phong.id}</StyledTableCell>
              <StyledTableCell align="center">{phong.singlebed}</StyledTableCell>
              <StyledTableCell align="center">{phong.doublebed}</StyledTableCell>
              <StyledTableCell align="left">{phong.num}</StyledTableCell>
              <StyledTableCell align="left">{phong.type}</StyledTableCell>
              <StyledTableCell align="left">{phong.view}</StyledTableCell>
              <StyledTableCell align="left">{phong.bancong}</StyledTableCell>
              <StyledTableCell align="right">{phong.price}</StyledTableCell>
              <StyledTableCell align="right"><button className="fixdon">{phong.bookday.find(book=>((new Date(book.checkin).getTime()<= new Date().getTime()) && (new Date(book.checkout).getTime() >= new Date().getTime()))).formnum}</button></StyledTableCell>
            </TableRow>
        ))}
        </TableBody>
      </Table>
      <TablePagination className="Pages"
        component="div"
        count={props.rowDataNow.length}
        page={page}
        onPageChange={(e, newPage) => setPage(newPage)}
        rowsPerPage={9}
        rowsPerPageOptions={[]}
      />
    </TableContainer>
  );
}


export {EmptyRoomTable, BookRoomTable, NowRoomTable};