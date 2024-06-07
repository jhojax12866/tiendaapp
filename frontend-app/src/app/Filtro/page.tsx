'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '../Sidebar/Sidebar'; // Importa el componente Sidebar

import './filtro.css';





const Filtro: React.FC = () => {
  
  const [selectedMonth, setSelectedMonth] = useState('');
  const router = useRouter();
  
  const handleSearch = () => {
    if (selectedMonth) {
      router.push(`/Table?month=${selectedMonth}`);
      //
    }
  };

  return (
    
    
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Sidebar />
      <div className="bg-blue-500 p-8 rounded-lg shadow-lg">
        <label className="block text-white mb-4  filter-text">
          Selecciona mes y año: <br />
          <input
            type="month"
            className="mt-2 p-2 rounded-md text-black  filter-text"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          />
        </label>
        <button
          onClick={handleSearch}
          className="bg-red-500 text-black py-2 px-4 rounded-md hover:bg-green-500 hover:text-white transition  filter-text"
        >
          Buscar
        </button>
      </div>
    </div>
  );
};

export default Filtro;
