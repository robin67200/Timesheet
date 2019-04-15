using Timesheet.API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Timesheet.API.DataAccess {
    public class ConsumerConfig : IEntityTypeConfiguration<Consumer>
    {
        public void Configure(EntityTypeBuilder<Consumer> builder)
        {
            builder.ToTable("Consumer");
            builder.HasKey(p => p.Id);

            builder.Property(x => x.Id).HasColumnName("Id").HasColumnType("INTEGER").IsRequired();
            builder.Property(x => x.Username).HasColumnName("Username").HasColumnType("TEXT").IsRequired();
            builder.Property(x => x.PasswordHash).HasColumnName("PasswordHash").HasColumnType("BLOB").IsRequired();
            builder.Property(x => x.PasswordSalt).HasColumnName("PasswordSalt").HasColumnType("BLOB").IsRequired();
            
        }
    }
}