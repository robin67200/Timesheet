using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Timesheet.API.Models;

namespace Timesheet.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DaysController : ControllerBase
    {
       private readonly TimesheetAPIContext _context;
       public DaysController (TimesheetAPIContext context)
       {
           _context = context;
       }
       
        // GET api/days
        [HttpGet]
        public async Task<IActionResult> GetDays()
        {
            var days = await _context.Days.ToListAsync();

            return Ok(days);
        }

        // GET api/days/5
        [HttpGet("{userId}/{projetId}/{date}")]
        public async Task<IActionResult> GetDay(int userId, int projetId, DateTime date )
        {
            var day = await _context.Days.FirstOrDefaultAsync(x => x.UserId == userId && x.ProjetId == projetId && x.Date == date);

            return Ok(day);
        }

        // POST api/clients
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Client client)
        {
            _context.Clients.Add(client);
            await _context.SaveChangesAsync();
            
            return Ok();
        }

        // PUT api/clients/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Client client)
        {
            var dbClient = _context.Clients.FirstOrDefault(x => x.ID == id);
            dbClient.Name = client.Name;
            dbClient.Residence = client.Residence;
            dbClient.Phone = client.Phone;
            dbClient.Mail = client.Mail;

            _context.Clients.Update(dbClient);
            await _context.SaveChangesAsync();

            return Ok();
        }

        // DELETE api/clients/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
             var dbClient = _context.Clients.FirstOrDefault(x => x.ID == id);
             _context.Remove(dbClient);
             await _context.SaveChangesAsync();

             return Ok();
        } 
    }
}
