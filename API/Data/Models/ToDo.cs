using System;

namespace API.Data
{
    public class ToDo
    {
        public int Id { get; set; }
        
        public string Title { get; set; }

        public string Description { get; set; }
        
        public DateTime CompletionDate { get; set; } = DateTime.MinValue;

        public bool IsCompleted { get; set; }
    }
}