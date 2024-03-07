using HelloDoctor.HelloDoctor_System.Message_Management.Domain.Repositories;
using HelloDoctor.HelloDoctor_System.Message_Management.Domain.Services;
using HelloDoctor.HelloDoctor_System.Message_Management.Persistence.Repositories;
using HelloDoctor.HelloDoctor_System.Message_Management.Services;
/*using HelloDoctor.HelloDoctor_System.User_Management.Domain.Repositories;
using HelloDoctor.HelloDoctor_System.User_Management.Domain.Services;
using HelloDoctor.HelloDoctor_System.User_Management.Persistence.Repositories;
using HelloDoctor.HelloDoctor_System.User_Management.Services;*/
using HelloDoctor.Shared.Domain.Repositories;
using HelloDoctor.Shared.Mapping;
using HelloDoctor.Shared.Persistence.Contexts;
using HelloDoctor.Shared.Persistence.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorPages();
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options =>
{

    options.SwaggerDoc("v1", new OpenApiInfo
    {
        Version = "v1",
        Title = " GettingBetter.org API",
        Description = "GettingBetter.org RESTful API",
        TermsOfService = new Uri("https://acme-challenge.com/tos"),
        Contact = new OpenApiContact
        {
            Name = "GettingBetter.org.studio",
            Url = new Uri("https://acme.studio")
        },
        License = new OpenApiLicense
        {
            Name = "GettingBetter.org Resources License",
            Url = new Uri("https://acme-challenge.com/license")
        }
    });
    options.EnableAnnotations();
});

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

builder.Services.AddDbContext<AppDbContext>(
    options => options.UseMySQL(connectionString)
        .LogTo(Console.WriteLine, LogLevel.Information)
        .EnableSensitiveDataLogging()
        .EnableDetailedErrors());

// Add lowercase routes

builder.Services.AddRouting(options => options.LowercaseUrls = true);

// Dependency Injection Configuration

/*builder.Services.AddScoped<IPatientRepository, PatientRepository>();
builder.Services.AddScoped<IPatientService, PatientService>();

builder.Services.AddScoped<IDoctorRepository, DoctorRepository>();
builder.Services.AddScoped<IDoctorService, DoctorService>();
*/
builder.Services.AddScoped<IMessageRepository, MessageRepository>();
builder.Services.AddScoped<IMessageService, MessageService>();

builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();


builder.Services.AddAutoMapper(
    typeof(ModelToResourceProfile),
    typeof(ResourceToModelProfile));

var app = builder.Build();


// Validation for ensuring Database Objects are created

using (var scope = app.Services.CreateScope())
using (var context = scope.ServiceProvider.GetService<AppDbContext>())
{
    context.Database.EnsureCreated();
}

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(options =>
    {
        options.SwaggerEndpoint("v1/swagger.json", "v1");
        options.RoutePrefix = "swagger";
    });
}
app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();
app.MapControllers();
app.UseAuthorization();

app.MapRazorPages();

app.Run();
