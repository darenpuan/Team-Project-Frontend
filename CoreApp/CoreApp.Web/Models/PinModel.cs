using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoreApp.Web.Models
{
    public class PinModel
    {
        public string CurrentPin { get; set; }
        public string NewPin { get; set; }
        public string ConfirmPin { get; set; }
    }
}