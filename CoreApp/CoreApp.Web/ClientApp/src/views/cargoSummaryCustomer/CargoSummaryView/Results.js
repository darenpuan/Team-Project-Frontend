import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import IconButton from '@material-ui/core/IconButton';
import PerfectScrollbar from 'react-perfect-scrollbar';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import CustomerWarehouse from 'src/dialogs/CustomerWarehouseDialog';
import { FilterButton } from 'src/components/Buttons';

import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  makeStyles,
  CardContent,
  Grid,
  SvgIcon,
  TextField,
  InputAdornment,
  Button
} from '@material-ui/core';
import { CompletedChip, PendingChip, RejectedChip } from 'src/components/StatusChips';
import getInitials from 'src/utils/getInitials';
import TransferWarehouseDialog from 'src/dialogs/transferWarehouseDialog'

import {
  Search as SearchIcon,
  Filter as FilterIcon
} from 'react-feather';

const data = [
  {
    ref: '#19525',
    amount: 30.5,
    cargoName: 'Packet Drinks',
    createdAt: 1555016400000,
    currentLocation: 'Warehouse B',
    destination: 'Warehouse A',
    status: 'Pending'
  },
  {
    ref: '#190005',
    amount: 25.1,
    cargoName: 'Packet Drinks',
    createdAt: 1555016400000,
    currentLocation: 'Warehouse A',
    destination: 'Warehouse B',
    status: 'Completed'
  },
  {
    ref: '#19002',
    amount: 10.99,
    cargoName: 'Packet Drinks',
    createdAt: 1554930000000,
    currentLocation: 'Warehouse B',
    destination: 'Warehouse A',
    status: 'Rejected'
  },
  {
    ref: '#190005',
    amount: 96.43,
    cargoName: 'Packet Drinks',
    createdAt: 1554757200000,
    currentLocation: 'Warehouse A',
    destination: 'Warehouse B',
    status: 'Pending'
  },
  {
    ref: '#190005',
    amount: 32.54,
    cargoName: 'Packet Drinks',
    createdAt: 1554670800000,
    currentLocation: 'Warehouse A',
    destination: 'Warehouse B',
    status: 'Completed'
  },
  {
    ref: '#190005',
    amount: 16.76,
    cargoName: 'Packet Drinks',
    createdAt: 1554670800000,
    currentLocation: 'Warehouse B',
    destination: 'Warehouse B',
    status: 'Completed'
  }
];

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

const Results = ({ className, customers, ...rest }) => {
  const classes = useStyles();
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [orders] = useState(data);
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
                  <FilterButton variant="contained">
                    <SvgIcon
                      fontSize="small"
                      color="action"
                    >
                      <FilterIcon className={classes.filterButton} />
                    </SvgIcon>&nbsp;&nbsp;Filter
              </FilterButton>
                </Grid>
              </Grid>
            </Box>
            <Box p={1}>
              <TransferWarehouseDialog/>
            </Box>
          </Box>
        </div>
        </CardContent>
      <PerfectScrollbar>
        <Box minWidth={1050}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Cargo ID
                </TableCell>
                <TableCell>
                  Cargo Name
                </TableCell>
                <TableCell>
                  Current Location
                </TableCell>
                <TableCell>
                  Destination
                </TableCell>
                <TableCell>
                  Status
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
                        <Box
                          alignItems="center"
                          display="flex"
                        >
                          <Typography
                            color="textPrimary"
                            variant="body1"
                          >
                            {order.ref}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>
                      {order.cargoName}
                      </TableCell>
                      <TableCell>
                      {order.currentLocation}
                      </TableCell>
                      <TableCell>
                      {order.destination}
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
                      </TableCell>
                    <TableCell>
                      <CustomerWarehouse /> 
                    </TableCell>
                  </TableRow>
                  ))
                }
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={customers.length}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  orders: PropTypes.array.isRequired
};

export default Results;
