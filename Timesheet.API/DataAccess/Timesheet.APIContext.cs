using Timesheet.API.DataAccess;
using Microsoft.EntityFrameworkCore;
using Timesheet.API.Models;

namespace Timesheet.API.Models
{
    public class TimesheetAPIContext : DbContext
    {
        public TimesheetAPIContext (DbContextOptions<TimesheetAPIContext> options)
            : base(options)
        {
        }

        public DbSet<Timesheet.API.Models.Projet> Projets { get; set; }
        public DbSet<Timesheet.API.Models.Client> Clients { get; set; }

        public DbSet<Timesheet.API.Models.User> Users { get; set; }
        public DbSet<Timesheet.API.Models.Day> Days { get; set; }
        public DbSet<Timesheet.API.Models.Consumer> Consumers {get; set;}

        

       


        protected override void OnModelCreating(ModelBuilder modelBuilder){
            base.OnModelCreating(modelBuilder);

            modelBuilder.ApplyConfiguration(new ClientConfig());
            modelBuilder.ApplyConfiguration(new ProjetConfig());
            modelBuilder.ApplyConfiguration(new UserConfig());
            modelBuilder.ApplyConfiguration(new DayConfig());
            modelBuilder.ApplyConfiguration(new ConsumerConfig());
            


        }



       



    }
}