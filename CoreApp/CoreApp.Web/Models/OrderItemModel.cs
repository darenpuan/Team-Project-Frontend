using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoreApp.Web.Models
{
    public class OrderItemModel
    {
        public string Type { get; set; }
        public string Category { get; set; }
        public string Name { get; set; }
        public double TotalWeight { get; set; }
    }
}
