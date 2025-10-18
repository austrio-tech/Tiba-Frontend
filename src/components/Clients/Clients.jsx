import React from 'react';
import styles from './Clients.module.css';

import MOH from '../../assets/imgs/Clients/MOH.png';
import MOE from '../../assets/imgs/Clients/MOE.webp';
import ROP from '../../assets/imgs/Clients/ROP.jpeg';
import ABQ from '../../assets/imgs/Clients/ABQ.jpg';
import AGH from '../../assets/imgs/Clients/AGH.png';
import MOM from '../../assets/imgs/Clients/MOM.jpeg';
import AJG from '../../assets/imgs/Clients/AJG.jpeg';
import EDIC from '../../assets/imgs/Clients/EDIC.webp';
import MOTC from '../../assets/imgs/Clients/MOTC.jpg';
import MM from '../../assets/imgs/Clients/MM.png';
import ASI from '../../assets/imgs/Clients/ASI.png';
import MER from '../../assets/imgs/Clients/MER.png';
import MDO from '../../assets/imgs/Clients/MOD.png';
import PDO from '../../assets/imgs/Clients/PDO.png';
import MOH1 from '../../assets/imgs/Clients/MOH.jpg';
import MOAFW from '../../assets/imgs/Clients/MOAFW.png';


const Clients = () => {
  const logos = [MOH, MOE, ROP, ABQ, AGH, MOM, AJG, EDIC, MOTC, MM, ASI, MER, MDO, PDO, MOH1, MOAFW];

  return (
    <section className={styles.clients}>
      <h2 className={styles.heading}>Our Clients</h2>

      <div className={styles.marquee}>
        <div className={`${styles.track} ${styles.leftToRight}`}>
          {[...logos, ...logos].map((logo, i) => (
            <img key={`ltr-${i}`} src={logo} alt="Client Logo" className={styles.logo} />
          ))}
        </div>
      </div>

      <div className={styles.marquee}>
        <div className={`${styles.track} ${styles.rightToLeft}`}>
          {[...logos, ...logos].map((logo, i) => (
            <img key={`rtl-${i}`} src={logo} alt="Client Logo" className={styles.logo} />
          ))}
        </div>
      </div>
      <p>*Our Expert Team has experience over diverse clients in Oman</p>
    </section>
  );
};

export default Clients;
