import React from 'react';
import './Css/Botoniniciosesion.css'; 

export default function BotonInicioSesion({ onClick }) {
  return (
    <button className="botoniniciosesion" onClick={onClick}>
      Iniciar Sesión
    </button>
  );
}