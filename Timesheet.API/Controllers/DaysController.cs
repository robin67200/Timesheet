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

        // GET api/days/(userid)/(projetid)/(date)
        [HttpGet("{userId}/{projetId}/{date}")]
        public async Task<IActionResult> GetDay(int userId, int projetId, DateTime date)
        {
            var days = await _context.Days.ToListAsync();
            var day = days.FirstOrDefault(x => x.UserId == userId && x.ProjetId == projetId && x.Date == date);

            return Ok(day);
        }

        // POST api/days
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Day day)
        {
            _context.Days.Add(day);
            await _context.SaveChangesAsync();
            
            return Ok();
        }

        // PUT api/clients/5
        [HttpPut("{userId}/{projetId}/{date}")]
        public async Task<IActionResult> Put(int userId, int projetId, DateTime date, [FromBody] Day day)
        {
            var dbDays = await _context.Days.ToListAsync();
            var dbDay = dbDays.FirstOrDefault(x => x.UserId == userId && x.ProjetId == projetId && x.Date == date);
            dbDay.TimeSpent = day.TimeSpent;
            _context.Days.Update(dbDay);
            await _context.SaveChangesAsync();

            return Ok();
        }

        // DELETE api/clients/5
        [HttpDelete("{userId}/{projetId}/{date}")]
        public async Task<IActionResult> Delete(int userId, int projetId, DateTime date)
        {
            var dbDays = await _context.Days.ToListAsync();
            var dbDay = dbDays.FirstOrDefault(x => x.UserId == userId && x.ProjetId == projetId && x.Date == date);
            _context.Remove(dbDay);
            await _context.SaveChangesAsync();
            return Ok();
        } 
    }
}
