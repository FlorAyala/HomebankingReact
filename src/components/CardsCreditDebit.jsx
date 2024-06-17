import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import 'react-credit-cards/es/styles-compiled.css';

const CardsCreditDebit = (props) => {
  const token = useSelector((store) => store.authReducer.token);
  const [cardColor, setCardColor] = useState(''); // Estado para almacenar el color de la tarjeta

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

      // Verifica que la respuesta tenga datos y que haya una propiedad `color` en el primer elemento
      if (response.data && response.data.length > 0 && response.data[0].color) {
        const color = response.data[0].color; // Obtiene el color de la primera tarjeta (ajusta según tu lógica)
        setCardColor(color); // Actualiza el estado con el color de la tarjeta
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Función para obtener la clase de color de fondo según cardColor
  const getBackgroundColor = () => {
    switch (cardColor) {
      case "SILVER":
        return "bg-gray-300";
      case "GOLD":
        return "bg-yellow-300";
      case "TITANIUM":
        return "bg-white";
      default:
        return "bg-white"; // Si no hay un color válido, devuelve blanco por defecto
    }
  };

  // Determina la clase de color de fondo basado en cardColor
  const cardBackgroundClass = getBackgroundColor();

  return (
    <div className={`card h-[180px] w-[320px] flex flex-col justify-around px-4 py-4 text-black rounded-3xl gap-2 ${cardBackgroundClass}`}>
      <p className="text-xl font-medium">{props.number}</p>
      <div className="flex justify-between gap-6">
        <p className="text-md font-medium">{props.name}</p>
        <div className="flex-1 flex flex-col justify-end">
          <p className="self-end text-xs">{props.type}</p>
          <p className="self-end text-xs">{props.date}</p>
        </div>
        <div className="self-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 38 24" height="24" width="38">
            <circle fillOpacity="0.62" fill="#F9CCD1" r="12" cy="12" cx="12"></circle>
            <circle fill="#424242" r="12" cy="12" cx="30" opacity="0.36"></circle>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CardsCreditDebit;
