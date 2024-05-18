"use client"
import React, { useState } from 'react';
import styles from './Chat.module.css';

export const Chat = () => {
  const [mensajes, setMensajes] = useState([]);
  const [nuevoMensaje, setNuevoMensaje] = useState('');

  const btnEnviarMensaje = () => {
    if (nuevoMensaje.trim() !== '') {
      setMensajes([...mensajes, { text: nuevoMensaje, sender: 'user' }]);
      setNuevoMensaje('');

      setTimeout(() => {
        setMensajes(prevMensajes => [...prevMensajes, { text: 'Respuesta automática', sender: 'bot' }]);
      }, 1000);
    }
  };

  const cambioMensaje = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setNuevoMensaje(event.target.value);
  };

  return (
    <div className={styles.contenedor}>
      <div className={styles.historial}>
        {mensajes.map((mensaje, index) => (
          <div key={index} className={mensaje.sender === 'user' ? styles.mensajeUsuario : styles.mensajeBot}>
            {mensaje.text}
          </div>
        ))}
      </div>
      <div className={styles.entrada}>
        <input
          type="text"
          value={nuevoMensaje}
          onChange={cambioMensaje}
          placeholder="Escribe un mensaje..."
          className={styles.inputMensaje}
        />
        <button onClick={btnEnviarMensaje} className={styles.botonEnviar}>
          Enviar
        </button>
      </div>
    </div>
  );
};