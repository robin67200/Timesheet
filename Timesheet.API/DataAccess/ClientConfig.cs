using Timesheet.API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Timesheet.API.DataAccess {
    public class ClientConfig : IEntityTypeConfiguration<Client>
    {
        public void Configure(EntityTypeBuilder<Client> builder)
        {
            builder.ToTable("Client");
            builder.HasKey(p => p.ID);

            builder.Property(x => x.ID).HasColumnName("ID").HasColumnType("INTEGER").IsRequired();
            builder.Property(x => x.Name).HasColumnName("Name").HasColumnType("TEXT").IsRequired();
            builder.Property(x => x.Residence).HasColumnName("Residence").HasColumnType("TEXT").IsRequired();
            builder.Property(x => x.Phone).HasColumnName("Phone").HasColumnType("TEXT").IsRequired();
            builder.Property(x => x.Mail).HasColumnName("Mail").HasColumnType("TEXT").IsRequired();
        }
    }
}