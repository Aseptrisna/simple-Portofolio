import React from 'react';

const Hero = () => {
  return (
    <section 
      className="bg-cover bg-center h-screen text-white" 
      style={{ backgroundImage: 'url(/bg/bg.jpg)' }}
    >
      <div className="bg-black bg-opacity-60 h-full flex flex-col justify-center items-center text-center p-6">
        <h2 className="text-5xl font-bold mb-4">Halo, Saya Asep Trisna Setiawan</h2>
        <p className="text-2xl mb-8">Software Engineer</p>
        <a 
          href="#projects" 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300"
        >
          Lihat Karya Saya
        </a>
      </div>
    </section>
  );
}

export default Hero;
