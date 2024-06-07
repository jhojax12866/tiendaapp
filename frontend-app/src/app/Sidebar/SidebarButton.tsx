// SidebarButton.tsx

import React from 'react';
import Link from 'next/link'; // Importa Link de Next.js

interface SidebarButtonProps {
  icon: string;
  text: string;
  link: string; // Agrega una nueva propiedad para la ruta del enlace
}

const SidebarButton: React.FC<SidebarButtonProps> = ({ icon, text, link }) => {
  return (
    <Link href={link} passHref> {/* Utiliza passHref para que Link genere correctamente el elemento <a> */}
      <span className="sidebar-button">
        <span className={`icon ${icon}`} />
        {text}
      </span>
    </Link>
  );
};

export default SidebarButton;
