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
            Role groundStaffRole = new Role { RoleId = 4, DisplayValue = "Ground Staff", IsActive = true, CreatedBy = "Seed", CreatedDate = DateTime.Now, UpdatedBy = "Seed", UpdatedDate = DateTime.Now };

            context.Roles.AddRange(adminRole, managerRole, clientRole, groundStaffRole);
            context.SaveChanges();

            Department swsDepartment = new Department { DepartmentId = 1, DisplayValue = "Smart Weighing Scale", IsActive = true, CreatedBy = "Seed", CreatedDate = DateTime.Now, UpdatedBy = "Seed", UpdatedDate = DateTime.Now };
            Department workflowDepartment = new Department { DepartmentId = 2, DisplayValue = "Workflow", IsActive = true, CreatedBy = "Seed", CreatedDate = DateTime.Now, UpdatedBy = "Seed", UpdatedDate = DateTime.Now };
            Department hqDepartment = new Department { DepartmentId = 3, DisplayValue = "Headquaters", IsActive = true, CreatedBy = "Seed", CreatedDate = DateTime.Now, UpdatedBy = "Seed", UpdatedDate = DateTime.Now };
            context.Departments.AddRange(swsDepartment, workflowDepartment, hqDepartment);
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

            User swsManagerUser = new User
            {
                UserId = Guid.NewGuid(),
                Role = context.Roles.First(x => x.RoleId == managerRole.RoleId),
                Password = "swsmanager",
                Salutation = "Mr.",
                FirstName = "SWS Manager",
                LastName = "User",
                ContactNumber = "91234569",
                Email = "swsmanager@cloudplus.com",
                IsFirstLogin = false,
                IsApproved = true,
                IsActive = true,
                CreatedDate = DateTime.Now,
                CreatedBy = "Seed",
                UpdatedBy = "Seed",
                UpdatedDate = DateTime.Now
            };

            User swsGroundStaffUser = new User
            {
                UserId = Guid.NewGuid(),
                Role = context.Roles.First(x => x.RoleId == groundStaffRole.RoleId),
                Password = "swsgroundstaff",
                Salutation = "Mr.",
                FirstName = "SWS Ground Staff",
                LastName = "User",
                ContactNumber = "91234560",
                Email = "swsgroundstaff@cloudplus.com",
                IsFirstLogin = false,
                IsApproved = true,
                IsActive = true,
                CreatedDate = DateTime.Now,
                CreatedBy = "Seed",
                UpdatedBy = "Seed",
                UpdatedDate = DateTime.Now
            };

            context.Users.AddRange(adminUser, clientUser, swsManagerUser, swsGroundStaffUser);
            context.SaveChanges();

            Employee swsManagerEmployee = new Employee
            {
                EmployeeId = Guid.NewGuid(),
                User = context.Users.First(x => x.UserId == swsManagerUser.UserId),
                Department = context.Departments.First(x => x.DepartmentId == swsDepartment.DepartmentId),
                PassNum = "SWS001",
                PinNum = "123456",
                IsActive = true,
                CreatedDate = DateTime.Now,
                CreatedBy = "Seed",
                UpdatedBy = "Seed",
                UpdatedDate = DateTime.Now
            };

            Employee swsGroundStaffEmployee = new Employee
            {
                EmployeeId = Guid.NewGuid(),
                User = context.Users.First(x => x.UserId == swsGroundStaffUser.UserId),
                Department = context.Departments.First(x => x.DepartmentId == swsDepartment.DepartmentId),
                PassNum = "SWS002",
                PinNum = "123456",
                IsActive = true,
                CreatedDate = DateTime.Now,
                CreatedBy = "Seed",
                UpdatedBy = "Seed",
                UpdatedDate = DateTime.Now
            };

            Employee adminEmployee = new Employee
            {
                EmployeeId = Guid.NewGuid(),
                User = context.Users.First(x => x.UserId == adminUser.UserId),
                Department = context.Departments.First(x => x.DepartmentId == hqDepartment.DepartmentId),
                PassNum = "HQ001",
                PinNum = "123456",
                IsActive = true,
                CreatedDate = DateTime.Now,
                CreatedBy = "Seed",
                UpdatedBy = "Seed",
                UpdatedDate = DateTime.Now
            };

            context.Employees.AddRange(swsManagerEmployee, swsGroundStaffEmployee, adminEmployee);
            context.SaveChanges();
        }
    }
}
