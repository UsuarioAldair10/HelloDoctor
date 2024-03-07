import axios from 'axios';

const API_URL = 'http://localhost:7253/api/v1/messages';
const MessageService = {
    // Create a new message
    createMessage: async (message) => {
      const response = await axios.post(API_URL, message);
      return response.data;
    },
  
    // Get all messages
    getMessages: async () => {
      const response = await axios.get(API_URL);
      return response.data;
    },
  
    // Get a message by ID
    getMessageById: async (id) => {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    },
  
    // Update a message
    updateMessage: async (message) => {
      const { id, ...updatedMessage } = message; // Destructure to exclude ID
      const response = await axios.put(`${API_URL}/${id}`, updatedMessage);
      return response.data;
    },
  
    // Delete a message
    deleteMessage: async (id) => {
      const response = await axios.delete(`${API_URL}/${id}`);
      return response.status; // Return the status code
    },
  };

  
  export default MessageService;