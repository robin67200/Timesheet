using System.Collections.Generic;

namespace Timesheet.API.Models
{
    public class Projet
    {
        public int ID {get; set;}
        public string Name {get; set;}
        public string Type {get; set;}
        public float Price {get; set;}
        public int ClientId {get; set;}

        public ICollection<Day> Days {get; set;}
    }
}