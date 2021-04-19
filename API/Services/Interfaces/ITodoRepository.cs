using System.Collections.Generic;
using System.Threading.Tasks;
using API.Data;
using API.Data.DTOs;

namespace API.Services
{
    public interface ITodoRepository
    {
        public Task<List<ToDo>> GetTodoList();
        
        public Task<ToDo> GetTodoById(int id);

        public Task<ToDo> CreateTodo(CreateTodoDto todoDto);

         public Task<ToDo> UpdateTodo(int id, UpdateToDoDto todoDto);

         public Task<bool> DeleteTodoById(int id);

        public Task<ToDo> SetToDoStatusById(int id, bool status);
    }
}