import React from 'react';
import './Css/Formularioregistro.css'
import BotonRegistro from './Botonregistro';

export default function Formularioregistro() {
  return (
    <form className="formulario-registro">
      <fieldset>
        <legend>Registro</legend>
        <div className="grupo-formulario">
          <label htmlFor="nombreCompleto">Nombre Completo:</label>
          <input
            type="text"
            id="nombreCompleto"
            aria-label="Nombre Completo"
          />
        </div>
        <div className="grupo-formulario">
          <label htmlFor="identificacion">Identificación:</label>
          <input
            type="text"
            id="identificacion"
            aria-label="Identificación"
          />
        </div>
        <div className="grupo-formulario">
          <label htmlFor="fechaNacimiento">Fecha de Nacimiento:</label>
          <input
            type="date"
            id="fechaNacimiento"
            aria-label="Fecha de Nacimiento"
          />
        </div>
        <div className="grupo-formulario">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" aria-label="Email" />
        </div>
        <div className="grupo-formulario">
          <label htmlFor="contrasena">Contraseña:</label>
          <input type="password" id="contrasena" aria-label="Contraseña" />
        </div>
        <BotonRegistro/>
      </fieldset>
    </form>
  );
}