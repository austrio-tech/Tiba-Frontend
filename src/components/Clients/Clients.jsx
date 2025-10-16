import React from 'react';
import styles from './Clients.module.css';

const Clients = () => {
  return (
    <section className={styles.clients}>
      <h2>Our Clients</h2>
      <ul>
        <li>ABC Corp</li>
        <li>XYZ Infra</li>
        <li>Global Builders</li>
      </ul>
    </section>
  );
};

export default Clients;
