import React, { useEffect, useRef, useState } from 'react';
import styles from './SpotlightImage.module.css';

const SpotlightImage = () => {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false); // <- new flag

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setIsActive(true); // Mouse is inside window

      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        setMousePosition({ x, y });
      }
    };

    const handleMouseLeave = () => {
      setIsActive(false); // Mouse left the window
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.container}>
      <h1 className={styles.h1}>Tiba Engineering and Contracting LLC</h1>
      <div className={styles.text}>Implementing Visions, Building Legacy</div>

      <div
        className={styles.overlay}
        style={
          isActive
            ? {
                maskImage: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, transparent 0%, green 100%)`,
                WebkitMaskImage: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, transparent 0%, green 100%)`,
              }
            : {
                maskImage: `none`,
                WebkitMaskImage: `none`,
              }
        }
      />
    </div>
  );
};

export default SpotlightImage;
