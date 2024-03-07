using HelloDoctor.HelloDoctor_System.Message_Management.Domain.Models;
using HelloDoctor.HelloDoctor_System.Message_Management.Domain.Repositories;
using HelloDoctor.Shared.Persistence.Contexts;
using HelloDoctor.Shared.Persistence.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace HelloDoctor.HelloDoctor_System.Message_Management.Persistence.Repositories
{
    public class MessageRepository : BaseRepository, IMessageRepository
    {
        public MessageRepository(AppDbContext context) : base(context)
        {
        }

        public async Task<IEnumerable<Message>> ListAsync()
        {
            /*return await _context.Messages
               .Include(p => p.Doctor)
           .ToListAsync();*/

            return await _context.Messages.ToListAsync();



        }

        public async Task AddAsync(Message message)
        {
            await _context.Messages.AddAsync(message);
        }

        public async Task<Message> FindByIdAsync(int messageId)
        {
            /* return await _context.Messages
             .Include(p => p.Doctor)
                 .FirstOrDefaultAsync(p => p.Id == messageId);*/

            return await _context.Messages.FindAsync(messageId);
        }

       /* public async Task<IEnumerable<Message>> FindByDoctorIdAsync(int doctorId)
        {
            return await _context.Messages
                .Where(p => p.DoctorId == doctorId)
            .Include(p => p.Doctor)
                .ToListAsync();
        }*/


        public void Update(Message message)
        {
            _context.Messages.Update(message);
        }

        public void Remove(Message message)
        {
            _context.Messages.Remove(message);
        }
    }
}
