import './Login.css';
import { FaLock, FaEnvelope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import PatientService from '../../../services/PatientService';
export function PatientLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await PatientService.patientsLogin(email, password);
      const user = response[0]; // Extraer el primer usuario del array
      localStorage.setItem('userPatient', JSON.stringify(user)); 
      const isUser="patient";
      localStorage.setItem('isUser', JSON.stringify(isUser));
      navigate('/patientView');
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
              Don't have an account? <a href="/patientRegister">Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}