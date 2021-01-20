using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoreApp.Web.Models
{
    public class CargoModel
    {

        public string ItemType { get; set; }
        public string Category { get; set; }
        public string ItemName { get; set; }
        public string Batch { get; set; }
        public int Quantity { get; set; }

        public DateTime ExpiryDate { get; set; }
    }
}
