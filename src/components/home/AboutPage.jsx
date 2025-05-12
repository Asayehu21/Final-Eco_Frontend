// import React from 'react';
import styles from './About.module.css'; // Ensure to create this CSS module for styling
// import missionImage from '../../../assets/hp3.png';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; 


const AboutPage = () => {
  return (
    <div className={styles.aboutContainer}>
      <header className={styles.header}>
        <h1>About Us</h1>
        <p>Welcome to Bule Hora Shop, where passion meets purpose! 
          Our journey began with a simple idea: <br/>To provide high-quality products 
          that enhance the lives of our customers. <br/>We believe that shopping should be an exciting experience, <br/>
          filled with choices that inspire and empower.</p>
      </header>


      {/* <section className={styles.vision}>
        <h2>Our Vision</h2>
        <p>
          We envision a world where quality and sustainability go hand in hand,
          making a positive impact on both our customers and the environment.
        </p>
      </section> */}

  
      <section className={styles.team}>
        
        <div className={styles.teamMembers}>

        <div className={styles.teamMember}>
        <h2>Our Vision</h2>
        <p>
          We envision a world where quality and sustainability go hand in hand,
          making a positive impact on both our customers and the environment.
        </p>

          </div>
          
          <div className={styles.teamMember}>
            {/* <img src="/path/to/image2.jpg" alt="Team Member 2" /> */}
            <h3>Our Mission</h3>
            <p>At Bule Hora Shop, we believe that everyone deserves to feel inspired and empowered. Our mission is to provide high-quality products that not only meet your needs but also ignite your passion for life. <br/>
            We strive to create a community where our customers feel valued and motivated to pursue their dreams.</p>
          </div>
          
          <div className={styles.teamMember}>
          
            <h3>Our Values</h3>
            <p>We aim to empower our customers by providing products that enhance their lives.We are committed to offering only the best, ensuring that every purchase is worth it.We believe in building a supportive community where everyone can thrive together.</p>
          </div>
        
        </div>

        
      </section>

      
       <div className={`${styles.contactInfo} p-5`}> 
                  <h3>Let's Talk</h3>
                  <div className=' ms-5'>
                  {/* <h5 className="text-lg font-bold pt-3">Phone</h5> */}
                  <a href="tel:+251925031157" className="flex items-center ms-5">
                    <FaPhone className="me-2" /> +251-92-503-1157
                  </a>  
                  <a href="tel:+251909666440" className="flex items-center ms-5">
                    <FaPhone className="me-2" /> +251-90-966-6440
                  </a>
                  {/* <h5 className="mt-4 text-lg font-bold">Email</h5> */}
                  <a href="mailto:asayehudesalegn2012@gmail.com" className="flex items-center ms-5">
                    <FaEnvelope className="me-2" /> asayehudesalegn2012@gmail.com
                  </a> 
                 
                  <a href="mailto:asayehu.desalegn@bhu.edu.et" className="flex items-center ms-5">
                    <FaEnvelope className="me-2" /> asayehu.desalegn@bhu.edu.et
                  </a>
                  </div>
                  </div>
               
    </div>
  );
};

export default AboutPage;