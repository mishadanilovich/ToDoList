using System.Collections.Generic;
using System.Threading.Tasks;
using API.Data;
using API.Persistence;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ToDosController
    {
        private readonly DBContext _context;

        public ToDosController(DBContext context)
        {
            _context = context;
        }  
        
        [HttpGet]
        public async Task<IEnumerable<ToDo>> GetToDos()
        {
            return await _context.ToDos.ToListAsync();
        }
    }
}