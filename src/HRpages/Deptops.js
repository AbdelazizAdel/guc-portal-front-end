
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import {Redirect} from 'react-router-dom';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

// <Button variant='outlined' color='primary' onClick={() => handleClick(123)}> Delete Location</Button>

export default function BasicTable() {
  const classes = useStyles();
  const [rows, setRows] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(async () => {
    const LocationRes = axios.get("https://gucportalguc.herokuapp.com/HR/getDepertament", {
      headers : {
        'auth_token' : localStorage.getItem('auth_token')
      }
    })
    
    Promise.all([LocationRes]).then((result) => {
      console.log(result);
      setRows(result[0].data);
      setReady(true);
    }).catch((e) => {
      console.log(e);
    })
  },[])

  const handleClickDelete = async(id) => {
    const response = await axios.delete(`https://gucportalguc.herokuapp.com/HR/opDepartment/${id}`,{
        headers : {
            auth_token : localStorage.getItem('auth_token')
        },
        data: {}
    });
}

const handleClickUpdate = async(id) => {
    const response = await axios.post(`https://gucportalguc.herokuapp.com/HR/opDepartment/${id}`,{
        headers : {
            auth_token : localStorage.getItem('auth_token')
        },
        data: {}
    });
}
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Department ID </TableCell>
            <TableCell align="left">Department Name</TableCell>
            <TableCell align="left">Department HOD</TableCell>
            <TableCell>Ops</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.id}</TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.HOD}</TableCell>
              <TableCell><Button variant='outlined' color='primary' onClick={() => handleClickDelete(row.name)}> Delete Location</Button></TableCell>
              <TableCell><Button variant='outlined' color='primary' onClick={() => handleClickUpdate(row.name)}> Update Location</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
