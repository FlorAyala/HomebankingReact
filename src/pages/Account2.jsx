import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Card from '../components/Card';
import Tabla from '../components/Tabla';
import { useParams } from 'react-router-dom';

const Account2 = () => {
  const token = useSelector((store) => store.authReducer.token);
  const [accounts, setAccounts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (token) {
      getData();
    }
  }, [token]);

  const getData = async () => {
    try {
      const response = await axios.get('https://homebanking-akst.onrender.com/api/clients/current/accounts', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setAccounts(response.data);
     
    } catch (error) {
      console.log(error);
    }
  };

  const AccountList = ({ accounts, id }) => {
 

    const filteredAccounts = accounts && accounts.filter((account) => account.id.toString() === id);
    

    return (
      <section className='flex flex-col md:ml-[300px] lg:min-h-screen lg:ml-20  mt-10 lg:flex-row items-center   gap-3 justify-center'>
        {filteredAccounts && filteredAccounts.length > 0 ? (
          filteredAccounts.map((account, index) => (
            <React.Fragment key={index}>
              <Card
                id={account.id}
                textoNumber={`Number account: ${account.number}`}
                textoAmount={`Amount: $${account.balance}`}
                textoDate={`Creation date: ${account.creationDate}`}
                className="mobile:first:mt-5"
                showButton={false}
              />
              <div className='flex w-[300px] lg:w-[550px] flex-col gap-4'>
                <h3 className='text-[#d0ad50]  text-lg'>Transactions Resume:</h3>
                <Tabla transactions={account.transaction} />
              </div>
            </React.Fragment>
          ))
        ) : (
          <p>No accounts found.</p>
        )}
      </section>
    );
  };

  return (
    <main className='w-full  lg:p-5 flex flex-col justify-evenly  items-center'>
      <AccountList accounts={accounts} id={id} />
    </main>
  );
};

export default Account2;
