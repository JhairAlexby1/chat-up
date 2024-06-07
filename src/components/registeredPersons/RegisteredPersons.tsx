"use client";
//short
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./RegisteredPersons.module.css";

export const RegisteredPersons = () => {
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get("http://localhost:3001/usuarios")
        .then((response) => {
          setUserCount(response.data.length);
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
    }, 5000); // Actualizaxion

    return () => clearInterval(interval); // reset
  }, []); 

  return (
    <div className={styles.contenedor}>
      <h1 className="text-3xl font-bold text-blue-500 hover:text-blue-700 transition-colors duration-300">
        Número de usuarios actualizados cada 5 segundos
      </h1>
      <p className={styles.let}>Total de usuarios: {userCount}</p>
    </div>
  );
};