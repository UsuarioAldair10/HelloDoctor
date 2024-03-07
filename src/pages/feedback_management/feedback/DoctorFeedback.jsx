import React, { useState, useEffect } from 'react';
import DoctorService from '../../../services/DoctorService';
import PatientService from '../../../services/PatientService';
import { useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import './DoctorFeedback.css'

import { NavBar } from '../../../components/NavBar';

export function DoctorFeedback() {

  const navigate = useNavigate();
  const [feedbacks, setFeedbacks] = useState([]);
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterText, setFilterText] = useState("");
  const handleFeedbackDetails = (feedback) => {
    navigate(`/feedback-details/${feedback.id}`);  // Redirige a FeedbackDetails con el ID del mensaje
  };

  useEffect(() => {
    const doctorId = JSON.parse(localStorage.getItem('userDoctor')).id;
    const fetchFeedbacks = async () => {
      const feedbacks = await DoctorService.getFeedbackByDoctorId(doctorId);
      
      // Fetch patient name for each feedback
      const feedbacksWithNames = await Promise.all(feedbacks.map(async feedback => {
        const patient = await PatientService.getPatientById(feedback.patientId);
        return {
          ...feedback,
          patientName: `${patient.firstName} ${patient.lastName}`  
        }
      }));

      setFeedbacks(feedbacksWithNames);
    };
    

    

    fetchFeedbacks();
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

  const filteredFeedbacks = feedbacks.filter(feedback => feedback.patientName.toLowerCase().includes(filterText.toLowerCase()));
  const paginatedFeedbacks = filteredFeedbacks.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  

  const renderStars = (scoreFeedback) => {
    const stars = [];
    
    
    const score = Math.floor(scoreFeedback);  

    for(let i=1; i<=5; i++) {
      if(i <= score) {
        // Pintar estrellas hasta el puntaje
        stars.push(<FaStar key={i} color="black" />);  
      } else {
        // Estrellas sin pintar
        stars.push(<FaStar key={i} color="#cccccc" />);  
      }
    }

    return stars; 
  }
  return (
    <>
    <NavBar />
      <div className='app-container-doctor-feedback'>
        <div className="doctor-feedback-container">
          <div className="feedback-filter">
            <select onChange={(e) => setPageSize(parseInt(e.target.value))}>
              <option value="5">5</option>
              <option value="7">7</option>
              <option value="10">10</option>
            </select>
            <input type="text" placeholder="Search by name" value={filterText} onChange={handleFilterChange} />
          </div>
          <table className="doctor-feedback-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Feedback</th>
                <th>Score</th>
                <th>Info</th>
              </tr>
            </thead>
            <tbody>
              {paginatedFeedbacks.map(feedback => (
                <tr key={feedback.id}>
                  <td>{feedback.patientName}</td>
                  <td>{feedback.patientEmail}</td>
                  <td>{feedback.note}</td>
                  <td>{renderStars(feedback.score)}</td>
                  <td>
                    <button onClick={() => handleFeedbackDetails(feedback)} className="view-button">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
        <span>Page {currentPage} de {Math.ceil(filteredFeedbacks.length / pageSize)}</span>
        <button onClick={handleNextPage} disabled={currentPage === Math.ceil(filteredFeedbacks.length / pageSize)}>Next</button>
      </div>
    </div>

    </div>
    </>
    
  );
}

export default DoctorFeedback;