import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2'

const ApplyLoans = () => {
  const token = useSelector((store) => store.authReducer.token);
  const [loan, setLoan] = useState([]);
  const [loading, setLoading] = useState(true);
  const [clientAccounts, setClientAccounts] = useState([]);
  const [amount, setAmount] = useState('');
  const [installments, setInstallments] = useState('');
  const [destinationAccountNumber, setDestinationAccountNumber] = useState('');
  const [loanId, setLoanId] = useState();
  const [selectedLoanName, setselectedLoanName] = useState();
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    getData();
    getAccounts();
  }, [token]);

  const getData = async () => {
    try {
      const response = await axios.get('https://homebanking-akst.onrender.com/api/loans', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setLoan(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const getAccounts = async () => {
    try {
      const response = await axios.get('https://homebanking-akst.onrender.com/api/clients/current/accounts', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setClientAccounts(response.data);
      console.log(response.data);
    } catch (error) {
      handleError(error);
    }
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    const createLoans = {
      loanId: loanId,
      amount: amount,
      installments: installments,
      destinationAccountNumber: destinationAccountNumber,
    };
    console.log(createLoans);

    try {
      const response = await axios.post('https://homebanking-akst.onrender.com/api/loans', createLoans, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Successful loan application!",
        showConfirmButton: false,
        timer: 1500
      });
    } catch (error) {
      handleError(error);
    }
  };


  const handleLoanChange = (e) => {

    const selectedLoanName = e.target.value;

    const selectedLoanId = loan.find((loan) => loan.name === selectedLoanName);
   
    setselectedLoanName(selectedLoanName);

    if (selectedLoanId) {

      setLoanId(selectedLoanId.id);
      
    } else {
      console.log(`couldn't find loan with name '${selectedLoanId}'.`);
    }
  };

  useEffect(() => {
    if (selectedLoanName) {
      const selectedLoan = loan.find((loan) => loan.name === selectedLoanName);
      if (selectedLoan) {
        setPayments(selectedLoan.payments);
       
      }
      
    }
  }, [selectedLoanName, loan]);

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
    <main className='w-full p-5 lg:pl-[15rem] md:ml-[12rem] flex flex-col justify-evenly h-screen items-center'>
      {loading ? (
        <div className='flex items-center justify-center w-full h-screen'>
          <div className='p-3 animate-spin drop-shadow-2xl bg-gradient-to-bl from-pink-400 via-purple-400 to-indigo-600 md:w-48 md:h-48 h-32 w-32 aspect-square rounded-full'>
            <div className='rounded-full h-full w-full bg-slate-100 dark:bg-zinc-900 background-blur-md'></div>
          </div>
        </div>
      ) : (
        <>
      <h2 className='text-[#d0ad50] text-5xl'>Apply for a loan</h2>
      <section className='flex flex-row lg:mt-16 items-center lg:w-[67.666667%] md:w-[70%]  bg-transparent'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-[350px] p-5 bg-[#3a35357a] border-r-[1px_solid_#d3ad45] rounded-l-xl shadow-[3px_5px_42px_0px_#234e52]'>
          <div className='flex flex-row'>
            <fieldset>
              <legend className='text-white'>Select a loan</legend>
              <select name='loan' id='loan' className='border rounded-lg text-sm w-full bg-gray-800 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500'
                onChange={handleLoanChange}
              >
                <option disabled value=''> Select loan </option>
                {loan && loan.length > 0 ? (
                  loan.map((loan) => (
                    <option key={loan.name} value={loan.name}>
                      {loan.name}
                    </option>
                  ))
                ) : null}
              </select>
            </fieldset>
          </div>

          <fieldset>
            <legend className='text-white'>Source account</legend>
            <select name='account' id='account' className='border rounded-lg text-sm w-full bg-gray-800 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500'
              value={destinationAccountNumber} onChange={(e) => setDestinationAccountNumber(e.target.value)}
            >
              <option disabled value=''> Select an account </option>
              {clientAccounts && clientAccounts.length > 0 ? (
                clientAccounts.map((account) => (
                  <option key={account.number} value={account.number}>
                    {account.number}
                  </option>
                ))
              ) : (
                <option>No accounts available</option>
              )}
            </select>
          </fieldset>

          <div className='flex flex-col text-white gap-5'>
            <label htmlFor='amount'>
              Amount:
              <input className='border rounded-lg px-3 text-sm w-full bg-gray-800 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500'
                type='number'
                name='amount'
                id='amount'
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </label>

            <fieldset>
              <legend className='text-white'>Payments:</legend>
              <select name='payments' id='payments' value={installments} onChange={(e) => setInstallments(e.target.value)} className='border rounded-lg text-sm w-full bg-gray-800 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500'>
                <option disabled value=''> Select a payment </option>
                { 
                  payments.map((payment) => (
                    <option key={payment} value={payment}>
                      {payment}
                    </option>
                  ))
                }
              </select>
            </fieldset>
          </div>

          <button className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 w-1/2'>
            <span className='relative px-5 py-2.5 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0'>
              Submit
            </span>
          </button>
        </form>

        <div>
          <img className='h-[408px] rounded-r-xl' src='/assets/img/loan2.jpg' alt='img-logo' />
        </div>
      </section>
      </>
      )}
    </main>
  );
};

export default ApplyLoans;

