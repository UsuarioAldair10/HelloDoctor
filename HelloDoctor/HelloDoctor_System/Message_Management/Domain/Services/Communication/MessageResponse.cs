using HelloDoctor.HelloDoctor_System.Message_Management.Domain.Models;
using HelloDoctor.Shared.Domain.Services.Communication;
using Microsoft.Extensions.Logging;

namespace HelloDoctor.HelloDoctor_System.Message_Management.Domain.Services.Communication
{
    public class MessageResponse : BaseResponse<Message>
    {
        public MessageResponse(string message) : base(message)
        {
        }

        public MessageResponse(Message resource) : base(resource)
        {
        }
    }
}
