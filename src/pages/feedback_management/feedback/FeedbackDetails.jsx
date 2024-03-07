
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import FeedbackService from '../../../services/FeedbackService';
import { NavBar } from '../../../components/NavBar';
import { FaStar } from 'react-icons/fa';
import './FeedbackDetails.css';

export function FeedbackDetails() {
  const { id } = useParams(); // Get feedback ID from URL parameters
  const [feedback, setFeedback] = useState(null);
  const feedbackRef = useRef(null);

  useEffect(() => {
    const fetchFeedbackDetails = async () => {
      const feedbackData = await FeedbackService.getFeedbackById(id);
      setFeedback(feedbackData);
    };

    fetchFeedbackDetails();

    const handleResize = () => {
      const feedbackElement = feedbackRef.current;
      if (feedbackElement) {
        calculateOverflow(); // Recalculate overflow on window resize
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [id]);

  const calculateOverflow = () => {
    const feedbackElement = feedbackRef.current;
    if (feedbackElement) {
      const feedbackHeight = feedbackElement.scrollHeight;
      return feedbackHeight > 200 ? 'scroll' : 'hidden';
    }
    return 'hidden'; // Hide by default if element not rendered
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    };
    return date.toLocaleDateString('en-US', options); // Use US English format
  };



  if (!feedback) {
    return <div>Loading feedback details...</div>;
  }

  
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
      <div className="feedback-details-container">
        <div className="feedback-content-wrapper">
          <div className="feedback-attribute email">
            <h3>Email</h3>
            <p>{feedback.patientEmail}</p>
          </div>
          <div className="feedback-attribute score">
            <h3>Score</h3>
            <p>
            {renderStars(feedback.score)}
            </p>
          </div>


          <div
            className="feedback-note"
            style={{ maxHeight: '200px', overflowY: calculateOverflow() }} // Call function here
          >
            <h3>Feedback</h3>
            <p>{feedback.note}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeedbackDetails;