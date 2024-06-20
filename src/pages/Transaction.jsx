import React, { useEffect, useState } from 'react';
import CheckTransfer from '../components/CheckTransfer';
import ButtonsForms from '../components/ButtonsForms';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2'


const Transaction = () => {
  const token = useSelector((store) => store.authReducer.token);
  const [clientAccounts, setClientAccounts] = useState([]);
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [selectedSourceAccount, setSelectedSourceAccount] = useState('');
  const [destinationAccount, setDestinationAccount] = useState('');// 'own' or 'thirdParty
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    getData();
  }, [token]);

  const getData = async () => {
    try {
      const response = await axios.get('https://homebanking-akst.onrender.com/api/clients/current/accounts', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setClientAccounts(response.data);
      // console.log(response.data);
    } catch (error) {
      handleError(error);
    }
    setLoading(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const createTransaction = {
      sourceAccountNumber: selectedSourceAccount,
        destinationAccountNumber: destinationAccount,
        amount: amount,
        description: description
    };
    console.log(createTransaction);


    try {
      const response = await axios.post('https://homebanking-akst.onrender.com/api/transactions', createTransaction, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Transaction created successfully!",
        showConfirmButton: false,
        timer: 1500
      });
  

    } catch (error) {

      handleError(error);
    }
  }
  const handleError = (error) => {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Error: ${error.response.data}. Status: ${error.response.status}`,
        });
      }
    } else {
      // Algo pasó fuera de Axios
      alert(`Error: ${error}`);
    }
  };

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the time as needed
  }, []); 
 

  return (
    <main className='w-full pt-10 p-5 lg:pl-[15rem] flex flex-col md:pl-[254px;] justify-evenly md:h-screen items-center'>
      {loading ? (
        <div className='flex items-center justify-center w-full h-screen'>
          <div className='p-3 animate-spin drop-shadow-2xl bg-gradient-to-bl from-pink-400 via-purple-400 to-indigo-600 md:w-48 md:h-48 h-32 w-32 aspect-square rounded-full'>
            <div className='rounded-full h-full w-full bg-slate-100 dark:bg-zinc-900 background-blur-md'></div>
          </div>
        </div>
      ) : (
        <>
      <h2 className='text-[#d0ad50] text-3xl lg:text-5xl '>Make a transaction</h2>
     
      <div className='flex flex-col md:flex-row lg:flex-row justify-between items-center rounded-xl py-5 '>
        <div>
          <div className='flex flex-col items-center justify-center dark'>
            <div className='w-full max-w-md bg-gray-800 rounded-l-xl shadow-md p-6'>
              <form className='flex flex-col ' onSubmit={handleSubmit}>
            
                <select
                  className='bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150'
                  name="product"
                  id="product"
                 
                  onChange={(e) => setSelectedSourceAccount(e.target.value)}
                  value={selectedSourceAccount}
                >
                  <option disabled value="">Select an account</option>
                  {clientAccounts && clientAccounts.length > 0 ? (
                    clientAccounts.map((account) => (
                      
                      <option key={account.number} value={account.number}>
                        {account.number}
                      </option>
                    ))
                  ) : (
                    <option>No exist accounts</option>
                  )}
                </select>
                <input
                  name="accountDestination"
                  className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                  type="text"
                  placeholder="Account Destination"
                  required
                  onChange={(e) => setDestinationAccount(e.target.value)}
                />

                <input
                  name="amount"
                  className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                  type="number"
                  placeholder="Amount"
                  required
                  onChange={(e) => setAmount(e.target.value)}
                />

                <textarea
                  name="description"
                  id="description"
                  className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                  placeholder="Write a note"
                  required
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>

                  
                <button        //REVISAR 
                  className='w-full justify-center py-1 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded-md text-white ring-2'
                  type='submit'
                  onClick={() => {
                    if (window.confirm('Are you sure you want to transfer the money?')) {
                      handleSubmit();
                    }
                  }}
                >
                  Transfer
                </button>
              </form>
            </div>
          </div>
        </div>
                    
        <img className=' md:w-[240px] md:h-[327px] rounded-lg md:rounded-r-xl lg:rounded-r-xl lg:w-[428px] lg:h-[327px]' src='/assets/img/transacciones.jfif' alt='img-logo'></img>
      </div>
      </>
      )}
    </main>
  );
};

export default Transaction;

