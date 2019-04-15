using System.ComponentModel.DataAnnotations;

namespace Timesheet.API.Dtos
{
    public class ConsumerForRegisterDto
    {
        [Required]
        public string Username {get; set;}
        
        [Required]
        [StringLength(8, MinimumLength = 4, ErrorMessage="Between 4 and 8")]
        public string Password {get; set;}
    }
}