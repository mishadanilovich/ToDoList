using System.Collections.Generic;
using System.Threading.Tasks;
using API.Data;
using API.Data.DTOs;
using API.Persistence;
using API.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ToDosController
    {
        private readonly ITodoRepository _repository;

        public ToDosController(ITodoRepository repository)
        {
            _repository = repository;
        }  
        
        [HttpGet]
        public async Task<IEnumerable<ToDo>> GetTodos()
        {
            return await _repository.GetTodoList();
        }

        [HttpGet("{id}")]
        public async Task<ToDo> GetTodoById(int id)
        {
            return await _repository.GetTodoById(id);
        }
        
        [HttpPatch("{id}")]
        public async Task<ToDo> UpdateTaskStatus([FromRoute] int id, [FromBody] ChangeStatusDto status)
        {
            return await _repository.SetToDoStatusById(id, status.Status);
        }

        [HttpPost]
        public async Task<ToDo> CreateTask([FromBody] CreateTodoDto todoDto)
        {
            return await _repository.CreateTodo(todoDto);
        }

        [HttpDelete("{id}")]
        public async Task<bool> DeleteTaskById(int id)
        {
            return await _repository.DeleteTodoById(id);
        }
    }
}