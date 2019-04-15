namespace Timesheet.API.Models
{
    public class Consumer
    {
        public int Id {get; set;}
        public string Username {get; set;}
        public byte[] PasswordHash{get; set;}

        public byte[] PasswordSalt {get; set;}
    }
}