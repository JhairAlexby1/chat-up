"use client";
import styles from "./UserProfile.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const UserProfile = () => {
  const users = ["Jhair"];

  const router = useRouter();

  function btnCerrarSesion() {
    router.push("/landingPage");
  }

  return (
    <div className={styles.contenedor}>
      {users.map((user, index) => (
        <div key={index}>
          <Image
                  className={styles.imgPersona}
                  src="/images/photosPeople/persona.jpg"
                  width={100}
                  height={100} alt={""}          />
          <h2>{user}</h2>
        </div>
      ))}
      <button onClick={btnCerrarSesion} className={styles.boton}>
        Cerrar sesión
      </button>
    </div>
  );
};
