import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from '@material-ui/core/Typography';
import Paper from "@material-ui/core/Paper";
import Print from '@material-ui/icons/Print';
import GetApp from '@material-ui/icons/GetApp';
import Visibility from '@material-ui/icons/Visibility';

const useStyles = makeStyles({
  table: {
    minWidth: 900
  },
  alignRight: {
    textAlign: 'right'
  }
});

function createData(name, size, view, download, print) {
  return { name, size, view, download, print };
}

const rows = [
  createData("1) Bill_of_lading_01.pdf", "25MB", "View", "Download", "Print"),
  createData("2) Bill_of_lading_02.pdf", "25MB", "View", "Download", "Print"),
  createData("3) Bill_of_lading_03.pdf", "25MB", "View", "Download", "Print")
];

const rows2 = [
  createData("1) Booking_Form_01.pdf", "25MB", "View", "Download", "Print")
];

const rows3 = [
  createData("1) Shipping_Note_01.pdf", "25MB", "View", "Download", "Print"),
  createData("2) Shipping_Note_02.pdf", "25MB", "View", "Download", "Print")
];

const rows4 = [
  createData("1) Delivery_Note_01.pdf", "25MB", "View", "Download", "Print"),
  createData("2) Delivery_Note_02.pdf", "25MB", "View", "Download", "Print"),
  createData("3) Delivery_Note_03.pdf", "25MB", "View", "Download", "Print")
];

export default function BillOfLanding() {
  const classes = useStyles();

  return (
    <TableContainer>


      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.alignRight}>
            <GetApp style={{ verticalAlign: "bottom"}}/>
              Download all as .zip
              </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Bill of Landing</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>

        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell> <TableCell> </TableCell> <TableCell> </TableCell> <TableCell> </TableCell> <TableCell> </TableCell> <TableCell> </TableCell>
              <TableCell align="right">{row.size}</TableCell> <TableCell> </TableCell>
              <TableCell align="right"><Visibility style={{ verticalAlign: "bottom" }} />{row.view}</TableCell> <TableCell> </TableCell>
              <TableCell align="right"><GetApp style={{ verticalAlign: "bottom" }} />{row.download}</TableCell> <TableCell> </TableCell> 
              <TableCell align="right-10px"><Print style={{ verticalAlign: "bottom" }} />{row.print}</TableCell> <TableCell> </TableCell>
            </TableRow>
          ))}
          </TableBody>
        </TableHead>
      </Table>

      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Booking Form</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        <TableBody>
          {rows2.map((row2) => (
            <TableRow key={row2.name}>
              <TableCell component="th" scope="row">
                {row2.name}
              </TableCell> <TableCell> </TableCell> <TableCell> </TableCell> <TableCell> </TableCell> <TableCell> </TableCell> <TableCell> </TableCell>
              <TableCell align="right">{row2.size}</TableCell> <TableCell> </TableCell>
              <TableCell align="right"><Visibility style={{ verticalAlign: "bottom" }} />{row2.view}</TableCell> <TableCell> </TableCell>
              <TableCell align="right"><GetApp style={{ verticalAlign: "bottom" }} />{row2.download}</TableCell> <TableCell> </TableCell>
              <TableCell align="right-10px"><Print style={{ verticalAlign: "bottom" }} />{row2.print}</TableCell> <TableCell> </TableCell>
            </TableRow>
          ))}
          </TableBody>
        </TableHead>
      </Table>


      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Shipping Note</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        <TableBody>
          {rows3.map((row3) => (
            <TableRow key={row3.name}>
              <TableCell component="th" scope="row">
                {row3.name}
              </TableCell> <TableCell> </TableCell> <TableCell> </TableCell> <TableCell> </TableCell> <TableCell> </TableCell> <TableCell> </TableCell>
              <TableCell align="right">{row3.size}</TableCell> <TableCell> </TableCell>
              <TableCell align="right"><Visibility style={{ verticalAlign: "bottom" }} />{row3.view}</TableCell> <TableCell> </TableCell>
              <TableCell align="right"><GetApp style={{ verticalAlign: "bottom" }} />{row3.download}</TableCell> <TableCell> </TableCell>
              <TableCell align="right-10px"><Print style={{ verticalAlign: "bottom" }} />{row3.print}</TableCell> <TableCell> </TableCell>
            </TableRow>
          ))}
          </TableBody>
        </TableHead>
      </Table>

      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Delivery Note</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        <TableBody>
          {rows4.map((row4) => (
            <TableRow key={row4.name}>
              <TableCell component="th" scope="row">
                {row4.name}
              </TableCell> <TableCell> </TableCell> <TableCell> </TableCell> <TableCell> </TableCell> <TableCell> </TableCell> <TableCell> </TableCell>
              <TableCell align="right">{row4.size}</TableCell> <TableCell> </TableCell>
              <TableCell align="right"><Visibility style={{ verticalAlign: "bottom" }} />{row4.view}</TableCell> <TableCell> </TableCell>
              <TableCell align="right"><GetApp style={{ verticalAlign: "bottom" }} />{row4.download}</TableCell> <TableCell> </TableCell>
              <TableCell align="right-10px"><Print style={{ verticalAlign: "bottom" }} />{row4.print}</TableCell> <TableCell> </TableCell>
            </TableRow>
          ))}
          </TableBody>
        </TableHead>
      </Table>


    </TableContainer>
  );
}
