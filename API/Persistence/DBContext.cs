using System.ComponentModel.DataAnnotations.Schema;
using API.Data;
using Microsoft.EntityFrameworkCore;

namespace API.Persistence
{
    public class DBContext : DbContext
    {
        
        public DbSet<ToDo> ToDos { get; set; }
        
        public DbSet<HistoryTodo> History { get; set; }
        
        public DBContext(DbContextOptions<DBContext> options)
            : base(options)
        {
            Database.EnsureCreated();
        }
    }
}