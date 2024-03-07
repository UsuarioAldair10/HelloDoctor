import { useState, useEffect } from 'react';
import { NavBar } from '../../../components/NavBar'; 
import DoctorsList from '../../../components/DoctorsList';
import DoctorService from '../../../services/DoctorService';
import './Contact.css'

export function Contact() {

  const [doctors, setDoctors] = useState([]);

  const [filterByScore, setFilterByScore] = useState('');
  const [filterBySpecialty, setFilterBySpecialty] = useState('');

  useEffect(() => {
    getDoctors();
  }, []);

  const getDoctors = async () => {
    const data = await DoctorService.getDoctors();
    setDoctors(data);
  };

  const handleScoreChange = (e) => {
    setFilterByScore(e.target.value);
  }


  
  const handleSpecialtyChange = (e) => {
    setFilterBySpecialty(e.target.value);
  }

  // Filter doctors
  const filteredDoctors = doctors.filter(doc => {
    if (filterByScore) {
      const minScore = +filterByScore;
      if (doc.score < minScore) return false; 
    }
    if (filterBySpecialty && doc.specialty !== filterBySpecialty) return false;
    return true;
  });

  return (
    <div className="doctor-view-content">
      <NavBar />
      <h1 className='doctor-view-content-title'>Our Doctors</h1>
      <div className='doctor-filtering'>
        <select className='doctor-filter' value={filterByScore} onChange={handleScoreChange}>
          <option value="">Score</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
       <select className='doctor-filter' value={filterBySpecialty} onChange={handleSpecialtyChange}>
          <option value="">Especialty</option>
          <option value="Medicina General">Medicina General</option>
          <option value="Cardiología">Cardiología</option>
          <option value="Pediatría">Pediatría</option>
        </select>
      
      </div>
      
      

      <DoctorsList doctors={filteredDoctors} />

    </div>
  );
}

export default Contact;
