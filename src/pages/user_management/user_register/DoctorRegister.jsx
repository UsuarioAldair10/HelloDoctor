import './Register.css';
import { FaUser, FaLock, FaEnvelope ,FaPhone } from  "react-icons/fa"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DoctorService from '../../../services/DoctorService';
export  function DoctorRegister() {

  const [firstName, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [bibliography, setBibliography] = useState(''); // State variable for the image URL
  const [phone, setPhone] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [image, setImage] = useState('');
  const navigate = useNavigate();
  const validateForm = () => {
    // Validates if all fields are filled
    if (!firstName || !lastName || !email || !email || !password || !image || !bibliography || !phone|| !specialty) {
      return 'Please fill in all required fields.';
    }
   

    // Validates email format
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(email)) {
      return 'Invalid email format.';
    }

    // Validates password length
    if (password.length < 8) {
      return 'Password must be at least 8 characters long.';
    }

    // Returns null if validation is successful
    return null;
  };
  const handlePhoneChange = (event) => {
    // Elimina caracteres no numéricos
    const input = event.target.value.replace(/[^0-9]/g, '');
    setPhone(input);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      alert(validationError); // Shows alert message with the error
      return;
    }

    const loggedIn = false;
    const numberRatings = 0;
    const score = 0;
    // Creates a new doctor object
    const newDoctor = {
      firstName,
      lastName,
      specialty,
      email,
      password,
      image,
      bibliography,
      numberRatings,
      score,
      phone,
      loggedIn,
    };

    try {
      // Calls DoctorService.createDoctor to create the user
      const createdDoctor = await DoctorService.createDoctor(newDoctor);
      console.log('Doctor created successfully:', createdDoctor);
    
      
      navigate('/doctorLogin');
     
      // Handle successful creation (e.g., display success message, redirect)
    } catch (error) {
      console.error('Error creating doctor:', error);
      // Handle errors (e.g., display error message)
    }
    
  };
    return (
      <div className='general-register'>
      <div className='wrapper'>
        <form action="" onSubmit={handleSubmit}>
          <h1>Register</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder='Name'
              required
              value={firstName}
              onChange={(e) => setName(e.target.value)}
            />
            <FaUser className='icon'></FaUser>
          </div>
          <div className="input-box">
            <input
              type="text"
              placeholder='Last Name'
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <FaUser className='icon'></FaUser>
          </div>
          <div className="input-box">
            <input
              type="text"
              placeholder='Specialty'
              required
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
            />
          </div>
          <div className="input-box">
            <input
              type="text"
              placeholder='Bibliography'
              required
              value={bibliography}
              onChange={(e) => setBibliography(e.target.value)}
            />
          </div>
          <div className="input-box">
            <input
              type="tel"
              placeholder="Phone"
              name="phone"
              value={phone}
              onChange={handlePhoneChange} 
              required
            />
            <FaPhone className='icon'></FaPhone>
          </div>
          <div className="input-box">
            <input
              type="text"
              placeholder='Image link'
              required
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
         
          </div>
          <div className='input-box'>
            <input
              type="email"
              placeholder='E-mail'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FaEnvelope className='icon'></FaEnvelope>
          </div>
          <div className='input-box'>
            <input
              type="password"
              placeholder='Password'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock className='icon'></FaLock>
          </div>
            <div className="create-account">
              <button className='bt-create-account'>Create account </button>  
            </div>
            <div className="register-link">
              <p>You already have an account? <a href="/" >Login</a></p>
            </div>
          
          </form>
        </div>
      </div>
      );
}
