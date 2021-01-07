using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using CoreApp.Data;

namespace CoreApp.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SampleContainersController : ControllerBase
    {
        private readonly ILogger<SampleContainersController> _logger;

        public SampleContainersController(ILogger<SampleContainersController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Container> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new Container
            {
                ContainerCode = rng.Next().ToString(),
                ContainerId = new Guid(),
                DisplayValue = "Test Value"
            })
            .ToArray();
        }
    }
}
