"use client";

import Cookies from "js-cookie";
import React, {useEffect, useState} from 'react';
import styles from './Chat.module.css';
import jwt from 'jsonwebtoken';
import { jwtVerify } from "jose";


interface Mensaje {
  texto: string;
  usuario: string;
    chat: string;
}

interface JWTPayloader {
  id: string;
  chats: string[]; 
  texto: string;
  usuario: string;
  conectado: boolean;
}

const ws = new WebSocket('ws://localhost:3030');






export const Chat = () => {

  const [mensajes, setMensajes] = useState<Mensaje[]>([]);
  const [nuevoMensaje, setNuevoMensaje] = useState('');
  const [payload, setPayload] = useState<JWTPayloader>({id: '', chats: [], texto: '', usuario: '', conectado: false});
  const token = Cookies.get('token');

ws.onopen = () => {
  console.log('Conectado');
  ws.send(JSON.stringify({ event: 'listening'}));
};

  ws.onmessage = (event) => {
    const mensaje = JSON.parse(event.data);
    console.log(mensaje);
    if (mensaje.event === 'messages') {
      setMensajes(mensaje.data);
      console.log(mensaje.data)
      console.log(mensajes)
    }
    if  (mensaje.event === 'message') {
      ws.send(JSON.stringify({ event: 'listening'}));
    }
  };



  const decodeToken = async (token: string) => {
    const secret = new TextEncoder().encode('secret');
    const decoded = jwt.decode(token, { complete: true });
    if (decoded) {
      const {payload} = await jwtVerify(token, secret) as unknown as {
        chats: any;
        id: unknown; payload: JWTPayloader 
  };
      return payload;
    }
  }


  const handleKeyPress = (event: React.KeyboardEvent) => {
  if (event.key === 'Enter') {
    btnEnviarMensaje();
  }
};

  const btnEnviarMensaje = () => {
    if (nuevoMensaje.trim() !== '') {
      ws.send(JSON.stringify({ event: 'message', data: {texto: nuevoMensaje, usuario: payload.id, chat: '666252d1058a6610a44840a9' } }));
    }
  };

  const handleCambioMensaje = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNuevoMensaje(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (token) {
        const decodedPayload = await decodeToken(token);
        if (decodedPayload) {
          setPayload({ ...decodedPayload, texto: '', usuario: '', conectado: false, id: decodedPayload.id as string });
        }
      }
    };
    ws.send(JSON.stringify({ event: 'listening'}));


  
    fetchData();
  
    
  

  
    
  }, [mensajes, token]);

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