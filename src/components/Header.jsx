import React from "react";
import Anchor from "./Anchor";
import { AnchorSocial } from "./AnchorSocial";
import { useState } from 'react';
import { Link } from "react-router-dom";
import { logout } from "../redux/actions/authActions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ButtonHome from '../components/ButtonHome';

const Header = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const login = useSelector((state) => state.authReducer.login);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <header className="bg-[#000000]  h-auto h-min-screen  w-full md:h-[100vh] md:w-[250px] lg:w-[250px] lg:h-[100vh] fixed top-0 left-0 md:flex md:flex-col md:items-center lg:flex lg:flex-col lg:items-center  z-50">
        <img className="hidden sm:block sm:w-[10px] md:w-[100px] lg:w-[180px] md:mx-auto lg:mx-0" src="/public/assets/img/logo-bank.png" alt="img-logo" />
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}    
          data-tooltip-target="tooltip-default"    >
          <svg className="w-6 h-6"  id="tooltip-default" role="tooltip" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
            <path class="tooltip-arrow" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        <nav className={`${isOpen ? 'block' : 'hidden'} flex flex-col gap-3 items-center overflow-y-auto md:flex md:flex-col md:justify-center md:gap-4 lg:flex-col lg:gap-2 flex-grow`}>
          {!login && (
            <>
              <Anchor text="Home" href="/" />
              <Anchor text="Contact" href="/contact" />
            </>
          )}
          {!login &&
          <div className="flex flex-col items-center  justify-center mt-10 gap-4  w-full">
            <ButtonHome href="/login" text="Sign In" />
            <ButtonHome href="/register" text="Sign Up" />
          </div>

          }
          {login && (
            <>
              <Anchor text="Accounts" href="/account" />
              <Anchor text="Cards" href="/card" />
              <Anchor text="Loans" href="/loan" />
              <Anchor text="Transactions" href="/transaction" />
            </>
          )}
          <Link to="/login" onClick={handleLogout} className="m-auto pt-4">
            {login && <img className="w-[40px]" src="/public/assets/img/logout.png" alt="Logout" />}
          </Link>
          <div className="flex-grow flex mb-2 flex-row justify-end items-center md:w-auto md:flex md:flex-row md:justify-center md:items-center md:gap-2 lg:w-auto lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-5 lg:mt-[100px]">
            <AnchorSocial href="https://www.facebook.com/" target="_blank" src="/public/assets/img/facebook-icons.png" />
            <AnchorSocial href="https://www.instagram.com/" src="/public/assets/img/instagram-icons.png" />
            <AnchorSocial href="https://www.whatsapp.com/" src="/public/assets/img/whatsapp-icons.png" />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
