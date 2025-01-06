// import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Importing the icons
import styles from './Contact.module.css'; // Import the CSS module

const ContactPage = () => {
  return (
    <div name="contact" className={styles.contactContainer}>
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center">
        {/* Section Title */}
        <div className={styles.header}>
          <p className={`${styles.headerTitle} ms-5`}>Contact Me</p>
        </div>

        {/* Contact Content */}
        <div className={styles.contactGrid}>
          {/* Contact Information with Icons */}
          <div className={`${styles.contactInfo} p-5`}>
            <h3>Let's Talk</h3>
            <h5 className="text-lg font-bold pt-3">Phone</h5>
            <a href="tel:+251925031157" className="flex items-center ms-5">
              <FaPhone className="me-2" /> +251-92-503-1157
            </a>  <br></br>
            <a href="tel:+251909666440" className="flex items-center ms-5">
              <FaPhone className="me-2" /> +251-90-966-6440
            </a>

            <h5 className="mt-4 text-lg font-bold">Email</h5>
            <a href="mailto:asayehudesalegn2012@gmail.com" className="flex items-center ms-5">
              <FaEnvelope className="me-2" /> asayehudesalegn2012@gmail.com
            </a> <br></br>
           
            <a href="mailto:asayehu.desalegn@bhu.edu.et" className="flex items-center ms-5">
              <FaEnvelope className="me-2" /> asayehu.desalegn@bhu.edu.et
            </a>
            

            <h5 className="mt-4 text-lg font-bold">Address</h5>
            <p className="flex items-center ms-5">
              <FaMapMarkerAlt className="me-3" /> Addis Ababa, Ethiopia
            </p>
          </div>

          {/* Contact Form */}
          <div className={`${styles.contactForm} p-5`}>
            <h2>Send us a message</h2>
            <form action="https://getform.io/f/bkkkwnxb" method="POST">
              <div className={styles.formGroup}>
                <input type="text" placeholder="Your Name" name="name" required />
              </div>
              <div className={styles.formGroup}>
                <input type="email" placeholder="Your Email" name="email" required />
              </div>
              <div className={styles.formGroup}>
                <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;