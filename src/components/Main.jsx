import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDebounce } from "react-use";

const Main = () => {
  const inputRef = useRef();
  const navigate = useNavigate();
  const [debouncedterm, setDebouncedTerm] = useState("");
  const [name, setName] = useState("");
  const [options, setOptions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useDebounce(() => setDebouncedTerm(name), 500, [name]);

  const handleNameChange = (e) => {
    setName(e.target.value);
    if (e.target.value === "") {
      setShowDropdown(false);
    } else {
      setShowDropdown(true);
    }
  };

  const fetchDetails = async () => {
    if (!name.trim()) return;
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/?name=${name}`
      );
      if (response.status == 200) {
        console.log(response.data.results);
        setOptions(response.data.results);
        setShowDropdown(true);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    inputRef.current.focus();
    fetchDetails();
  }, [debouncedterm]);

  return (
    <div className="bg-black flex flex-col justify-center items-center min-h-screen overflow-auto">
      <div className="flex flex-col justify-center items-center space-y-4 md:space-y-6 px-4 sm:px-6 w-full">
        <img
          src="src/assets/logo.png"
          className="w-full max-w-[80%] sm:max-w-[500px] object-contain"
          alt="logo"
        />

        <img
          src="src/assets/portal2.png"
          alt="bg"
          className="animate-spin-slow w-full max-w-[250px] sm:max-w-[300px]"
        />

        <div className="flex flex-col items-center space-y-3 w-full">
          <input
            ref={inputRef}
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Search characters..."
            className="w-full max-w-[350px] px-4 py-2 text-green-300 bg-black border-2 border-green-500 
         rounded-lg outline-none focus:ring-4 focus:ring-green-400 focus:border-green-500 
         placeholder-green-400 shadow-lg shadow-green-500/50 text-center text-lg font-bold tracking-wider"
          />

          <button
            onClick={() => navigate("/showall")}
            className="px-6 py-2 text-black bg-blue-400 border-2 border-blue-500 rounded-lg font-bold text-lg 
         transition-all duration-300 ease-in-out hover:bg-blue-500 hover:shadow-blue-500/50 
         hover:shadow-lg active:scale-95 focus:ring-4 focus:ring-blue-400"
          >
            Show All
          </button>
        </div>

        {showDropdown && (
          <div className="w-full max-w-[350px] bg-gray-900 border border-green-400 rounded-lg overflow-y-auto max-h-[300px] mb-5 no-scrollbar">
            {options.map((option, i) => (
              <div
                key={i}
                className="flex items-center border-b border-amber-400 p-2 hover:bg-gray-800 my-2"
              >
                <img
                  src={option.image}
                  alt="DP"
                  className="w-[50px] h-[50px] object-cover rounded-full mr-3"
                />
                <p className="text-white">{option.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
