using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using CoreApp.Data;
using CoreApp.Web.Helpers;
using CoreApp.Web.Services.Interfaces;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

namespace CoreApp.Web.Services.MockUserServices
{
    public class MockUserService: IUserService
    {
        // users hardcoded for simplicity, store in a db with hashed passwords in production applications
        private List<User> users = new List<User>
        {
            new User { UserId = Guid.NewGuid(), Role = new Role{ RoleId = 0,
            DisplayValue = "Admin", IsActive = true, CreatedBy = "SEED",
                CreatedDate = DateTime.Now, UpdatedBy = "SEED",
                UpdatedDate = DateTime.Now },
                Password = "admin", Salutation = "Mr.", FirstName = "Admin",
                LastName = "User", ContactNumber = "91234567",
                Email = "admin@admin.com", IsActive = true,
                CreatedBy = "SEED", CreatedDate = DateTime.Now,
                UpdatedBy = "SEED", UpdatedDate = DateTime.Now },

            new User { UserId = Guid.NewGuid(), Role = new Role{ RoleId = 1,
            DisplayValue = "User", IsActive = true, CreatedBy = "SEED",
                CreatedDate = DateTime.Now, UpdatedBy = "SEED",
                UpdatedDate = DateTime.Now },
                Password = "user", Salutation = "Mr.", FirstName = "Normal",
                LastName = "User", ContactNumber = "91234568",
                Email = "user@user.com", IsActive = true,
                CreatedBy = "SEED", CreatedDate = DateTime.Now,
                UpdatedBy = "SEED", UpdatedDate = DateTime.Now },
        };

        private readonly AppSettings appSettings;

        public MockUserService(IOptions<AppSettings> appSettings)
        {
            this.appSettings = appSettings.Value;
        }

        public User Authenticate(string email, string password)
        {
            var user = users.SingleOrDefault(x => x.Email == email && x.Password == password);

            // return null if user not found
            if (user == null)
                return null;

            // authentication successful so generate jwt token
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(appSettings.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, user.UserId.ToString()),
                    new Claim(ClaimTypes.Role, user.Role.DisplayValue)
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            user.Token = tokenHandler.WriteToken(token);

            return user.WithoutPassword();
        }

        public IEnumerable<User> GetAll()
        {
            return users.WithoutPasswords();
        }

        public User GetById(int id)
        {
            var user = users.Skip(id).First();
            if (user == null)
                return null;

            return user.WithoutPassword();
        }
    }
}
