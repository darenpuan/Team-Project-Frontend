using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace CoreApp.Web.Models
{
    public class AccountConfigurationModel
    {
        [Key]
        public Guid UserId { get; set; }
        [Required]
        public string AccountType { get; set; }
        [Required]
        public string AccountStatus { get; set; }


    }

}
