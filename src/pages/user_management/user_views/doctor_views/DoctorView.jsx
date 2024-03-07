

import { useState, useEffect } from 'react';
import DoctorService from '../../../../services/DoctorService';
import DoctorsList from '../../../../components/DoctorsList';
import { AnnouncementBar } from '../../../../components/AnnouncementBar';
import { NavBar } from '../../../../components/NavBar';
import './DoctorView.css'

export function DoctorView() {
    
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    getDoctors();
  }, []);

  const getDoctors = async () => {
    const data = await DoctorService.getDoctors();
    setDoctors(data);
  }
      
    return (
      <div className="doctor-view-content">
        <NavBar />
        <AnnouncementBar />
        <h1 className='doctor-view-content-title'>Our Doctors</h1>
        <DoctorsList doctors={doctors} /> 
      </div>
    );
  }

export default DoctorView;


