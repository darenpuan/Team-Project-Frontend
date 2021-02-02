import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import ControlPointIcon from '@material-ui/icons/ControlPoint';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(type, category, name, weight, remove) {
  return { type, category, name, weight, remove };
}

const rows = [
  createData('Fruit', 'Apple', 'Fuji Apple', 150.50, 'Remove'),
  createData('Fruit', 'Orange', 'Pasar Mandarin Orange', 170.01, 'Remove'),
  createData('Vegetables', 'Cucumber', 'Japanese Cucumber', 150.03, 'Remove'),
  createData('Vegetables', 'Mushroom', 'Pasar Enoki Mushroom', 120.13, 'Remove'),
  createData('Fruit', 'Pear', 'China Brown Pear', 170.18, 'Remove'),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Type</StyledTableCell>
            <StyledTableCell align="left">Category</StyledTableCell>
            <StyledTableCell align="left">Name</StyledTableCell>
            <StyledTableCell align="left">Total Weight (Kg)</StyledTableCell>
            <StyledTableCell align="left">Action</StyledTableCell>
            <StyledTableCell align="center">Add New</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.type}>
              <StyledTableCell component="th" scope="row">
                {row.type}
              </StyledTableCell>
              <StyledTableCell align="left">{row.category}</StyledTableCell>
              <StyledTableCell align="left">{row.name}</StyledTableCell>
              <StyledTableCell align="left">{row.weight}</StyledTableCell>
              <StyledTableCell align="left">
                {row.remove === 'Remove' ? (
                  <Button
                    variant="contained"
                    color="error"
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                  >
                    Delete
                  </Button>
                )
                  : null}
              </StyledTableCell>
              <StyledTableCell align="center"><ControlPointIcon /></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
