import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Search as SearchIcon } from 'react-feather';
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
  Button
} from '@material-ui/core';
import { CompletedChip, PendingChip, UnCompletedChip } from 'src/components/StatusChips';
import getInitials from 'src/utils/getInitials';

const data = [
  {
    ref: '#19525',
    amount: 30.5,
    cargoName: 'Packet Drinks',
    createdAt: 1555016400000,
    currentLocation: 'Singapore',
    destination: 'Malaysia',
    status: 'Pending'
  },
  {
    ref: '#190005',
    amount: 25.1,
    cargoName: 'Packet Drinks',
    createdAt: 1555016400000,
    currentLocation: 'Singapore',
    destination: 'Malaysia',
    status: 'Completed'
  },
  {
    ref: '#19002',
    amount: 10.99,
    cargoName: 'Packet Drinks',
    createdAt: 1554930000000,
    currentLocation: 'Singapore',
    destination: 'Malaysia',
    status: 'Uncompleted'
  },
  {
    ref: '#190005',
    amount: 96.43,
    cargoName: 'Packet Drinks',
    createdAt: 1554757200000,
    currentLocation: 'Singapore',
    destination: 'Malaysia',
    status: 'Pending'
  },
  {
    ref: '#190005',
    amount: 32.54,
    cargoName: 'Packet Drinks',
    createdAt: 1554670800000,
    currentLocation: 'Singapore',
    destination: 'Malaysia',
    status: 'Completed'
  },
  {
    ref: '#190005',
    amount: 16.76,
    cargoName: 'Packet Drinks',
    createdAt: 1554670800000,
    currentLocation: 'Singapore',
    destination: 'Malaysia',
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

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
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
                  <SvgIcon
                    fontSize="small"
                    color="action"
                  >
                    <SearchIcon />
                  </SvgIcon>
                </Grid>
                <Grid item >
                  <TextField id="input-with-icon-grid" label="Search for all columns" />
                </Grid>
              </Grid>
            </Box>
            <Box p={1}>
              <Button variant="outlined" color="primary">
                Transfer
                </Button>
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
              {orders.slice(page * limit, page * limit + limit).map((order) => (
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
                      order.status === 'Uncompleted' ? (
                        <UnCompletedChip
                          label={order.status}
                          size="small"
                          variant="outlined"
                        />
                      )
                        : null
                    }
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
