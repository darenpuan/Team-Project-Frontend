import React, { useState } from 'react';
import clsx from 'clsx';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { ViewAgenda } from '@material-ui/icons';
import AddPH from './AddPH';

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

const data = [
  {
    phName: 'New Year 2021',
    startDate: '12/31/2020',
    endDate: '01/01/2021',
    remove: 'Remove'
  },
  {
    phName: 'Christmas Day 2021',
    startDate: '12/25/2021',
    endDate: '12/25/2021',
    remove: 'Remove'
  },
  {
    phName: 'Thanksgiving Day 2021',
    startDate: '10/15/2021',
    endDate: '10/15/2021',
    remove: 'Remove'
  },
  {
    phName: 'Hari Raya Haji 2021',
    startDate: '06/10/2021',
    endDate: '06/10/2021',
    remove: 'Remove'
  },
];

const useStyles = makeStyles(() => ({
  root: {},
  actions: {
    justifyContent: 'flex-end'
  }
}));

//in progress
const headers = [
  { name: "Email", field: "email", sortable: true },
  { name: "RefNo", field: "refNo", sortable: false },
  { name: "CargoName", field: "cargoName", sortable: false },
  { name: "CreatedAt", field: "createAt", sortable: true },
  { name: "Download", field: "download", sortable: false },
  { name: "Status", field: "status", sortable: false }
]

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
              )
            }
          </th>
        ))}
      </tr>
    </thread>
  );
};
//end of sort

const AdminPH = ({ className, ...rest }) => {
  const classes = useStyles();
  const [views] = useState(data);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);
  const [sorting, setSorting] = useState({ field: "", order: "" }); //sort

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleLimitChange = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  //sorting
  if (sorting.field) {
    const reversed = sorting.order === "asc" ? 1 : -1;
    AdminPH = AdminPH.sort(
      (a, b) => reversed * a[sorting.field].localeCompare(b[sorting.field])
    );
  }

  return (
    <>
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >

      <CardHeader title="Public Holidays" />
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
              <AddPH />
            </Box>
          </Box>
        </div>

      <Divider />
        <Box minWidth={800}>
          <Table>
            <TableHead headers={headers} onSorting={(field, order) => setSorting({field, order}) }>
              <TableRow>
                <TableCell>
                  Public Holiday Name
                 </TableCell>
                <TableCell>
                  Start Date
                </TableCell>
                <TableCell>
                  End Date
                </TableCell>
                <TableCell>
                   
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
                    {view.phName}
                  </TableCell>
                  <TableCell>
                    {moment(view.startDate).format('DD/MM/YYYY')}
                  </TableCell>
                  <TableCell>
                    {moment(view.endDate).format('DD/MM/YYYY')}
                  </TableCell>
                  <TableCell>
                    {view.remove}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
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
    </>
  );
};

AdminPH.propTypes = {
  className: PropTypes.string
};

export default AdminPH;
