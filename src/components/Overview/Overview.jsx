import React from 'react';
import styles from './Overview.module.css';

const Overview = () => {
  return (
    <section className={styles.overview}>
      <h2>Company Overview</h2>
      <p>
        TIBA is a professionally managed local firm recognized and respected for its aggressive results, unwavering focus on client satisfaction, and strict conformance to the highest HSE standards.
      
        Operating as an excellent-grade company for over 20 years, TIBA has successfully delivered prestigious projects for respected government agencies, corporate entities, and private developers.
     
        The company is proudly registered with the Tender Board of Oman, the Ministry of Defence, and the Royal Oman Police, demonstrating our compliance and credibility in delivering critical infrastructure and development projects.
      </p>
    </section>
  );
};

export default Overview;
