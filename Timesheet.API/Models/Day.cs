using System;
using System.ComponentModel.DataAnnotations;

namespace Timesheet.API.Models
{
    public class Day
    {
        public int UserId {get; set;}
        public int ProjetId {get; set;}
        [DataType(DataType.Date)]
        public DateTime Date { get; set; }
        public float TimeSpent { get; set; }
    }
}