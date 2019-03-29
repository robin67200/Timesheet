using System.Collections.Generic;

namespace Timesheet.API.Models
{
    public class User
    {
        public int ID {get; set;}
        public string Name {get; set;}
        public string Residence {get; set;}
        public string Phone {get; set;}
        public string Mail {get; set;}
        public string Statut {get; set;}
        public float Salary {get; set;}
        public ICollection<Day> days {get; set;}
    }
}