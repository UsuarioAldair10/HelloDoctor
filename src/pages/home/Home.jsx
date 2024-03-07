import React from 'react'
import './Home.css'
import logoHelloDoctor from '../../assets/logo.png'

import doctorLoginImage from '../../assets/doctors/doctor_login.png'
import patientLoginImage from '../../assets/patients/patient_login.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
export function Home() {
 
  return (
    <div className="login-page">

    <div className="login-page-content">

      <div className="login-page-content-header">
        <img src={logoHelloDoctor} className="logo" />
        <h3>Welcome to Hello Doctor! Your reliable platform to schedule medical appointments and consultations. Take care of your health in a convenient and safe way. We are here to help you with your well-being!</h3>   
      </div>
      <div className="cards-container">
      <LoginCards />
      </div>

      

    </div>

  </div>
)

}

function LoginCards() {
  const navigate = useNavigate();
  const handleLoginDoctor  = () =>{
    navigate("/doctorLogin");
  }
  const handleLoginPatient  = () =>{
    navigate("/patientLogin");
  }


return (
  <div className="login-cards-container">

    <div className="login-cards">

      <div className="card-doctor">
        <div className="image-userLogin">
          <img src={doctorLoginImage} />
        </div>

        <div className="card-doctor-text">
          <h3>Doctor</h3>
          <p>Hello Doctor! Thank you for your commitment to the health of your patients. This portal allows you to offer personalized and efficient attention</p>

          <button  className='bt-logIn' onClick={handleLoginDoctor}>Log in</button>
        </div>
      </div>

      <div className="card-patient">
        <div className="image-userLogin">
          <img src={patientLoginImage} />
        </div>

        <div className="card-doctor-text">
          <h3>Patient</h3>
          <p>Hello! In this portal you will find the tools to take care of your health. Schedule appointments, review results and keep in touch with your doctor.</p>
          
          <button className='bt-logIn' onClick={handleLoginPatient}>Log in</button>
        </div>
      </div>

    </div>

  </div>
  );
}
