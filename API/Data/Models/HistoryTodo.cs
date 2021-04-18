using System;

namespace API.Data
{
    public class HistoryTodo
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public DateTime CompletionDate { get; set; }
    }
}