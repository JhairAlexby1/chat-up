"use client";

import Cookies from "js-cookie";
import React, {useEffect, useState} from 'react';
import styles from './Chat.module.css';
import jwt from 'jsonwebtoken';

interface Mensaje {
  texto: string;
  usuario: string;
    chat: string;
}



export const Chat = () => {
  const ws = new WebSocket('ws://localhost:3030');
  const [mensajes, setMensajes] = useState<Mensaje[]>([]);
  const [nuevoMensaje, setNuevoMensaje] = useState('');
  const cookie: string | undefined = Cookies.get('token');
  // @ts-ignore
  const user = jwt.verify(cookie, "secret");

  const handleKeyPress = (event: React.KeyboardEvent) => {
  if (event.key === 'Enter') {
    btnEnviarMensaje();
  }
};

  const btnEnviarMensaje = () => {
    if (nuevoMensaje.trim() !== '') {
      ws.send(JSON.stringify({ event: 'message', data: {texto: nuevoMensaje, usuario: user.id, chat: user.chats[0] } }));
    }
  };

  const handleCambioMensaje = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNuevoMensaje(event.target.value);
  };

  useEffect(() => {
      ws.onopen = () => {
            console.log('Conectado');
      }
      ws.send(JSON.stringify({ event: 'listening', data: user.id }));
        ws.onmessage = (event) => {
            const mensaje = JSON.parse(event.data);
            if (mensaje.event === 'messages')
            setMensajes(mensaje.data);
        };
  },[mensajes, user.id, ws]);

  return (
    <div className={styles.contenedor}>
      <div className={styles.historial}>
        {mensajes.map((mensaje, index) => (
          <div key={index} className={mensaje.usuario === 'user' ? styles.mensajeUsuario : styles.mensajeBot}>
            {mensaje.texto}
          </div>
        ))}
      </div>
      <div className={styles.entrada}>
        <input
          type="text"
          value={nuevoMensaje}
          onChange={(e) => setNuevoMensaje(e.target.value)}
          onKeyPress={handleKeyPress}
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