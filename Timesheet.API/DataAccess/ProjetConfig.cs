using Timesheet.API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Timesheet.API.DataAccess {
    public class ProjetConfig : IEntityTypeConfiguration<Projet>
    {
        public void Configure(EntityTypeBuilder<Projet> builder)
        {
            builder.ToTable("Projet");
            builder.HasKey(p => p.ID);
            
            builder.Property(x => x.ID).HasColumnName("ID").HasColumnType("INTEGER").IsRequired();
            builder.Property(x => x.Name).HasColumnName("Name").HasColumnType("TEXT").IsRequired();
            builder.Property(x => x.Type).HasColumnName("Type").HasColumnType("TEXT").IsRequired();
            builder.Property(x => x.Price).HasColumnName("Price").HasColumnType("REAL").IsRequired();
            builder.Property(x => x.ClientId).HasColumnName("ClientId").HasColumnType("INTEGER").IsRequired();

        }
    }
}