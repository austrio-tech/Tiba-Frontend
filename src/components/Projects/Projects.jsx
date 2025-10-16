import React from 'react';
import styles from './Projects.module.css';

const Projects = () => {
  return (
    <section className={styles.projects}>
      <h2>Major Projects</h2>
      <ul>
        <li>Metro Rail Project</li>
        <li>Hydroelectric Dam</li>
        <li>Commercial Complex</li>
      </ul>
    </section>
  );
};

export default Projects;
