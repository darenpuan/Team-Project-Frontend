using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoreApp.Web.Models
{
    public class BookingSummaryModel
    {
        public string Email { get; set; }

        public Guid ReferenceNo { get; set; }

        public string CargoName { get; set; }

        public DateTime BookingDate { get; set; }

        public TimeSpan BookingTime { get; set; }

        public string BookingStatus { get; set; }
    }
}
