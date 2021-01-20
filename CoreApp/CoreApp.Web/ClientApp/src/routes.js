import React from 'react';
import { Navigate } from 'react-router-dom';

//Uncomment below for customer menu
import DashboardLayoutCustomer from 'src/layouts/DashboardLayoutCustomer';
import DashboardLayoutAdmin from 'src/layouts/DashboardLayoutAdmin';
//import DashboardLayoutStaff from 'src/layouts/DashboardLayoutStaff';

import MainLayout from 'src/layouts/MainLayout';
import LoginView from 'src/views/auth/LoginView';
import NotFoundView from 'src/views/errors/NotFoundView';
import RegisterView from 'src/views/auth/RegisterView';
import RegisterCompany from 'src/views/auth/RegisterCompany';
import RegisterAfter from 'src/views/auth/RegisterAfter';
import AdminViewBooking from 'src/views/adminViewBooking/AdminViewBooking';
import AdminCargo from 'src/views/adminCargo/AdminCargo';
import AdminViewAcc from 'src/views/adminViewAcc/AdminViewAcc';
import AdminSummary from 'src/views/adminSummary/AdminSummary';
import AdminViewOrder from 'src/views/adminViewOrder/AdminViewOrder';
import CustomerBookingView from 'src/views/bookingLayoutCustomer/BookingLayoutView/index.js';
import CustomerCargoView from 'src/views/cargoSummaryCustomer/CargoSummaryView/index.js';
import ProfileCustomer from 'src/views/profile/ProfileCustomer/index.js';
import FreqAskQns from 'src/views/faq/FreqAskQns/index.js';
import AdminViewPH from 'src/views/adminViewPH/AdminViewPH';
import ProfileAdmin from 'src/views/profileAdmin/ProfileAdmin';
import OrderListClient from 'src/views/orderlist/OrderListClient';

const routes = [
  {
    path: 'admin',
    element: <DashboardLayoutAdmin />,
    children: [
      { path: 'adminViewBooking', element: <AdminViewBooking /> },
      { path: 'adminCargo', element: <AdminCargo /> },
      { path: 'adminViewAcc', element: <AdminViewAcc /> },
      { path: 'adminViewPH', element: <AdminViewPH /> },
      { path: 'adminSummary', element: <AdminSummary /> },
      { path: 'adminViewOrder', element: <AdminViewOrder /> },
      { path: 'profileAdmin', element: <ProfileAdmin /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: 'customer',
    element: < DashboardLayoutCustomer />,
    children: [
      { path: 'customerBooking', element: <CustomerBookingView />},
      { path: 'customerCargo', element: <CustomerCargoView />},
      { path: 'orderlist', element: <OrderListClient /> },
      { path: 'faq', element: <FreqAskQns /> },
      { path: 'profileCustomer', element: <ProfileCustomer /> },
      { path: '*', element: <Navigate to="/404" /> }

    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: 'register', element: <RegisterView /> },
      { path: 'registerCompany', element: <RegisterCompany /> },
      { path: 'registerAfter', element: <RegisterAfter /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/login" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
