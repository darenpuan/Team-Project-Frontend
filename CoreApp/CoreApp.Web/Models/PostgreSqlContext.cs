using Microsoft.EntityFrameworkCore;
using CoreApp.Web.Models;
using CoreApp.Data;

namespace CoreApp.Web.DataAccess
{
    public class PostgreSqlContext : DbContext
    {
        public PostgreSqlContext(DbContextOptions<PostgreSqlContext> options) : base(options)
        {
        }

        public DbSet<UserModel> Users { get; set; }
        public DbSet<BillingAddressModel> BillingAddresses { get; set; }
        public DbSet<ClientModel> Clients { get; set; }
        public DbSet<Consignee> Consignees { get; set; }
        public DbSet<Shipper> Shippers { get; set; }
        public DbSet<BookingModel> Bookings { get; set; }
        public DbSet<BookingDetailModel> BookingDetails { get; set; }
        public DbSet<NewPublicHoliday> PublicHolidays { get; set; } // Temporarily using this .cs file for CoreApp.Data.PublicHoliday.cs - Bernie
        public DbSet<EmployeeModel> Employees { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }

        public override int SaveChanges()
        {
            ChangeTracker.DetectChanges();
            return base.SaveChanges();
        }
    }
}