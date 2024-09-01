import React from 'react';
import { FaWhatsapp } from "react-icons/fa";

const FloatingButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/62895380084949"
      className="fixed flex justify-center bottom-6 right-6 bg-orange-500 text-white text-lg font-semibold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105"
    >
      <FaWhatsapp className='flex mt-1.5 mr-1'/> 
      <p>Order now</p>
    </a>
  );
};

export default FloatingButton;
