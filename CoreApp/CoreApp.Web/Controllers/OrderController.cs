using CoreApp.Data;
using CoreApp.Web.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace CoreApp.Web.Controllers
{
	[Authorize]
	[Route("api/[controller]")]
	[ApiController]
	public class OrderController : ControllerBase
	{
		private readonly CoreDbContext _context;

		public OrderController(CoreDbContext context)
		{
			_context = context;
		}

		// GET: api/Order
		//[AllowAnonymous]
		[HttpGet]
		public async Task<ActionResult<IEnumerable<OrderDetailModel>>> GetOrderList()
		{
			if (!Guid.TryParse(User.Identity.Name, out Guid userGuid))
			{
				return BadRequest();
			}

			var list = GetOrders();

			if (!User.IsInRole("Admin"))
				list = list.Where(order => order.User.UserId.Equals(userGuid));

			return await list.Select(o => o.ToDTO()).ToListAsync();
		}

		private IQueryable<Operation> GetOrders()
		{
			return _context.Operations
				.Include(o => o.OperationItems)
					.ThenInclude(oi => oi.Item)
						.ThenInclude(item => item.Unit)
							.ThenInclude(unit => unit.ItemCategory)
				.Include(o => o.User)
				.Include(o => o.OperationStatus);
		}
	}
}
