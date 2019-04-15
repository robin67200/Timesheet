using System.Threading.Tasks;
using Timesheet.API.DataAccess;
using Timesheet.API.Models;

namespace Timesheet.API.DataAccess
{
    public interface IAuthRepository
    {
      Task<Consumer> Register(Consumer consumer, string password);  
      Task<Consumer> Login(string username, string password); 
      Task<bool> ConsumerExists (string username);
    }
}