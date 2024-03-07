/*import DoctorCard from './DoctorCard';
import './DoctorList.css'
function DoctorsList({ doctors }) {
  // Conditional rendering to handle potential undefined data:
  if (!doctors || !doctors.length) {
    return <p>Loading doctors...</p>; // Replace with appropriate loading message
  }

  return (
    <div className='section-list-card-doctors'>
      <div className="doctors-list">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="doctor-unit-card">
            <DoctorCard doctor={doctor} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoctorsList;*/


import DoctorCard from './DoctorCard';
import './DoctorList.css'
const DoctorsList = ({doctors}) => {

  return (
    <div className='section-list-card-doctors'>
      <div className="doctors-list">
      {doctors.map(doctor => (
         <div key={doctor.id} className="doctor-unit-card">
         <DoctorCard doctor={doctor} />
       </div>
        ))}
      </div>
    </div>
  );
}

export default DoctorsList;