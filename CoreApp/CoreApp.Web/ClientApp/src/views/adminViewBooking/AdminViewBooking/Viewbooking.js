import React, { useState } from 'react';
import clsx from 'clsx';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { ViewAgenda } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import Popup from 'src/components/Popup';
import AdminApprovedForm from 'src/views/adminViewBooking/AdminViewBooking/AdminApprovedForm';
import AdminRejectedForm from 'src/views/adminViewBooking/AdminViewBooking/AdminRejectedForm';
import AdminPendingForm from 'src/views/adminViewBooking/AdminViewBooking/AdminPendingForm';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';


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
import {
  Search as SearchIcon,
  Filter as FilterIcon
} from 'react-feather';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { ApprovedChip, PendingChip, RejectedChip, TransitChip } from 'src/components/StatusChips';
import { FilterButton } from 'src/components/Buttons';

const data = [
  {
    email: 'hyperx66@gmail.com',
    refNo: '#19525',
    cargoName: 'Packet Drinks',
    createdAt: 1603000800000,
    download: 'Download',
    status: 'Pending'
  },
  {
    email: 'dummy@gmail.com',
    refNo: '#19000',
    cargoName: 'Packet Drinks',
    createdAt: 1555016400000,
    download: 'Download',
    status: 'Approved'
  },
  {
    email: 'dummy@gmail.com',
    refNo: '#19000',
    cargoName: 'Packet Drinks',
    createdAt: 1555016400000,
    download: 'Download',
    status: 'Rejected'
  },
  {
    email: 'dummy@gmail.com',
    refNo: '#19000',
    cargoName: 'Packet Drinks',
    createdAt: 1555016400000,
    download: 'Download',
    status: 'In Transit'
  },
  {
    email: 'test1@gmail.com',
    refNo: '#19100',
    cargoName: 'Packet Drinks',
    createdAt: 1555016400000,
    download: 'Download',
    status: 'Approved'
  },
  {
    email: 'test2@gmail.com',
    refNo: '#19200',
    cargoName: 'Packet Drinks',
    createdAt: 1555016400000,
    download: 'Download',
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

const Viewbooking = ({ className, ...rest }) => {
  const classes = useStyles();
  const [views] = useState(data);
  const [search, setSearch] = useState(data);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);
  const [sorting, setSorting] = useState({ field: "", order: "" }); //sort
  const [open, setOpen] = React.useState(false);
  const [openPopup, setOpenPopup] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  //const handleClose = () => {
    //setOpen(false);
  //};

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleLimitChange = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleApproved = event => {
    setAnchorEl(null);
    const items = views.filter((data) => {
      return data.cargoName.toLowerCase().includes("approved") || data.email.toLowerCase().includes("approved") || data.refNo.toLowerCase().includes("approved") || data.status.toLowerCase().includes("approved")
    })

    setSearch(items);
  }

  const handlePending = event => {
    setAnchorEl(null);
    const items = views.filter((data) => {
      return data.cargoName.toLowerCase().includes("pending") || data.email.toLowerCase().includes("pending") || data.refNo.toLowerCase().includes("pending") || data.status.toLowerCase().includes("pending")
    })

    setSearch(items);
  }

  const handleTransit = event => {
    setAnchorEl(null);
    const items = views.filter((data) => {
      return data.cargoName.toLowerCase().includes("in transit") || data.email.toLowerCase().includes("in transit") || data.refNo.toLowerCase().includes("in transit") || data.status.toLowerCase().includes("in transit")
    })

    setSearch(items);
  }

  const handleRejected = event => {
    setAnchorEl(null);
    const items = views.filter((data) => {
      return data.cargoName.toLowerCase().includes("rejected") || data.email.toLowerCase().includes("rejected") || data.refNo.toLowerCase().includes("rejected") || data.status.toLowerCase().includes("rejected")
    })

    setSearch(items);
  }

  const handleAll = event => {
    setAnchorEl(null);
    const items = views.filter((data) => {
      return data.cargoName.toLowerCase().includes(" ") || data.email.toLowerCase().includes(" ") || data.refNo.toLowerCase().includes(" ") || data.status.toLowerCase().includes(" ")
    })

    setSearch(items);
  }

  //email, ref no, cargo name, status
  const handleSearch = event => {
    const items = views.filter((data) => {
      return data.cargoName.toLowerCase().includes(event.target.value.toLowerCase()) || data.email.toLowerCase().includes(event.target.value.toLowerCase()) || data.refNo.toLowerCase().includes(event.target.value.toLowerCase()) || data.status.toLowerCase().includes(event.target.value.toLowerCase())
    })

    setSearch(items);
  }

  //sorting
  if (sorting.field) {
    const reversed = sorting.order === "asc" ? 1 : -1;
    Viewbooking = Viewbooking.sort(
      (a, b) => reversed * a[sorting.field].localeCompare(b[sorting.field])
    );
  }

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader title="View Booking" />
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
                <MenuItem onClick={handleApproved}>Approved</MenuItem>
                <MenuItem onClick={handleTransit}>In Transit</MenuItem>
                <MenuItem onClick={handlePending}>Pending</MenuItem>
                <MenuItem onClick={handleRejected}>Rejected</MenuItem>
              </Menu>
            </Grid>
        </Grid>
      </Box>

      <Divider />
      <PerfectScrollbar>
        <Box minWidth={800}>
          <Table>
            <TableHead headers={headers}>
              <TableRow>
                <TableCell>
                  Email
                 </TableCell>
                <TableCell>
                  Reference No.
                </TableCell>
                <TableCell>
                  Cargo Name
                </TableCell>
                <TableCell>
                  Date & Time
                </TableCell>
                <TableCell>
                  Bill of Landing
                </TableCell>
                <TableCell>
                    Status
                </TableCell>
                  <TableCell>
                  </TableCell>
              </TableRow>
            </TableHead>
              <TableBody>
                <div>
                </div>
              {search.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((view) => (
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
                    {view.cargoName}
                  </TableCell>
                  <TableCell>
                    {moment(view.createdAt).format('DD/MM/YYYY h:mm a')}
                  </TableCell>
                  <TableCell>
                    <Button style={{ textTransform: 'none' }}>
                      Download
                    </Button>
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

Viewbooking.propTypes = {
  className: PropTypes.string
};

export default Viewbooking;
