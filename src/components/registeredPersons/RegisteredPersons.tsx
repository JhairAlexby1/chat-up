"use client"
import { useState } from 'react';
import styles from './RegisteredPersons.module.css';

export const RegisteredPersons = () => {
  const [ups, setUps] = useState([11]); 
  const [showUps, setShowUps] = useState(false);

  const handleClick = () => {
    setShowUps(true);
  }

  return (
    <div className={styles.contenedor}>
      <h1>Da click para saber cuantos UPS somos :)</h1>
      <button className={styles.button} onClick={handleClick}>Mostrar UPS</button>

      {showUps && ups.map((up, index) => (
        <p className={styles.let} key={index}>UPS {up}</p>
      ))}

    </div>
  )
}