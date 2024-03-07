import React, { useState, useEffect } from 'react';
import DoctorService from '../../../services/DoctorService';
import PatientService from '../../../services/PatientService';
import { useNavigate } from 'react-router-dom';
import './DoctorMessage.css'

import { NavBar } from '../../../components/NavBar';

export function DoctorMessage() {

  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterText, setFilterText] = useState("");
  const handleMessageDetails = (message) => {
    navigate(`/message-details/${message.id}`);  // Redirige a MessageDetails con el ID del mensaje
  };

  useEffect(() => {
    const doctorId = JSON.parse(localStorage.getItem('userDoctor')).id;
    const fetchMessages = async () => {
      const messages = await DoctorService.getMessageByDoctorId(doctorId);
      
      // Fetch patient name for each message
      const messagesWithNames = await Promise.all(messages.map(async message => {
        const patient = await PatientService.getPatientById(message.patientId);
        return {
          ...message,
          patientName: `${patient.firstName} ${patient.lastName}`  
        }
      }));

      setMessages(messagesWithNames);
    };
    

    

    fetchMessages();
  }, []);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleFilterChange = (e) => {
    setFilterText(e.target.value);
  };

  const filteredMessages = messages.filter(message => message.patientName.toLowerCase().includes(filterText.toLowerCase()));
  const paginatedMessages = filteredMessages.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  function formatDate(date) {
    const d = new Date(date);
    const day = d.getDate();
    const month = d.getMonth() + 1; 
    const year = d.getFullYear();

    return `${day}/${month}/${year}`; 
  }
  return (
    <>
    <NavBar />
      <div className='app-container-doctor-message'>
        <div className="doctor-message-container">
          <div className="message-filter">
            <select onChange={(e) => setPageSize(parseInt(e.target.value))}>
              <option value="5">5</option>
              <option value="7">7</option>
              <option value="10">10</option>
            </select>
            <input type="text" placeholder="Search by name" value={filterText} onChange={handleFilterChange} />
          </div>
          <table className="doctor-message-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Sent on</th>
                <th>Message</th>
                <th>Info</th>
              </tr>
            </thead>
            <tbody>
              {paginatedMessages.map(message => (
                <tr key={message.id}>
                  <td>{message.patientName}</td>
                  <td>{message.patientEmail}</td>
                  <td>{formatDate(message.createdHour)}</td>
                  <td>{message.note}</td>
                  <td>
                    <button onClick={() => handleMessageDetails(message)} className="view-button">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
        <span>Page {currentPage} de {Math.ceil(filteredMessages.length / pageSize)}</span>
        <button onClick={handleNextPage} disabled={currentPage === Math.ceil(filteredMessages.length / pageSize)}>Next</button>
      </div>
    </div>

    </div>
    </>
    
  );
}

export default DoctorMessage;