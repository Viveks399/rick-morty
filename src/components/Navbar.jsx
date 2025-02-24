import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-black h-[50px] flex justify-end items-center px-4 pt-1">
      <div>
        <button
          onClick={() => navigate("/")}
          className="text-4xl transition-all duration-300 ease-in-out 
               hover:text-[#48ff00] hover:scale-110 hover:drop-shadow-[0_0_10px_#13acc9] 
               active:scale-95 cursor-pointer"
        >
          <img
            src="src/assets/ufo.png"
            className="w-[60px] object-contain"
            alt="UFO"
          />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
