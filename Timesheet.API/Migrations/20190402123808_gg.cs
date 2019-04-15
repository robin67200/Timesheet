using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Timesheet.API.Migrations
{
    public partial class gg : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Consumers",
                table: "Consumers");

            migrationBuilder.RenameTable(
                name: "Consumers",
                newName: "Consumer");

            migrationBuilder.AlterColumn<string>(
                name: "Username",
                table: "Consumer",
                type: "TEXT",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AlterColumn<byte[]>(
                name: "PasswordSalt",
                table: "Consumer",
                type: "BLOB",
                nullable: false,
                oldClrType: typeof(byte[]),
                oldNullable: true);

            migrationBuilder.AlterColumn<byte[]>(
                name: "PasswordHash",
                table: "Consumer",
                type: "BLOB",
                nullable: false,
                oldClrType: typeof(byte[]),
                oldNullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Consumer",
                table: "Consumer",
                column: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Consumer",
                table: "Consumer");

            migrationBuilder.RenameTable(
                name: "Consumer",
                newName: "Consumers");

            migrationBuilder.AlterColumn<string>(
                name: "Username",
                table: "Consumers",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "TEXT");

            migrationBuilder.AlterColumn<byte[]>(
                name: "PasswordSalt",
                table: "Consumers",
                nullable: true,
                oldClrType: typeof(byte[]),
                oldType: "BLOB");

            migrationBuilder.AlterColumn<byte[]>(
                name: "PasswordHash",
                table: "Consumers",
                nullable: true,
                oldClrType: typeof(byte[]),
                oldType: "BLOB");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Consumers",
                table: "Consumers",
                column: "Id");
        }
    }
}
