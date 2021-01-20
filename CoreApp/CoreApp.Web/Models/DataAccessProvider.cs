using CoreApp.Web.Helpers;
using CoreApp.Web.Models;
using Microsoft.Extensions.Options;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using CoreApp.Data;
using System;
using Microsoft.EntityFrameworkCore;

namespace CoreApp.Web.DataAccess
{
    public class DataAccessProvider : IDataAccessProvider
    {
        private readonly PostgreSqlContext _context;
        private readonly CoreDbContext __context;
        private readonly AppSettings appSettings;

        public DataAccessProvider(PostgreSqlContext context, CoreDbContext coreContext, IOptions<AppSettings> appSettings)
        {
            _context = context;
            __context = coreContext;
            this.appSettings = appSettings.Value;
        }


        public void AddRecord(UserModel User)
        {
            _context.Users.Add(User);
            _context.SaveChanges();
        }

        public void AddBillingRecord(BillingAddressModel data)
        {
            _context.BillingAddresses.Add(data);
            _context.SaveChanges();
        }

        public void AddClientRecord(ClientModel data)
        {
            _context.Clients.Add(data);
            _context.SaveChanges();
        }

        public void UpdateRecord(UserModel User)
        {
            
            _context.Users.Update(User);
            _context.SaveChanges();
        }

        public UserModel GetSingleRecord(UserModel userData)
        {
            return _context.Users.FirstOrDefault(t => t.UserId == userData.UserId);
        }

        public Employee GetSingleEmployeeRecord(Employee userData)
        {
            return __context.Employees.FirstOrDefault(t => t.EmployeeId == userData.EmployeeId);
        }

        public void UpdateEmployeeRecord(Employee User)
        {

            __context.Employees.Update(User);
            __context.SaveChanges();
        }

        public List<UserModel> GetRecords()
        {
            return _context.Users.ToList();
        }

        public void Register(RegisterModel data)
        {

            UserModel user = new UserModel();
            BillingAddressModel billing = new BillingAddressModel();
            ClientModel client = new ClientModel();
            user.UserId = Guid.NewGuid();
            user.RoleId = 1;
            user.Password = "qwerty";
            user.Salutation = data.Salutation;
            user.FirstName = data.FirstName;
            user.LastName = data.LastName;
            user.ContactNumber = data.ContactNumber;
            user.OfficeNumber = data.OfficeNumber;
            user.Email = data.Email;
            user.IsActive = true;
            user.IsApproved = false;
            user.IsFirstLogin = true;
            user.CreatedBy = "qwerty";
            user.CreatedDate = DateTime.Now;
            billing.BillingId = user.UserId;
            billing.BillingFName = data.FirstName;
            billing.BillingLName = data.LastName;
            billing.BillingCompanyName = data.CompanyName;
            billing.BillingNickname = data.Address;
            billing.BillingAddressStreet = data.Street;
            billing.BillingAddressApartment = data.Apartment;
            billing.BillingAddressTown = data.Town;
            billing.BillingCountry = data.Country;
            billing.BillingAddressPostalcode = data.PostalCode;
            billing.BillingAddressPhone = Int16.Parse(data.ContactNumber);
            billing.BillingAddressEmail = data.Email;
            billing.CreatedDate = DateTime.Now;
            billing.CreatedBy = "john";
            billing.IsActive = true;
            client.ClientId = user.UserId;
            client.CompanyName = data.CompanyName;
            client.CompanyAddress = data.Address;
            client.IsActive = true;
            client.CreatedDate = DateTime.Now;
            client.CreatedBy = "john";
            _context.Users.Add(user);
            _context.SaveChanges();
            _context.BillingAddresses.Add(billing);
            _context.Clients.Add(client);
            _context.SaveChanges();
        }

        public void AdminRegister(AdminCreateModel data)
        {

            UserModel user = new UserModel();
            EmployeeModel emp = new EmployeeModel();
            user.UserId = Guid.NewGuid();
            user.Password = "qwerty";
            user.Salutation = data.Salutation;
            user.FirstName = data.FirstName;
            user.LastName = data.LastName;
            user.ContactNumber = data.ContactNumber;
            user.OfficeNumber = data.OfficeNumber;
            user.Email = data.Email;
            user.IsActive = true;
            user.IsApproved = false;
            user.IsFirstLogin = true;
            user.CreatedBy = "qwerty";
            user.CreatedDate = DateTime.Now;
            emp.EmployeeId = user.UserId;
            emp.PassNum = "qwerty";
            emp.CreatedDate = DateTime.Now;
            emp.CreatedBy = "john";
            emp.IsActive = true;
            emp.DepartmentId = 1;
            emp.IsActive = true;
            emp.CreatedBy = "qwerty";
            emp.CreatedDate = DateTime.Now;
            if (data.AccountType == "Admin")
            {
                user.RoleId = 1;
            }
            else
            {
                user.RoleId = 3;
            }
            if (data.Department == "BookingSystem")
            {
                emp.DepartmentId = 1;
            }
            else if (data.Department == "WorkFlow")
            {
                emp.DepartmentId = 2;
            }
            else
            {
                emp.DepartmentId = 3;
            }
            _context.Users.Add(user);
            _context.SaveChanges();
            _context.Employees.Add(emp);
            _context.SaveChanges();
        }
        
        //admin account configuration 
        public void UpdateAccountConfiguration(AccountConfigurationModel data)
        {
            User user = new User();
            if (data.AccountType == "Admin")
            {
                user.Role.RoleId = 1;
            }
            else if (data.AccountType == "Client")
            {
                user.Role.RoleId = 2;
            }
            else
            {
                user.Role.RoleId = 3;
            }
            if (data.AccountStatus == "Approved")
            {
                user.IsApproved = true;
                user.IsActive = true;

            }
            else if (data.AccountStatus == "Pending")
            {
                user.IsApproved = false;
                user.IsActive = true;
            }
            else
            {
                user.IsActive = false;
            }

            __context.Users.Update(user);
            __context.SaveChanges();
        }

        //bernie
        public string GetRoleId() //need to take in Guid and check if GUID is valid
        {
            string ToReturnVal = "";
            List<UserModel> roleIdList = new List<UserModel>();
            roleIdList = _context.Users.ToList();
            for (int i = 0; i < roleIdList.Count; i++)
            {
                UserModel row = roleIdList[i];
                ToReturnVal += "RoleId : " + row.UserId.ToString() + ";";
            }
            return ToReturnVal;
        }

        //bernie
        public (int approvedAccount, int pendingAccount, int suspendedAccount) AdminDashboard() // to calculate total approved/pending/suspended account
        {
            var approvedAccount = _context.Users
                .Where(o => o.IsApproved == true)//Counting approved account
                .Count();
            var pendingAccount = _context.Users
                .Where(o => o.IsApproved == false && o.IsActive == true)// Counting not approved/pending account
                .Count();
            var suspendedAccount = _context.Users
                .Where(o => o.IsActive == false)// Counting suspended account
                .Count();
            return (approvedAccount, pendingAccount, suspendedAccount);

        }

        //Retrieve User Profile Data based on UserId
        public UserModel GetUserProfileDetailByGUID(UserModel userData)
        {
            return _context.Users.FirstOrDefault(x => x.UserId == userData.UserId);

        }
        //Update User Profile for customer
        public void UpdateProfile(UserProfileModel profile)
        {
            var fullProfile = _context.Users.FirstOrDefault(x => x.UserId == profile.UserId);
            fullProfile.Salutation = profile.Salutation;
            fullProfile.FirstName = profile.FirstName;
            fullProfile.LastName = profile.LastName;
            fullProfile.ContactNumber = profile.ContactNumber;
            fullProfile.OfficeNumber = profile.OfficeNumber;
            fullProfile.Email = profile.Email;

            _context.Update(fullProfile);
            _context.SaveChanges();
        }

        public bool sendEmail(string email, string salution, string name, string password)
        {
            bool isSend = false;
            try
            {
                MailMessage mail = new MailMessage();
                SmtpClient SmtpServer = new SmtpClient(appSettings.smtp.SMTPServer);

                mail.From = new MailAddress(appSettings.smtp.FromEmail);
                mail.To.Add(email);
                mail.Subject = "Success Confirm Email";
                mail.Body = "<html Content-Type: multipart/mixed;>Hi " + salution + " " + name
                           + ", <br><br>Your account is now verified and you can place orders for shipping now  <br><br> Your password is: "
                           + password + " <br><br> Please change your password on your first login. <br><br> Hope you'll enjoy the experience, we're here if you have any questions, drop us a line at help@cloudplus.com </html>";
                mail.BodyEncoding = System.Text.Encoding.UTF8;
                mail.IsBodyHtml = true;

                SmtpServer.Port = appSettings.smtp.SMTPPort;
                SmtpServer.UseDefaultCredentials = true;
                SmtpServer.Credentials = new System.Net.NetworkCredential(appSettings.smtp.FromEmail, appSettings.smtp.password);
                SmtpServer.EnableSsl = true;
                SmtpServer.Send(mail);
                isSend = true;
            }
            catch
            {
                isSend = false;
            }

            return isSend;
           
        }

        public (List<UserModel> roleIdList, List<ClientModel> userCompanyInfo) AccountManagementPage() //list out all the details in AccountManagementPage.
        {
            List<UserModel> roleIdList = new List<UserModel>();
            List<ClientModel> userCompanyInfo = new List<ClientModel>();
            roleIdList = _context.Users.ToList();
            userCompanyInfo = _context.Clients.ToList();
            return (roleIdList, userCompanyInfo);
        }

        //Retrieve Company Data based on UserId
        public BillingAddressModel GetCompanyDetailByGUID(BillingAddressModel companyData)
        {
            return _context.BillingAddresses.FirstOrDefault(x => x.BillingId == companyData.BillingId);

        }

        //Update Company Data based on UserId
        public void UpdateCompanyDetail(CompanyModel companyModel)
        {
            var fullBillingDetail = _context.BillingAddresses.FirstOrDefault(x => x.BillingId == companyModel.BillingId);
            fullBillingDetail.BillingCompanyName = companyModel.BillingCompanyName;
            fullBillingDetail.BillingNickname = companyModel.BillingNickname;
            fullBillingDetail.BillingAddressStreet = companyModel.BillingAddressStreet;
            fullBillingDetail.BillingAddressApartment = companyModel.BillingAddressApartment;
            fullBillingDetail.BillingAddressTown = companyModel.BillingAddressTown;
            fullBillingDetail.BillingCountry = companyModel.BillingCountry;
            fullBillingDetail.BillingAddressPostalcode = companyModel.BillingAddressPostalcode;

            _context.Update(fullBillingDetail);
            _context.SaveChanges();
        }
        //Create New Booking
        public void AddBookingDetails(Consignee consignee, Shipper shipper, BookingModel booking, BookingDetailModel bookingDetail)
        {
            _context.AddRange(consignee,shipper,booking,bookingDetail);
            _context.SaveChanges();
        }
        //Retrieve the list of warehouse to display on frontend receiving dropdown list
        public List<Warehouse> GetAllWarehouses()
        {
            return __context.Warehouses.Where(x => x.IsAvailable == true && x.IsActive == true).ToList();

        }

        //Retrieve the list of Transporter to display on frontend receiving dropdown list
        public List<Transporter> GetAllTransporter()
        {
            return __context.Transporters.Where(x => x.IsActive == true).ToList();

        }
        //Retrieve the list of packageType to display on frontend receiving dropdown list
        public List<PackagingType> GetPackageType()
        {
            return __context.PackagingTypes.Where(x => x.IsActive == true).ToList();

        }

        //Get Booking form 
        public BookingFormModel GetBookingFormById(string bookingId)
        {
            var bookingDetails = (from bd in __context.BookingDetails
                                  join b in __context.Bookings on bd.BookingDetailId equals b.BookingId
                                  join con in __context.Consignees on b.Consignee.ConsigneeId equals con.ConsigneeId
                                  join ship in __context.Shippers on b.Shipper.ShipperId equals ship.ShipperId
                                  join task in __context.Tasks on b.BookingId equals task.Booking.BookingId
                                  join oper in __context.Operations on task.TaskId equals oper.OperationId
                                  join cO in __context.CargoOperations on oper.OperationId equals cO.Operation.OperationId
                                  join c in __context.Cargoes on cO.Cargo.CargoId equals c.CargoId
                                  join cd in __context.CargoDetails on c.CargoDetail.CargoDetailId equals cd.CargoDetailId
                                  join pack in __context.PackagingTypes on c.PackagingType.PackagingTypeId equals pack.PackagingTypeId
                                  join trans in __context.Transporters on oper.User.UserId equals trans.TransporterId
                                  join loc in __context.Locations on c.Location.LocationId equals loc.LocationId
                                  join layobj in __context.LayoutObjects on loc.LocationId equals layobj.LayoutObjId
                                  join layo in __context.Layouts on layobj.Layout.LayoutId equals layo.LayoutId
                                  join mod in __context.Modules on layo.Module.ModuleId equals mod.Layout.LayoutId
                                  join ware in __context.Warehouses on mod.Warehouse.WarehouseId equals ware.WarehouseId
                                  where b.BookingId.ToString() == bookingId
                                  select new BookingFormModel
                                  {
                                      BookingId = b.BookingId,
                                      BookingDate = bd.BookingDate,
                                      BookingTime = bd.BookingTime,
                                      BillOfLading = bd.BillOfLading,
                                      ExportDeclarationNumber = bd.ExportDeclarationNumber,
                                      WarehouseId = ware.WarehouseId,
                                      ClientId = b.Client.ClientId,
                                      ReceivingWarehouse = ware.DisplayValue,
                                      ShipperName = ship.Name,
                                      ShipperAddress1 = ship.Address1,
                                      ShipperAddress2 = ship.Address2,
                                      ShipperContactNo = ship.Contact1,
                                      ShipperEmail = ship.Email,
                                      ConsigneeName = con.Name,
                                      ConsigneeAddress1 = con.Address1,
                                      ConsigneeAddress2 = con.Address2,
                                      ConsigneeContactNo = con.ContactNumber,
                                      ConsigneeEmail = con.Email,
                                      BookingType = bd.BookingType,
                                      VoyageDetails = bd.VoyageDetails,
                                      CountryOrigin = bd.CountryOrigin,
                                      CountryFinalDestination = bd.CountryFinalDestination,
                                      PortOfLoading = bd.PortLoading,
                                      PortOfDischarge = bd.PortDischarge,
                                      DateDeparture = bd.DateDeparture,
                                      FinalDestination = bd.FinalDestination,
                                      CargoId = c.CargoId,
                                      CargoName = cd.CargoName,
                                      MarkAndNumber = cd.MarksAndNumbers,
                                      Weight = bd.DeclaredWeight,
                                      PackageTypeId = pack.PackagingTypeId,
                                      PackageType = pack.DisplayValue,
                                      Length = bd.DeclaredLength,
                                      Width = bd.DeclaredWidth,
                                      Height = bd.DeclaredHeight,
                                      IsHazard = cd.IsHazard,
                                      TransporterId = trans.TransporterId,
                                      TransporterCompany = trans.Company,
                                      Remarks = cd.Remarks
                                  }).FirstOrDefault();


            return bookingDetails;


        }

        public List<CargoModel> GetCargoesById(string cargoId)
        {
            var cargoInfo = (from c in __context.Cargoes
                             join cd in __context.CargoDetails on c.CargoDetail.CargoDetailId equals cd.CargoDetailId
                             join pack in __context.PackagingTypes on c.PackagingType.PackagingTypeId equals pack.PackagingTypeId
                             join ic in __context.ItemCargoes on c.CargoId equals ic.Cargo.CargoId
                             join item in __context.Items on ic.Item.ItemId equals item.ItemId
                             join unit in __context.Units on item.Unit.UnitId equals unit.UnitId
                             join icat in __context.ItemCategories on unit.ItemCategory.ItemCategoryId equals icat.ItemCategoryId
                             where c.CargoId.ToString() == cargoId
                             select new CargoModel
                             {
                                 ItemType = icat.Type,
                                 Category = icat.DisplayValue,
                                 ItemName = unit.ItemName,
                                 Batch = item.Batch,
                                 Quantity = ic.Quantity,
                                 ExpiryDate = item.Expiry
                             }).ToList();

            return cargoInfo;
        }
        public Booking getAllBookingDetail(string bookingId)
        {
            return __context.Bookings
                .Include(bo => bo.BookingDetail)
                .Include(bo => bo.Shipper).Include(bo => bo.Consignee).FirstOrDefault(co => co.BookingId.ToString() == bookingId);
        }
        //Update the booking table and return the json sending to wms
        public SendBookingToWmsModel UpdateBookingPage(BookingFormModel booking)
        {
            Booking getbooking = new Booking();
            getbooking = getAllBookingDetail(booking.BookingId.ToString());
            getbooking.BookingDetail.BookingDate = booking.BookingDate;
            getbooking.BookingDetail.BookingTime = booking.BookingTime;
            getbooking.BookingDetail.BillOfLading = booking.BillOfLading;
            getbooking.BookingDetail.ExportDeclarationNumber = booking.ExportDeclarationNumber;
            getbooking.UpdatedDate = DateTime.Now;
            getbooking.Shipper.Name = booking.ShipperName;
            getbooking.Shipper.Address1 = booking.ShipperAddress1;
            getbooking.Shipper.Address2 = booking.ShipperAddress2;
            getbooking.Shipper.Contact1 = booking.ShipperContactNo;
            getbooking.Shipper.Email = booking.ShipperEmail;
            getbooking.Shipper.UpdatedDate = DateTime.Now;
            getbooking.Consignee.Name = booking.ConsigneeName;
            getbooking.Consignee.Address1 = booking.ConsigneeAddress1;
            getbooking.Consignee.Address2 = booking.ConsigneeAddress2;
            getbooking.Consignee.ContactNumber = booking.ConsigneeContactNo;
            getbooking.Consignee.Email = booking.ConsigneeEmail;
            getbooking.Consignee.UpdatedDate = DateTime.Now;
            getbooking.BookingDetail.BookingType = booking.BookingType;
            getbooking.BookingDetail.VoyageDetails = booking.VoyageDetails;
            getbooking.BookingDetail.CountryOrigin = booking.CountryOrigin;
            getbooking.BookingDetail.CountryFinalDestination = booking.CountryFinalDestination;
            getbooking.BookingDetail.PortLoading = booking.PortOfLoading;
            getbooking.BookingDetail.PortDischarge = booking.PortOfDischarge;
            getbooking.BookingDetail.DateDeparture = booking.DateDeparture;
            getbooking.BookingDetail.FinalDestination = booking.FinalDestination;
            getbooking.BookingDetail.DeclaredWeight = booking.Weight;
            getbooking.BookingDetail.DeclaredWidth = booking.Width;
            getbooking.BookingDetail.DeclaredLength = booking.Length;
            getbooking.BookingDetail.DeclaredHeight = booking.Height;
            getbooking.BookingDetail.UpdatedDate = DateTime.Now;

            __context.Update(getbooking);
            __context.SaveChanges();
            SendBookingToWmsModel sendDataToWMSModel = new SendBookingToWmsModel();
            sendDataToWMSModel = SendBookingDataToWMS(booking, booking.BookingId);
            return sendDataToWMSModel;
        }
        //Get Booking Summary for Customer
        public IQueryable<CargoOperation> GetBookings(string userId)
        {
            return __context.CargoOperations
              .Include(co => co.Cargo)
                 .ThenInclude(c => c.CargoDetail)
              .Include(co => co.Operation)
                 .ThenInclude(co => co.Task)
                    .ThenInclude(t => t.Booking)
                         .ThenInclude(b => b.BookingDetail).Where(b => b.Operation.Task.Booking.IsActive == true && b.Operation.Task.Booking.Client.ClientId.ToString() == userId);

        }
        //Get Booking Summary For admin
        public List<BookingSummaryModel> GetBookingsForAdmin()
        {
            var bookingDetails = (from bd in __context.BookingDetails
                                  join b in __context.Bookings on bd.BookingDetailId equals b.BookingId
                                  join task in __context.Tasks on b.BookingId equals task.Booking.BookingId
                                  join oper in __context.Operations on task.TaskId equals oper.OperationId
                                  join cO in __context.CargoOperations on oper.OperationId equals cO.Operation.OperationId
                                  join c in __context.Cargoes on cO.Cargo.CargoId equals c.CargoId
                                  join cd in __context.CargoDetails on c.CargoDetail.CargoDetailId equals cd.CargoDetailId
                                  join u in __context.Users on b.Client.ClientId equals u.UserId
                                  select new BookingSummaryModel
                                  {
                                      Email = u.Email,
                                      ReferenceNo = b.BookingId,
                                      CargoName = cd.CargoName,
                                      BookingDate = bd.BookingDate,
                                      BookingTime = bd.BookingTime,
                                      BookingStatus = bd.BookingStatus
                                  }).ToList();

            return bookingDetails;


        }
        //Update the booking status to inactive by getting the bookingid
        public void deletebookingbyId(string id)
        {
            var fullBookingDetail = __context.BookingDetails.Include(bo => bo.Booking).FirstOrDefault(bo => bo.BookingDetailId.ToString() == id);
            //set booking to inactive
            fullBookingDetail.Booking.IsActive = false;
            fullBookingDetail.IsActive = false;
            fullBookingDetail.BookingStatus = "Rejected";
            fullBookingDetail.Booking.UpdatedDate = DateTime.Now;
            fullBookingDetail.UpdatedDate = DateTime.Now;
            __context.Update(fullBookingDetail);
            __context.SaveChanges();

        }

        //Get the number of slot taken
        public int noOfSlotsTaken(TimeSpan timeSelected)
        {
            DateTime today = DateTime.Today;
            var count = _context.BookingDetails
            .Where((o => o.BookingTime.ToString() == timeSelected.ToString() && o.CreatedDate >= today))
            .Count();

            return count;
        }

        public void AddNewHoliday(NewPublicHoliday NewHoliday) // Add new holiday
        {
            _context.PublicHolidays.Add(NewHoliday);
            _context.SaveChanges();

        }

        public void DeleteHoliday(Guid DeleteHoliday)
        {
 
            var ToDelete = _context.PublicHolidays.FirstOrDefault(x => x.PublicHolidayId == DeleteHoliday); // Go through database to find Guid
            _context.Remove(ToDelete); // Delete Guid
            _context.SaveChanges(); // Save Changes to Database

        }

        public List<NewPublicHoliday> ViewAllHolidays()
        {
            return _context.PublicHolidays.ToList(); // List all rows in Holidays database

        }


        public UserModel Authenticate(string email, string password)
        {
            UserModel user = _context.Users.FirstOrDefault(x => x.Email == email && x.Password == password);
            if(password == user.Password)
            {
                return user;
            }
            else
            {
                return null;
            }
        }

        public void UpdateBookingformApproval(BookingFormApprovalModel data)
        {
            var BookingDetails = _context.BookingDetails.FirstOrDefault(x => x.BookingDetailId == data.BookingId);
            BookingDetails.BookingStatus = data.BookingStatus;


            _context.Update(BookingDetails);
            _context.SaveChanges();
        }
        //Get the JSON to send to WMS
        public SendBookingToWmsModel SendBookingDataToWMS(BookingFormModel bookingFormModel, Guid bookId)
        {
            SendBookingToWmsModel sendBookingToWMS = new SendBookingToWmsModel();
            sendBookingToWMS.BookingDetailId = bookId;
            sendBookingToWMS.BookingId = bookId;
            sendBookingToWMS.ReceivingWareHouseId = bookingFormModel.WarehouseId;
            CargoInfoModel cargoInfo = new CargoInfoModel();
            if (bookingFormModel.BookingType == "Import")
            {
                cargoInfo.isImport = true;
            }
            else
            {
                cargoInfo.isImport = false;
            }
            cargoInfo.CountryOrigin = bookingFormModel.CountryOrigin;
            cargoInfo.CountryFinalDestination = bookingFormModel.CountryFinalDestination;
            cargoInfo.PortOfLoading = bookingFormModel.PortOfLoading;
            cargoInfo.PortOfDischarge = bookingFormModel.PortOfDischarge;
            cargoInfo.DateDeparture = bookingFormModel.DateDeparture;
            cargoInfo.FinalDestination = bookingFormModel.FinalDestination;
            cargoInfo.CargoName = bookingFormModel.CargoName;
            cargoInfo.MarkAndNumber = bookingFormModel.MarkAndNumber;
            cargoInfo.Weight = bookingFormModel.Weight;
            cargoInfo.PackageType = bookingFormModel.PackageTypeId;
            cargoInfo.MeasureLength = bookingFormModel.Length;
            cargoInfo.MeasureHeight = bookingFormModel.Height;
            cargoInfo.MeasureWidth = bookingFormModel.Width;
            cargoInfo.Hazardous = bookingFormModel.IsHazard;
            cargoInfo.RequiredTransportation = bookingFormModel.RequiredTransportation;
            cargoInfo.Transporter = bookingFormModel.TransporterId;
            cargoInfo.Remarks = bookingFormModel.Remarks;
            sendBookingToWMS.CargoInfo = cargoInfo;
            sendBookingToWMS.CargoInfo.CargoItems = bookingFormModel.cargoItems;
            return sendBookingToWMS;
        }

        public SendOrderToWMSModel SendOrderDataToWMS(OrderFormModel orderFormModel, Guid bookId)
        {
            SendOrderToWMSModel sendOrderToWms = new SendOrderToWMSModel();
            OrderInfoModel orderInfo = new OrderInfoModel();
            sendOrderToWms.BookingId = bookId;
            sendOrderToWms.CompletionDate = orderFormModel.CompletionDate;
            sendOrderToWms.CompletionTime = orderFormModel.CompletionTime;
            orderInfo.Remarks = orderFormModel.Remarks;
            orderInfo.OrderItems = orderFormModel.orderItems;
            sendOrderToWms.OrderInfo = orderInfo;
          
            return sendOrderToWms;
        }
        public void AddOrderDetails(Consignee consignee, Shipper shipper, BookingModel booking)
        {
            _context.AddRange(consignee, shipper, booking);
            _context.SaveChanges();
        }

        public Booking getAllBookings(string bookingId)
        {
            return __context.Bookings
                .Include(bo => bo.Shipper).Include(bo => bo.Consignee).FirstOrDefault(co => co.BookingId.ToString() == bookingId);
        }

        //Update the booking table and return the json sending to wms
        public SendOrderToWMSModel UpdateOrderPage(OrderFormModel order)
        {
            Booking getbooking = new Booking();
            getbooking = getAllBookings(order.BookingId.ToString());
            getbooking.UpdatedDate = DateTime.Now;
            getbooking.Shipper.Name = order.ShipperName;
            getbooking.Shipper.Address1 = order.ShipperAddress1;
            getbooking.Shipper.Address2 = order.ShipperAddress2;
            getbooking.Shipper.Contact1 = order.ShipperContactNo;
            getbooking.Shipper.Email = order.ShipperEmail;
            getbooking.Shipper.UpdatedDate = DateTime.Now;
            getbooking.Consignee.Name = order.ConsigneeName;
            getbooking.Consignee.Address1 = order.ConsigneeAddress1;
            getbooking.Consignee.Address2 = order.ConsigneeAddress2;
            getbooking.Consignee.ContactNumber = order.ConsigneeContactNo;
            getbooking.Consignee.Email = order.ConsigneeEmail;
            getbooking.Consignee.UpdatedDate = DateTime.Now;

            __context.Update(getbooking);
            __context.SaveChanges();
            SendOrderToWMSModel sendDataToWMSModel = new SendOrderToWMSModel();
            sendDataToWMSModel = SendOrderDataToWMS(order, order.BookingId);
            return sendDataToWMSModel;
        }
    }
}