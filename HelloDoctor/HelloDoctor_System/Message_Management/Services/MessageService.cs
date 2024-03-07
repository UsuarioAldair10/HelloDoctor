using HelloDoctor.HelloDoctor_System.Message_Management.Domain.Models;
using HelloDoctor.HelloDoctor_System.Message_Management.Domain.Repositories;
using HelloDoctor.HelloDoctor_System.Message_Management.Domain.Services;
using HelloDoctor.HelloDoctor_System.Message_Management.Domain.Services.Communication;
//using HelloDoctor.HelloDoctor_System.User_Management.Domain.Repositories;
using HelloDoctor.Shared.Domain.Repositories;
using Microsoft.Extensions.Logging;

namespace HelloDoctor.HelloDoctor_System.Message_Management.Services
{
    public class MessageService : IMessageService
    {
        private readonly IMessageRepository _messageRepository;
        private readonly IUnitOfWork _unitOfWork;
      // private readonly IDoctorRepository _doctorRepository;

        public MessageService(IMessageRepository messageRepository, IUnitOfWork unitOfWork)//aui borre a dcotr 
        {
            _messageRepository = messageRepository;
            _unitOfWork = unitOfWork;
           // _doctorRepository = doctorRepository;
        }

        public async Task<IEnumerable<Message>> ListAsync()
        {
            return await _messageRepository.ListAsync();
        }

       /* public async Task<IEnumerable<Message>> ListByDoctorIdAsync(int doctorId)
        {
            return await _messageRepository.FindByDoctorIdAsync(doctorId);
        }*/

        public async Task<MessageResponse> SaveAsync(Message message)
        {


           /* var existingDoctor = await _doctorRepository.FindByIdAsync(message.DoctorId);

            if (existingDoctor == null)
                return new MessageResponse("Invalid Doctor");*/

            // Validate Stuent
            try
            {

                await _messageRepository.AddAsync(message);


                await _unitOfWork.CompleteAsync();


                return new MessageResponse(message);

            }
            catch (Exception e)
            {
                // Error Handling
                return new MessageResponse($"An error occurred while saving the message: {e.Message}");
            }
        }

        public async Task<MessageResponse> UpdateAsync(int messageId, Message message)
        {
            var existingMessage = await _messageRepository.FindByIdAsync(messageId);



            if (existingMessage == null)
                return new MessageResponse("Message not found.");

            // Validate DoctorId

            var existingDoctor = await _messageRepository.FindByIdAsync(message.DoctorId);

            if (existingDoctor == null)
                return new MessageResponse("Invalid Doctor");

            // Validate StudentId



            // Modify Fields
            existingMessage.Note = message.Note;
            existingMessage.PatientEmail = message.PatientEmail;
            

            try
            {
                _messageRepository.Update(existingMessage);
                await _unitOfWork.CompleteAsync();

                return new MessageResponse(existingMessage);

            }
            catch (Exception e)
            {
                // Error Handling
                return new MessageResponse($"An error occurred while updating the message: {e.Message}");
            }

        }

        public async Task<MessageResponse> DeleteAsync(int messageId)
        {
            var existingMessage = await _messageRepository.FindByIdAsync(messageId);

            // Validate Tutorial

            if (existingMessage == null)
                return new MessageResponse("Message not found.");

            try
            {
                _messageRepository.Remove(existingMessage);
                await _unitOfWork.CompleteAsync();

                return new MessageResponse(existingMessage);

            }
            catch (Exception e)
            {
                // Error Handling
                return new MessageResponse($"An error occurred while deleting the message: {e.Message}");
            }

        }
    }
}
