import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Click() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/nostaoverview");
    };

    return (
        <div>
            <h1 className="text-bold bg-slate-950 text-white">Button Click</h1>
            
            {/* Correct the relative path */}
 
            {/* Attach the click handler to the button */}
            <button  className="bg-white text-white p-5"  onClick={()=>navigate("/nostraoverview")}>Go To Overview Pages</button>
        </div>
    );
}

export default Click;
