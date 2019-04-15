
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
    public class ClientsController : ControllerBase
    {
       private readonly TimesheetAPIContext _context;
       public ClientsController (TimesheetAPIContext context)
       {
           _context = context;
       }
       
        // GET api/clients
        
        [HttpGet]
        public async Task<IActionResult> GetClients()
        {
            var clients = await _context.Clients.Include(x => x.projets)
            .ToListAsync();

            return Ok(clients);
        }

        // GET api/clients/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetClient(int id)
        {
            var client = await _context.Clients.Include(x => x.projets)
            .FirstOrDefaultAsync(x => x.ID == id);

            return Ok(client);
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
