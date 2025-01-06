import { FaFacebook, FaInstagram, FaTelegram } from 'react-icons/fa6';
import './footer.css'; // Optional: for additional styling

const Footer = () => {
  return (
    <footer className="py-5" style={{ backgroundColor: '#19c462', color: 'white' }}>
      <div className="container d-flex justify-content-between align-items-center">
        
        {/* Link section */}
        <div className="footer-links">
          <a href="/" className="text-white text-decoration-none mx-2">Home</a>
          <a href="about" className="text-white text-decoration-none mx-2">About</a>
          <a href="category" className="text-white text-decoration-none mx-2">Category</a>
          <a href="contact" className="text-white text-decoration-none mx-2">Contact</a>
        </div>

        {/* Copyright section */}
        <p className="small mb-0 text-center" style={{ flex: 1 }}> 
          &copy; 2024 Bule Hora Shop
        </p>

        {/* Social Media Icons Section */}
        <div className="social-icons">
          <a href="#" className="text-white mx-2"><FaFacebook /></a>
          <a href="#" className="text-white mx-2"><FaTelegram /></a>
          <a href="#" className="text-white mx-2"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;