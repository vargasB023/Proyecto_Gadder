import React from 'react';
import './Css/Botonregistro.css'

export default function BotonRegistro({ onClick }) {
  return (
    <button className="boton-registro" onClick={onClick}>
      Registrarse
    </button>
  );
}
