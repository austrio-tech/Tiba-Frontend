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
import MODPF from '../../assets/imgs/Clients/MODPF.webp';

import AC from '../../assets/imgs/Clients/AC.jpg';
import AMI from '../../assets/imgs/Clients/AMI.png';
import BEAH from '../../assets/imgs/Clients/BEAH.png';
import GUT from '../../assets/imgs/Clients/GUT.png';
import LNV from '../../assets/imgs/Clients/LNV.jpeg';
import NED from '../../assets/imgs/Clients/NED.png';
import NWS from '../../assets/imgs/Clients/NWS.jpg';
import RG from '../../assets/imgs/Clients/RG.jpeg';
import SAH from '../../assets/imgs/Clients/SAH.png';

const Clients = () => {
  const logos1 = [MOH, MOE, ROP, ABQ, AGH, MOM, AJG, EDIC, MOTC, MM, ASI, MER, MDO];
  const logos2 = [AC, AMI, BEAH, GUT, LNV, NED, RG, SAH, NWS, PDO, MOH1, MOAFW, MODPF];
  return (
    <section className={styles.clients}>
      <h2 className={styles.heading}>Our Clients</h2>
          <p>*Our Expert Team has experience over diverse clients in Oman</p>

      <div className={styles.marquee}>
        <div className={`${styles.track} ${styles.leftToRight}`}>
          {[...logos1, ...logos1].map((logo, i) => (
            <img key={`ltr-${i}`} src={logo} alt="Client Logo" className={styles.logo} />
          ))}
        </div>
      </div>

      <div className={styles.marquee}>
        <div className={`${styles.track} ${styles.rightToLeft}`}>
          {/* {logos.slice().reverse().map((logo, i) => ( */}
          {[...logos2, ...logos2].map((logo, i) => (
            <img key={`ltr-${i}`} src={logo} alt="Client Logo" className={styles.logo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
