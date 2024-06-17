import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

function FormApplyCards(props) {
  const token = useSelector((store) => store.authReducer.token);
  const [cardTypes, setCardTypes] = useState(['DEBIT', 'CREDIT']);
  const [cardColor] = useState(['GOLD', 'TITANIUM', 'SILVER']);
  const [selectedCardType, setSelectedCardType] = useState('');
  const [selectedCardColor, setSelectedCardColor] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (token) {
      getData();
    }
  }, [token]);

  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/clients/current/cards', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      
    } catch (error) {
      console.log(error);
    }
  };

  const handleCardTypeChange = (event) => {
    setSelectedCardType(event.target.value);
    console.log(event.target.value);
  };

  const handleMembershipChange = (event) => {
    setSelectedCardColor(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const createdCard = {
      cardType: selectedCardType,
      cardColor: selectedCardColor,
    };

    try {
      const response = await axios.post('http://localhost:8080/api/clients/current/cards', createdCard, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      setSelectedCardType('');
      setSelectedCardColor('');
      setSuccess(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="max-w-sm mx-auto w-full" onSubmit={handleSubmit}>
      <legend className='text-xl pb-2'>{props.text}</legend>
      <select
        id="cardType"
        name="cardType"
        className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
        onChange={handleCardTypeChange}
        value={selectedCardType}
      >
        <option value="">Choose a card</option>
        {cardTypes.map((cardType, index) => (
          <option key={index} value={cardType}>
            {cardType}
          </option>
        ))}
      </select>

      <legend className='text-xl pb-2 mt-10'>Select card membership (color)</legend>
      <select
        id="membership"
        name="membership"
        className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
        onChange={handleMembershipChange}
        value={selectedCardColor}
      >
        <option value="">Choose a membership</option>
        {cardColor.map((color, index) => (
          <option key={index} value={color}>
            {color}
          </option>
        ))}
      </select>
      <div className='flex flex-row justify-around pt-5'>
        <button type="submit" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Apply</button>
        <button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={() => { setSelectedCardType(''); setSelectedCardColor(''); setSuccess(false); }}>Cancel</button>
      </div>
      {success && <div className='mt-5 bg-green-50 border border-green-400 text-green-700 px-4 py-3 rounded relative' role='alert'>Card created successfully!</div>}
    </form>
  );
}

export default FormApplyCards;

