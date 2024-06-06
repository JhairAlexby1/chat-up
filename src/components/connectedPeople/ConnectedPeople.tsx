"use client"
//aqui implemento long polling para que se actualice la lista de personas conectadas en tiempo real
//falta modificarlo para que solo muestre los que estan en linea
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from "./ConnectedPeople.module.css";
import Image from "next/image";

interface Person {
  nombre: string;
}

export const ConnectedPeople = () => {
  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const response = await axios.get<Person[]>('http://localhost:3001/usuarios');
        setPeople(response.data);
      } catch (error) {
        console.error('Error fetching people:', error);
      }
    };

    const intervalId = setInterval(fetchPeople, 5000); 

    return () => clearInterval(intervalId); 
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