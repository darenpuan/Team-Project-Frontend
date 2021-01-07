using CoreApp.Data;
using System;
using System.Linq;

namespace CoreApp.Setup
{
    public static class DbContextExtensions
    {
        public static void Seed(this CoreDbContext context)
        {
            // shady way to flush db data then add seed data
            context.Database.EnsureDeleted();
            context.Database.EnsureCreated();


            Role adminRole = new Role { RoleId = 1, DisplayValue = "Admin", IsActive = true, CreatedBy = "Seed", CreatedDate = DateTime.Now, UpdatedBy = "Seed", UpdatedDate = DateTime.Now };
            Role clientRole = new Role { RoleId = 2, DisplayValue = "Client", IsActive = true, CreatedBy = "Seed", CreatedDate = DateTime.Now, UpdatedBy = "Seed", UpdatedDate = DateTime.Now };
            Role managerRole = new Role { RoleId = 3, DisplayValue = "Manager", IsActive = true, CreatedBy = "Seed", CreatedDate = DateTime.Now, UpdatedBy = "Seed", UpdatedDate = DateTime.Now };

            context.Roles.AddRange(adminRole, managerRole, clientRole);
            context.SaveChanges();

            User adminUser = new User
            {
                UserId = Guid.NewGuid(),
                Role = context.Roles.First(x => x.RoleId == adminRole.RoleId),
                Password = "admin",
                Salutation = "Mr.",
                FirstName = "Admin",
                LastName = "User",
                ContactNumber = "91234567",
                Email = "admin@admin.com",
                IsFirstLogin = false,
                IsApproved = true,
                IsActive = true,
                CreatedDate = DateTime.Now,
                CreatedBy = "Seed",
                UpdatedBy = "Seed",
                UpdatedDate = DateTime.Now
            };

            User clientUser = new User
            {
                UserId = Guid.NewGuid(),
                Role = context.Roles.First(x => x.RoleId == clientRole.RoleId),
                Password = "client",
                Salutation = "Mr.",
                FirstName = "Client",
                LastName = "User",
                ContactNumber = "91234568",
                Email = "client@client.com",
                IsFirstLogin = false,
                IsApproved = true,
                IsActive = true,
                CreatedDate = DateTime.Now,
                CreatedBy = "Seed",
                UpdatedBy = "Seed",
                UpdatedDate = DateTime.Now
            };

            context.Users.AddRange(adminUser, clientUser);
            context.SaveChanges();
        }
    }
}
