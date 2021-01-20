using CoreApp.Data;
using System.Collections.Generic;

namespace CoreApp.Web.Services.Interfaces
{
   public interface IUserService
    {
        User Authenticate(string username, string password);
        IEnumerable<User> GetAll();
        User GetById(int id);
    }
}
