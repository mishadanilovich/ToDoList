using System.Collections.Generic;
using System.Threading.Tasks;
using API.Data;
using API.Persistence;
using Microsoft.EntityFrameworkCore;

namespace API.Services
{
    public class HistoryRepository : IHistoryRepository
    {
        private readonly DBContext _context;

        public HistoryRepository(DBContext context)
        {
            _context = context;
        }
        
        public async Task<List<HistoryTodo>> GetHistoryListAsync()
        {
            return await _context.History.ToListAsync();
        }

        public async Task<bool> RestoreTodoFromHistoryAsync(int id)
        {
            var historyTodo = await _context.History.FirstAsync(hi => hi.Id == id);
            if (historyTodo == null) return false;
            
            if (await _context.ToDos.AnyAsync(toDo => toDo.Id == id)) return false;
            
            await _context.ToDos.AddAsync(new ToDo
            {
                Id = id,
                Title = historyTodo.Title,
                Description = historyTodo.Description,
                CompletionDate = historyTodo.CompletionDate,
                IsCompleted = true
            });

            return await _context.SaveChangesAsync() == 1;
        }

        public async Task<bool> DeleteHistoryItemAsync(int id)
        {
            var historyTodo = await _context.History.FirstAsync(hi => hi.Id == id);
            _context.Remove(historyTodo);

            return await _context.SaveChangesAsync() == 1;
        }
    }
}