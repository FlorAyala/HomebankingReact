import React from 'react'
import { Link } from "react-router-dom";

export const AnchorSocial = (props) => {
  
  const handleLinkClick = (e) => {
    e.preventDefault();
    window.open( props.href,'_blank');
  };

  return (
    <Link to={props.href}> <img className="w-[50px] " onClick={handleLinkClick} src={props.src} alt="img-logo"></img></Link>
    
  )
}
