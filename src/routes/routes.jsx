import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { DoctorLogin } from "../pages/user_management/user_login/DoctorLogin";
/*import { PatientRegister } from "../pages/user_management/user_register/PatientRegister.jsx";
import { DoctorRegister } from "../pages/user_management/user_register/PatientRegister.jsx";*/
import { Contact } from "../pages/user_management/user_views/Contact";
import { PatientMessage } from "../pages/feedback_management/message/PatientMessage";
import { PatientLogin } from "../pages/user_management/user_login/PatientLogin";
import { PatientView } from "../pages/user_management/user_views/patient_views/PatientView"
import { DoctorView } from "../pages/user_management/user_views/doctor_views/DoctorView"
/*import { DoctorFeedback } from "../pages/feedback_management/DoctorFeedback.jsx"*/
import { AboutUs } from "../pages/user_management/user_views/AboutUs";
import { Services } from "../pages/user_management/user_views/Services";
import  { DoctorMessage} from "../pages/feedback_management/message/DoctorMessage";
import { MessageDetails } from "../pages/feedback_management/message/MessageDetails";
import FeedbackDetails from "../pages/feedback_management/feedback/FeedbackDetails";
import DoctorFeedback from "../pages/feedback_management/feedback/DoctorFeedback";
import {DoctorRegister } from "../pages/user_management/user_register/DoctorRegister";
import {PatientRegister } from "../pages/user_management/user_register/PatientRegister";
export function MyRoutes() {

    return (
        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/doctorLogin" element={<DoctorLogin/>} />
            <Route exact path="/patientLogin" element={<PatientLogin/>} />
            <Route exact path="/patientRegister" element={<PatientRegister/>} />
            <Route exact path="/DoctorRegister" element={<DoctorRegister/>} />
            <Route exact path="/doctorView" element={<DoctorView/>} />
            <Route exact path="/doctorMessage" element={<DoctorMessage/>} />
            <Route exact path="/doctorFeedback" element={<DoctorFeedback/>} />
            <Route exact path="/aboutUs" element={<AboutUs/>} />
            <Route exact path="/contact" element={<Contact/>} />
            <Route exact path="/patientView" element={<PatientView/>} />
            <Route exact path="/services" element={<Services/>} />
            <Route path="/doctor/:id" element={<PatientMessage />} /> 
            <Route path="/message-details/:id" element={<MessageDetails />} />
            <Route path="/feedback-details/:id" element={<FeedbackDetails />} />

          </Routes>
        </Router>
      );
}
