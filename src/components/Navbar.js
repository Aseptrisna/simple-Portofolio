// eslint-disable-next-line
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-3xl font-bold"></h1>
        <div>
          <a href="#about" className="text-gray-300 hover:text-white mx-4 transition duration-300">Tentang</a>
          <a href="#projects" className="text-gray-300 hover:text-white mx-4 transition duration-300">Proyek</a>
          <a href="#contact" className="text-gray-300 hover:text-white mx-4 transition duration-300">Kontak</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
