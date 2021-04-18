using System.Collections.Generic;
using System.Threading.Tasks;
using API.Data;

namespace API.Services
{
    public interface IHistoryRepository
    {
        public Task<List<HistoryTodo>> GetHistoryListAsync();

        public Task<bool> RestoreTodoFromHistoryAsync(int id);

        public Task<bool> DeleteHistoryItemAsync(int id);
    }
}