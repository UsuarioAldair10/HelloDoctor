using HelloDoctor.HelloDoctor_System.Message_Management.Domain.Models;
using HelloDoctor.HelloDoctor_System.Message_Management.Domain.Services.Communication;
using Microsoft.Extensions.Logging;

namespace HelloDoctor.HelloDoctor_System.Message_Management.Domain.Services
{
    public interface IMessageService
    {
        Task<IEnumerable<Message>> ListAsync();
       /* Task<IEnumerable<Message>> ListByDoctorIdAsync(int doctorId);*/
        Task<MessageResponse> SaveAsync(Message message);
        Task<MessageResponse> UpdateAsync(int messageId, Message message);
        Task<MessageResponse> DeleteAsync(int messageId);
    }
}
