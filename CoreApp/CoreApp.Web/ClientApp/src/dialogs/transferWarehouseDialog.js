import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { green } from '@material-ui/core/colors';

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const boxProps = {
  bgcolor: 'background.paper',
  marginTop: 1,
  marginLeft:1,
  m: 0.5,
  border: 1,
  borderRadius:5,
  style: { width: '900px', height: '405px' },
};

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1.5),
    backgroundColor: theme.palette.info.main,
    color:'white',
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(0),
    top: theme.spacing(0),
    color: 'white',
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(5),
    paddingRight: theme.spacing(5),
    paddingLeft: theme.spacing(5),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
    alignContent: 'center',
  },
}))(MuiDialogActions);

{/*Table Styles*/ }
const tableStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, batch, quantity, expiry) {
  return { name, batch, quantity, expiry };
}

const rows = [
  createData('Item A', '123', 20, 'DD/MM//YY'),
  createData('Item B', '123', 17, 'DD/MM//YY'),
  createData('Item A', '123', 42, 'DD/MM//YY'),
  createData('Item A', '123', 16, 'DD/MM//YY'),
  createData('Item A', '123', 50, 'DD/MM//YY'),
];

{/*Success Dialog Styles*/ }
const DialogTitle1 = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
    </MuiDialogTitle>
  );
});

const DialogContent1 = withStyles((theme) => ({
  root: {
    padding: theme.spacing(8),
    textAlign: "center",
    width: '600px',
    height: '360px'
  },
}))(MuiDialogContent);



export default function TransferWarehouseDialog() {
  const [openTransfer, setOpenTransfer] = React.useState(false);
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const classes = useStyles();
  const handleOpenTransfer = () => {
    setOpenTransfer(true);
    warehouseReset();
    cargoReset();
  };
  const handleCloseTransfer = () => {
    setOpenTransfer(false);
  };
  const [cargo, setCargo] = React.useState('');
  const handleCargoChange = (event) => {
    setCargo(event.target.value);
  };
  const cargoReset = (event) => {
    setCargo("");
  };
  const [warehouse, setWarehouse] = React.useState('');
  const handleWarehouseChange = (event) => {
    setWarehouse(event.target.value);
  };
  const warehouseReset = (event) => {
    setWarehouse("");
  };
  const handleOpenSuccessDialog = () => {
    setOpenSuccess(true);
  };
  const handleCloseSuccessDialog = () => {
    setOpenSuccess(false);
  };
  const handleChangeSuccessDialog = () => {
    setOpenTransfer(false);
    setOpenSuccess(true);
  };

  const tableClasses = tableStyles();

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleOpenTransfer}>
        TRANSFER
      </Button>
      <Dialog onClose={handleCloseTransfer} aria-labelledby="customized-dialog-title" open={openTransfer} fullWidth={'true'} maxWidth={'md'}>
        <DialogTitle id="customized-dialog-title" onClose={handleCloseTransfer}>
          <Typography align='center'>
            Transfer Warehouse
        </Typography>
        </DialogTitle>
        <DialogContent dividers>
          <div flexGrow={1}>
            <Grid container spacing={1} style={{ marginLeft:"2px" }}>
              <Grid item xs={6}>
              Select Cargo:
            </Grid>
              <Grid item xs={6}>
                Choose Warehouse:
              </Grid>
              <Grid item xs={6}>
                <FormControl required style={{width:'430px'}}>
                  <Select
                    value={cargo}
                    onChange={handleCargoChange}
                    input={<BootstrapInput />}
                  >
                    <MenuItem value={'19525'}>Cargo #19525</MenuItem>
                    <MenuItem value={'12314'}>Cargo #12314</MenuItem>
                    <MenuItem value={'19524'}>Cargo #19524</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl required style={{ width: '430px' }}>
                  <Select
                    value={warehouse}
                    onChange={handleWarehouseChange}
                    input={<BootstrapInput />}
                  >
                    <MenuItem value={'A'}>Warehouse A</MenuItem>
                    <MenuItem value={'B'}>Warehouse B</MenuItem>
                    <MenuItem value={'C'}>Warehouse C</MenuItem>
                  </Select>
                </FormControl>
            </Grid>
            </Grid>
            <Box display="flex" justifyContent="center">
              <Box borderColor="text.primary" {...boxProps} >
                <Grid container spacing={1} style={{ margin: "10px", width:"850px"}} >
                  <Grid item xs={2} align="left" >
                    <InputLabel style={{ marginTop: "10px" }}>Cargo Name</InputLabel>
                    </Grid>
                    <Grid item xs={3} align="right" >
                      <TextField size="small" value="Cargo A" variant="outlined" style={{ backgroundColor: "lightGrey" }} disabled/>
                      </Grid>
                  <Grid item xs={1} align="right" >
                    </Grid>
                  <Grid item xs={3} align="left">
                    <InputLabel style={{ marginTop: "10px" }}>Marks & Numbers</InputLabel>
                    </Grid>
                    <Grid item xs={3} align="right">
                    <form noValidate autoComplete="off">
                      <TextField size="small" value="ABC12345" variant="outlined" style={{ backgroundColor: "lightGrey" }} disabled />
                      </form>
                  </Grid>
                  <Grid item xs={2} align="left" >
                    <InputLabel style={{ marginTop: "10px" }}>Weight (KG)</InputLabel>
                  </Grid>
                  <Grid item xs={3} align="right" >
                    <TextField size="small" value="50" variant="outlined" style={{ backgroundColor: "lightGrey" }} disabled />
                  </Grid>
                  <Grid item xs={1} align="right" >
                  </Grid>
                  <Grid item xs={3} align="left">
                    <InputLabel style={{ marginTop: "10px" }}>No & Kind of Packages</InputLabel>
                  </Grid>
                  <Grid item xs={3} align="left">
                    <form noValidate autoComplete="off">
                      <Select
                        value='drum'
                        variant="outlined"
                        style={{ width: "205px", height: "40px", backgroundColor: "lightGrey" }}
                        disabled
                      >
                        <option aria-label="None" value="" />
                        <option value={"drum"}>Drum</option>
                      </Select>
                    </form>
                  </Grid>
                  <Grid item xs={12} align="left">
                    <InputLabel style={{ marginTop: "10px" }}>Measurement (CM)</InputLabel>
                  </Grid>
                  <Grid item xs={1} align="left">
                    <InputLabel style={{ marginTop: "10px" }}>Length</InputLabel>
                  </Grid>
                  <Grid item xs={2} align="right">
                    <form noValidate autoComplete="off">
                      <TextField size="small" value="100" variant="outlined" style={{ backgroundColor: "lightGrey" }} disabled />
                    </form>
                  </Grid>
                  <Grid item xs={1} align="center">
                    <InputLabel style={{ marginTop: "10px" }}>X</InputLabel>
                  </Grid>
                  <Grid item xs={1} align="left">
                    <InputLabel style={{ marginTop: "10px" }}>Width</InputLabel>
                  </Grid>
                  <Grid item xs={2} align="right">
                    <form noValidate autoComplete="off">
                      <TextField size="small" value="100" variant="outlined" style={{ backgroundColor: "lightGrey" }} disabled />
                    </form>
                  </Grid>
                    <Grid item xs={1} align="center">
                      <InputLabel style={{ marginTop: "10px" }}>X</InputLabel>
                    </Grid>
                    <Grid item xs={1} align="left">
                      <InputLabel style={{ marginTop: "10px" }}>Height</InputLabel>
                    </Grid>
                    <Grid item xs={2} align="right">
                      <form noValidate autoComplete="off">
                        <TextField size="small" value="100" variant="outlined" style={{ backgroundColor: "lightGrey" }} disabled />
                      </form>
                  </Grid>
                </Grid>
                <TableContainer component={Paper} style={{ margin: "10px", width: "850px" }} >
                  <Table className={tableClasses.table} size="small" aria-label="a dense table" style={{ width: "850px" }}>
                    <TableHead>
                      <TableRow >
                        <TableCell style={{ border: "1px solid black" }} align="center">Item Name</TableCell>
                        <TableCell style={{ border: "1px solid black" }} align="center">Batch</TableCell>
                        <TableCell style={{ border: "1px solid black" }} align="center">Quantity</TableCell>
                        <TableCell style={{ border: "1px solid black" }} align="center">Expiry</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody style={{ backgroundColor:"lightGrey" }}>
                      {rows.map((row) => (
                        <TableRow key={row.name}>
                          <TableCell component="th" scope="row" style={{ border: "1px solid black" }} align="center">
                            {row.name}
                          </TableCell>
                          <TableCell style={{ border: "1px solid black" }} align="center">{row.batch}</TableCell>
                          <TableCell style={{ border: "1px solid black" }} align="center">{row.quantity}</TableCell>
                          <TableCell style={{ border: "1px solid black" }} align="center">{row.expiry}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Box>
          </div>
          <Grid item xs={12} align="center">
            <Button style={{margin:"5px", width:"200px"}} size="large" onClick={handleChangeSuccessDialog} variant='contained' color="primary">
              Submit
            </Button>
          </Grid>
        </DialogContent>
      </Dialog>
      <Dialog onClose={handleCloseSuccessDialog} aria-labelledby="customized-dialog-title" open={openSuccess} >
        <DialogTitle1 align='center' id="customized-dialog-title" onClose={handleCloseSuccessDialog} style={{ backgroundColor: green[500] }}>
          SUCCESS
        </DialogTitle1>
        <DialogContent1 dividers>
          <CheckCircleIcon style={{ fontSize: 200, color: green[500] }} />
          <Typography>
            Your Booking Reference No. is: 627301
          </Typography>
        </DialogContent1>
      </Dialog>
    </div>
  );
}
