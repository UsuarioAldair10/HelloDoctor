import './Login.css';
import { FaLock, FaEnvelope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import DoctorService from '../../../services/DoctorService';
export function DoctorLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await DoctorService.doctorLogin(email, password);
      const userDoctor = response[0]; // Extraer el primer usuario del array
      const isUser="doctor";
      localStorage.setItem('isUser', JSON.stringify(isUser)); 
      /*const id = user.id;*/ // Assuming the response includes the user ID
      localStorage.setItem('userDoctor', JSON.stringify(userDoctor)); 
      navigate('/doctorView');
    } catch (error) {
      console.error('Login error:', error);
      // Display an error message to the user
    }
  };

  return (
    <div className='general-login'>
      <div className='wrapper'>
        <form onSubmit={handleLogin}> {/* Use onSubmit to trigger handleLogin */}
          <h1>Login</h1>
          <div className='input-box'>
            <input
              type="email"
              placeholder='E-mail'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <FaEnvelope className='icon' />
          </div>
          <div className='input-box'>
            <input
              type="password"
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FaLock className='icon' />
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />Remember me
            </label>
          </div>
          <button className='bt-submit-login' type="submit">Login</button> {/* Use type="submit" */}
          <div className="register-link">
            <p>
              Don't have an account? <a href="/doctorRegister">Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}