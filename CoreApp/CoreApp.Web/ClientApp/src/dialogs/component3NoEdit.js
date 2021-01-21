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
import DialogContent from '@material-ui/core/DialogContent';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import { CompletedChip, PendingChip, SuspendedChip } from 'src/components/StatusChips';
import Divider from '@material-ui/core/Divider';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const tableStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

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
  marginLeft: 3,
  m: 0.5,
  border: 1,
  borderRadius: 5,
  style: { width: '900px', height: '875px' },
};


function createData(type, category, itemName, batch, quantity, expiry) {
  return { type, category, itemName, batch, quantity, expiry};
}

const rows = [
  createData('Type A', 'Category A', 'Item A', '123', 20, 'DD/MM//YY'),
  createData('Type B', 'Category B', 'Item B', '123', 17, 'DD/MM//YY'),
  createData('Type C', 'Category C', 'Item C', '123', 42, 'DD/MM//YY'),
  createData('Type D', 'Category D', 'Item D', '123', 16, 'DD/MM//YY'),
  createData('Type E', 'Category E', 'Item F', '123', 50, 'DD/MM//YY'),
];


export default function TransferWarehouseDialog() {
  const tableClasses = tableStyles();
  const [openComponent, setComponent] = React.useState(false);
  const handleOpenComponent = () => {
    setComponent(true);
  };
  const handleCloseComponent = () => {
    setComponent(false);
  };
  const [danger, setDanger] = React.useState('');
  const handleDangerChange = (event) => {
    setDanger(event.target.value);
  };
  const [transportation, setTransportation] = React.useState('');
  const handleTransportationChange = (event) => {
    setTransportation(event.target.value);
  };
  const [transporter, setTransporter] = React.useState('');
  const handleTransporterChange = (event) => {
    setTransporter(event.target.value);
  };

  return (
    <div>

      <Box display="flex" justifyContent="center" style={{ marginTop: "30px" }}>
        <Box borderColor="text.primary" {...boxProps}>


          <Grid container spacing={1} style={{ margin: "10px" }} >
            <Grid item xs={2} align="left" >
              <InputLabel style={{ marginTop: "10px" }}>Cargo Name</InputLabel>
            </Grid>
            <Grid item xs={3} align="right" >
              <TextField size="small" value="Cargo A" variant="outlined" disabled />
            </Grid>
            <Grid item xs={1} align="right" >
            </Grid>
            <Grid item xs={3} align="left">
              <InputLabel style={{ marginTop: "10px" }}>Marks & Numbers</InputLabel>
            </Grid>
            <Grid item xs={3} align="left">
              <form noValidate autoComplete="off">
                <TextField size="small" style={{ width: "185px" }} value="ABC12345" variant="outlined" disabled />
              </form>
            </Grid>
            <Grid item xs={2} align="left" >
              <InputLabel style={{ marginTop: "10px" }}>Weight (KG)</InputLabel>
            </Grid>
            <Grid item xs={3} align="left" >
              <TextField size="small" value="50" variant="outlined" disabled />
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
                  style={{ width: "185px", height: "40px" }}
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
                <TextField size="small" value="100" variant="outlined" disabled />
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
                <TextField size="small" value="100" variant="outlined" disabled />
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
                <TextField size="small" value="100" variant="outlined" disabled />
              </form>
            </Grid>
            <Grid item xs={1} align="right">
              <IconButton disabled>
                <AddCircleOutlineIcon style={{ fontSize: 30, color: green[500], verticalAlign: "bottom" }} />
              </IconButton>
            </Grid>
          </Grid>




          <TableContainer style={{ margin: "10px" }} >
            <Table className={tableClasses.table} size="small" aria-label="a dense table" style={{ width: "850px" }}>
              <TableHead>
                <TableRow >
                  <TableCell style={{ border: "1px solid black" }} align="center">Type</TableCell>
                  <TableCell style={{ border: "1px solid black" }} align="center">Category</TableCell>
                  <TableCell style={{ border: "1px solid black" }} align="center">Item Name</TableCell>
                  <TableCell style={{ border: "1px solid black" }} align="center">Batch</TableCell>
                  <TableCell style={{ border: "1px solid black" }} align="center">Quantity</TableCell>
                  <TableCell style={{ border: "1px solid black" }} align="center">Expiry</TableCell>
                  <TableCell style={{ border: "1px solid black" }} align="center">Remove</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell style={{ border: "1px solid black" }} align="center">{row.type}</TableCell>
                    <TableCell style={{ border: "1px solid black" }} align="center">{row.category}</TableCell>
                    <TableCell style={{ border: "1px solid black" }} align="center">{row.itemName}</TableCell>
                    <TableCell style={{ border: "1px solid black" }} align="center">{row.batch}</TableCell>
                    <TableCell style={{ border: "1px solid black" }} align="center">{row.quantity}</TableCell>
                    <TableCell style={{ border: "1px solid black" }} align="center">{row.expiry}</TableCell>
                    <TableCell style={{ border: "1px solid black" }} align="center">
                      <Button style={{ color: "white", backgroundColor: "red" }} variant="contained" >
                        REMOVE
                  </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Grid container spacing={1} style={{ margin: "10px" }} >
            <Grid item xs={7} align="left">
              <InputLabel style={{ marginTop: "10px" }}>Does this shipment contain hazardous/dangerous goods?</InputLabel>
            </Grid>
            <Grid item xs={5} align="left">
              <Select
                style={{ width: "320px", textAlign: "left" }}
                value={'yes'}
                onChange={handleDangerChange}
                input={<BootstrapInput />}
                disabled
              >
                <MenuItem value={'yes'}>YES</MenuItem>
                <MenuItem value={'no'}>NO</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={7} align="left">
              <InputLabel style={{ marginTop: "10px" }}>Do you require a transportation?</InputLabel>
            </Grid>
            <Grid item xs={5} align="left">
              <form>
                <Select
                  style={{ width: "320px", textAlign: "left" }}
                  value='yes'
                  onChange={handleTransportationChange}
                  input={<BootstrapInput />}
                  disabled
                >
                  <MenuItem value={'yes'}>YES</MenuItem>
                  <MenuItem value={'no'}>NO</MenuItem>
                </Select>
              </form>
            </Grid>
            <Grid item xs={7} align="left">
              <InputLabel style={{ marginTop: "10px" }}>Select Transporter</InputLabel>
            </Grid>
            <Grid item xs={5} align="left">
              <Select
                disabled={transportation == 'no'}
                style={{ width: "320px", textAlign: "left" }}
                value={'Marino'}
                onChange={handleTransporterChange}
                input={<BootstrapInput />}
                disabled
              >
                <MenuItem value={'Marino'}>Marino Co.</MenuItem>
                <MenuItem value={'Company2'}>Transport Company 2</MenuItem>
              </Select>
            </Grid>
            <Divider />
            <Grid item xs={12}>
              <InputLabel style={{ marginTop: "10px" }}>Remarks</InputLabel>
              <TextField
                variant="outlined"
                multiline={true}
                rows={5}
                margin=""
                style={{ width: "850px"}}
                name="remarks"
                id="remarks"
                disabled
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" defaultChecked="true" disabled />}
                label="By checking this box, you agree to our Shipping Policy and Terms & Conditions"
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}
