using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CoreApp.Data;
using CoreApp.Web;
using System.Security.Claims;
using CoreApp.Web.Models;

namespace CoreApp.Web.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class CargoController : ControllerBase
	{
		private readonly CoreDbContext _context;

		public CargoController(CoreDbContext context)
		{
			_context = context;
		}

		// GET: api/Cargo
		[HttpGet]
		public async Task<ActionResult<IEnumerable<Cargo>>> GetCargoList()
		{
			// string userId = User.Identity.Name;
			return await GetCargoes().ToListAsync();
		}

		// GET: api/Cargo/5
		[HttpGet("{id}")]
		public async Task<ActionResult<Cargo>> GetCargoById(Guid id)
		{
			var cargo = await GetCargoes()
				.Where(c => c.CargoId.Equals(id))
				.FirstOrDefaultAsync();

			if (cargo == null)
			{
				return NotFound();
			}

			return cargo;
		}

		// PUT: api/Cargo/5
		// To protect from overposting attacks, enable the specific properties you want to bind to, for
		// more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
		[HttpPut("{id}")]
		public async Task<IActionResult> UpdateCargo(Guid id, Cargo cargo)
		{
			if (id != cargo.CargoId)
			{
				return BadRequest();
			}

			_context.Entry(cargo).State = EntityState.Modified;

			try
			{
				await _context.SaveChangesAsync();
			}
			catch (DbUpdateConcurrencyException)
			{
				if (!CargoExists(id))
				{
					return NotFound();
				}
				else
				{
					throw;
				}
			}

			return NoContent();
		}

/*        // POST: api/Cargo
		// To protect from overposting attacks, enable the specific properties you want to bind to, for
		// more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
		[HttpPost]
		[ActionName("")]
		public async Task<ActionResult<Cargo>> PostCargo(Cargo cargo)
		{
			if (ModelState.IsValid)
			{
				cargo.CargoId = Guid.NewGuid();
				_context.Cargoes.Add(cargo);
				await _context.SaveChangesAsync();

				return CreatedAtAction(nameof(GetCargoById), new { id = cargo.CargoId }, cargo);
			}

			return BadRequest(ModelState);
		}*/

		// DELETE: api/Cargo/5
		[HttpDelete("{id}")]
		public async Task<ActionResult<Cargo>> DeleteCargo(Guid id)
		{
			var cargo = await _context.Cargoes.FindAsync(id);
			if (cargo == null)
			{
				return NotFound();
			}

			_context.Cargoes.Remove(cargo);
			await _context.SaveChangesAsync();

			return cargo;
		}

		[HttpGet("warehouse")]
		public async Task<ActionResult<IEnumerable<Warehouse>>> GetWarehouses()
		{
			return await _context.Warehouses.ToListAsync();
		}

		[HttpPost("transfer")]
		public async Task<IActionResult> TransferCargo(CargoTransferModel cargoTransfer)
		{
			Cargo cargo = await _context.Cargoes.FindAsync(cargoTransfer.CargoId);
			Warehouse warehouse = await _context.Warehouses.FindAsync(cargoTransfer.WarehouseId);

			if (cargo == null || warehouse == null)
				return NotFound();

			return Ok(new
			{
				Cargo = cargo,
				Warehouse = warehouse
			});
		}

		private bool CargoExists(Guid id)
		{
			return _context.Cargoes.Any(e => e.CargoId.Equals(id));
		}

		private IQueryable<Cargo> GetCargoes()
		{
			return _context.Cargoes
				.Include(c => c.CargoDetail)
				.Include(c => c.Measurement)
				.Include(c => c.PackagingType)
				.Include(c => c.Location)
					.ThenInclude(location => location.LayoutObj)
						.ThenInclude(layoutObj => layoutObj.Layout)
							.ThenInclude(layout => layout.Module)
								.ThenInclude(module => module.Warehouse)
				.Include(c => c.ItemCargoes)
					.ThenInclude(itemCargo => itemCargo.Item)
						.ThenInclude(item => item.Unit);
		}
	}
}
