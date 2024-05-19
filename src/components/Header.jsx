import React from "react";
import Anchor from "./Anchor"
import { AnchorSocial } from "./AnchorSocial";


const Header = () => {
  return (
    <>
      <header className="bg-[#000000] w-1/5 h-screen flex-col ">
        <img className="w-[250px] " src="/public/assets/img/logo-bank.png" alt="img-logo"></img>
        <nav className="flex flex-col gap-3    items-center">
          <Anchor text="Home" href="/" />
          <Anchor text="Accounts" href="/account" />
          <Anchor text="Cards" href="/card" />
          <Anchor text="Loans" href="/loan" />
          <Anchor text="Transactions" href="/transaction" />
        </nav>
        <a href="#"><img className="m-auto w-[40px] pt-5" src="/public/assets/img/logout.png" alt="" /></a>
        <div className="flex flex-row justify-center pt-8 gap-1">
          <AnchorSocial href="#" src="/public/assets/img/facebook-icons.png" />
          <AnchorSocial href="#" src="/public/assets/img/instagram-icons.png" />
          <AnchorSocial href="#" src="/public/assets/img/whatsapp-icons.png" />
        </div>
      </header>

    </>
  )
}
export default Header