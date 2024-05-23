"use client";
//aqui estoy usando short polling , aqui el usuario tiene que solicitar los datos cada rato para ver el numero actualizado
import { useState } from "react";
import axios from 'axios';
import styles from "./RegisteredPersons.module.css";

export const RegisteredPersons = () => {
  const [userCount, setUserCount] = useState(0);
  const [showCount, setShowCount] = useState(false);

  const handleClick = () => {
    axios.get('http://localhost:3000/usuarios')
      .then(response => {
        setUserCount(response.data.length);
        setShowCount(true);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  return (
    <div className={styles.contenedor}>
      <h1 className="text-3xl font-bold text-blue-500 hover:text-blue-700 transition-colors duration-300 ">
        Da click para saber cuantos UPS somos :)
      </h1>{" "}
      <button className={styles.button} onClick={handleClick}>
        Mostrar UPS
      </button>
      {showCount && <p className={styles.let}>Total de usuarios: {userCount}</p>}
    </div>
  );
};