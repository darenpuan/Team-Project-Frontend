using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace CoreApp.Web.Models
{
    public class AdminOrderList
    {
        public string Email { get; set; }
        public Guid OrderNumber { get; set; }
        public DateTime CompletionDate { get; set; }
        public string Status { get; set; }
    }
}
