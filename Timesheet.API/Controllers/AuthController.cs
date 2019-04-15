using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Timesheet.API.DataAccess;
using Timesheet.API.Dtos;
using Timesheet.API.Models;

namespace Timesheet.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository _repo;
        private readonly IConfiguration _config;

        public AuthController(IAuthRepository repo, IConfiguration config)
        {
            _config = config;
            _repo = repo;

        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(ConsumerForRegisterDto userForRegisterDto)
        {
            // validate request


            userForRegisterDto.Username = userForRegisterDto.Username.ToLower();

            if (await _repo.ConsumerExists(userForRegisterDto.Username))
                return BadRequest("Consumer already exists");

            var consumerToCreate = new Consumer
            {
                Username = userForRegisterDto.Username
            };

            var createdConsumer = await _repo.Register(consumerToCreate, userForRegisterDto.Password);

            return StatusCode(201);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(ConsumerForLoginDto consumerForloginDto)
        {
            var consumerFromRepo = await _repo.Login(consumerForloginDto.Username.ToLower(), consumerForloginDto.Password);

            if (consumerFromRepo == null)
                return Unauthorized();

            var claims = new[]
            {
                    new Claim(ClaimTypes.NameIdentifier, consumerFromRepo.Id.ToString()),
                    new Claim(ClaimTypes.Name, consumerFromRepo.Username)
                };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config.GetSection("AppSettings:Token").Value));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = creds
            };

            var tokenHandler = new JwtSecurityTokenHandler();

            var token = tokenHandler.CreateToken(tokenDescriptor);

            return Ok(new {
                token = tokenHandler.WriteToken(token)
            });
        }
    }
}