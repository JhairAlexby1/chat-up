"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from "./ConnectedPeople.module.css";
import Image from "next/image";

interface Person {
  nombre: string;
}

export const ConnectedPeople = () => {
  const [people, setPeople] = useState<Person[]>([]);

  const fetchConnectedPeople = async () => {
    try {
      const response = await axios.get<{ usuariosConectados: Person[] }>('http://localhost:3001/usuarios/esperarNotificaciones', {
        withCredentials: true,
        headers: {
          'Authorization': `Bearer ${document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1")}` // Obtener token de la cookie
        }
      });
      setPeople(response.data.usuariosConectados);
      fetchConnectedPeople(); // recursividad para actualiar la lista de personas conectadas 
    } catch (error) {
      console.error('Error fetching connected people:', error);
      setTimeout(fetchConnectedPeople, 5000); // por si hay error reinicia a los 5 se
    }
  };

  useEffect(() => {
    fetchConnectedPeople();
  }, []);

  return (
    <div className={styles.contenedor}>
      <h1>UP CHAT</h1>
      <h2 className={styles.textConect}>Personas Conectadas</h2>
      {people.map((person, index) => (
        <div key={index} className={styles.personas}>
          <Image
            className={styles.imgPersona}
            src="/images/photosPeople/persona.jpg"
            width={30}
            height={30}
            alt={`Picture of ${person.nombre}`}
            priority
          />
          <p className='text-white'>{person.nombre}</p>
        </div>
      ))}
    </div>
  );
};
