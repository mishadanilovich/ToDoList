﻿using System;
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
            return await _context.ToDos.FirstAsync(todo => todo.Id == id);
        }

        public async Task<ToDo> CreateTodo(CreateTodoDto todoDto)
        {
            var newTodo = new ToDo
            {
                Title = todoDto.Title,
                Description = todoDto.Description,
                IsCompleted = false
            };
            
            await _context.ToDos.AddAsync(newTodo);
            await _context.SaveChangesAsync();

            return newTodo;
        }

        public async Task<ToDo> UpdateTodo(int id, UpdateToDoDto todoDto)
        {
            var todo = await GetTodoById(id);

            todo.Title = todoDto.Title;
            todo.Description = todoDto.Description;

            await _context.SaveChangesAsync();

            return todo;
        }

        public async Task<bool> DeleteTodoById(int id)
        {
            var todo = await GetTodoById(id);
            if (todo != null) _context.ToDos.Remove(todo);

            return await _context.SaveChangesAsync() == 1;
        }

        public async Task<ToDo> SetToDoStatusById(int id, bool status)
        {
            var todo = await GetTodoById(id);
            todo.IsCompleted = status;

            if (!status) todo.CompletionDate = DateTime.MinValue;
            else todo.CompletionDate = DateTime.Now;
            
            await _context.SaveChangesAsync();

            return todo;
        }
    }
}