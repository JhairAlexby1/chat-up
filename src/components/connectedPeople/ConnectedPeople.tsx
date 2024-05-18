import styles from "./ConnectedPeople.module.css";
import Image from "next/image";

export const ConnectedPeople = () => {
  const people = ['Persona 1', 'Persona 2', 'jhair', 'jhair', 'jhair'];

  return (
    <div>
      <h1>UP CHAT</h1>

      <h2 className={styles.textConect}>Personas Conectadas</h2>

      {people.map((person, index) => (
        <div key={index} className={styles.personas}>
          <Image
            className={styles.imgPersona}
            src="/images/photosPeople/persona.jpg"
            width={30}
            height={30}
            alt={`Picture of ${person}`}
            priority
          />

          <p>{person}</p>
        </div>
      ))}
    </div>
  );
};