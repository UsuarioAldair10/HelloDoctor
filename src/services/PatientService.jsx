
  import axios from 'axios';

  const API_URL = 'http://localhost:7253/api/v1/patients';
  
  const PatientService = {

    patientsLogin: async (email, password) => {
      const response = await axios.get(
        `${API_URL}/account?email=${email}&password=${password}`
      );
      return response.data;
    },

    getPatientById: async (id) => {
        const res = await axios.get(API_URL + `/${id}`);
        return res.data; 
    },

    createPatient: async (newPatient) => {
      try {
        const response = await axios.post(API_URL, newPatient);
        return response.data;
      } catch (error) {
        console.error('Error creating patient:', error);
        throw error;
      }
    }
    

  }
  export default PatientService;