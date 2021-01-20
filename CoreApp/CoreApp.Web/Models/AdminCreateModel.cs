using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace CoreApp.Web.Models
{
    public class AdminCreateModel
    {
        [Key]
        public Guid UserId { get; set; }
        [Required]
        public Guid EmployeeId { get; set; }
        [Required]
        public String Department { get; set; }
        [Required]
        public int RoleId { get; set; }
        [Required]
        public string AccountType { get; set; }
        [Required]
        public string Salutation { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public string ContactNumber { get; set; }
        public string OfficeNumber { get; set; }
        [Required]
        public string Email { get; set; }
        public string Token { get; set; }
        

    }
    
}
