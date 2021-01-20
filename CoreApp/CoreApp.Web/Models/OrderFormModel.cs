using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoreApp.Web.Models
{
    public class OrderFormModel
    {
        public DateTime CompletionDate { get; set; }
        public TimeSpan CompletionTime { get; set; }
        public string ShipperName { get; set; }
        public string ShipperAddress1 { get; set; }
        public string ShipperAddress2 { get; set; }
        public string ShipperContactNo { get; set; }
        public string ShipperEmail { get; set; }
        public string ConsigneeName { get; set; }
        public string ConsigneeAddress1 { get; set; }
        public string ConsigneeAddress2 { get; set; }
        public string ConsigneeContactNo { get; set; }
        public string ConsigneeEmail { get; set; }
   
        public string Remarks { get; set; }
        public Guid BookingId { get; set; }

        public Guid ClientId { get; set; }

        public List<OrderItemModel> orderItems { get; set; }
    

        
    }
}
