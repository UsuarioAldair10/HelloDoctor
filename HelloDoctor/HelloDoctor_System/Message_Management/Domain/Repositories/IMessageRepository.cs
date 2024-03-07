using HelloDoctor.HelloDoctor_System.Message_Management.Domain.Models;
using Microsoft.Extensions.Logging;

namespace HelloDoctor.HelloDoctor_System.Message_Management.Domain.Repositories
{
    public interface IMessageRepository
    {
        Task<IEnumerable<Message>> ListAsync();
        Task AddAsync(Message message);
        Task<Message> FindByIdAsync(int messageId);
       /* Task<IEnumerable<Message>> FindByDoctorIdAsync(int doctorId);*/
        void Update(Message message);
        void Remove(Message message);
    }
}
