using System.ComponentModel.DataAnnotations;

namespace HelloDoctor.HelloDoctor_System.Message_Management.Resources
{
    public class SaveMessageResource
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public int PatientId { get; set; }
        [Required]
        public int DoctorId { get; set; }
        [MaxLength(200)]
        public string Note { get; set; }
        [Required]
        public string PatientEmail { get; set; }

        public string CreatedDay { get; set; }
        public string CreatedHour { get; set; }
    }
}
