
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import MessageService from '../../../services/MessageService';
import { NavBar } from '../../../components/NavBar';
import './MessageDetails.css';

export function MessageDetails() {
  const { id } = useParams(); // Get message ID from URL parameters
  const [message, setMessage] = useState(null);
  const messageRef = useRef(null);

  useEffect(() => {
    const fetchMessageDetails = async () => {
      const messageData = await MessageService.getMessageById(id);
      setMessage(messageData);
    };

    fetchMessageDetails();

    const handleResize = () => {
      const messageElement = messageRef.current;
      if (messageElement) {
        calculateOverflow(); // Recalculate overflow on window resize
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [id]);

  const calculateOverflow = () => {
    const messageElement = messageRef.current;
    if (messageElement) {
      const messageHeight = messageElement.scrollHeight;
      return messageHeight > 200 ? 'scroll' : 'hidden';
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

  const formatTime = (timeString) => {
    const time = new Date(timeString);
    const options = {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    };
    return time.toLocaleTimeString('en-US', options); // Use US English format
  };

  if (!message) {
    return <div>Loading message details...</div>;
  }

  return (
    <>
      <NavBar />
      <div className="message-details-container">
        <div className="message-content-wrapper">
          <div className="message-attribute email">
            <h3>Email</h3>
            <p>{message.patientEmail}</p>
          </div>
          <div className="message-attribute sent-at">
            <h3>Sent at</h3>
            <p>
              {formatDate(message.createdHour)} at {formatTime(message.createdHour)}
            </p>
          </div>
          <div
            className="message-note"
            style={{ maxHeight: '200px', overflowY: calculateOverflow() }} // Call function here
          >
            <h3>Message</h3>
            <p>{message.note}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MessageDetails;