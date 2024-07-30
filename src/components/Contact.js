import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">Hubungi Saya</h2>
        <p className="text-xl mb-4 text-gray-600">
          Jangan ragu untuk menghubungi saya untuk pertanyaan atau kolaborasi.
        </p>
        <a
          href="mailto:asep.iot@ubl.ac.id"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300"
        >
          Kirim Email
        </a>
      </div>
    </section>
  );
}

export default Contact;
