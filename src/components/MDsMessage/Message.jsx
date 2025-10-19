import React from "react";
import styles from "./Message.module.css";

const Overview = () => {
  return (
    <section className={styles.message}>
      <h2>MD Message</h2>
      <p>
        At TIBA Engineering and Contracting LLC, we are driven by a clear
        purpose: to build with integrity, deliver with excellence, and leave
        behind a legacy of trust. Our commitment to quality, timely completion,
        and client satisfaction is matched only by our unwavering focus on
        health, safety, and ethical practices. Every structure we create
        reflects our dedication to innovation and responsible construction —
        where people come first, and standards are never compromised. With every
        project, we aim not just to meet expectations, but to exceed them —
        safely, ethically, and sustainably. <br />
        Thank you for placing your trust in us. <br />
        Regards, <br />
        <b className={styles.right}>
          Mohammed Tarek,
          <br /> Managing Director
        </b>
      </p>
    </section>
  );
};

export default Overview;
