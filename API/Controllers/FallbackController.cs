using Microsoft.AspNetCore.Mvc;
using System.IO;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FallbackController
    {
        public IActionResult Index()
        {
            return new PhysicalFileResult(Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "index.html"), "text/HTML");
        }
    }
}