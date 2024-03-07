import { NavBar } from '../../../components/NavBar';
import nutritionist from '../../../assets/nutritionist.jpg';
import onlinePsychology from '../../../assets/onlinePsychology.jpg';
import chronicPatientFollowUp from '../../../assets/chronicPatientFollowUp.jpg';
import homeMedicalCare from '../../../assets/homeMedicalCare.jpg';
import preventiveMedicine from '../../../assets/preventiveMedicine.jpg';
import medicalConsultation from '../../../assets/medicalConsultation.jpg';
import './Services.css'
export function Services() {
    return (
        <div>
            <NavBar/>
            <div className="services-list">
              <div className="service">
                <h3>Online medical consultation</h3>
                <p>Consult with a medical specialist through video call from the comfort of your home.</p>
                <img src={medicalConsultation} />
              </div>
              <div className="service">
                <h3>Preventive medicine</h3>
                <p>Access personalized prevention and health care programs.</p>
                <img src={preventiveMedicine} />
              </div>
              <div className="service">
                <h3>Home medical care</h3>
                <p>Receive medical care in the comfort of your home by highly qualified professionals.</p>
                <img src={homeMedicalCare} />
              </div>
              <div className="service">
                <h3>Chronic patient follow-up</h3>
                <p>Get personalized monitoring of your medical condition by a team of specialists.</p>
                <img src={chronicPatientFollowUp} />
              </div>
              <div className="service">
                <h3>Online psychology</h3>
                <p>Taking care of your mental health is fundamental. Access online therapy with a professional psychologist.</p>
                <img src={onlinePsychology} />
              </div>
              <div className="service">
                <h3>Nutrition and dietetics</h3>
                <p>Improve your lifestyle with personalized meal plans and nutritional advice.</p>
                <img src={nutritionist} />
              </div>
            </div>
        </div>
    );

}
export default Services;