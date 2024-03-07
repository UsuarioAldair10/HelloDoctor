//using HelloDoctor.HelloDoctor_System.User_Management.Resources;

namespace HelloDoctor.HelloDoctor_System.Message_Management.Resources
{
    public class MessageResource
    {
        public int Id { get; set; }
        public int PatientId { get; set; }
        public int DoctorId { get; set; }
       // public DoctorResource Doctor { get; set; }
        public string Note { get; set; }
        public string PatientEmail { get; set; }
        
    }
}
