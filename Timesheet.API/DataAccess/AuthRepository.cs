using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Timesheet.API.Models;

namespace Timesheet.API.DataAccess
{
    public class AuthRepository : IAuthRepository
    {
        private readonly TimesheetAPIContext _context;
        public AuthRepository(TimesheetAPIContext context)
        {
            _context = context;

        }
        public async Task<bool> ConsumerExists(string username)
        {
           if (await _context.Consumers.AnyAsync(x => x.Username == username))
            return true;

           return false;
        }

        public async Task<Consumer> Login(string username, string password)
        {
            var consumer = await _context.Consumers.FirstOrDefaultAsync(x => x.Username == username);

            if (consumer == null)
                return null;

            if (!VerifyPasswordHash(password, consumer.PasswordHash, consumer.PasswordSalt))
                return null;

            return consumer;
        }

        private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {
           using(var hmac = new System.Security.Cryptography.HMACSHA512(passwordSalt))
           {
               var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
               for (int i = 0; i < computedHash.Length; i++)
               {
                   if(computedHash[i] != passwordHash[i]) return false;
               }

           }
           return true;

        }

        public async Task<Consumer> Register(Consumer consumer, string password)
        {
             byte[] passwordHash, passwordSalt;
            CreatePasswordHash(password, out passwordHash, out passwordSalt);

            consumer.PasswordHash = passwordHash;
            consumer.PasswordSalt = passwordSalt;

            await _context.Consumers.AddAsync(consumer);
            await _context.SaveChangesAsync();

            return consumer;
        }

        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
           using(var hmac = new System.Security.Cryptography.HMACSHA512())
           {
               passwordSalt = hmac.Key;
               passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
           }

        }
    }
}