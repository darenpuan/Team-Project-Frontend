using CoreApp.Web.Models;
using System.Collections.Generic;
using CoreApp.Data;
using System;
using System.Linq;

namespace CoreApp.Web.DataAccess
{
    public interface IDataAccessProvider
    {
        void AddRecord(UserModel user);
        void AddBillingRecord(BillingAddressModel data);
        void AddClientRecord(ClientModel data);
        void UpdateRecord(UserModel user);
        UserModel GetSingleRecord(UserModel userData);
        List<UserModel> GetRecords();
        public void Register(RegisterModel Users);
        public void AdminRegister(AdminCreateModel data);
        public void UpdateAccountConfiguration(AccountConfigurationModel User);
        string GetRoleId(); // Bernie
        (int approvedAccount, int pendingAccount, int suspendedAccount) AdminDashboard(); //  Bernie
        public void UpdateEmployeeRecord(Employee User);
        public Employee GetSingleEmployeeRecord(Employee userData);
        //Update UserProfile for customer
        void UpdateProfile(UserProfileModel profile);
        bool sendEmail(string email, string salution, string name, string password);
        (List<UserModel> roleIdList, List<ClientModel> userCompanyInfo) AccountManagementPage();
        //Retrieve Company detail based on userid for customer
        BillingAddressModel GetCompanyDetailByGUID(BillingAddressModel companyData);
       //Update company detail based on userid for customer
        void UpdateCompanyDetail(CompanyModel companyModel);
        void AddBookingDetails(Consignee consignee, Shipper shipper, BookingModel booking, BookingDetailModel bookingDetail);
        int noOfSlotsTaken(TimeSpan timeSelected);
        // Add new Holiday to Database - Bernie
        void AddNewHoliday(NewPublicHoliday NewHoliday);
        // Delete Holiday from database -Bernie
        void DeleteHoliday(Guid NewHoliday);
        //View all holidays in database - Bernie
        List<NewPublicHoliday> ViewAllHolidays();
        UserModel Authenticate(string username, string password);
        public void UpdateBookingformApproval(BookingFormApprovalModel data);

        List<Warehouse> GetAllWarehouses();
        //Retrieve the whole transporter list
        List<Transporter> GetAllTransporter();
        //Retrieve the package type
        List<PackagingType> GetPackageType();
        IQueryable<CargoOperation> GetBookings(string userid);

        BookingFormModel GetBookingFormById(string bookingId);
        List<CargoModel> GetCargoesById(string cargoId);
        SendBookingToWmsModel UpdateBookingPage(BookingFormModel booking);
        SendOrderToWMSModel UpdateOrderPage(OrderFormModel order);

        //Update the booking status to inactive by getting the bookingid
        void deletebookingbyId(string id);

        //Booking Summary for admin
        List<BookingSummaryModel> GetBookingsForAdmin();

        SendBookingToWmsModel SendBookingDataToWMS(BookingFormModel bookingFormModel, Guid bookId);
        //send order data to wms with the json format
        SendOrderToWMSModel SendOrderDataToWMS(OrderFormModel orderFormModel, Guid bookId);
        //Add order form
        void AddOrderDetails(Consignee consignee, Shipper shipper, BookingModel booking);
    }
}
