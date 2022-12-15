import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import {styled } from '@mui/material/styles';


export const StyledTableRow = styled(TableRow)(() => ({
  fontSize: '14px',
  /*'&:nth-of-type(odd)': {
    backgroundColor: 'rgba(255, 150, 60, 0.2)',
  },*/
  '&:last-child td, &:last-child th': {
    border: 0,
  },
  [`.btn-edit`]: {
    color: 'var(--primary-color)',
    cursor: 'pointer',
    '&:hover, &:focus': {
      color: 'black',
    }
  }
  
})) 

export const StyledTableCell = styled(TableCell)(() => ({
  borderBottom: '0',
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#E1963C',
    color: 'black',
  },
  
}));

export const StyledTableHead = (props) => {
  return (
    <TableHead>
      <StyledTableRow>
      {
        props.columns.map((col, index) => col.sort ?
        <StyledTableCell align={col.align} key = {index} onClick = {() => props.handleSortRequest(col.id)}>
          <TableSortLabel active = {props.orderByColumn === col.id} direction = {props.orderByColumn === col.id ? props.orderDirection : "asc"}>
            {col.label}
          </TableSortLabel>
        </StyledTableCell>
        : <StyledTableCell align={col.align} key = {index}>{col.label}</StyledTableCell>
        )
      }
      </StyledTableRow>
    </TableHead>
  )
}