using System.Collections.Generic;
using System.Threading.Tasks;
using API.Data;
using API.Persistence;
using API.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HistoryController
    {
        private readonly IHistoryRepository _repository;

        public HistoryController(IHistoryRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<List<HistoryTodo>> GetHistoryList()
        {
            return await _repository.GetHistoryListAsync();
        }

        [HttpPut("{id}")]
        public async Task<bool> RestoreFromHistory(int id)
        {
            return await _repository.RestoreTodoFromHistoryAsync(id);
        }

        [HttpDelete("{id}")]
        public async Task<bool> DeleteHistoryItem(int id)
        {
            return await _repository.DeleteHistoryItemAsync(id);
        }
    }
}