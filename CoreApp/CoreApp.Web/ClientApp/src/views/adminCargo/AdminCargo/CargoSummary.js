import React, { useState } from 'react';
import clsx from 'clsx';
//import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { ViewAgenda } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import Popup from 'src/components/Popup';
import AdminApprovedForm from 'src/views/adminViewBooking/AdminViewBooking/AdminApprovedForm';
import AdminRejectedForm from 'src/views/adminViewBooking/AdminViewBooking/AdminRejectedForm';
import AdminPendingForm from 'src/views/adminViewBooking/AdminViewBooking/AdminPendingForm';

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
  TextField,
  colors
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import {
  Search as SearchIcon,
  Filter as FilterIcon
} from 'react-feather';

import { FilterButton } from 'src/components/Buttons';

import { ApprovedChip, PendingChip, RejectedChip, TransitChip } from 'src/components/StatusChips';

const data = [
  {
    email: 'hyperx66@gmail.com',
    cargoID: '#19525',
    cargoName: 'Packet Drinks',
    currentLocation: '-',
    destination: 'Warehouse B',
    status: 'Pending'
  },
  {
    email: 'dummy@gmail.com',
    cargoID: '#19000',
    cargoName: 'Packet Drinks',
    currentLocation: 'Warehouse A',
    destination: '-',
    status: 'Approved'
  },
  {
    email: 'dummy@gmail.com',
    cargoID: '#19000',
    cargoName: 'Packet Drinks',
    currentLocation: '-',
    destination: 'Warehouse C',
    status: 'Rejected'
  },
  {
    email: 'dummy@gmail.com',
    cargoID: '#19000',
    cargoName: 'Packet Drinks',
    currentLocation: '-',
    destination: 'Warehouse A',
    status: 'In Transit'
  },
  {
    email: 'test1@gmail.com',
    cargoID: '#19100',
    cargoName: 'Packet Drinks',
    currentLocation: 'Warehouse C',
    destination: 'Warehouse D',
    status: 'Approved'
  },
  {
    email: 'test2@gmail.com',
    cargoID: '#19200',
    cargoName: 'Packet Drinks',
    currentLocation: 'Warehouse D',
    destination: 'Warehouse A',
    status: 'In Transit'
  },
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

//in progress
const headers = [
  { name: "Email", field: "email", sortable: true },
  { name: "RefNo", field: "cargoID", sortable: false },
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

const CargoSummary = ({ className, ...rest }) => {
  const classes = useStyles();
  const [views] = useState(data);
  const [search, setSearch] = useState(data);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);
  const [sorting, setSorting] = useState({ field: "", order: "" }); //sort
  const [open, setOpen] = React.useState(false);
  const [openPopup, setOpenPopup] = useState(false);


  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleLimitChange = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  //email, cargo ID, cargo name, status
  const handleSearch = event => {
    const items = views.filter((data) => {
      return data.cargoName.toLowerCase().includes(event.target.value.toLowerCase()) || data.email.toLowerCase().includes(event.target.value.toLowerCase()) || data.cargoID.toLowerCase().includes(event.target.value.toLowerCase()) || data.status.toLowerCase().includes(event.target.value.toLowerCase())
    })

    setSearch(items);
  }

  //sorting
  if (sorting.field) {
    const reversed = sorting.order === "asc" ? 1 : -1;
    CargoSummary = CargoSummary.sort(
      (a, b) => reversed * a[sorting.field].localeCompare(b[sorting.field])
    );
  }

  return (
    <>
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >

      <CardHeader title="Cargo Summary" />
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
              <TextField
                id="input-with-icon-grid"
                label="Search for all columns"
                onChange={handleSearch}
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

      <Divider />
      <PerfectScrollbar>
        <Box minWidth={950}>
          <Table>
            <TableHead headers={headers} onSorting={(field, order) => setSorting({field, order}) }>
              <TableRow>
                <TableCell>
                  Email
                 </TableCell>
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
                  <TableCell>
                  </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {search.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((view) => (
                <TableRow
                  hover
                  key={view.id}
                >
                  <TableCell>
                    {view.email}
                  </TableCell>
                  <TableCell>
                    {view.cargoID}
                  </TableCell>
                  <TableCell>
                    {view.cargoName}
                  </TableCell>
                  <TableCell>
                    {view.currentLocation}
                  </TableCell>
                  <TableCell>
                    {view.destination}
                  </TableCell>
                  <TableCell>
                    {view.status === 'Approved' ? (
                      <ApprovedChip
                        label={view.status}
                        size="small"
                        variant="outlined"
                      />
                    )
                      : null}
                    {
                      view.status === 'Pending' ? (
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
                        <RejectedChip
                          label={view.status}
                          size="small"
                          variant="outlined"
                        />
                      )
                        : null
                    }
                    {
                      view.status === 'In Transit' ? (
                        <TransitChip
                          label={view.status}
                          size="small"
                          variant="outlined"
                        />
                      )
                        : null
                    }
                  </TableCell>
                  <TableCell>
                    {view.status === 'Approved' ? (
                      <AdminApprovedForm />
                    )
                      : null}

                    {view.status === 'Pending' ? (
                      <AdminPendingForm />
                    )
                      : null}

                    {view.status === 'In Transit' ? (
                      <AdminApprovedForm />
                    )
                      : null}

                    {view.status === 'Rejected' ? (
                      <AdminRejectedForm />
                    )
                      : null}
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
    </>
  );
};

CargoSummary.propTypes = {
  className: PropTypes.string
};

export default CargoSummary;
