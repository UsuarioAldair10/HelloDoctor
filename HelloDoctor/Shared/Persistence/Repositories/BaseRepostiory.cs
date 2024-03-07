using HelloDoctor.Shared.Persistence.Contexts;

namespace HelloDoctor.Shared.Persistence.Repositories
{
    public class BaseRepository
    {
        protected readonly AppDbContext _context;

        public BaseRepository(AppDbContext context)
        {
            _context = context;
        }
    }
}

