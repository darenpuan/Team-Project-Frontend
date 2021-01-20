using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoreApp.Web.Models
{
    public class BookingFormApprovalModel
    {
        public Guid BookingId { get; set; }
        public string BookingStatus { get; set; }
    }
}
