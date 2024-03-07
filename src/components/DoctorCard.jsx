import React from 'react'
import { FaPhone, FaEnvelope, FaHashtag } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { FaStarHalfAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './DoctorCard.css'
const DoctorCard = ({doctor}) => {
  const navigate = useNavigate();

  const handleDetails = () => {
    navigate(`/doctor/${doctor.id}`); // Pass the doctor's ID to the route
  };
  const renderStars = () => {
    const stars = [];
    
    
    const score = Math.floor(doctor.score);  

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


  return(
    
      <div className='doctor-card'>
        <div className='doctor-card-body'>
          <div className='doctor-card-image'>
            <img  src={doctor.image}></img>
          </div>
          <div className='doctor-card-content'>
            <h2 className='doctor-card-title'>{doctor.firstName} {doctor.lastName}</h2>
            <div className='doctor-card-info-item'>
              <FaEnvelope className='doctor-icon'></FaEnvelope>
              <span className='doctor-card-description'>{doctor.email}</span>
            </div>
            <div className='doctor-card-info-item'>
              <FaPhone className='doctor-icon'></FaPhone>
              <span className='doctor-card-description'>{doctor.phone}</span>
            </div>
            <div className='doctor-card-info-item'>
              <FaHashtag className='doctor-icon'></FaHashtag>
              <span className='doctor-card-description'>{doctor.specialty}</span>
            </div>
            <p className='doctor-card-description'>{doctor.bibliography}</p>
            <div> 
              {renderStars()}  
            </div>
            
            <button className='doctor-btn' onClick={handleDetails}>Details</button>
            
          </div>
        </div>
      </div>
    
  )
   
  }
  
  export default DoctorCard;



