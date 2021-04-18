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
        private readonly TodoScheduler _scheduler;

        public ToDosController(ITodoRepository repository, TodoScheduler scheduler)
        {
            _repository = repository;
            _scheduler = scheduler;
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
        public async Task<ToDo> UpdateTaskStatus([FromRoute] int id, [FromBody] ChangeStatusDto statusDto)
        {
            bool status = statusDto.Status;
            var todo = await _repository.SetToDoStatusById(id, status);
            
            if (status) _scheduler.DelayToDo(id);
            
            return todo;
        }

        [HttpPost]
        public async Task<ToDo> CreateTask([FromBody] CreateTodoDto todoDto)
        {
            return await _repository.CreateTodo(todoDto);
        }

        [HttpPost("{id}")]
        public async Task<ToDo> UpdateTask([FromRoute] int id, [FromBody] UpdateToDoDto toDoDto)
        {
            return await _repository.UpdateTodo(id, toDoDto);
        }

        [HttpDelete("{id}")]
        public async Task<bool> DeleteTaskById(int id)
        {
            return await _repository.DeleteTodoById(id);
        }
    }
}