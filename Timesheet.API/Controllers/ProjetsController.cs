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
    public class ProjetsController : ControllerBase
    {
       private readonly TimesheetAPIContext _context;
       public ProjetsController (TimesheetAPIContext context)
       {
           _context = context;
       }
       
        // GET api/projets
        [HttpGet]
        public async Task<IActionResult> GetProjets()
        {
            var projets = await _context.Projets.ToListAsync();

            return Ok(projets);
        }

        // GET api/projets/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetProjet(int id)
        {
            var projet = await _context.Projets.FirstOrDefaultAsync(x => x.ID == id);

            return Ok(projet);
        }

        // POST api/projets
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Projet projet)
        {
            _context.Projets.Add(projet);
            await _context.SaveChangesAsync();
            
            return Ok();
        }

        // PUT api/clients/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Projet projet)
        {
            var dbProjet = _context.Projets.FirstOrDefault(x => x.ID == id);
            dbProjet.Name = projet.Name;
            dbProjet.Type = projet.Type;
            dbProjet.Price = projet.Price;
            dbProjet.ClientId = projet.ClientId;

            _context.Projets.Update(dbProjet);
            await _context.SaveChangesAsync();

            return Ok();
        }

        // DELETE api/clients/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
             var dbProjet = _context.Projets.FirstOrDefault(x => x.ID == id);
             _context.Remove(dbProjet);
             await _context.SaveChangesAsync();

             return Ok();
        } 
    }
}