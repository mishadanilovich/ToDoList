using System.ComponentModel;

namespace API.Data.DTOs
{
    public class CreateTodoDto
    {
        public string Title { get; set; }

        public string Description { get; set; }
    }
}