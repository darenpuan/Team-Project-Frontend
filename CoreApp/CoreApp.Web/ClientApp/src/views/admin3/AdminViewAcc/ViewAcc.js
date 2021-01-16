import React, { useState } from 'react';
import clsx from 'clsx';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { ViewAgenda } from '@material-ui/icons';
import Controls from "src/components/controls/Controls";
import Popup from 'src/components/Popup';
import AddIcon from '@material-ui/icons/Add';
import AccForm from './AccForm';

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
import { ActiveChip, PendingChip, SuspendedChip } from 'src/components/StatusChips';

const data = [
  {
    user: 'Patrick Newman',
    role: 'Customer',
    email: 'patrick@soft.com',
    phone: '9123 4567',
    company: "Soft Pte Ltd",
    verified: "Email",
    lastLogin: 1603000800000,
    status: 'Pending'
  },
  {
    user: 'Muhammad Ali',
    role: 'Adminstrator',
    email: 'ali@medhub.com',
    phone: '9123 4567',
    company: "Medhub Pte Ltd",
    verified: "Email",
    lastLogin: 1603000800000,
    status: 'Active'
  },
  {
    user: 'Teo Teck Meng, Benjamin',
    role: 'Staff',
    email: 'benjamin@medhub.com',
    phone: '9123 4567',
    company: "Medhub Pte Ltd",
    verified: "Email",
    lastLogin: 1603000800000,
    status: 'Suspended'
  },
  {
    user: 'Saravanan S/O Thirumasan',
    role: 'Customer',
    email: 'thirumasan@infosys.com',
    phone: '9123 4567',
    company: "Infomation Systems Pte Ltd",
    verified: "Email",
    lastLogin: 1603000800000,
    status: 'Pending'
  },
  {
    user: 'Alexander Mc',
    role: 'Customer',
    email: 'alexander@git.com',
    phone: '9123 4567',
    company: "Git Pte Ltd",
    verified: "Email",
    lastLogin: 1603000800000,
    status: 'Active'
  },
  {
    user: 'Brad Pit',
    role: 'Customer',
    email: 'brad@kpmg.com',
    phone: '9123 4567',
    company: "KPMG Pte Ltd",
    verified: "Email",
    lastLogin: 1603000800000,
    status: 'Pending'
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

const ViewAcc = ({ className, ...rest }) => {
  const classes = useStyles();
  const [views] = useState(data);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);
  const [sorting, setSorting] = useState({ field: "", order: "" }); //sort
  const [recordForEdit, setRecordForEdit] = useState(null)
  const [openPopup, setOpenPopup] = useState(false);


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
    ViewAcc = ViewAcc.sort(
      (a, b) => reversed * a[sorting.field].localeCompare(b[sorting.field])
    );
  }

  return (
    <>
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader title="View Account" />
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
          <Controls.Button text="New Account"
            variant="outlined"
            justifyContent="flex-end"
            startIcon={<AddIcon />}
            className={classes.newButton}
            onClick={() => setOpenPopup(true)}
          />
        </Grid>
      </Box>

      <Divider />
      <PerfectScrollbar>
        <Box minWidth={1050}>
          <Table>
            <TableHead headers={headers} onSorting={(field, order) => setSorting({field, order}) }>
              <TableRow>
                <TableCell>
                  User
                 </TableCell>
                <TableCell>
                  Role
                </TableCell>
                <TableCell>
                  Email
                </TableCell>
                <TableCell>
                  Phone
                </TableCell>
                <TableCell>
                  Company
                </TableCell>
                <TableCell>
                  Verified
                </TableCell>
                <TableCell>
                  Last Login
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
                    {view.user}
                  </TableCell>
                  <TableCell>
                    {view.role}
                  </TableCell>
                  <TableCell>
                    {view.email}
                  </TableCell>
                  <TableCell>
                    {view.phone}
                  </TableCell>
                  <TableCell>
                    {view.company}
                  </TableCell>
                  <TableCell>
                    {view.verified}
                  </TableCell>
                  <TableCell>
                    {moment(view.lastLogin).format('DD/MM/YYYY')}
                  </TableCell>
                  <TableCell>
                    {view.status === 'Active' ? (
                      <ActiveChip
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
                      view.status === 'Suspended' ? (
                        <SuspendedChip
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
    <Popup
      title="New Account"
      openPopup = {openPopup}
      setOpenPopup = {setOpenPopup}
    >
      <AccForm />
    </Popup>
    </>
  );
};

ViewAcc.propTypes = {
  className: PropTypes.string
};

export default ViewAcc;

