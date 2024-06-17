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
      const response = await axios.get('http://localhost:8080/api/clients/current/accounts', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setAccounts(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const AccountList = ({ accounts, id }) => {
    console.log(accounts, id);

    const filteredAccounts = accounts && accounts.filter((account) => account.id.toString() === id);
    console.log(filteredAccounts);

    return (
      <section className='flex flex-row items-center pt-10 pl-[300px] gap-3 justify-center'>
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
              <div className='flex flex-col gap-4'>
                <h3 className='text-[#d0ad50] text-lg'>Transactions Resume:</h3>
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
    <main className='w-full p-5 flex flex-col justify-evenly h-screen items-center'>
      <AccountList accounts={accounts} id={id} />
    </main>
  );
};

export default Account2;
