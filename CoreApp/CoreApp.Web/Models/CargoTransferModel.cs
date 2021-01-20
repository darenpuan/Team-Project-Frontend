using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoreApp.Web.Models
{
	public class CargoTransferModel
	{
		public Guid CargoId { get; set; }
		public Guid WarehouseId { get; set; }
	}
}
