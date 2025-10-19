import React from "react";
import styles from "./VisionMission.module.css";

// Icons
import {
  FaEye,
  FaBullseye,
  FaHandshake,
  FaAward,
  FaHardHat,
  FaUsers,
  FaTrophy,
} from "react-icons/fa";

const VisionMission = () => {
  return (
    <section className={styles.visionMission}>
      <h2 className={styles.sectionTitle}>Vision, Mission & Values</h2>

      {/* Vision & Mission Side-by-Side */}
      <div className={styles.row}>
        <div className={styles.card}>
          <div>
            <div className={styles.icon}>
              <FaEye />
              <h3 className={styles.cardTitle}>Vision</h3>
            </div>
            <div>
              <p>
                To lead and be the go-to engineering & construction firm,
                delivering exceptional quality & projects on schedule while
                maintaining a laser-like focus on client satisfaction.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div>
            <div className={styles.icon}>
              <FaBullseye />
              <h3 className={styles.cardTitle}>Mission</h3>
            </div>
            <p>
              To continuously develop new techniques and procedures in order to
              improve efficiency & competitiveness in terms of cost. To set the
              standard by which our competitors are measured.
            </p>
          </div>
        </div>
      </div>

      {/* Values */}
      <div id="coreValues"></div>
      <h3 className={styles.subTitle}>Our Core Values</h3>
      <div className={styles.valuesGrid}>
        <div className={styles.valueCard}>
          <FaHandshake className={styles.valueIcon} />
          <h4>Ethics</h4>
          <p>
            Uncompromising in our integrity, honesty, and professional conduct.
          </p>
        </div>

        <div className={styles.valueCard}>
          <FaAward className={styles.valueIcon} />
          <h4>Passion for Excellence</h4>
          <p>Do it right the first time — every time.</p>
        </div>

        <div className={styles.valueCard}>
          <FaHardHat className={styles.valueIcon} />
          <h4>Safety & Health</h4>
          <p>
            Ensure a safe and healthy working environment to achieve zero
            lost-time injury.
          </p>
        </div>

        <div className={styles.valueCard}>
          <FaUsers className={styles.valueIcon} />
          <h4>People</h4>
          <p>
            Aspiring to be the employer of choice by providing the best working
            environment.
          </p>
        </div>

        <div className={styles.valueCard}>
          <FaTrophy className={styles.valueIcon} />
          <h4>Result Oriented</h4>
          <p>Do it — whatever it takes.</p>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
