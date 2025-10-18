import React from 'react';
import styles from './Projects.module.css';

const projectData = [
  {
    name: 'Construction of 104 Housing units in Al Safa village In Mahoot',
    contractType: 'Lump Sum',
    value: '3.5 M',
    client: 'Ministry Of Housing',
    endYear: '2011',
  },
  {
    name: ' Construction of 200 Housing units in Al Musanna',
    contractType: 'Lump Sum',
    value: '2.5 M',
    client: 'Ministry Of Housing',
    endYear: '2016',
  },
  {
    name: 'Construction of 81 Housing units in Al Khabura Site (IA)',
    contractType: 'Lump Sum',
    value: '3 M',
    client: 'Ministry Of Housing',
    endYear: '2017',
  },
  {
    name: 'Construction of 64 Housing units in Al Khabura Site (3A)',
    contractType: 'Lump Sum',
    value: '3 M',
    client: 'Ministry Of Housing',
    endYear: '2018',
  },
  {
    name: 'Construction of 66 Housing units in Al Khabura Site (3B)',
    contractType: 'Lump Sum',
    value: '3 M',
    client: 'Ministry Of Housing',
    endYear: '2018',
  },
  {
    name: 'Construction of 50 Housing units in hail Al Kouff in Diman wa Taien',
    contractType: 'Lump Sum',
    value: '2.5 M',
    client: 'Ministry Of Housing',
    endYear: '2023',
  },
  //
];

const Projects = () => {
  return (
    <section className={styles.projects}>
      <h2 className={styles.heading}>Major Projects</h2>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Contract Type</th>
              <th>Value (OMR)</th>
              <th>Client</th>
              <th>End Year</th>
            </tr>
          </thead>
          <tbody>
            {projectData.map((project, index) => (
              <tr key={index}>
                <td>{project.name}</td>
                <td>{project.contractType}</td>
                <td className={styles.cen}>{project.value}</td>
                <td>{project.client}</td>
                <td className={styles.cen}>{project.endYear}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Projects;
