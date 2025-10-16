import React from 'react';
import styles from './Services.module.css';
import hotelImg from '../../assets/imgs/services/hotelbuilding.jpg';
import villaImg from '../../assets/imgs/services/luxuryvilla.webp';
import residentialImg from '../../assets/imgs/services/residentialbuildings.jpg';
import governmentImg from '../../assets/imgs/services/govbuildings.webp';
import schoolImg from '../../assets/imgs/services/schoolbuilding.jpg';
import renovationImg from '../../assets/imgs/services/expansionproject.jpg';
const servicesData = [
  {
    title: 'Residential & Commercial Buildings',
    image: residentialImg,
  },
  {
    title: 'Government Buildings',
    image: governmentImg,
  },
  {
    title: 'Schools',
    image: schoolImg,
  },
  {
    title: 'Luxury Villas',
    image: villaImg,
  },
  {
    title: 'Expansion & Renovation Projects',
    image: renovationImg,
  },
  {
    title: 'Hotels',
    image: hotelImg,
  },
];

const Services = () => {
  return (
    <section className={styles.services}>
      <h2 className={styles.title}>Our Services</h2>
      <div className={styles.grid}>
        {servicesData.map((service, index) => (
          <div key={index} className={styles.card}>
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${service.image})` }}
            />
            <div className={styles.overlay}>
              <h3 className={styles.cardTitle}>{service.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
