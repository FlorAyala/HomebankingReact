import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2'

function FormApplyCards(props) {
  const token = useSelector((store) => store.authReducer.token);
  const [cardTypes, setCardTypes] = useState(['DEBIT', 'CREDIT']);
  const [cardColor] = useState(['GOLD', 'TITANIUM', 'SILVER']);
  const [selectedCardType, setSelectedCardType] = useState('');
  const [selectedCardColor, setSelectedCardColor] = useState('');


  useEffect(() => {
    if (token) {
      getData();
    }
  }, [token]);

  const getData = async () => {
    try {
      const response = await axios.get('https://homebanking-akst.onrender.com/api/clients/current/cards', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      
    } catch (error) {
      handleError(error);
    }
  };

  const handleCardTypeChange = (event) => {
    setSelectedCardType(event.target.value);
   // console.log(event.target.value);
  };

  const handleMembershipChange = (event) => {
    setSelectedCardColor(event.target.value);
   // console.log(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const createdCard = {
      cardType: selectedCardType,
      cardColor: selectedCardColor,
    };

    try {
      const response = await axios.post('https://homebanking-akst.onrender.com/api/clients/current/cards', createdCard, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
     // console.log(response.data);
      setSelectedCardType('');
      setSelectedCardColor('');
      
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Card created!",
        showConfirmButton: false,
        timer: 1500
      });
    } 
    catch (error) {
     
      handleError(error);
    }
  };
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
  const handleCancel = () => {
    Swal.fire("You have canceled the creation of the card!");
  }

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
        <button onClick={handleCancel} type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" >Cancel</button>
      </div>
     
    </form>
  );
}

export default FormApplyCards;

