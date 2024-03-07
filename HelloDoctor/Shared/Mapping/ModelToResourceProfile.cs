using AutoMapper;
using HelloDoctor.HelloDoctor_System.Message_Management.Domain.Models;
using HelloDoctor.HelloDoctor_System.Message_Management.Resources;
/*using HelloDoctor.HelloDoctor_System.User_Management.Domain.Models;
using HelloDoctor.HelloDoctor_System.User_Management.Resources;*/


namespace HelloDoctor.Shared.Mapping
{
    public class ModelToResourceProfile: Profile
    {
        public ModelToResourceProfile()
        {
            CreateMap<Message, MessageResource>();
            //CreateMap<Patient, PatientResource>();
           // CreateMap<Doctor, DoctorResource>();

        }
    }
}
