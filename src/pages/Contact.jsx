// ContactPage.js
import React from 'react';
import InputsForm from '../components/InputsForm';
import ButtonsForms from '../components/ButtonsForms';
import ButtonHome from '../components/ButtonHome';
import { Link } from 'react-router-dom';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías manejar la lógica de enviar el formulario (por ejemplo, usando una API)
    alert('Formulario enviado');
  };

  return (
    <div className='  flex items-center text-center md:ml-[250px] justify-center my-10 flex-col lg:my-10 lg:ml-[500px]'>
      <header className=" text-blue-500 py-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">Contact - Glacier Net Bank</h1>
          <p className="text-lg mt-2">We are here to help you!</p>
        </div>
      </header>
      <main className="container md:w-[90%]  mx-auto mt-8">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Contact details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <div className="p-4 bg-gray-100 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Main office</h3>
              <p>123 Main Street, Glacier City</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: info@glaciernetbank.com</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Centro de Atención al Cliente</h3>
              <p>Phone: (987) 654-3210</p>
              <p>Email: support@glaciernetbank.com</p>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Envíanos un Mensaje</h2>
          <form onSubmit={handleSubmit} className="flex flex-col text-teal-50 text-left gap-1 w-[80%] lg:text p-5 ml-10 bg-[#000000d5] rounded-xl shadow-[3px_5px_42px_0px_#234e52]">
            
            <label htmlFor="name" className="block text-sm font-medium text-white ">
                FirstName
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 bg-blue-900 rounded-md border border-gray-700 focus:border-blue-700 hover:border-blue-500 transition-all duration-200"
                required
              />

            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mt-4">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 bg-blue-900 rounded-md border border-gray-700 focus:border-blue-700 hover:border-blue-500 transition-all duration-200"
                required
              />

            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mt-4">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full p-2 bg-blue-900 rounded-md border border-gray-700 focus:border-blue-700 hover:border-blue-500 transition-all duration-200"
              ></textarea>

            <section className='p-4 w-[50%] flex items-center justify-center lg:ml-[7rem]'>
              <ButtonsForms text="Submit" />
            </section>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Contact;

