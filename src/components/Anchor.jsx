import React from "react";
import { NavLink } from "react-router-dom";

const Anchor = ({ href, text }) => {
  return (
    <NavLink
      to={href}    
    
      className="w-[120px] md:flex md:flex-col p-2 text-[#C7AE6A] hover:bg-[#e4d8bab6] hover:text-black hover:font-bold rounded text-center"
    >
      {text}
    </NavLink>
  );
};


export default Anchor
