using System.Collections.Generic;

namespace Timesheet.API.Models
{
    public class Client
    {
        public int ID {get; set;}
        public string Name {get; set;}
        public string Residence {get; set;}
        public string Phone {get; set;}
        public string Mail {get; set;}

        public ICollection<Projet> projets {get; set;}
    }
}