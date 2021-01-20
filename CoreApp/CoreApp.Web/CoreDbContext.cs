using System;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using CoreApp.Data;
using System.Reflection;

namespace CoreApp.Web
{
    public class CoreDbContext : DbContext
    {
        public CoreDbContext(DbContextOptions<CoreDbContext> options) : base(options) { }
        public DbSet<Alert> Alerts { get; set; }
        public DbSet<Booking> Bookings { get; set; }
        public DbSet<BookingDetail> BookingDetails { get; set; }
        public DbSet<Rule> Rules { get; set; }
        public DbSet<Attachment> Attachments { get; set; }
        public DbSet<BillingAddress> BillingAddresses { get; set; }
        public DbSet<Cargo> Cargoes { get; set; }
        public DbSet<CargoDetail> CargoDetails { get; set; }
        public DbSet<Container> Containers { get; set; }
        public DbSet<Consignee> Consignees { get; set; }
        public DbSet<Compartment> Compartments { get; set; }
        public DbSet<Client> Clients { get; set; }
        public DbSet<Device> Devices { get; set; }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<ExceptionType> ExceptionTypes { get; set; }
        public DbSet<Forklift> Forklifts { get; set; }
        public DbSet<IncidentType> IncidentTypes { get; set; }
        public DbSet<Incident> Incidents { get; set; }
        public DbSet<Item> Items { get; set; }
        public DbSet<ItemCargo> ItemCargoes { get; set; }
        public DbSet<Layer> Layers { get; set; }
        public DbSet<Layout> Layouts { get; set; }
        public DbSet<LayoutObject> LayoutObjects { get; set; }
        public DbSet<Location> Locations { get; set; }
        public DbSet<Lot> Lots { get; set; }
        public DbSet<Data.Module> Modules { get; set; }
        public DbSet<LoadingBay> LoadingBays { get; set; }
        public DbSet<LoadingBayOccupancy> LoadingBayOccupancies { get; set; }
        public DbSet<Notification> Notifications { get; set; }
        public DbSet<Measurement> Measurements { get; set; }
        public DbSet<Platform> Platforms { get; set; }
        public DbSet<Notifyee> Notifyees { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Record> Records { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<Rack> Racks { get; set; }
        public DbSet<Restricted> Restricted { get; set; }
        public DbSet<Shipment> Shipments { get; set; }
        public DbSet<ShipmentContainer> ShipmentContainers { get; set; }
        public DbSet<ShipmentType> ShipmentTypes { get; set; }
        public DbSet<Tag> Tags { get; set; }
        public DbSet<Task> Tasks { get; set; }
        public DbSet<Origin> Origins { get; set; }
        public DbSet<Operation> Operations { get; set; }
        public DbSet<CargoOperation> CargoOperations { get; set; }
        public DbSet<DeliveryNote> DeliveryNotes { get; set; }
        public DbSet<MovementLog> MovementLogs { get; set; }
        public DbSet<OperationType> OperationTypes { get; set; }
        public DbSet<Warehouse> Warehouses { get; set; }

        //Team 7 New Objects/Tables (Total 5 )
        public DbSet<Unit> Units { get; set; }
        public DbSet<OperationItem> OperationItems { get; set; }
        public DbSet<Department> Departments { get; set; }
        public DbSet<ItemCategory> ItemCategories { get; set; }
        //end
        public DbSet<WarehouseException> WarehouseExceptions { get; set; }

        // T12 DbSets
        public DbSet<CargoCategory> CargoCategories { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Delivery> Deliveries { get; set; }
        public DbSet<Charge> Charges { get; set; }
        public DbSet<ChargeStatus> ChargeStatuses { get; set; }
        public DbSet<ChargeType> ChargeTypes { get; set; }
        public DbSet<Marking> Markings { get; set; }
        public DbSet<MarkingCargo> MarkingCargoes { get; set; }
        public DbSet<OperationItemStatus> OperationItemStatuses { get; set; }
        public DbSet<OperationStatus> OperationStatuses { get; set; }
        public DbSet<PackagingType> PackagingTypes { get; set; }
        public DbSet<Transporter> Transporters { get; set; }
        public DbSet<Transfer> Transfers { get; set; }
        public DbSet<TransferOrder> TransferOrders { get; set; }
        // End of T12 DbSets

        //Start of Workflow Stuff
        public DbSet<OperationPhoto> OperationPhotos { get; set; }

        //Start of Booking System DbSets
        public DbSet<Shipper> Shippers { get; set; }
        public DbSet<PublicHoliday> PublicHolidays { get; set; }
        
    }
}
