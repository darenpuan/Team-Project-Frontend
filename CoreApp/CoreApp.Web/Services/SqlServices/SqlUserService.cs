using CoreApp.Data;
using CoreApp.Web.Helpers;
using CoreApp.Web.Services.Interfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace CoreApp.Web.Services.SqlServices
{
    public class SqlUserService : IUserService
    {
        private readonly CoreDbContext context;
        private readonly AppSettings appSettings;
        public SqlUserService(CoreDbContext context, IOptions<AppSettings> appSettings)
        {
            this.context = context;
            this.appSettings = appSettings.Value;
        }

        public User Authenticate(string email, string password)
        {
            var user = context.Users.SingleOrDefault(x => x.Email == email && x.Password == password);
            
            // return null if user not found
            if (user == null)
                return null;

            // authentication successful so generate jwt token
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(appSettings.Secret);

            var EmployeeClaimsIdentity = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, user.UserId.ToString()),
                    new Claim(ClaimTypes.Role, context.Roles.Include(x => x.Users).FirstOrDefault(x=> x.Users.Any(y=> y.UserId == user.UserId)).DisplayValue)
                });

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, user.UserId.ToString()),
                    new Claim(ClaimTypes.Role, context.Roles.Include(x => x.Users).FirstOrDefault(x=> x.Users.Any(y=> y.UserId == user.UserId)).DisplayValue)
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            user.Token = tokenHandler.WriteToken(token);
            context.SaveChanges();
            return user.WithoutPassword();
        }

        public IEnumerable<User> GetAll()
        {
            return context.Users.ToList().WithoutPasswords();
        }

        public User GetById(int id)
        {
            return context.Users.ToList().OrderBy(x => x.CreatedDate).ElementAt(id);
        }

        public bool IsEmployee(Guid userId)
        {
            return context.Employees.Any(x => x.User.UserId == userId);
        }
    }   
}
