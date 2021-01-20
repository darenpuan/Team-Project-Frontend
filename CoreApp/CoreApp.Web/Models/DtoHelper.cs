using CoreApp.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoreApp.Web.Models
{
	public static class DtoHelper
	{
		public static OrderDetailModel ToDTO(this Operation operation)
		{
			OrderDetailModel orderDetailModel = new OrderDetailModel()
			{
				UserEmail = operation.User.Email,
				OrderNumber = operation.OperationId,
				OrderDate = operation.CompletionDate,
				Items = operation.OperationItems,
				Status = operation.OperationStatus
			};
			orderDetailModel.Status.Operations.Clear();
			orderDetailModel.Items.ForEach(operationItem =>
				{
					operationItem.Operation = null;
					operationItem.Item.OperationItems.Clear();
					operationItem.Item.Unit?.Items.Clear();
					operationItem.Item.Unit?.ItemCategory?.Units.Clear();
				});
			return orderDetailModel;
		}

		private static IEnumerable<T> ForEach<T>(this IEnumerable<T> source, Action<T> action)
		{
			if (source == null) throw new ArgumentNullException(nameof(source));
			if (action == null) throw new ArgumentNullException(nameof(action));

			foreach (T item in source)
			{
				action(item);
			}

			return source;
		}
	}
}
