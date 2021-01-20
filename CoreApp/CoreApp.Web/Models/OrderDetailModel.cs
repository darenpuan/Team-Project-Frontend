using CoreApp.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoreApp.Web.Models
{
	public class OrderDetailModel
	{
		public string UserEmail { get; set; }
		public Guid OrderNumber { get; set; }
		public DateTime OrderDate { get; set; }
		public IEnumerable<OperationItem> Items { get; set; }
		public OperationStatus Status { get; set; }
	}
}
