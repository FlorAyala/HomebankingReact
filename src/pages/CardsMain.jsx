import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import CardsCreditDebit from '../components/CardsCreditDebit';
import { useSelector } from 'react-redux';

const CardsMain = () => {

  const [flippedCards, setFlippedCards] = useState([]);
  const [cards, setCards] = useState([]);
  const token = useSelector(store => store.authReducer.token)
  const [color , setColor] = useState('')

  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/clients/current/cards', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setCards(response.data);
      
      
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, [token])


  const getBackgroundColor = (color) => {
    switch (color) {
      case "SILVER":
        return "bg-gradient-to-br from-[#8f8d87] to-[#c0beba]";
      break;
      case "GOLD":
        return "bg-gradient-to-br from-[#f5e3b3] to-[#af954c]";
        break;
      case "TITANIUM":
        return "bg-gradient-to-br from-[#8f8d87] to-[#535047]";
        break;
      
    }
  };

  const handleCardClick = (index) => {
    const newFlippedCards = [...flippedCards];
    newFlippedCards[index] = !newFlippedCards[index];
    setFlippedCards(newFlippedCards);
  };

 

  return (
    <div className="flex flex-col h-full min-h-screen min-w-full items-center justify-center lg:pl-[15rem] md:pl-[15rem]">

      <div className='flex flex-col items-center justify-center lg:mb-10'>
        <div className='p-5'>
          <h2 className={`text-[#d0ad50] text-3xl pt-10  lg:text-5xl  `}>Your Cards</h2>
        </div>
      </div>

      <div className='flex flex-col lg:h-[207px] lg:flex-row flex-wrap gap-2 justify-center lg:pl-20 h-full overflow-y-auto'>
        {cards.map((card, index) => (
          <div key={index} className="m-2" onClick={() => handleCardClick(index)}>
            <div className={`relative w-64 h-40 transform rounded-lg transition-transform ${getBackgroundColor(card.color)} duration-700 ${flippedCards[index] ? 'rotate-y-180' : ''}`}>
              <div
                className={`absolute inset-0 flex items-center  justify-center text-white ${flippedCards[index] ? 'rotate-y-180' : ''}`}
                style={{ backfaceVisibility: 'hidden', transform: flippedCards[index] ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
              >
                <CardsCreditDebit visibilityImg={true} visibilityImgBack={false} name={card.cardHolder} number={card.number} date={card.thruDate} type={card.cardType} />
              </div>
              <div
                className={`absolute inset-0 flex items-center justify-center   text-white ${flippedCards[index] ? '' : 'rotate-y-180'}`}
                style={{ backfaceVisibility: 'hidden', transform: flippedCards[index] ? 'rotateY(0deg)' : 'rotateY(-180deg)' }}
              >

                <CardsCreditDebit visibilityImg={false} visibilityImgBack={true} cvv="CVV" numbercvv={card.cvv} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='lg:ml-[350px] my-10 items-center justify-center lg:pt-10'>
        <Link to='applycard'>
          <button type="button" className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#C7AE6A] dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Apply card</button>
        </Link>

      </div>
    </div>



  )
}

export default CardsMain;
