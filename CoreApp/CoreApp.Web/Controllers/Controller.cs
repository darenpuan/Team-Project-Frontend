using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Authorization;
using CoreApp.Web.DataAccess;
using CoreApp.Web.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using CoreApp.Data;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace CoreApp.Web.Controllers
{
    [Route("api/[controller]/[action]")]
    public class UserController : ControllerBase
    {
        private readonly IDataAccessProvider _dataAccessProvider;
        private readonly PostgreSqlContext _context;
        private readonly CoreDbContext __context;

        public UserController(IDataAccessProvider dataAccessProvider, PostgreSqlContext context, CoreDbContext coreContext)
        {
            _dataAccessProvider = dataAccessProvider;
            _context = context;
            __context = coreContext;
        }

        [HttpPost]
        [ActionName("Authenticate")]
        public IActionResult Authenticate([FromBody] LoginModel model)
        {
            var user = _dataAccessProvider.Authenticate(model.Email, model.Password);
            if(user != null)
            {
                return Redirect("/api/User/LoginRedirect/" + user.UserId);
            }
            else
            {
                return BadRequest();
            }
            
        }

        //testing to view all records from user
        [HttpGet]
        [ActionName("View")]
        public IEnumerable<UserModel> Get()
        {
           return _dataAccessProvider.GetRecords();
        }

        //registration 
        [HttpPost]
        [ActionName("Register")]
        public IActionResult Create([FromBody] RegisterModel Users)
        {
            if (ModelState.IsValid)
            {
                UserModel db = new UserModel();
                BillingAddressModel db2 = new BillingAddressModel();
                ClientModel db3 = new ClientModel();
                db.UserId = Guid.NewGuid();
                db.RoleId = 1;
                db.Password = "qwerty";
                db.Salutation = Users.Salutation;
                db.FirstName = Users.FirstName;
                db.LastName = Users.LastName;
                db.ContactNumber = Users.ContactNumber;
                db.OfficeNumber = Users.OfficeNumber;
                db.Email = Users.Email;
                db.IsActive = true;
                db.IsApproved = false;
                db.IsFirstLogin = true;
                db.CreatedBy = "qwerty";
                db.CreatedDate = DateTime.Now;
                db2.BillingId = db.UserId;
                db2.BillingFName = Users.FirstName;
                db2.BillingLName = Users.LastName;
                db2.BillingCompanyName = Users.CompanyName;
                db2.BillingNickname = Users.Address;
                db2.BillingAddressStreet = Users.Street;
                db2.BillingAddressApartment = Users.Apartment;
                db2.BillingAddressTown = Users.Town;
                db2.BillingCountry = Users.Country;
                db2.BillingAddressPostalcode = Users.PostalCode;
                db2.BillingAddressPhone = Int16.Parse(Users.ContactNumber);
                db2.BillingAddressEmail = Users.Email;
                db2.CreatedDate = DateTime.Now;
                db2.CreatedBy = "john";
                db2.IsActive = true;
                db3.ClientId = db.UserId;
                db3.CompanyName = Users.CompanyName;
                db3.CompanyAddress = Users.Address;
                db3.IsActive = true;
                db3.CreatedDate = DateTime.Now;
                db3.CreatedBy = "john";
                _dataAccessProvider.AddRecord(db);
                _dataAccessProvider.AddBillingRecord(db2);
                _dataAccessProvider.AddClientRecord(db3);
                return Ok();

            }
            return BadRequest(ModelState.IsValid);
        }
        //redirect user for first login or not first login
        [HttpGet("{id}")]
        [ActionName("LoginRedirect")]
        public IActionResult Details(string id)
        {
            try
            {
                UserModel user = new UserModel();
                user.UserId = Guid.Parse(id);
                user = _dataAccessProvider.GetSingleRecord(user);

                if(user.RoleId == 1)
                {
                    if (user.IsFirstLogin == true)
                    {
                        return Redirect("/firstloginadmin");
                    }
                    else
                    {
                        return Redirect("/admin");
                    }
                }
                else if (user.RoleId == 2)
                {
                    if (user.IsFirstLogin == true)
                    {
                        return Redirect("/firstloginclient");
                    }
                    else
                    {
                        return Redirect("/customer");
                    }
                }
                else if (user.RoleId == 3)
                {
                    if (user.IsFirstLogin == true)
                    {
                        return Redirect("/firstloginstaff");
                    }
                    else
                    {
                        return Redirect("/staff");
                    }
                }
                else
                {
                    return BadRequest();
                }

            }
            catch (Exception e)
            {
                return BadRequest();
            }
        }

        [HttpPost]
        [ActionName("Edit")]
        public IActionResult Edit([FromBody] UserModel Users)
        {
            if (ModelState.IsValid)
            {
                _dataAccessProvider.UpdateRecord(Users);
                return Ok();
            }
            return BadRequest(ModelState.IsValid);
        }

        [ActionName("AllRoleId")]
        [HttpGet] //  return RoleId from user database
        public string GetRoleTable()
        {
            return _dataAccessProvider.GetRoleId();
        }

        [ActionName("adminDashboard")]
        [HttpGet]
        public IActionResult DashboardAdmin() // function to count total approved/pending/suspended account
        {
            //UserModel account = new UserModel();
            var account = _dataAccessProvider.AdminDashboard();
            return Ok(new
            {
                approvedAccount = account.approvedAccount,
                pendingAccount = account.pendingAccount,
                suspendedAccount = account.suspendedAccount
            }); ;

        }

        //retrieve profileuserpage details both customer / admin 
        [ActionName("ProfileUserPage")]
        [HttpGet("{id}")]
        public IActionResult ProfileUserPage(string id) //function to return details for profileuserpage
        {
            UserModel user = new UserModel();
            user.UserId = Guid.Parse(id);
            user = _dataAccessProvider.GetSingleRecord(user);
            return Ok(new
            {
                FullName = user.Salutation + " " + user.FirstName + " " + user.LastName,
                Email = user.Email,
                ContactNumber = user.ContactNumber,
                OfficeNumber = user.OfficeNumber
            }); ;
        }

        //change password
        [ActionName("ChangePassword")]
        [HttpPost("{id}")]
        public IActionResult ChangePassword(string id, [FromBody] PasswordModel password) //function to change password
        {
            UserModel user = new UserModel();
            user.UserId = Guid.Parse(id);
            user = _dataAccessProvider.GetSingleRecord(user);
            if (password.CurrentPassword == user.Password)
            {
                if (password.NewPassword == password.ConfirmPassword)
                {
                    user.Password = password.NewPassword;
                    _dataAccessProvider.UpdateRecord(user);
                    return Ok();
                }
                return BadRequest("New pin does not match Confirm Pin");
            }
            return BadRequest("Current Pin is Wrong");
        }

        //change password
        [ActionName("ChangePin")]
        [HttpPost("{id}")]
        public IActionResult ChangePin(string id, [FromBody] PinModel pin) //function to change password
        {
            Employee user = new Employee();
            user.EmployeeId = Guid.Parse(id);
            user = _dataAccessProvider.GetSingleEmployeeRecord(user);
            if (pin.CurrentPin == user.PinNum)
            {
                if (pin.NewPin == pin.ConfirmPin)
                {
                    user.PinNum = pin.NewPin;
                    _dataAccessProvider.UpdateEmployeeRecord(user);
                    return Ok();
                }
                return BadRequest("New pin does not match Confirm Pin");
            }
            return BadRequest("Current Pin is Wrong");
        }


        //Update User Profile for customer
        [HttpPost]
        [ActionName("UpdateProfile")]
        public IActionResult UpdateProfileForCustomer([FromBody] UserProfileModel profile)
        {
            if (ModelState.IsValid)
            {
                _dataAccessProvider.UpdateProfile(profile);
                return Ok();
            }
            return BadRequest(ModelState);
        }

        //Test for SMTP
        [HttpPost]
        [ActionName("SMTP")]
        public IActionResult TestSMTP([FromBody] UserModel UserModel)
        {
            UserModel.Password = GeneratePassword();

            if (ModelState.IsValid)
            {
                _dataAccessProvider.sendEmail(UserModel.Email,UserModel.Salutation,UserModel.FirstName,UserModel.Password);
                return Ok();
            }
            return BadRequest(ModelState);
        }

        public static string GeneratePassword(int length = 8)
        {
            // Create a string of characters, numbers, special characters that allowed in the password  
            string validChars = "ABCDEFGHJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*?_-";
            Random random = new Random();

            // Select one random character at a time from the string  
            // and create an array of chars  
            char[] chars = new char[length];
            for (int i = 0; i < length; i++)
            {
                chars[i] = validChars[random.Next(0, validChars.Length)];
            }
            return new string(chars);
        }

        [ActionName("AccountManagementPage")]
        [HttpGet]
        public IActionResult AccountManagementPage()
        {
            var list = __context.Clients.Include(c => c.User);
            return Ok(list.Select(client => new
            {
                FullName = client.User.FirstName + client.User.LastName,
                role = client.User.Role.RoleId,
                Phone = client.User.ContactNumber,
                CompanyName = client.CompanyName,
                Status = client.User.IsApproved ? "Approved" : (client.User.IsActive ? "Pending" : "Suspended"),

                /*
                 * Verified,
                 * LastLogin, Dont Know where to find?
                 */

            })); ;
        }

        //Retrieve Company profile based on userid for customer
        [HttpGet("{id}")]
        [ActionName("GetCompanyProfile")]
        public IActionResult GetCompanyProfileById(string id)
        {
            BillingAddressModel company = new BillingAddressModel();
            company.BillingId = Guid.Parse(id);
            company = _dataAccessProvider.GetCompanyDetailByGUID(company);
            return Ok(new
            {
                CompanyName = company.BillingCompanyName,
                AddressNickName = company.BillingNickname,
                Street = company.BillingAddressStreet,
                Apartment = company.BillingAddressApartment,
                Town = company.BillingAddressTown,
                Country = company.BillingCountry,
                PostalCode= company.BillingAddressPostalcode

            });
        }

        //Update Company Profile for customer
        [HttpPost]
        [ActionName("UpdateCompanyDetail")]
        public IActionResult UpdateCompanyDetail([FromBody] CompanyModel company)
        {
            if (ModelState.IsValid)
            {
                _dataAccessProvider.UpdateCompanyDetail(company);
                return Ok();
            }
            return BadRequest(ModelState);
        }
        //Create Booking for customer
        [HttpPost]
        [ActionName("CreateBookingDetail")]
        public IActionResult CreateNewBookingDetails([FromBody] BookingFormModel booking)
        {
            if (ModelState.IsValid)
            {
                BookingModel bookingmodel = new BookingModel();
                BookingDetailModel bookingDetailModel = new BookingDetailModel();
                Consignee consignee = new Consignee();
                Shipper shipper = new Shipper();
                bookingmodel.Consignee = consignee;
                bookingmodel.Shipper = shipper;
                if (_dataAccessProvider.noOfSlotsTaken(booking.BookingTime) > 10)
                {
                    bookingDetailModel.BookingStatus = "Pending";
                    bookingDetailModel.IsActive = false;
                    bookingmodel.IsActive = false;
                }
                else
                {
                    bookingDetailModel.BookingStatus = "Approved";
                    bookingDetailModel.IsActive = true;
                    bookingmodel.IsActive = true;
                }
                DateTime date = DateTime.Now;
                Guid bookingobj = Guid.NewGuid();
                Guid consigneeobj = Guid.NewGuid();
                Guid shipperobj = Guid.NewGuid();
                bookingDetailModel.CreatedBy = "Test";
                bookingmodel.CreatedBy = "Test";
                bookingmodel.Consignee.CreatedBy = "Test";
                bookingmodel.Shipper.CreatedBy = "Test";
                bookingDetailModel.BookingDetailId = bookingobj;
                bookingmodel.BookingId = bookingobj;
                bookingmodel.ClientId = booking.ClientId;
                bookingmodel.Consignee.ConsigneeId = consigneeobj;
                bookingmodel.Shipper.ShipperId = shipperobj;
                bookingDetailModel.CreatedDate = DateTime.Now;
                bookingDetailModel.UpdatedDate = DateTime.Now;
                bookingmodel.CreatedDate = DateTime.Now;
                bookingmodel.UpdatedDate = DateTime.Now;
                bookingmodel.Consignee.CreatedDate = DateTime.Now;
                bookingmodel.Consignee.UpdatedDate = DateTime.Now;
                bookingmodel.Shipper.CreatedDate = DateTime.Now;
                bookingmodel.Shipper.UpdatedDate = DateTime.Now;
                bookingmodel.Shipper.IsActive = true;
                bookingmodel.Consignee.IsActive = true;
                bookingDetailModel.BookingDate = booking.BookingDate;
                bookingDetailModel.BookingTime = booking.BookingTime;
                bookingDetailModel.BillOfLading = booking.BillOfLading;
                bookingDetailModel.ExportDeclarationNumber = booking.ExportDeclarationNumber;
                bookingmodel.Shipper.Name = booking.ShipperName;
                bookingmodel.Shipper.Address1 = booking.ShipperAddress1;
                bookingmodel.Shipper.Address2 = booking.ShipperAddress2;
                bookingmodel.Shipper.Contact1 = booking.ShipperContactNo;
                bookingmodel.Shipper.Email = booking.ShipperEmail;
                bookingmodel.Consignee.Name = booking.ConsigneeName;
                bookingmodel.Consignee.Address1 = booking.ConsigneeAddress1;
                bookingmodel.Consignee.Address2 = booking.ConsigneeAddress2;
                bookingmodel.Consignee.ContactNumber = booking.ConsigneeContactNo;
                bookingmodel.Consignee.Email = booking.ConsigneeEmail;
                bookingDetailModel.BookingType = booking.BookingType;
                bookingDetailModel.VoyageDetails = booking.VoyageDetails;
                bookingDetailModel.CountryOrigin = booking.CountryOrigin;
                bookingDetailModel.CountryFinalDestination = booking.CountryFinalDestination;
                bookingDetailModel.PortLoading = booking.PortOfLoading;
                bookingDetailModel.PortDischarge = booking.PortOfDischarge;
                bookingDetailModel.DateDeparture = booking.DateDeparture;
                bookingDetailModel.FinalDestination = booking.FinalDestination;
                bookingDetailModel.DeclaredWeight = booking.Weight;
                bookingDetailModel.DeclaredWidth = booking.Width;
                bookingDetailModel.DeclaredLength = booking.Length;
                bookingDetailModel.DeclaredHeight = booking.Height;

                _dataAccessProvider.AddBookingDetails(bookingmodel.Consignee, bookingmodel.Shipper, bookingmodel, bookingDetailModel);
                SendBookingToWmsModel sendBookingToWMS = new SendBookingToWmsModel();
                sendBookingToWMS = _dataAccessProvider.SendBookingDataToWMS(booking, bookingobj);


                return Ok(sendBookingToWMS);


                return Ok(new
                {

                });


            }
            return BadRequest(ModelState);
        }

        //Retrieve the list of warehouse to display on frontend receiving dropdown list
        [ActionName("GetListOfWarehouse")]
        [HttpGet]
        public IActionResult GetAllWareHouse()
        {
            List<Warehouse> warehouseList = new List<Warehouse>();
            warehouseList = _dataAccessProvider.GetAllWarehouses();

            return Ok(warehouseList.Select(item => new
            {
                item.WarehouseId,
                item.DisplayValue
            }).ToList());

        }

        //Retrieve the list of warehouse to display on frontend receiving dropdown list
        [ActionName("GetListOfTransporter")]
        [HttpGet]
        public IActionResult GetAllTransporter()
        {
            List<Transporter> transporterList = new List<Transporter>();
            transporterList = _dataAccessProvider.GetAllTransporter();

            return Ok(transporterList.Select(item => new
            {
                item.TransporterId,
                item.Company
            }).ToList());

        }

        //Retrieve the list of type of package to display on frontend receiving dropdown list
        [ActionName("GetListOfPackageType")]
        [HttpGet]
        public IActionResult GetAllPackage()
        {
            List<PackagingType> packageTypeList = new List<PackagingType>();
            packageTypeList = _dataAccessProvider.GetPackageType();

            return Ok(packageTypeList.Select(item => new
            {
                item.PackagingTypeId,
                item.DisplayValue
            }).ToList());

        }
        //For Booking Summary Page in customer page based on userid
        [ActionName("GetAllBookingForCustomer")]
        [HttpGet("{id}")]
        public IActionResult GetBooking(string id)
        {
            var query = _dataAccessProvider.GetBookings(id);

            return Ok(query.Select(co => new
            {
                co.Cargo.CargoDetail.CargoName,
                co.Operation.Task.Booking.BookingId,
                co.Operation.Task.Booking.BookingDetail.BookingDate,
                co.Operation.Task.Booking.BookingDetail.BillOfLading,
                co.Operation.Task.Booking.BookingDetail.BookingStatus
            }));

        }
        //For Booking Summary Page in Admin page based on userid
        [ActionName("GetAllBookingForAdmin")]
        [HttpGet]
        public IActionResult GetBookingForAdmin()
        {
            List<BookingSummaryModel> bookingSummary = new List<BookingSummaryModel>();
            bookingSummary = _dataAccessProvider.GetBookingsForAdmin();

            return Ok(bookingSummary);
        }

        //Update the booking status to inactive by getting the bookingid
        [ActionName("DeleteBooking")]
        [HttpPost("{id}")]
        public IActionResult deleteBooking(string id)
        {
            _dataAccessProvider.deletebookingbyId(id);
            return Ok("Booking is updated to inactive");
        }

        //GetBookingFormById
        [ActionName("GetBookingForm")]
        [HttpGet("{id}")]
        public IActionResult GetBookingFormById(string id)
        {
            BookingFormModel bookingmodel = new BookingFormModel();
            bookingmodel = _dataAccessProvider.GetBookingFormById(id);
            if (bookingmodel!=null)
            {
                List<CargoModel> cargoModel = new List<CargoModel>();
                string cargoId = bookingmodel.CargoId.ToString();
                cargoModel = _dataAccessProvider.GetCargoesById(cargoId);
                bookingmodel.cargoItems = cargoModel;
                if (bookingmodel.TransporterCompany != null)
                {
                    bookingmodel.RequiredTransportation = true;
                }
            }


            return Ok(bookingmodel);
        }
        [ActionName("UpdatingBookingForm")]
        [HttpPost]
        public IActionResult UpdateBookingForm([FromBody] BookingFormModel booking)
        {
            if (ModelState.IsValid)
            {
                SendBookingToWmsModel sendBackToWMS = new SendBookingToWmsModel();
                sendBackToWMS = _dataAccessProvider.UpdateBookingPage(booking);
                return Ok(sendBackToWMS);
            }
            return BadRequest(ModelState);

        }


        [HttpPost] // BERNIE -  USING TEMP NewPublicHoliday.cs in model
        [ActionName("AddNewHoliday")]
        public IActionResult AddNewHoliday([FromBody]NewPublicHoliday NewHoliday)
        {
            if (ModelState.IsValid)
            {
                NewPublicHoliday tablePH = new NewPublicHoliday();
                tablePH.PublicHolidayId = Guid.NewGuid();
                tablePH.PublicHolidayDate = NewHoliday.PublicHolidayDate;
                tablePH.StartDate = NewHoliday.StartDate;
                tablePH.EndDate = NewHoliday.EndDate;
                tablePH.IsActive = NewHoliday.IsActive;
                tablePH.CreatedDate = NewHoliday.CreatedDate;
                tablePH.CreatedBy = NewHoliday.CreatedBy;
                tablePH.UpdatedDate = NewHoliday.UpdatedDate;
                _dataAccessProvider.AddNewHoliday(tablePH);
                return Ok("Holiday Successfully Added");
            }
            return BadRequest(ModelState);
        }

        [HttpPost] // BERNIE -  USING TEMP NewPublicHoliday.cs in model
        [ActionName("DeleteHoliday")]
        public IActionResult DeleteHoliday([FromBody] Guid NewHoliday)
        {
            if (ModelState.IsValid)
            {
                NewPublicHoliday NewHolidayObject = new NewPublicHoliday(); 
                var CheckGuid = _context.PublicHolidays.Find(NewHoliday);
                if (CheckGuid == null) // Checking if user input Guid is in database
                {
                    return NotFound(); // If Guid is not in database, return 404 error
                }
                _dataAccessProvider.DeleteHoliday(NewHoliday); // If Guid is in database, delete the row in database

                return Ok(); // return successfully deleted
            }
            return BadRequest(ModelState); // if ModelState not valid, show error message
        }

        [HttpGet] // BERNIE -  USING TEMP NewPublicHoliday.cs in model
        [ActionName("ViewAllHoliday")]
        public IEnumerable<NewPublicHoliday> ViewAllHolidays()
        {
            return _dataAccessProvider.ViewAllHolidays();

        }

        //Approval of booking form
        [HttpPost]
        [ActionName("BookingFormApproval")]
        public IActionResult BookingFormApproval([FromBody] BookingFormApprovalModel data)
        {
            if (ModelState.IsValid)
            {
                _dataAccessProvider.UpdateBookingformApproval(data);
                return Ok();
            }
            return BadRequest(ModelState);
        }

        // retrieve accounttype drop down list
        [HttpGet]
        [ActionName("AccountType")]
        public ActionResult GetAccountType()
        {
            var AccountTypeList = __context.Roles.Where(x => x.DisplayValue != "Client").ToList();
            return Ok(AccountTypeList.Select(Role => new
            {
                DisplayValue = Role.DisplayValue

            })); ;
        }

        // retrieve account status drop down list
        [HttpGet]
        [ActionName("AccountStatus")]
        public ActionResult GetAccountStatus()
        {
            
            return Ok(new
            {
                StatusActive = "Active",
                StatusPending = "Pending",
                StatusSuspended = "Suspended"

            }); ;
        }


        // retrieve Department drop down list
        [HttpGet]
        [ActionName("Department")]
        public ActionResult GetDepartment()
        {
            var DepartmentList = __context.Departments.ToList();
            return Ok(DepartmentList.Select(Departments => new
            {
                DisplayValue = Departments.DisplayValue
            })); ;
        }

        // Account creation for admin page
        [HttpPost]
        [ActionName("AccountCreation")]
        public IActionResult AccountCreation([FromBody] AdminCreateModel Users)
        {
            if (ModelState.IsValid)
            {

                _dataAccessProvider.AdminRegister(Users);

                return Ok();

            }
            return BadRequest(ModelState);
        }

        [HttpGet("{id}")]
        [ActionName("GetOrderListCustomer")]
        public List<CustomerOrderList> GetOrderListCustomer(string id)
        {
            var OrderDetails = (from od in __context.Bookings
                                join t in __context.Tasks on od.BookingId equals t.Booking.BookingId
                                join o in __context.Operations on t.TaskId equals o.OperationId
                                where od.Client.ClientId.ToString() == id
                                select new CustomerOrderList
                                {
                                    OrderNumber = o.OperationId,
                                    CompletionDate = o.CompletionDate,
                                    Status = o.OperationStatus.DisplayValue

                                }).ToList();
            return OrderDetails;

        }


        [HttpGet]
        [ActionName("GetOrderListAdmin")]
        public List<AdminOrderList> GetOrderListAdmin()
        {
            var OrderDetails = (from od in __context.Users
                                join c in __context.Clients on od.UserId equals c.ClientId
                                join b in __context.Bookings on c.ClientId equals b.Client.ClientId
                                join t in __context.Tasks on b.BookingId equals t.Booking.BookingId
                                join o in __context.Operations on t.TaskId equals o.OperationId
                                select new AdminOrderList
                                {
                                    Email = od.Email,
                                    OrderNumber = o.OperationId,
                                    CompletionDate = o.CompletionDate,
                                    Status = o.OperationStatus.DisplayValue

                                }).ToList();
            return OrderDetails;

        }

        [HttpGet("{id}")]
        [ActionName("GetOrderListItems")]
        public List<ItemOrderList> GetOrderListItems(string id)
        {
            var ItemDetails = (from od in __context.Bookings
                               join t in __context.Tasks on od.BookingId equals t.Booking.BookingId
                               join o in __context.Operations on t.TaskId equals o.OperationId
                               join oi in __context.OperationItems on o.OperationId equals oi.Operation.OperationId
                               join i in __context.Items on oi.Item.ItemId equals i.ItemId
                               join u in __context.Units on i.Unit.UnitId equals u.UnitId
                               join ic in __context.ItemCategories on u.ItemCategory.ItemCategoryId equals ic.ItemCategoryId
                               where o.User.UserId.ToString() == id
                               select new ItemOrderList
                               {
                                   OrderNumber = o.OperationId,
                                   Type = ic.Type,
                                   Category = ic.DisplayValue,
                                   Name = u.ItemName,
                                   TotalWeight = oi.Weight1 + oi.Weight2

                               }).ToList();
            return ItemDetails;

        }

        [HttpPost]
        [ActionName("AccountConfiguration")]
        public IActionResult AccountConfiguration([FromBody] AccountConfigurationModel userdata)
        {
            if (ModelState.IsValid)
            {

                _dataAccessProvider.UpdateAccountConfiguration(userdata);

                return Ok();

            }
            return BadRequest(ModelState);
        }
        //Create Data in Orderlist
        [HttpPost]
        [ActionName("CreateOrderDetail")]
        public IActionResult CreateOrderDetail([FromBody] OrderFormModel orderdata)
        {
            BookingModel bookingModel = new BookingModel();
            Consignee consignee = new Consignee();
            Shipper shipper = new Shipper();
            if (ModelState.IsValid)
            {
                Guid bookingobj = Guid.NewGuid();
                Guid consigneeobj = Guid.NewGuid();
                Guid shipperobj = Guid.NewGuid();
                bookingModel.BookingId = bookingobj;
                consignee.ConsigneeId = consigneeobj;
                shipper.ShipperId = shipperobj;
                shipper.Name = orderdata.ShipperName;
                shipper.Address1 = orderdata.ShipperAddress1;
                shipper.Address2 = orderdata.ShipperAddress2;
                shipper.Contact1 = orderdata.ShipperContactNo;
                shipper.Email = orderdata.ShipperEmail;
                consignee.Name = orderdata.ConsigneeName;
                consignee.Address1 = orderdata.ConsigneeAddress1;
                consignee.Address2 = orderdata.ConsigneeAddress2;
                consignee.ContactNumber = orderdata.ConsigneeContactNo;
                consignee.Email = orderdata.ConsigneeEmail;
                bookingModel.CreatedDate = DateTime.Now;
                bookingModel.UpdatedDate = DateTime.Now;
                consignee.CreatedDate = DateTime.Now;
                consignee.UpdatedDate = DateTime.Now;
                shipper.CreatedDate = DateTime.Now;
                shipper.UpdatedDate = DateTime.Now;
                bookingModel.ClientId = orderdata.ClientId;
                bookingModel.CreatedBy = "User";
                consignee.CreatedBy = "User";
                shipper.CreatedBy = "User";
                bookingModel.Consignee = consignee;
                bookingModel.Shipper = shipper;
                _dataAccessProvider.AddOrderDetails(bookingModel.Consignee, bookingModel.Shipper, bookingModel);
                SendOrderToWMSModel sendOrderToWMS = new SendOrderToWMSModel();
                sendOrderToWMS = _dataAccessProvider.SendOrderDataToWMS(orderdata, bookingobj);
                return Ok(sendOrderToWMS);
            }
            return BadRequest(ModelState);
        }

        [ActionName("UpdatingOrderForm")]
        [HttpPost]
        public IActionResult UpdateOrderForm([FromBody] OrderFormModel orderdata)
        {
            if (ModelState.IsValid)
            {
                SendOrderToWMSModel sendBackToWMS = new SendOrderToWMSModel();
                sendBackToWMS = _dataAccessProvider.UpdateOrderPage(orderdata);
                return Ok(sendBackToWMS);
            }
            return BadRequest(ModelState);

        }


        /*      [HttpDelete("{id}")]
              public IActionResult DeleteConfirmed(string id)
              {
                  var data = _dataAccessProvider.GetPatientRecord(id);
                  if (data == null)
                  {
                      return NotFound();
                  }
                  _dataAccessProvider.DeleteRecord(id);
                  return Ok();
              }
        */
    }
}