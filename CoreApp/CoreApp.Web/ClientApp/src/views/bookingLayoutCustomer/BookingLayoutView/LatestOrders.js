import React, { useState } from 'react';
import clsx from 'clsx';
import moment from 'moment';
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { Search as SearchIcon } from 'react-feather';
import NewBookingChoiceDialog from 'src/dialogs/newBookingChoiceDialog'
import {
  Box,
  Card,
  CardContent,
  TextField,
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
  makeStyles
} from '@material-ui/core';

import { CompletedChip, PendingChip, UnCompletedChip } from 'src/components/StatusChips';

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
    ref: '#190005',
    amount: 25.1,
    cargoName: 'Packet Drinks',
    createdAt: 1555016400000,
    status: 'Completed'
  },
  {
    id: uuid(),
    ref: '#19002',
    amount: 10.99,
    cargoName: 'Packet Drinks',
    createdAt: 1554930000000,
    status: 'Uncompleted'
  },
  {
    id: uuid(),
    ref: '#190005',
    amount: 96.43,
    cargoName: 'Packet Drinks',
    createdAt: 1554757200000,
    status: 'Pending'
  },
  {
    id: uuid(),
    ref: '#190005',
    amount: 32.54,
    cargoName: 'Packet Drinks',
    createdAt: 1554670800000,
    status: 'Completed'
  },
  {
    id: uuid(),
    ref: '#190005',
    amount: 16.76,
    cargoName: 'Packet Drinks',
    createdAt: 1554670800000,
    status: 'Completed'
  }
];

const useStyles = makeStyles(() => ({
  root: {},
  actions: {
    justifyContent: 'flex-end'
  }
}));

const LatestOrders = ({ className, ...rest }) => {
  const classes = useStyles();
  const [orders] = useState(data);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

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
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.slice(page * limit, page * limit + limit).map((order) => (

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
                    Download
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