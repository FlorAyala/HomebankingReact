import React from "react";

const Footer = () => {
    return (
        <>
            <div className="flex flex-row items-center justify-around">
                <h2>&copy; 2024</h2> 
                <div className="flex flex-row">
                    <a href="#"><img className="w-[50px] cursor-pointer" src="/public/assets/img/facebook-icons.png" alt="" /></a>
                    <a href="#"> <img className="w-[50px]" src="/public/assets/img/instagram-icons.png" alt="" /></a>
                    <a href="#"><img className="w-[50px]" src="/public/assets/img/whatsapp-icons.png" alt="" />   </a>
                                  
                </div>
            </div>
        </>       
    )
}
export default Footer