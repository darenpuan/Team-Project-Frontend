using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoreApp.Web.Models
{
    public class SendOrderToWMSModel
    {
        public DateTime CompletionDate { get; set; }
        public TimeSpan CompletionTime { get; set; }

        public Guid BookingId { get; set; }
        public OrderInfoModel OrderInfo { get; set; }

    }
}
