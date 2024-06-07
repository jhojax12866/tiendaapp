'use client';

import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './editar.css';

const Registro: React.FC = () => {
  return (
    <div className="registro-container">
        <Sidebar />
        <h3>EDITAR</h3> <br />
      <div className="registro-box">
        
        <div className="registro-column">
          <label>
            Nombre 1:
            <input type="text" name="nombre1" />
          </label>
          <label>
            Apellido 1:
            <input type="text" name="apellido1" />
          </label>
          <label>
            Cédula:
            <input type="text" name="cedula" />
          </label>
          <label>
            Teléfono 1:
            <input type="text" name="tel1" />
          </label>
          <label>
            Sueldo:
            <input type="text" name="sueldo" />
          </label>
          <label>
            Recomendación:
            <input type="text" name="recomendacion" />
          </label>
        </div>
        <div className="registro-column">
          <label>
            Nombre 2:
            <input type="text" name="nombre2" />
          </label>
          <label>
            Apellido 2:
            <input type="text" name="apellido2" />
          </label>
          <label>
            Correo:
            <input type="email" name="correo" />
          </label>
          <label>
            Teléfono 2:
            <input type="text" name="tel2" />
          </label>
          <label>
            Dirección:
            <input type="text" name="direccion" />
          </label>
        </div>
      </div>
      <button className="guardar-button">Guardar</button>
    </div>
  );
}

export default Registro;
