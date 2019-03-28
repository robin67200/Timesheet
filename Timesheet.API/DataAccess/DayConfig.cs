using Timesheet.API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Timesheet.API.DataAccess {
    public class DayConfig : IEntityTypeConfiguration<Day>
    {
        public void Configure(EntityTypeBuilder<Day> builder)
        {
            builder.ToTable("Day");
            builder.HasKey(keyExpression: p => new{p.ProjetId, p.UserId, p.Date});

            builder.Property(x => x.UserId).HasColumnName("UserId").HasColumnType("INTEGER").IsRequired();
            builder.Property(x => x.ProjetId).HasColumnName("ProjetId").HasColumnType("INTEGER").IsRequired();
            builder.Property(x => x.Date).HasColumnName("Date").HasColumnType("TEXT").IsRequired();
            builder.Property(x => x.TimeSpent).HasColumnName("TimeSpent").HasColumnType("REAL").IsRequired();



            builder.HasOne(x => x.Projet).WithMany().HasForeignKey(x => x.ProjetId);
            builder.HasOne(x => x.User).WithMany().HasForeignKey(x => x.UserId);

        }
    }
}