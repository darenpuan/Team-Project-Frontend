import React from 'react';
import { Navigate } from 'react-router-dom';

//Uncomment below for admin menu
import DashboardLayout from 'src/layouts/DashboardLayoutCustomer';

//Uncomment below for admin menu
//import DashboardLayout from 'src/layouts/DashboardLayoutAdmin';

//Uncomment below for admin menu
//import DashboardLayout from 'src/layouts/DashboardLayoutStaff';

import MainLayout from 'src/layouts/MainLayout';
import AccountView from 'src/views/account/AccountView';
import CustomerListView from 'src/views/customer/CustomerListView';
import Dashboard from 'src/views/home/Dashboard';
import LoginView from 'src/views/auth/LoginView';
import NotFoundView from 'src/views/errors/NotFoundView';
import ProductListView from 'src/views/product/ProductListView';
import RegisterView from 'src/views/auth/RegisterView';
import SettingsView from 'src/views/settings/SettingsView';
import AnalyticsView from 'src/views/analytics/AnalyticsView';
import DashboardView from 'src/views/dashboardView/DashboardView';
import AdminViewBooking from 'src/views/admin/AdminViewBooking';
import AdminCargo from 'src/views/admin2/AdminCargo';
import AdminViewAcc from 'src/views/admin3/AdminViewAcc';
import AdminSummary from 'src/views/adminSummary/AdminSummary';
import AdminViewOrder from 'src/views/adminViewOrder/AdminViewOrder';
import CustomerBookingView from 'src/views/bookingLayoutCustomer/BookingLayoutView/index.js';
import CustomerCargoView from 'src/views/cargoSummaryCustomer/CargoSummaryView/index.js';


const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <AccountView /> },
      { path: 'home', element: <Dashboard /> },
      { path: 'customers', element: <CustomerListView /> },
      { path: 'dashboardView', element: <DashboardView /> },
      { path: 'products', element: <ProductListView /> },
      { path: 'settings', element: <SettingsView /> },
      { path: 'analytics', element: <AnalyticsView /> },
      { path: 'admin', element: <AdminViewBooking /> },
      { path: 'admin2', element: <AdminCargo /> },
      { path: 'admin3', element: <AdminViewAcc /> },
      { path: 'adminSummary', element: <AdminSummary /> },
      { path: 'adminViewOrder', element: <AdminViewOrder /> },
      { path: 'customerBooking', element: <CustomerBookingView /> },
      { path: 'customerCargo', element: <CustomerCargoView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: 'register', element: <RegisterView /> },
      { path: '404', element: <NotFoundView /> },

      //Uncomment below for admin menu
      //{ path: '/', element: <Navigate to="/app/analytics" /> },

      //Uncomment below for customer menu
      { path: '/', element: <Navigate to="/app/customerBooking" /> },

      //Uncomment below for staff menu
      //{ path: '/', element: <Navigate to="/app/dashboardView" /> },

      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
