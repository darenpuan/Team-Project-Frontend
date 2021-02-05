import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import { CompletedChip, PendingChip, ProgressChip } from 'src/components/StatusChips';
import OrderListDetailEdit from './OrderListDetailEdit';
import Dialog from '@material-ui/core/Dialog';
import ButtonOrderEdit from './ButtonOrderEdit';
import ButtonOrderConfirm from './ButtonOrderConfirm'
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  colors,
  Grid
} from '@material-ui/core';
import NewOrderList from './NewOrderList';
import {
  Search as SearchIcon,
  Filter as FilterIcon
} from 'react-feather';

import { FilterButton } from 'src/components/Buttons';


function createData(orderid, orderdate, ordertime, status) {
  return { orderid, orderdate, ordertime, status };
}

const rows = [
  createData('#19525', '28/12/2020', '13:00', 'Pending'),
  createData('#19544', '30/12/2020', '21:00', 'Completed'),
  createData('#19876', '01/01/2021', '16:30', 'In Progress'),
  createData('#19533', '14/01/2021', '09:10', 'Completed'),
  createData('#19582', '07/01/2021', '20:45', 'Completed'),
  createData('#19433', '20/12/2020', '23:30', 'In Progress'),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: 'orderid', numeric: false, disablePadding: true, label: 'Order Number' },
  { id: 'orderdate', numeric: true, disablePadding: false, label: 'Order Date' },
  { id: 'ordertime', numeric: true, disablePadding: false, label: 'Order Time' },
  { id: 'status', numeric: true, disablePadding: false, label: 'Status' },
];

function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? '3px' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell></TableCell>

      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
        color: theme.palette.primary,
        backgroundColor: lighten(theme.palette.primary.light, 0.85),
      }
      : {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.primary,
      },
  title: {
    flex: '1 1 100%',
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

export default function EnhancedTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('orderdate');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [search, setSearch] = React.useState(rows);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.orderid);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, orderid) => {
    const selectedIndex = selected.indexOf(orderid);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, orderid);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const handleSearch = event => {
    const items = rows.filter((data) => {
      return data.orderid.toLowerCase().includes(event.target.value.toLowerCase()) || data.status.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setSearch(items);
  }

  const handleCompleted = event => {
    setAnchorEl(null);
    const items = rows.filter((data) => {
      return data.orderid.toLowerCase().includes("completed") || data.status.toLowerCase().includes("completed")
    })

    setSearch(items);
  }

  const handlePending = event => {
    setAnchorEl(null);
    const items = rows.filter((data) => {
      return data.orderid.toLowerCase().includes("pending") || data.status.toLowerCase().includes("pending")
    })

    setSearch(items);
  }

  const handleProgress = event => {
    setAnchorEl(null);
    const items = rows.filter((data) => {
      return data.orderid.toLowerCase().includes("in p") || data.status.toLowerCase().includes("in p")
    })

    setSearch(items);
  }

  const handleRejected = event => {
    setAnchorEl(null);
    const items = rows.filter((data) => {
      return data.orderid.toLowerCase().includes("rejected") || data.status.toLowerCase().includes("rejected")
    })

    setSearch(items);
  }

  const handleAll = event => {
    setAnchorEl(null);
    const items = rows.filter((data) => {
      return data.orderid.toLowerCase().includes("") || data.status.toLowerCase().includes(" ")
    })

    setSearch(items);
  }

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick2 = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const isSelected = (orderid) => selected.indexOf(orderid) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);


  return (
    <div className={classes.root}>
      <Card>

        <CardContent>
        <div style={{ width: '100%' }}>
          <Box p={1}>
          <Box display="flex" p={1}>
            <Grid container spacing={1} alignItems="flex-end">

              <Grid item>
                <TextField
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SvgIcon
                          fontSize="small"
                          color="action"
                        >
                          <SearchIcon />
                        </SvgIcon>
                      </InputAdornment>
                    )
                  }}
                  placeholder="Search product"
                      variant="standard"
                      onChange={handleSearch}
                />
              </Grid>
              <Grid item mr={2}>
                    <FilterButton variant="contained" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick2}>
                  <SvgIcon
                    fontSize="small"
                    color="action"
                  >
                    <FilterIcon className={classes.filterButton} />
                  </SvgIcon>&nbsp;&nbsp;Filter
              </FilterButton>
                    <Menu
                      id="simple-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >

                      <MenuItem onClick={handleAll}>All</MenuItem>
                      <MenuItem onClick={handleCompleted}>Completed</MenuItem>
                      <MenuItem onClick={handleProgress}>In Progress</MenuItem>
                      <MenuItem onClick={handlePending}>Pending</MenuItem>
                      <MenuItem onClick={handleRejected}>Rejected</MenuItem>
                    </Menu>
              </Grid>
            </Grid>
            <Grid container display="flex" justify="flex-end" >
              <NewOrderList />
            </Grid>
            </Box>
            </Box>
        </div>
          </CardContent>
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {search.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                  const isItemSelected = isSelected(row.orderid);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.orderid)}
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.orderid}
                      selected={isItemSelected}
                    >
                      <TableCell component="th" id={labelId} scope="row" padding="3px">
                        {row.orderid}
                      </TableCell>
                      <TableCell align="right">{row.orderdate}</TableCell>
                      <TableCell align="right">{row.ordertime}</TableCell>
                      <TableCell align="right">
                        {row.status === 'Completed' ? (
                          <CompletedChip
                            label={row.status}
                            size="medium"
                            variant="outlined"
                            component="a"
                          />
                        )
                          : null}
                        {
                          row.status === 'Pending' ? (
                            <PendingChip
                              label={row.status}
                              size="small"
                              variant="outlined"
                              component="a"
                            />
                          )
                            : null
                        }
                        {
                          row.status === 'In Progress' ? (
                            <ProgressChip
                              label={row.status}
                              size="small"
                              variant="outlined"
                              component="a"
                            />
                          )
                            : null
                        }
                      </TableCell>
                      <TableCell align="right">
                        {row.status === 'Completed' ? (
                          < ButtonOrderConfirm />
                        )
                          : null}
                        {row.status == 'In Progress' ? (
                          < ButtonOrderEdit />
                        )
                          : null
                        }
                        {row.status == 'Pending' ? (
                          < ButtonOrderEdit />
                        )
                          : null
                        }
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Card>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </div>
  );
}
