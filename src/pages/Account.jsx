import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import Carrusel from '../components/Carrusel';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Account = () => {
  const [accounts, setAccounts] = useState([]);
  const [message, setMessage] = useState('');
  const token = useSelector(store => store.authReducer.token);
  const user = useSelector(store => store.authReducer.user);

  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/clients/current/accounts', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setAccounts(response.data);
    } catch (error) {
      handleError(error);
    }
  };

  const createAccount = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/clients/current/accounts', {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      

      getData();
    } catch (error) {
      handleError(error);
    }
  };

  const handleError = (error) => {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        // El servidor respondió con un estado diferente a 2xx
        alert(`Error: ${error.response.data}. Status: ${error.response.status}`);
      } else if (error.request) {
        // La petición fue hecha pero no se recibió respuesta
        alert('Error: No response received from the server.');
      } else {
        // Algo pasó al configurar la petición
        alert(`Error: ${error.message}`);
      }
    } else {
      // Algo pasó fuera de Axios
      alert(`Error: ${error}`);
    }
  };

  useEffect(() => {
    getData();
  }, [token]);

  return (
    <main className='w-full p-5 px-2 sm:pl-[300px] flex flex-col justify-evenly h-min-screen gap-5'>
      <div className='flex justify-between flex-col  pt-5'>
        <h2 className='text-white text-center text-2xl md:text-3xl lg:text-4xl'>Welcome {user.name}!</h2>
        <div className="flex justify-center">
          <button onClick={createAccount} className="relative w-[40%] mt-2 lg:w-[20%] md:mt-10 lg:mt-10 inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#f5e3b3] to-[#af954c] group-hover:from-[#4d9120] group-hover:to-[#e6c05a] dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75  dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Add Account
            </span>
          </button>
        </div>
        {message && <p className="mt-5">{message}</p>}
      </div>

      {/* CARDS */}
      <div className='flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:justify-center'>
        {accounts && accounts.length > 0 ? (
          accounts.map((account, index) => (
            <Card
              key={index}
              id={account.id}
              textoNumber={`Number account: ${account.number}`}
              textoAmount={`Amount: $${account.balance}`}
              textoDate={`Creation date: ${account.creationDate}`}
              className="sm:w-80 sm:first:mt-5"
              showButton={true}
            />
          ))
        ) : (
          <p className="mt-5">No accounts found</p>
        )}
      </div>

      <Carrusel className="mt-5" />
    </main>
  );
};

export default Account;
