import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">Tentang Saya</h2>
        <div className="flex flex-col items-center mb-12">
          <img 
            src={`/profile/profile.jpg`}
            alt="Profile" 
            className="w-32 h-32 rounded-full object-cover mb-4 shadow-lg" 
          />
          <p className="text-lg text-gray-600 mb-2">
            Software Engineer
          </p>
          <p className="text-xl font-semibold text-gray-700">
            Saya adalah seorang software engineer yang memiliki keahlian dalam berbagai teknologi termasuk IoT, pengembangan backend, pengembangan web, dan aplikasi mobile.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-colors duration-300">
            <h3 className="text-2xl font-bold mb-4 text-indigo-600">IoT</h3>
            <p className="text-gray-700 mb-4">
              Pengalaman saya dalam IoT melibatkan pengembangan dan integrasi perangkat pintar serta menciptakan jalur data yang efisien.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-colors duration-300">
            <h3 className="text-2xl font-bold mb-4 text-green-600">Backend Development</h3>
            <p className="text-gray-700 mb-4">
              Dengan pengetahuan mendalam tentang Node.js dan NestJS, saya membangun aplikasi server-side yang skalabel dan berkinerja tinggi.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-colors duration-300">
            <h3 className="text-2xl font-bold mb-4 text-blue-600">Web Development</h3>
            <p className="text-gray-700 mb-4">
              Menggunakan React.js untuk membangun situs web responsif dan interaktif dengan perhatian pada desain dan performa.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-colors duration-300">
            <h3 className="text-2xl font-bold mb-4 text-red-600">Mobile Development</h3>
            <p className="text-gray-700 mb-4">
              Menggunakan React Native untuk membuat aplikasi mobile lintas platform dengan pengalaman pengguna yang konsisten di iOS dan Android.
            </p>
          </div>
        </div>
        <p className="text-lg text-gray-600 mt-8">
          Saya berdedikasi untuk terus belajar dan mengikuti tren serta teknologi terbaru di industri. Tujuan saya adalah memanfaatkan keterampilan beragam saya untuk mendorong inovasi dan memberikan solusi perangkat lunak yang luar biasa.
        </p>
      </div>
    </section>
  );
}

export default About;
