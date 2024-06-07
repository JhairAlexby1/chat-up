"use client";
import axios from "axios";
import styles from "./UserProfile.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";



export const UserProfile = () => {
  const users = ["Jhair"];
  const router = useRouter();


  async function btnCerrarSesion() {
    try {
      await axios.post('http://localhost:3001/usuarios/logout', null, {
        withCredentials: true, 
      });
      
      router.push('/landingPage');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  }

  return (
    <div className={styles.contenedor}>
      {users.map((user, index) => (
        <div key={index}>
          <Image
            className={styles.imgPersona}
            src="/images/photosPeople/persona.jpg"
            width={100}
            height={100}
            alt={""}
          />
          
        </div>
      ))}
      <button onClick={btnCerrarSesion} className={styles.boton}>
        Cerrar sesión
      </button>
    </div>
  );
};
