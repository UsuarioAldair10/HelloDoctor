import './Register.css';
import { FaUser, FaLock, FaEnvelope  } from  "react-icons/fa"
import { useState } from 'react';

import PatientService from '../../../services/PatientService';
export  function PatientRegister() {

  const [firstName, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState(''); // State variable for the image URL

  const handleAgeChange = (event) => {
    const input = event.target.value.replace(/[^0-9]/g, ''); // Eliminates any non-numeric characters
    setAge(input);
  };

  const validateForm = () => {
    // Validates if all fields are filled
    if (!firstName || !lastName || !age || !email || !password || !image) {
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      alert(validationError); // Shows alert message with the error
      return;
    }

    const loggedIn = false;
    // Creates a new patient object
    const newPatient = {
      firstName,
      lastName,
      age: parseInt(age), // Converts age to integer
      email,
      password,
      image,
      loggedIn,
       // Added image to the newPatient object
    };

    try {
      // Calls DoctorService.createPatient to create the user
      const createdPatient = await PatientService.createPatient(newPatient);
      console.log('Patient created successfully:', createdPatient);
      // Handle successful creation (e.g., display success message, redirect)
    } catch (error) {
      console.error('Error creating patient:', error);
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
              type="number"
              placeholder='Age'
              value={age}
              onChange={handleAgeChange}
              required
            />
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
