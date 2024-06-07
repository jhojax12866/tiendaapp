// Sidebar.tsx

import React from 'react';
import SidebarButton from './SidebarButton';
import './sidebar.css';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div>
        <SidebarButton icon="add-person" text="Agregar Persona" link="/Registro" />
        <SidebarButton icon="edit-person" text="Editar Persona" link="/Editar" />
        <SidebarButton icon="filter" text="Filtro" link="/Filtro" />
        <SidebarButton icon="logout" text="Cerrar Sesión" link="/#" />
        
        
      </div>
    </div>
  );
};

export default Sidebar;
