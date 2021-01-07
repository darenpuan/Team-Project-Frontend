using System;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using CoreApp.Data;
using System.Reflection;

namespace CoreApp.Setup
{
    public class CoreDbContext : DbContext
    {
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

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //optionsBuilder.UseSqlite("Filename=../CoreDatabase.db", options =>
            //{
            //    options.MigrationsAssembly(Assembly.GetExecutingAssembly().FullName);
            //});
            string connectionString = $"Host=localhost;Username=postgres;Password=admin;Database=testdb;";
            optionsBuilder.UseNpgsql(connectionString, option =>
            {
                option.MigrationsAssembly(Assembly.GetExecutingAssembly().FullName);
            });
            base.OnConfiguring(optionsBuilder);
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //Add your models here
            modelBuilder.Entity<Alert>().ToTable("Alerts");
            modelBuilder.Entity<Booking>().ToTable("Bookings");
            modelBuilder.Entity<BookingDetail>().ToTable("BookingDetails");
            modelBuilder.Entity<Rule>().ToTable("Rules");
            modelBuilder.Entity<Attachment>().ToTable("Attachments");
            modelBuilder.Entity<BillingAddress>().ToTable("BillingAddresses");
            modelBuilder.Entity<Cargo>().ToTable("Cargoes");
            modelBuilder.Entity<CargoDetail>().ToTable("CargoDetails");
            modelBuilder.Entity<Container>().ToTable("Containers");
            modelBuilder.Entity<Consignee>().ToTable("Consignees");
            modelBuilder.Entity<Compartment>().ToTable("Compartments");
            modelBuilder.Entity<Client>().ToTable("Clients");
            modelBuilder.Entity<Device>().ToTable("Devices");
            modelBuilder.Entity<Employee>().ToTable("Employees");
            modelBuilder.Entity<ExceptionType>().ToTable("ExceptionTypes");
            modelBuilder.Entity<Forklift>().ToTable("Forklifts");
            modelBuilder.Entity<Item>().ToTable("Items");
            modelBuilder.Entity<ItemCargo>().ToTable("ItemCargoes");
            modelBuilder.Entity<Incident>().ToTable("Incidents");
            modelBuilder.Entity<IncidentType>().ToTable("IncidentTypes");
            modelBuilder.Entity<Layer>().ToTable("Layers");
            modelBuilder.Entity<Layout>().ToTable("Layouts");
            modelBuilder.Entity<LayoutObject>().ToTable("LayoutObjects");
            modelBuilder.Entity<Location>().ToTable("Locations");
            modelBuilder.Entity<Lot>().ToTable("Lots");
            modelBuilder.Entity<Data.Module>().ToTable("Modules");
            modelBuilder.Entity<User>().ToTable("Users");
            modelBuilder.Entity<Rack>().ToTable("Racks");
            modelBuilder.Entity<Restricted>().ToTable("Restricted");
            modelBuilder.Entity<LoadingBay>().ToTable("LoadingBays");
            modelBuilder.Entity<LoadingBayOccupancy>().ToTable("LoadingBayOccupancies");
            modelBuilder.Entity<Notification>().ToTable("Notifications");
            modelBuilder.Entity<Measurement>().ToTable("Measurements");
            modelBuilder.Entity<Platform>().ToTable("Platforms");
            modelBuilder.Entity<Notifyee>().ToTable("Notifyees");
            modelBuilder.Entity<User>().ToTable("Users");
            modelBuilder.Entity<Record>().ToTable("Records");
            modelBuilder.Entity<Role>().ToTable("Roles");
            modelBuilder.Entity<Shipment>().ToTable("Shipments");
            modelBuilder.Entity<ShipmentContainer>().ToTable("ShipmentContainers");
            modelBuilder.Entity<ShipmentType>().ToTable("ShipmentTypes");
            modelBuilder.Entity<Tag>().ToTable("Tags");
            modelBuilder.Entity<Task>().ToTable("Tasks");
            modelBuilder.Entity<MovementLog>().ToTable("MovementLogs");
            modelBuilder.Entity<Origin>().ToTable("Origins");
            modelBuilder.Entity<Operation>().ToTable("Operations");
            modelBuilder.Entity<CargoOperation>().ToTable("CargoOperations");
            modelBuilder.Entity<OperationType>().ToTable("OperationTypes");
            modelBuilder.Entity<DeliveryNote>().ToTable("DeliveryNotes");
            modelBuilder.Entity<Warehouse>().ToTable("Warehouses");

            //Team 7 New Objects/Tables (Total 5 )
            modelBuilder.Entity<Category>().ToTable("Categories");
            modelBuilder.Entity<Unit>().ToTable("Units");
            modelBuilder.Entity<OperationItem>().ToTable("OperationItems");
            modelBuilder.Entity<Department>().ToTable("Departments");
            modelBuilder.Entity<ItemCategory>().ToTable("ItemCategories");
            //end 
      

            modelBuilder.Entity<WarehouseException>().ToTable("WarehouseExceptions");
            
            //T12 Models
            modelBuilder.Entity<Delivery>().ToTable("Deliveries");
            modelBuilder.Entity<Charge>().ToTable("Charges");
            modelBuilder.Entity<ChargeStatus>().ToTable("ChargeStatuses");
            modelBuilder.Entity<ChargeType>().ToTable("ChargeTypes");
            modelBuilder.Entity<Marking>().ToTable("Markings");
            modelBuilder.Entity<MarkingCargo>().ToTable("MarkingCargoes");
            modelBuilder.Entity<OperationItemStatus>().ToTable("OperationItemStatuses");
            modelBuilder.Entity<OperationStatus>().ToTable("OperationStatuses");
            modelBuilder.Entity<PackagingType>().ToTable("PackagingTypes");
            modelBuilder.Entity<Transporter>().ToTable("Transporters");
            modelBuilder.Entity<Transfer>().ToTable("Transfers");
            modelBuilder.Entity<TransferOrder>().ToTable("TransferOrders");

            //Booking System Models
            modelBuilder.Entity<Shipper>().ToTable("Shippers");
            modelBuilder.Entity<PublicHoliday>().ToTable("PublicHolidays");
            //Workflow Models
            modelBuilder.Entity<OperationPhoto>().ToTable("OperationPhotos");
        }
    }
}
