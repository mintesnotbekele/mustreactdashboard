import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Checkbox } from "../Checkbox";
import { apiResponse as rows } from './formattedSeed';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
      padding: '4px'

}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const columns = [
{
  accessorKey: 'no',
  header: 'NO',
  size: 100,
  enableColumnFilter: false,
},
{
  accessorKey: 'Existing_type',
  header: '기존유형',
  enableColumnFilter: false
},
{
  accessorKey: 'Application_type',
  header: '신청유형',
},
{
  accessorKey: 'Documents_to_be_submitted',
  header: '제출서류',
},
{
  accessorKey: 'Application_date_and_time',
  header: '신청일시',
  size: 300,
},
{
  accessorKey: 'Approval',
  header: '승인여부',
},

{
  accessorKey: 'Reason_for_rejection_of_approval',
  header: '승인거부 사유',
},
{
  accessorKey: 'Approval_date_and_time',
  header: '승인일시',
},
{
  accessorKey: 'manager',
  header: '관리자',
}];
console.log(rows);

export default function CustomizedTables(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead className='frame-5'>
          <TableRow >
          <TableCell padding="checkbox">
               <Checkbox
              dark={false}
              label={false}
              stateProp="default"
              type="unchecked"
              typeUncheckedStateClassName="checkbox-instance"
            />
        </TableCell>
            {columns.map((col, index)=>{
              return   <StyledTableCell className='text-wrapper-16' key={index} >
                {col.header}
              </StyledTableCell>
            })}
             </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={row.id}>
               <TableCell padding="checkbox">
               <Checkbox
              dark={false}
              
              stateProp="default"
              type="unchecked"
              typeUncheckedStateClassName="checkbox-instance"
            />
        </TableCell>
        <StyledTableCell component="th" scope="row">
              <div className="text-wrapper-7">
                {index}
                 </div>
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
              <div className="text-wrapper-7">
                {row.existing_type}
                 </div>
              </StyledTableCell>
            
              <StyledTableCell align="center">  <div className="text-wrapper-7">{row.application_type}</div></StyledTableCell>
            
              <StyledTableCell align="center"> 
            
                <div className='dropdown-inpur-form'>
                 <div className="text-wrapper-7">{row.documents_to_be_submitted}</div>
                 </div></StyledTableCell>
              <StyledTableCell align="center">  
                <div className="text-wrapper-7">{row.application_date_and_time}</div>
                </StyledTableCell>

              <StyledTableCell align="center"> 
                 <div className= {`${row.status== "승인대기" ? "waiting" : row.status == "승인거부" ? "approval": "refusal "} basic  basic-instance text-wrapper-7`}>{row.approval}</div>
              </StyledTableCell>
              <StyledTableCell align="center">  <div className="text-wrapper-7" style={{textAlign: 'left'}}>{row.reason_for_rejection_of_approval}</div></StyledTableCell>
              <StyledTableCell align="center">  <div className="text-wrapper-7">{row.approval_date_and_time}</div></StyledTableCell>
              <StyledTableCell align="center">  <div className="text-wrapper-7">{row.manager}</div></StyledTableCell>
            
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
