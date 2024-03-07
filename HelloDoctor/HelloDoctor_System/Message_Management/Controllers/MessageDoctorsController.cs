/*using AutoMapper;
using HelloDoctor.HelloDoctor_System.Message_Management.Domain.Models;
using HelloDoctor.HelloDoctor_System.Message_Management.Domain.Services;
using HelloDoctor.HelloDoctor_System.Message_Management.Resources;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Swashbuckle.AspNetCore.Annotations;
using System.Diagnostics.Tracing;
using System.Net.Mime;

namespace HelloDoctor.HelloDoctor_System.Message_Management.Controllers
{
    [ApiController]
    [Route("/api/v1/doctors/{doctorId}/messages")]
    [Produces(MediaTypeNames.Application.Json)]
    public class MessageDoctorsController  : ControllerBase
    {
        private readonly IMessageService _messageService;
        private readonly IMapper _mapper;

        public MessageDoctorsController(IMessageService messageService, IMapper mapper)
        {
            _messageService = messageService;
            _mapper = mapper;
        }

        [HttpGet]
        [SwaggerOperation(
            Summary = "Get All Messages for given Doctors",
            Description = "Get existing Messages associated with the specified Doctors",
            OperationId = "GetDoctorsMessages",
            Tags = new[] { "Doctors" }
        )]
        public async Task<IEnumerable<MessageResource>> GetAllByIdAsync(int Id)
        {
           /* var messages = await _messageService.ListByDoctorIdAsync(Id);*/
/*
            var resources = _mapper.Map<IEnumerable<Message>, IEnumerable<MessageResource>>(messages);

            return resources;
        }
    }
}*/
