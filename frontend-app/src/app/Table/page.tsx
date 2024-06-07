// Table Component (Table.tsx)

'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import Sidebar from '../Sidebar/Sidebar'; // Importa el componente Sidebar
import './table.css';



const Table: React.FC = () => {
  const searchParams = useSearchParams();
  const month = searchParams.get('month');

  // Datos de ejemplo para la tabla
  const data = [
    {
      id: 26,
      id_persona: 20,
      mes_comprado: month,
      nombre_completo: 'Raul Pérez',
      cedula: '0',
      sueldo: 0,
      porcentaje: 0,
      intereses: 0,
      entregar: 0,
      devolver: 0,
      ganancias: 0,
      notas: 'nada'
    },
    {
      id: 27,
      id_persona: 26,
      mes_comprado: month,
      nombre_completo: 'Daniel Mora',
      cedula: '123',
      sueldo: 1000000,
      porcentaje: 0,
      intereses: 0,
      entregar: 0,
      devolver: 0,
      ganancias: 0,
      notas: 'notas'
    }
    
    // Agrega más datos según sea necesario
  ];

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
        <Sidebar />
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Tabla de Resultados</h1>
        <p className="mb-4">Mes y Año seleccionados: {month}</p>
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>ID Persona</th>
                <th>Mes Comprado</th>
                <th>Nombre Completo</th>
                <th>Cédula</th>
                <th>Sueldo</th>
                <th>Porcentaje</th>
                <th>Intereses</th>
                <th>Entregar</th>
                <th>Devolver</th>
                <th>Ganancias</th>
                <th>Notas</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.id_persona}</td>
                  <td contentEditable>{item.mes_comprado}</td>
                  <td contentEditable>{item.nombre_completo}</td>
                  <td contentEditable>{item.cedula}</td>
                  <td contentEditable>{item.sueldo}</td>
                  <td contentEditable>{item.porcentaje}</td>
                  <td contentEditable>{item.intereses}</td>
                  <td contentEditable>{item.entregar}</td>
                  <td contentEditable>{item.devolver}</td>
                  <td contentEditable>{item.ganancias}</td>
                  <td contentEditable>{item.notas}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
