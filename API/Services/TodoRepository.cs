using System.Collections.Generic;
using System.Threading.Tasks;
using API.Data;
using API.Data.DTOs;
using API.Persistence;
using Microsoft.EntityFrameworkCore;

namespace API.Services
{
    public class TodoRepository : ITodoRepository
    {
        private readonly DBContext _context;

        public TodoRepository(DBContext context)
        {
            _context = context;
        }


        public async Task<List<ToDo>> GetTodoList()
        {
            return await _context.ToDos.ToListAsync();
        }

        public async Task<ToDo> GetTodoById(int id)
        {
            return await _context.ToDos.FirstOrDefaultAsync(todo => todo.Id == id);
        }

        public async Task<ToDo> CreateTodo(CreateTodoDto todoDto)
        {
            var newTodo = new ToDo
            {
                Title = todoDto.Title,
                Description = todoDto.Description,
                Completed = false
            };
            
            await _context.ToDos.AddAsync(newTodo);
            await _context.SaveChangesAsync();

            return newTodo;
        }

        public async Task<bool> DeleteTodoById(int id)
        {
            var todo = await GetTodoById(id);
            _context.ToDos.Remove(todo);

            return await _context.SaveChangesAsync() == 1;
        }

        public async Task<ToDo> SetToDoStatusById(int id, bool status)
        {
            var todo = await GetTodoById(id);
            todo.Completed = status;

            await _context.SaveChangesAsync();

            return todo;
        }
    }
}