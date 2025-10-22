import React from "react";
import styles from "./Gallery.module.css";
import img1 from "../../assets/imgs/projects/1.jpg";
import img2 from "../../assets/imgs/projects/2.jpg";
import img3 from "../../assets/imgs/projects/3.jpg";
import img4 from "../../assets/imgs/projects/4.jpg";
import img5 from "../../assets/imgs/projects/5.jpg";
import img6 from "../../assets/imgs/projects/6.jpg";
import img7 from "../../assets/imgs/projects/7.jpg";
import img8 from "../../assets/imgs/projects/8.jpg";
import img9 from "../../assets/imgs/projects/9.jpg";
import img10 from "../../assets/imgs/projects/10.jpg";
import img11 from "../../assets/imgs/projects/11.jpg";
import img12 from "../../assets/imgs/projects/12.jpg";
import img13 from "../../assets/imgs/projects/13.jpg";
import img14 from "../../assets/imgs/projects/14.jpg";
import img15 from "../../assets/imgs/projects/15.jpg";
import img16 from "../../assets/imgs/projects/16.webp";

const Gallery = () => {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
  ];
  return (<div className={styles.container}>
    <h2>Gallery</h2>
    <div className={styles.galleryContainer}>
      {images.map((src, index) => (
        <div key={index} className={styles.imageWrapper}>
          <img
            src={src}
            alt={`Gallery item ${index + 1}`}
            className={styles.image}
          />
        </div>
      ))}
    </div>
  </div>
  );
};

export default Gallery;
