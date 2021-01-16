import React, { useState } from 'react';
import clsx from 'clsx';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { ViewAgenda } from '@material-ui/icons';

import {
  Box,
  Card,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination,
  makeStyles,
  InputAdornment,
  SvgIcon,
  Grid,
  TextField
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { Search as SearchIcon } from 'react-feather';
import { CompletedChip, PendingChip, UnCompletedChip } from 'src/components/StatusChips';

const data = [
  {
    email: 'hyperx66@gmail.com',
    refNo: '#19525',
    date: 1603000800000,
    status: 'In Progress'
  }
];

const useStyles = makeStyles(() => ({
  root: {},
  actions: {
    justifyContent: 'flex-end'
  }
}));

//sort in progress
const Header = ({ headers, onSorting }) => {
  const [sortingField, setSortingField] = useState("");
  const [sortingOrder, setSortingOrder] = useState("asc");
  const onSortingChange = field => {
    const order = field === sortingField && sortingField === "asc" ? "desc" : "asc";
    setSortingField(field);
    setSortingOrder(order);
    onSorting(field, order);
  }

  return (
    <thread>
      <tr>
        {headers.map(({ name, field, sortable }) => (
          <th key={name}
            onclick={() => sortable ? onSortingChange(field) : null}
          >{name}
            {
              sortingField && sortingField === field && (
                <ViewAgenda icon={sortingOrder === "asc" ? "arrow-down" : "arrow-up"}
                />
              )}
          </th>
        ))}
      </tr>
    </thread>
  );
};
//end of sort

const Viewbooking = ({ className, ...rest }) => {
  const classes = useStyles();
  const [views] = useState(data);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);
  const [sorting, setSorting] = useState({ field: "", order: "" }); //sort

  const headers = [
    { name: "Email", field: "email", sortable: true },
    { name: "RefNo", field: "refNo", sortable: false },
    { name: "Date", field: "date", sortable: true },
    { name: "Time", field: "time", sortable: false },
    { name: "Status", field: "status", sortable: false }
  ]

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleLimitChange = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleCLick = (event) => {
    console.log("Working");
  };

  //sorting
  if (sorting.field) {
    const reversed = sorting.order === "asc" ? 1 : -1;
    Viewbooking = Viewbooking.sort(
      (a, b) => reversed * a[sorting.field].localeCompare(b[sorting.field])
    );
  }

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >

      <CardHeader title="View Order" />
      <Box maxWidth={800} mb={3} ml={1}>
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

      <Divider />
      <PerfectScrollbar>
        <Box minWidth={1050}>
          <Table>
            <TableHead headers={headers} onSorting={(field, order) => setSorting({field, order}) }>
              <TableRow>
                <TableCell>
                  Email
                 </TableCell>
                <TableCell>
                  Order No.
                </TableCell>
                <TableCell>
                  Order Date
                </TableCell>
                <TableCell>
                  Order Time
                </TableCell>
                <TableCell>
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {views.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((view) => (
                <TableRow
                  hover
                  key={view.id}
                >
                  <TableCell>
                    {view.email}
                  </TableCell>
                  <TableCell>
                    {view.refNo}
                  </TableCell>
                  <TableCell>
                    {moment(view.data).format('DD/MM/YYYY')}
                  </TableCell>
                  <TableCell>
                    {moment(view.data).format(' h:mm a')}
                  </TableCell>
                  <TableCell>
                    {view.status === 'Approved' ? (
                      <CompletedChip
                        label={view.status}
                        size="small"
                        variant="outlined"
                      />
                    )
                      : null}
                    {
                      view.status === 'In Progress' ? (
                        <PendingChip
                          label={view.status}
                          size="small"
                          variant="outlined"
                        />
                      )
                        : null
                    }
                    {
                      view.status === 'Rejected' ? (
                        <UnCompletedChip
                          label={view.status}
                          size="small"
                          variant="outlined"
                        />
                      )
                        : null
                    }
                    {
                      view.status === 'In Transit' ? (
                        <UnCompletedChip
                          label={view.status}
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
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={views.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleLimitChange}
      />
    </Card>
  );
};

Viewbooking.propTypes = {
  className: PropTypes.string
};

export default Viewbooking;