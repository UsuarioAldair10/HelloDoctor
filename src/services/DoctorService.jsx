/*import data from '../json/json-server.json'
import fs from 'fs';
const DoctorService = {

    getDoctors: () => {
      return data.doctors;
    },
  
    getDoctorById: (id) => {
      return data.doctors.find(d => d.id === parseInt(id)); 
    },
  
    addDoctor: (newDoctor) => {
      newDoctor.id = data.doctors.length + 1;
      data.doctors.push(newDoctor);
    },
     
    updateDoctor: (id, updatedData) => {
      const index = data.doctors.findIndex(d => d.id === id);
      data.doctors[index] = {...data.doctors[index], ...updatedData};
    },
     
    deleteDoctor: (id) => {
       data.doctors = data.doctors.filter(d => d.id !== id);
    },
  
    // Patients
    
    getPatients: () => data.patients,
  
    getPatientById: (id) => data.patients.find(p => p.id === id),
    
    addPatient: (newPatient) => {
      newPatient.id = data.patients.length + 1;
      data.patients.push(newPatient);
    },
    
    updatePatient: (id, updatedData) => {
       const index = data.patients.findIndex(p => p.id === id);
       data.patients[index] = {...data.patients[index], ...updatedData};
    },
    
    deletePatient: (id) => {
      data.patients = data.patients.filter(p => p.id !== id);
    },
  
    // Appointments
    
    getAppointments: () => data.appointments,
  
    addAppointment: (newAppointment) => {
      newAppointment.id = data.appointments.length + 1;
      data.appointments.push(newAppointment);
    },
    
    updateAppointment: (id, updatedData) => {
      const index = data.appointments.findIndex(a => a.id === id);
      data.appointments[index] = {...data.appointments[index], ...updatedData};
    },
    
    deleteAppointment: (id) => {
      data.appointments = data.appointments.filter(a => a.id !== id);
    },
  
    // Messages
     
    getMessages: () => data.doctorMessages,
     
    addMessage(newMessage) {
    
      // Agregar el nuevo mensaje
      const messages = this.getMessages(); 
      newMessage.id = messages.length + 1;
      messages.push(newMessage);
  
      // Sobrescribir el archivo JSON
      const updatedData = {
        ...data,  
        doctorMessages: messages    
      };
      
      const jsonData = JSON.stringify(updatedData);
      fs.writeFileSync('./data.json', jsonData);
  
    },
    updateMessage: (id, updatedData) => {
      const index = data.doctorMessages.findIndex(m => m.id === id);
      data.doctorMessages[index] = {...data.doctorMessages[index], ...updatedData};
    },
     
    deleteMessage: (id) => {
      data.doctorMessages = data.doctorMessages.filter(m => m.id !== id);
    }
  
  }
  
  export default DoctorService;

*/
  import axios from 'axios';

  const API_URL = 'http://localhost:7253/api/v1/doctors';
  
  const DoctorService = {
    getDoctors: async () => {
      const response = await axios.get(API_URL);
      return response.data;
    },
    getDoctorById: async (id) => {
      const res = await axios.get(`${API_URL}/${id}`);
      return res.data; 
    },

    doctorLogin: async (email, password) => {
      const response = await axios.get(
        `${API_URL}/account?email=${email}&password=${password}`
      );
      return response.data;
    },    

    updateDoctor: async (id, doctorData) => {
      try {
        const response = await axios.put(`${API_URL}/${id}`, doctorData);
        return response.data; 
      } catch (error) {
        console.error('Error al actualizar el doctor:', error);
        throw error; 
      }
    },

    getFeedbackByDoctorId: async (id) => {
      const response = await axios.get(`${API_URL}/${id}/feedbacks`);
      return response.data;
    },

    getMessageByDoctorId: async (id) => {
      const response = await axios.get(`${API_URL}/${id}/messages`);
      return response.data;
    },

    createDoctor: async (newDoctor) => {
      try {
        const response = await axios.post(API_URL, newDoctor);
        return response.data;
      } catch (error) {
        console.error('Error creating doctor:', error);
        throw error;
      }
    }

    

  }


  export default DoctorService;
