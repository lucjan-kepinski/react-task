import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const Spinner = () => {
    return <p>
    Nie udało się załadować listy.
  </p>
}

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing(1),
      overflowX: 'auto',
    },
    table: {
      minWidth: 650,
    },
  }));
  
  export default function ItemTable(props) {
    const { newrows } = props
    const classes = useStyles();

    return ( newrows !== undefined ?
      <Paper  className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Numer wpisu</TableCell>
              <TableCell>Treść</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {newrows.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>{row.name}</TableCell>
              </TableRow>
            )).reverse().slice(0,10)}
          </TableBody>
        </Table>
      </Paper> : <Spinner/>
    );
  }