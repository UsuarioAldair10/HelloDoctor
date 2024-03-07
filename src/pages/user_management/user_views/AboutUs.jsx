import './AboutUs.css';
import { NavBar } from '../../../components/NavBar';

export function AboutUs() {
  return (
    <div>
      <NavBar />

      <div className="container-about">

        <div className='container-about-image'></div>

        <div className='container-content'>

          <div className="about-header">
            <h1>About Us</h1> 
            <h2>Changing the future of healthcare, one patient at a time.</h2>
          </div>

          <div className="about-content">

            <div className="about-mission">
              <h3>Our Mission</h3>
              <p>Democratize access to quality healthcare, providing people with a personalized and accessible service through technology.</p>
            </div>

            <div className="about-vision">
              <h3>Our Vision</h3>
              <p>To be the leading platform in digital healthcare, revolutionizing the way people connect with health professionals and care for their well-being.</p> 
            </div>

            <div className="about-values">
              <h3>Core Values</h3>
              <ul>
                <li>Excellence</li>
                <li>Innovation</li> 
                <li>Compassion</li>
                <li>Accessibility</li>
              </ul>
            </div>

            <div className="about-why">
              <h3>Why Choose Hello Doctor?</h3>
              <ul>
                <li>Personalized healthcare</li>
                <li>Access to the best professionals</li>
                <li>Cutting-edge technology</li>
                <li>Convenience and flexibility</li>
                <li>Transparent pricing</li>
              </ul>
            </div>

            <div className="about-call-to-action">
              <p>Hello Doctor is more than just a healthcare company. We are an ally on your path to a healthier and happier life.</p>
              <p>Join us and experience the future of healthcare.</p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}