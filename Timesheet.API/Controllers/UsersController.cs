using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Timesheet.API.Models;

namespace Timesheet.API.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly TimesheetAPIContext _context;
        public UsersController (TimesheetAPIContext context)
       {
           _context = context;
       }

        // GET api/users
       [HttpGet]
        public async Task<IActionResult> GetUsers()
        {
            var Users = await _context.Users.ToListAsync();

            return Ok(Users);
        }

        // GET api/user/(id)
        
        [HttpGet("{id}")]
        public async Task<IActionResult> GetUser(int id)
        {
            var user = await _context.Users.FirstOrDefaultAsync(x => x.ID == id);

            return Ok(user);
        }

        // POST api/user
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] User user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();
            
            return Ok();
        }

        // PUT api/users/(id)
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] User user)
        {
            var dbUser = _context.Users.FirstOrDefault(x => x.ID == id);
            dbUser.Name = user.Name;
            dbUser.Residence = user.Residence;
            dbUser.Phone = user.Phone;
            dbUser.Mail = user.Mail;
            dbUser.Statut = user.Statut;
            dbUser.Salary = user.Salary;

            _context.Users.Update(dbUser);
            await _context.SaveChangesAsync();

            return Ok();
        }

        // DELETE api/user/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
             var dbUser = _context.Users.FirstOrDefault(x => x.ID == id);
             _context.Remove(dbUser);
             await _context.SaveChangesAsync();

             return Ok();
        } 
    }
}