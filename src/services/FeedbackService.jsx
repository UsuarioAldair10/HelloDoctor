import axios from 'axios';

const API_URL = 'http://localhost:7253/api/v1/feedbacks';
const FeedbackService = {
    // Create a new feedback
    createFeedback: async (feedback) => {
      const response = await axios.post(API_URL, feedback);
      return response.data;
    },
  
    // Get all feedbacks
    getFeedbacks: async () => {
      const response = await axios.get(API_URL);
      return response.data;
    },

    
  
    // Get a feedback by ID
    getFeedbackById: async (id) => {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    },
  
    // Update a feedback
    updateFeedback: async (feedback) => {
      const { id, ...updatedFeedback } = feedback; // Destructure to exclude ID
      const response = await axios.put(`${API_URL}/${id}`, updatedFeedback);
      return response.data;
    },
  
    // Delete a feedback
    deleteFeedback: async (id) => {
      const response = await axios.delete(`${API_URL}/${id}`);
      return response.status; // Return the status code
    },
  };

  
  export default FeedbackService;