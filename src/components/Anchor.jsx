import React from "react";
 import { Link } from "react-router-dom";


const Anchor = (props) => {
    return (
        <Link to={props.href}  className=" w-[120px] p-2 text-[#C7AE6A] hover:bg-[#e4d8bab6] hover:text-black hover:font-bold rounded text-center" >{props.text}</Link>
    )
}
export default Anchor