﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Timesheet.API.Models;

namespace Timesheet.API.Migrations
{
    [DbContext(typeof(TimesheetAPIContext))]
    [Migration("20190328105111_a")]
    partial class a
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.3-servicing-35854");

            modelBuilder.Entity("Timesheet.API.Models.Client", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("ID")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Mail")
                        .IsRequired()
                        .HasColumnName("Mail")
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnName("Name")
                        .HasColumnType("TEXT");

                    b.Property<string>("Phone")
                        .IsRequired()
                        .HasColumnName("Phone")
                        .HasColumnType("TEXT");

                    b.Property<string>("Residence")
                        .IsRequired()
                        .HasColumnName("Residence")
                        .HasColumnType("TEXT");

                    b.HasKey("ID");

                    b.ToTable("Client");
                });

            modelBuilder.Entity("Timesheet.API.Models.Day", b =>
                {
                    b.Property<int>("ProjetId")
                        .HasColumnName("ProjetId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("UserId")
                        .HasColumnName("UserId")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("Date")
                        .HasColumnName("Date")
                        .HasColumnType("TEXT");

                    b.Property<float>("TimeSpent")
                        .HasColumnName("TimeSpent")
                        .HasColumnType("REAL");

                    b.HasKey("ProjetId", "UserId", "Date");

                    b.HasIndex("UserId");

                    b.ToTable("Day");
                });

            modelBuilder.Entity("Timesheet.API.Models.Projet", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("ID")
                        .HasColumnType("INTEGER");

                    b.Property<int>("ClientId")
                        .HasColumnName("ClientId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnName("Name")
                        .HasColumnType("TEXT");

                    b.Property<float>("Price")
                        .HasColumnName("Price")
                        .HasColumnType("REAL");

                    b.Property<string>("Type")
                        .IsRequired()
                        .HasColumnName("Type")
                        .HasColumnType("TEXT");

                    b.HasKey("ID");

                    b.HasIndex("ClientId");

                    b.ToTable("Projet");
                });

            modelBuilder.Entity("Timesheet.API.Models.User", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("ID")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Mail")
                        .IsRequired()
                        .HasColumnName("Mail")
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnName("Name")
                        .HasColumnType("TEXT");

                    b.Property<string>("Phone")
                        .IsRequired()
                        .HasColumnName("Phone")
                        .HasColumnType("TEXT");

                    b.Property<string>("Residence")
                        .IsRequired()
                        .HasColumnName("Residence")
                        .HasColumnType("TEXT");

                    b.Property<float>("Salary")
                        .HasColumnName("Salary")
                        .HasColumnType("REAL");

                    b.Property<string>("Statut")
                        .IsRequired()
                        .HasColumnName("Statut")
                        .HasColumnType("TEXT");

                    b.HasKey("ID");

                    b.ToTable("User");
                });

            modelBuilder.Entity("Timesheet.API.Models.Day", b =>
                {
                    b.HasOne("Timesheet.API.Models.Projet", "Projet")
                        .WithMany()
                        .HasForeignKey("ProjetId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Timesheet.API.Models.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Timesheet.API.Models.Projet", b =>
                {
                    b.HasOne("Timesheet.API.Models.Client", "Client")
                        .WithMany()
                        .HasForeignKey("ClientId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
