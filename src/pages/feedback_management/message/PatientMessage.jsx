import { useState, useEffect } from 'react';
import DoctorService from '../../../services/DoctorService';
import { useParams } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaHashtag } from 'react-icons/fa';
import MessageService from '../../../services/MessageService'
import { FaStar } from 'react-icons/fa';
import './PatientMessage.css'
import { NavBar } from '../../../components/NavBar';
import FeedbackService from '../../../services/FeedbackService'
export function PatientMessage () {
  const [doctor, setDoctor] = useState(null);
  const { id } = useParams(); // Se obtiene el ID de los parámetros de la URL
  const [message, setMessage] = useState('');
  const [feedbackMessage, setFeedback] = useState('');
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [rating, setRating] = useState(0);
  useEffect(() => {
    getDoctor();
   
  }, [id]);

  useEffect(() => {
    const storedUser = localStorage.getItem('userPatient');
  try {
    const user = JSON.parse(storedUser);
    setUser(user);
  } catch (error) {
    console.error('Error recuperando usuario de localStorage:', error);
    setUser(null);
  }
  }, []);

  

  const getDoctor = async () => {
    const response = await DoctorService.getDoctorById(id);
    setDoctor(response);
  };


  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    setError(null); // Clear any previous error when message changes
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
    setError(null); // Clear any previous error when message changes
  };

  const handleSubmitFeedback = async () => {
    // Aquí rating tendrá el último valor seleccionado

    if (!user) {
      console.error('Usuario no disponible. Por favor, espera...');
      return; // Evita enviar el mensaje si los datos del usuario no están disponibles
    }

    if (!feedbackMessage) {
      setError('El mensaje no puede estar vacío');
      return;
    }

    try {
      const newFeedback = {
        patientId: user.id , // Replace with actual sender info
        doctorId: doctor.id,
        note: feedbackMessage, // Adjust subject as needed
        patientEmail: user.email,
        score:rating,
      };

      await FeedbackService.createFeedback(newFeedback); // Send the message
      setFeedback('');

    } catch (error) {
      console.error('Error sending message:', error);
      setError('Error enviando el mensaje'); // Display error message to user
    }


    const updatedData = {
      firstName: doctor.firstName , // Replace with actual sender info
      lastName: doctor.lastName,
      specialty: doctor.specialty, // Adjust subject as needed
      email: doctor.email,
      password:doctor.password,
      image:doctor.image,
      bibliography:doctor.bibliography,
      numberRatings:doctor.numberRatings+1,
      score:Math.round(((doctor.score * doctor.numberRatings )+ rating) /(doctor.numberRatings+1)),
      phone:doctor.phone,
      loggedIn:doctor.loggedIn, 
    };

    
    try {
      // Enviar datos actualizados al backend
      await DoctorService.updateDoctor(doctor.id, updatedData);

      console.log('Doctor score updated successfully');

    } catch (error) {
      console.error('Error updating doctor', error);
    }

  }



    






    /*console.log(rating); */

    // Luego enviar rating a API
  
  const handleSubmit = async () => {
    if (!user) {
      console.error('Usuario no disponible. Por favor, espera...');
      return; // Evita enviar el mensaje si los datos del usuario no están disponibles
    }
    if (!message) {
      setError('El mensaje no puede estar vacío');
      return;
    }

    try {
      const newMessage = {
        patientId: user.id , // Replace with actual sender info
        doctorId: doctor.id,
        note: message, // Adjust subject as needed
        patientEmail: user.email,
      };

      await MessageService.createMessage(newMessage); // Send the message
      setMessage('');

    } catch (error) {
      console.error('Error sending message:', error);
      setError('Error enviando el mensaje'); // Display error message to user
    }
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

  
  return (
    <div>
      <NavBar />
      {doctor && (
        <div className='container-patient-message'>
          <div className='blog-card-doctor'>
            <div className='blog-doctor-inner-part'>
              <label htmlFor="" className="image-blog">
                <img src={doctor.image}></img>
              </label>
              <div className='blog-card-right'>
                <div className='blog-content'>
                  <div className='blog-title'>{doctor.firstName} {doctor.lastName}</div>
                  <div className='doctor-blog-info-item'>
                    <FaEnvelope className='doctor-icon'></FaEnvelope>
                    <span className='doctor-blog-description'>{doctor.email}</span>
                  </div>
                  <div className='doctor-blog-info-item'>
                    <FaPhone className='doctor-icon'></FaPhone>
                    <span className='doctor-blog-description'>{doctor.phone}</span>
                  </div>
                  
                  <div> 
                    {renderStars()}  
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
          <div className='doctor-blog-specialty'>
                  <FaHashtag className='doctor-icon'></FaHashtag>
                  <span className='doctor-blog-description'>{doctor.specialty}</span>
          </div>
          <div className='doctor-blog-bibliography'>
            <p className='doctor-blog-description'>{doctor.bibliography}</p>
          </div>
         
        
          <div className='message'>
            <input className='input-message'value={message} onChange={handleMessageChange} />
            {message && <button  className='bt-message' onClick={handleSubmit}>Send</button>}
            {error && <p className='error-message'>{error}</p>}
          </div>
          <div className='container-feedback'>
            <div className='feedback-title'>
              <h1>Feedback</h1>
            </div>
            <div className='feedback-message'>
              <input className='input-feedback'value={feedbackMessage} onChange={handleFeedbackChange} />
              
            </div>
            <div className='feedback'>
            {[...Array(5)].map((star, index) => {
        
        const ratingValue = index + 1;
        
        return (
          <FaStar 
            key={index} 
            size={25} 
            color={ratingValue <= rating ? "black" : "#ccc"}
            onClick={() => setRating(ratingValue)}  
          />
        )
     })}

            </div>
            <button className='bt-feedback' onClick={handleSubmitFeedback}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PatientMessage;

