using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoreApp.Web.Models
{
    public class OrderInfoModel
    {
        public string Remarks { get; set; }
        public List<OrderItemModel> OrderItems { get; set; }
    }
}
