import React, { useState } from 'react';
import clsx from 'clsx';
import moment from 'moment';
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import NewBookingChoiceDialog from 'src/dialogs/newBookingChoiceDialog';
import IconButton from '@material-ui/core/IconButton';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import Button from '@material-ui/core/Button';
import ApproveForm from 'src/views/bookingLayoutCustomer/BookingLayoutView/ApprovedForm.js'
import PendingForm from 'src/views/bookingLayoutCustomer/BookingLayoutView/PendingForm.js'
import RejectedForm from 'src/views/bookingLayoutCustomer/BookingLayoutView/RejectedForm.js'
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import {
  Box,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  TablePagination,
  Grid,
  Tooltip,
  makeStyles,
  Typography,
  colors
} from '@material-ui/core';

import {
  Search as SearchIcon,
  Filter as FilterIcon
} from 'react-feather';

import { FilterButton } from 'src/components/Buttons';
import { CompletedChip, PendingChip, RejectedChip, TransitChip } from 'src/components/StatusChips';

const data = [
  {
    id: uuid(),
    ref: '#19525',
    amount: 30.5,
    cargoName: 'Packet Drinks',
    createdAt: 1555016400000,
    status: 'Pending'
  },
  {
    id: uuid(),
    ref: '#19005',
    amount: 25.1,
    cargoName: 'Packet Drinks',
    createdAt: 1555016400000,
    status: 'In Transit'
  },
  {
    id: uuid(),
    ref: '#19005',
    amount: 96.43,
    cargoName: 'Packet Drinks',
    createdAt: 1554757200000,
    status: 'Pending'
  },
  {
    id: uuid(),
    ref: '#19005',
    amount: 32.54,
    cargoName: 'Packet Drinks',
    createdAt: 1554670800000,
    status: 'Completed'
  },
  {
    id: uuid(),
    ref: '#19005',
    amount: 16.76,
    cargoName: 'Packet Drinks',
    createdAt: 1554670800000,
    status: 'Completed'
  },
    {
    id: uuid(),
    ref: '#19005',
    amount: 16.76,
    cargoName: 'Snacks',
    createdAt: 1554670800000,
    status: 'Rejected'
  }
];

const useStyles = makeStyles(() => ({
  root: {},
  actions: {
    justifyContent: 'flex-end'
  },
  filterButton: {
    '&:hover': {
      color: colors.common.white
    }
  }
}));

const LatestOrders = ({ className, ...rest }) => {
  const classes = useStyles();
  const [orders] = useState(data);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState(data);

  const handleLimitChange = (event) => {
    setLimit(+event.target.value);
    setPage(0);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleSearch = event => {
    const items = orders.filter((data) => {
      return data.cargoName.toLowerCase().includes(event.target.value.toLowerCase()) || data.ref.toLowerCase().includes(event.target.value.toLowerCase()) || data.status.toLowerCase().includes(event.target.value.toLowerCase())
    })

    setSearch(items);
  }

  const handleCompleted = event => {
    setAnchorEl(null);
    const items = data.filter((data) => {
      return data.cargoName.toLowerCase().includes("completed") || data.ref.toLowerCase().includes("completed") || data.status.toLowerCase().includes("completed")
    })

    setSearch(items);
  }

  const handlePending = event => {
    setAnchorEl(null);
    const items = data.filter((data) => {
      return data.cargoName.toLowerCase().includes("pending") || data.ref.toLowerCase().includes("pending") || data.status.toLowerCase().includes("pending")
    })

    setSearch(items);
  }

  const handleTransit = event => {
    setAnchorEl(null);
    const items = data.filter((data) => {
      return data.cargoName.toLowerCase().includes("in transit") || data.ref.toLowerCase().includes("in transit") || data.status.toLowerCase().includes("in transit")
    })

    setSearch(items);
  }

  const handleRejected = event => {
    setAnchorEl(null);
    const items = data.filter((data) => {
      return data.cargoName.toLowerCase().includes("rejected") || data.ref.toLowerCase().includes("rejected") || data.status.toLowerCase().includes("rejected")
    })

    setSearch(items);
  }

  const handleAll = event => {
    setAnchorEl(null);
    const items = data.filter((data) => {
      return data.cargoName.toLowerCase().includes(" ") || data.ref.toLowerCase().includes(" ") || data.status.toLowerCase().includes(" ")
    })

    setSearch(items);
  }

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <div style={{ width: '100%' }}>
          <Box display="flex" p={1}>
            <Box p={1} flexGrow={1}>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <TextField
                    onChange={handleSearch}
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
                  />
                </Grid>
                <Grid item >
                  <FilterButton variant="contained" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
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
                    <MenuItem onClick={handleTransit}>In Transit</MenuItem>
                    <MenuItem onClick={handlePending}>Pending</MenuItem>
                    <MenuItem onClick={handleRejected}>Rejected</MenuItem>
                  </Menu>
                </Grid>
              </Grid>
            </Box>
            <Box p={1}>
              <NewBookingChoiceDialog />
            </Box>

            </Box>
          </div>
      </CardContent>
      <PerfectScrollbar>
        <Box minWidth={800}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Reference No.
                </TableCell>
                <TableCell>
                  Cargo Name
                </TableCell>
                <TableCell sortDirection="desc">
                  <Tooltip
                    enterDelay={300}
                    title="Sort"
                  >
                    <TableSortLabel
                      active
                      direction="desc"
                    >
                      Booking Date
                    </TableSortLabel>
                  </Tooltip>
                </TableCell>
                <TableCell>
                  Bill of Lading
                </TableCell>
                <TableCell>
                  Status
                </TableCell>
                <TableCell>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {search.slice(page * limit, page * limit + limit).map((order) => (

                <TableRow
                  hover
                  key={order.id}
                >
                  <TableCell>
                    {order.ref}
                  </TableCell>
                  <TableCell>
                    {order.cargoName}
                  </TableCell>
                  <TableCell>
                    {moment(order.createdAt).format('DD/MM/YYYY')}
                  </TableCell>
                  <TableCell>
                    <Button style={{ textTransform: 'none'}}>
                      Download
                    </Button>
                  </TableCell>
                  <TableCell>
                    {order.status === 'Completed' ? (
                      <CompletedChip
                        label={order.status}
                        size="small"
                        variant="outlined"
                      />
                    )
                      : null}
                    {
                      order.status === 'Pending' ? (
                        <PendingChip
                          label={order.status}
                          size="small"
                          variant="outlined"
                        />
                      )
                        : null
                    }
                    {
                      order.status === 'Rejected' ? (
                        <RejectedChip
                          label={order.status}
                          size="small"
                          variant="outlined"
                        />
                      )
                        : null
                    }
                    {
                      order.status === 'In Transit' ? (
                        <TransitChip
                          label={order.status}
                          size="small"
                          variant="outlined"
                        />
                      )
                        : null
                    }
                  </TableCell>


                  <TableCell align="right">
                    {order.status === 'Completed' ? (
                      < ApproveForm />
                    )
                      : null}
                    {order.status == 'Pending' ? (
                      < PendingForm />
                    )
                      : null
                    }
                    {order.status === 'In Transit' ? (
                      <ApproveForm />
                    )
                      : null}
                    {order.status == 'Rejected' ? (
                      < RejectedForm />
                    )
                      : null
                    }
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={orders.length}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

LatestOrders.propTypes = {
  className: PropTypes.string
};

export default LatestOrders;
