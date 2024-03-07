import { Link } from 'react-router-dom';
import logoImage from '../assets/logo.png'
import './NavBar.css'
export function NavBar() {
  const isUser = JSON.parse(localStorage.getItem('isUser'));

    return (
   
      <div className="navbares">
        <img src={logoImage} className="logo" />
        <nav>
            <div className='nav-bar-items'>
              <Link className="no-underline" to="/doctorView">HOME</Link>
              <Link className="no-underline" style={{marginLeft: 14}} to="/aboutUs">ABOUT US</Link>
              <Link className="no-underline" style={{marginLeft: 14}} to="/services">SERVICES</Link>
              <Link className="no-underline" style={{marginLeft: 14}} to="/contact">CONTACT</Link>      
              {isUser === "doctor" && (
                <>
                <Link className="no-underline" style={{marginLeft: 8}} to="/doctorMessage">MESSAGE</Link>
                <Link className="no-underline" style={{marginLeft: 14}} to="/doctorFeedback">FEEDBACK</Link>
                </>
              )}
             
              <Link className="no-underline" style={{marginLeft: 14}} to="/">LOGOUT</Link>
            </div>
          </nav>
      </div>);

}







