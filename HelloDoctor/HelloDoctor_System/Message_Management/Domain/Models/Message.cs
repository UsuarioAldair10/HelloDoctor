//using HelloDoctor.HelloDoctor_System.User_Management.Domain.Models;

namespace HelloDoctor.HelloDoctor_System.Message_Management.Domain.Models
{
    public class Message
    {
        public int Id { get; set; }
        public int PatientId { get; set; }
        public int DoctorId { get; set; }
       // public Doctor Doctor { get; set; }
        public string Note { get; set; }
        public string PatientEmail { get; set; }
        public string CreatedDay { get; set; }
        public string CreatedHour { get; set; }


    }
}
