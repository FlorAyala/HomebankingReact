import React, { useEffect, useState } from 'react';
import CheckTransfer from '../components/CheckTransfer';
import ButtonsForms from '../components/ButtonsForms';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';


const Transaction = () => {
  const token = useSelector((store) => store.authReducer.token);
  const [clientAccounts, setClientAccounts] = useState([]);
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [selectedSourceAccount, setSelectedSourceAccount] = useState('');
  const [destinationAccount, setDestinationAccount] = useState('');// 'own' or 'thirdParty
  const [showAlert, setShowAlert] = useState(false);


  useEffect(() => {
    getData();
  }, [token]);

  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/clients/current/accounts', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setClientAccounts(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
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
      const response = await axios.post('http://localhost:8080/api/transactions', createTransaction, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log('Transaction created:', response.data);
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
  

    } catch (error) {

      console.error('Error creating transaction:', error);

      if (error.response && error.response.status === 403) {
        alert('You do not have permission to perform this action.');
      }
    }
  }
 

  return (
    <main className='w-full p-5 lg:pl-[15rem] flex flex-col justify-evenly h-screen  items-center'>
      <h2 className='text-[#d0ad50] text-3xl lg:text-5xl '>Make a transaction</h2>
      { showAlert && <div className='bg-green-500 text-white p-2 rounded-lg mb-4'>Transaction successful</div> }
      <div className='flex flex-col md:flex-row lg:flex-row justify-between items-center rounded-xl py-5 '>
        <div>
          <div className='flex flex-col items-center justify-center dark'>
            <div className='w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6'>
              <form className='flex flex-col' onSubmit={handleSubmit}>
            
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

                <button
                  className='w-full justify-center py-1 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded-md text-white ring-2'
                  type='submit'
                >
                  Transfer
                </button>
              </form>
            </div>
          </div>
        </div>

        <img className='w-[269px] h-[294px] ml-5' src='/public/assets/img/transacciones.png' alt='img-logo'></img>
      </div>
    </main>
  );
};

export default Transaction;

