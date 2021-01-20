using CoreApp.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoreApp.Web.Models
{
    public class SendBookingToWmsModel
    {
        public Guid BookingId { get; set; }

        public Guid BookingDetailId { get; set; }

        public Guid ReceivingWareHouseId { get; set; }

        public CargoInfoModel CargoInfo { get; set; }

        
    }
}
