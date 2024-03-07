using HelloDoctor.HelloDoctor_System.Message_Management.Domain.Models;
/*using HelloDoctor.HelloDoctor_System.User_Management.Domain.Models;*/
using Microsoft.EntityFrameworkCore;

namespace HelloDoctor.Shared.Persistence.Contexts
{
    public class AppDbContext : DbContext
    {
        /*public DbSet<Patient> Patients { get; set; }
        public DbSet<Doctor> Doctors { get; set; }*/
        public DbSet<Message> Messages { get; set; }
        public AppDbContext(DbContextOptions options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
          /*  builder.Entity<Patient>().ToTable("Patients");
            builder.Entity<Patient>().HasKey(p => p.Id);
            builder.Entity<Patient>().Property(p => p.Id).IsRequired().ValueGeneratedOnAdd();
            builder.Entity<Patient>().Property(p => p.FirstName).IsRequired();
            builder.Entity<Patient>().Property(p => p.LastName).IsRequired();
            builder.Entity<Patient>().Property(p => p.Age).IsRequired();
            builder.Entity<Patient>().Property(p => p.Email).IsRequired();
            builder.Entity<Patient>().Property(p => p.Password).IsRequired();
            builder.Entity<Patient>().Property(p => p.Image).IsRequired();
            builder.Entity<Patient>().Property(p => p.LoggedIn).IsRequired();

            builder.Entity<Doctor>().ToTable("Doctors");
            builder.Entity<Doctor>().HasKey(p => p.Id);
            builder.Entity<Doctor>().Property(p => p.Id).IsRequired().ValueGeneratedOnAdd();
            builder.Entity<Doctor>().Property(p => p.FirstName).IsRequired();
            builder.Entity<Doctor>().Property(p => p.LastName).IsRequired();
            builder.Entity<Doctor>().Property(p => p.Bibliography).IsRequired();
            builder.Entity<Doctor>().Property(p => p.Specialty).IsRequired();
            builder.Entity<Doctor>().Property(p => p.Email).IsRequired();
            builder.Entity<Doctor>().Property(p => p.Password).IsRequired();
            builder.Entity<Doctor>().Property(p => p.Image).IsRequired();
            builder.Entity<Doctor>().Property(p => p.LoggedIn).IsRequired();*/

            builder.Entity<Message>().ToTable("Messages");
            builder.Entity<Message>().HasKey(p => p.Id);
            builder.Entity<Message>().Property(p => p.Id).IsRequired().ValueGeneratedOnAdd();
            builder.Entity<Message>().Property(p => p.PatientId).IsRequired();
            builder.Entity<Message>().Property(p => p.DoctorId).IsRequired();
            builder.Entity<Message>().Property(p => p.Note).IsRequired();
            builder.Entity<Message>().Property(p => p.PatientEmail).IsRequired();
            builder.Entity<Message>().Property(p => p.CreatedDay).IsRequired();
            builder.Entity<Message>().Property(p => p.CreatedHour).IsRequired();





    }

    }
}
