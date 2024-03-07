using AutoMapper;
using HelloDoctor.HelloDoctor_System.Message_Management.Domain.Models;
using HelloDoctor.HelloDoctor_System.Message_Management.Resources;
/*using HelloDoctor.HelloDoctor_System.User_Management.Domain.Models;
using HelloDoctor.HelloDoctor_System.User_Management.Resources;*/
using Microsoft.Extensions.Logging;
using Mysqlx.Notice;
using System.Runtime.ConstrainedExecution;

namespace HelloDoctor.Shared.Mapping
{
    public class ResourceToModelProfile : Profile
    {
        public ResourceToModelProfile()
        {
            /*CreateMap<SaveDoctorResource, Doctor>();
            CreateMap<SavePatientResource, Patient>();
            CreateMap<SaveMessageResource, Message>();*/


        }
    }
}
