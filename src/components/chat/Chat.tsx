"use client"
import React, { useState } from 'react';
import styles from './Chat.module.css';

interface Mensaje {
  text: string;
  sender: 'user' | 'bot';
}

export const Chat = () => {
  const [mensajes, setMensajes] = useState<Mensaje[]>([]);
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

  const handleCambioMensaje = (event: React.ChangeEvent<HTMLInputElement>) => {
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
          onChange={handleCambioMensaje}
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