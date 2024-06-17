import React from "react";
import { Link} from "react-router-dom";

const ButtonHome = ({ href, text }) => {

    return (
        <Link to={href}  className="w-[120px] p-2 text-[#C7AE6A]  hover:text-black hover:font-bold rounded text-center">
            {text}
        </Link>
    )
}

export default ButtonHome
