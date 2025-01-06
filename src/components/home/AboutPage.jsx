// import React from 'react';
import styles from './About.module.css'; // Ensure to create this CSS module for styling

const AboutPage = () => {
  return (
    <div className={styles.aboutContainer}>
      <header className={styles.header}>
        <h1>About Us</h1>
        <p>Learn more about our mission, vision, and values.</p>
      </header>

      <section className={styles.mission}>
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide the best products and services to our customers
          while ensuring sustainability and community engagement.
        </p>
      </section>

      <section className={styles.vision}>
        <h2>Our Vision</h2>
        <p>
          We envision a world where quality and sustainability go hand in hand,
          making a positive impact on both our customers and the environment.
        </p>
      </section>

      <section className={styles.values}>
        <h2>Our Values</h2>
        <ul>
          <li>Integrity</li>
          <li>Innovation</li>
          <li>Customer-Centric</li>
          <li>Sustainability</li>
          <li>Community Engagement</li>
        </ul>
      </section>

      <section className={styles.team}>
        <h2>Meet Our Team</h2>
        <div className={styles.teamMembers}>
          <div className={styles.teamMember}>
            <img src="/path/to/image1.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className={styles.teamMember}>
            <img src="/path/to/image2.jpg" alt="Team Member 2" />
            <h3>Jane Smith</h3>
            <p>Chief Operating Officer</p>
          </div>
          <div className={styles.teamMember}>
            <img src="/path/to/image3.jpg" alt="Team Member 3" />
            <h3>Emily Johnson</h3>
            <p>Head of Marketing</p>
          </div>
          {/* Add more team members as needed */}
        </div>
      </section>

      <section className={styles.cta}>
        <h2>Join Us on Our Journey</h2>
        <p>Be part of our mission to make a difference. Contact us to learn more.</p>
        <button className={styles.ctaButton}>Contact Us</button>
      </section>
    </div>
  );
};

export default AboutPage;