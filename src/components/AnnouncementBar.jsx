import { Link } from 'react-router-dom';
import doctorHome from '../assets/doctors/doctorHome.png'
import './AnnouncementBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export  function AnnouncementBar() {
    return (
        
        <div className="announcement-bar">
      
          
          <div className="description">
      
              <h2>We care about you...</h2>
      
              <h1>The best online support</h1><br/>
      
              <div className="description-links">
                <Link className="description-btn">Read More</Link><br/>
                <Link className="description-btn" to="/doctors">Meet Doctors</Link>
              </div>
          </div>
          <div className='image-container-doctor'>
            <img src={doctorHome} className="doctor-image-announcement" />
          </div>
          </div>
       
    );
}
