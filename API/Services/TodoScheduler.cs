using System;
using System.ComponentModel;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using API.Data;
using API.Persistence;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace API.Services
{
    public class TodoScheduler
    {
        private readonly IServiceScopeFactory _serviceScopeFactory;

        public TodoScheduler(IServiceScopeFactory serviceScopeFactory)
        {
            _serviceScopeFactory = serviceScopeFactory;
        }
    
        public void DelayToDo(int id)
        {
            var scheduledTask = new Task(async () =>
            {
                await Task.Delay(TimeSpan.FromSeconds(12), CancellationToken.None);
                using var scope = _serviceScopeFactory.CreateScope();
                var _context = scope.ServiceProvider.GetRequiredService<DBContext>();
                var todo = await _context.ToDos.FindAsync(id);
                
                if (todo != null && todo.IsCompleted && !await _context.History.AnyAsync(hi => hi.Id == id)) 
                    await _context.History.AddAsync(new HistoryTodo
                    {
                        Id = todo.Id,
                        Title = todo.Title,
                        Description = todo.Description,
                        CompletionDate = todo.CompletionDate
                    });
                
                await _context.SaveChangesAsync();
            });
            
            scheduledTask.Start();
        }
    }
}