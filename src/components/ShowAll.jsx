import React, { useEffect, useState } from "react";
import axios from "axios";

const ShowAll = () => {
  const [characters, setCharacters] = useState([]);

  const [name, setName] = useState("");

  // const characterIds = Array.from({ length: 99 }, (_, i) => i + 1).join(",");
 

  const [status, setStatus] = useState("");

  const handleStatusChange = (newStatus) => {
    setStatus((prevStatus) => (prevStatus === newStatus ? "" : newStatus));
  };

  const [gender, setGender] = useState("");

  const handleGenderChange = (newGender) => {
    setGender((prevGender) => (prevGender === newGender ? "" : newGender));
  };

  const [species, setSpecies] = useState("");

  const handleSpeciesChange = (newSpecies) => {
    setSpecies((prevSpecies) => (prevSpecies === newSpecies ? "" : newSpecies));
  };

  useEffect(() => {
    const fetchFilter = async () => {
      console.log("inside fetchFilter");
      try {
        const response = await axios.get(
          "https://rickandmortyapi.com/api/character/",
          {
            params: { status, species, gender },
          }
        );
        setCharacters(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.log("Failed to fetch", error);
      }
    };
    fetchFilter();
  }, [status, species, gender]);

  return (
    <div className="bg-black min-h-screen p-6">
      <h1 className="text-center text-3xl text-green-400 font-bold mb-6 neon-text">
        Rick and Morty Characters
      </h1>

      <div className="text-white">
        <p className="text-xl font-semibold mb-3">Filters</p>
        <div className="flex flex-wrap">
          <div className="p-2">
            <p>Status</p>
            <button
              onClick={() => handleStatusChange("alive")}
              className={`px-2 mx-2 cursor-pointer rounded-2xl transition-all ${
                status === "alive"
                  ? "bg-green-500 text-black border-green-600 shadow-[0_0_10px_#13acc9]"
                  : "bg-gray-800 text-white border-gray-500 hover:bg-gray-700"
              }`}
            >
              Alive
            </button>
            <button
              onClick={() => handleStatusChange("dead")}
              className={`px-2 mx-2 cursor-pointer rounded-2xl transition-all ${
                status === "dead"
                  ? "bg-green-500 text-black border-green-600 shadow-[0_0_10px_#13acc9]"
                  : "bg-gray-800 text-white border-gray-500 hover:bg-gray-700"
              }`}
            >
              Dead
            </button>
            <button
              onClick={() => handleStatusChange("unknown")}
              className={`px-2 mx-2 cursor-pointer rounded-2xl transition-all ${
                status === "unknown"
                  ? "bg-green-500 text-black border-green-600 shadow-[0_0_10px_#13acc9]"
                  : "bg-gray-800 text-white border-gray-500 hover:bg-gray-700"
              }`}
            >
              Unknown
            </button>
          </div>

          <div className="p-2">
            <p>Gender</p>
            <button
              onClick={() => handleGenderChange("male")}
              className={`px-2 mx-2 rounded-2xl cursor-pointer ${
                gender === "male"
                  ? "bg-green-500 text-black border-green-600 shadow-[0_0_10px_#13acc9]"
                  : "bg-gray-800 text-white border-gray-500 hover:bg-gray-700"
              }`}
            >
              Male
            </button>
            <button
              onClick={() => handleGenderChange("female")}
              className={`px-2 mx-2 rounded-2xl cursor-pointer ${
                gender === "female"
                  ? "bg-green-500 text-black border-green-600 shadow-[0_0_10px_#13acc9]"
                  : "bg-gray-800 text-white border-gray-500 hover:bg-gray-700"
              }`}
            >
              Female
            </button>
            <button
              onClick={() => handleGenderChange("unknown")}
              className={`px-2 mx-2 rounded-2xl cursor-pointer ${
                gender === "unknown"
                  ? "bg-green-500 text-black border-green-600 shadow-[0_0_10px_#13acc9]"
                  : "bg-gray-800 text-white border-gray-500 hover:bg-gray-700"
              }`}
            >
              Unknown
            </button>
            <button
              onClick={() => handleGenderChange("genderless")}
              className={`px-2 mx-2 rounded-2xl cursor-pointer ${
                gender === "genderless"
                  ? "bg-green-500 text-black border-green-600 shadow-[0_0_10px_#13acc9]"
                  : "bg-gray-800 text-white border-gray-500 hover:bg-gray-700"
              }`}
            >
              Genderless
            </button>
          </div>

          <div className="p-2">
            <p>Species</p>
            <button
              onClick={() => handleSpeciesChange("human")}
              className={`px-2 mx-2 rounded-2xl cursor-pointer ${
                species === "human"
                  ? "bg-green-500 text-black border-green-600 shadow-[0_0_10px_#13acc9]"
                  : "bg-gray-800 text-white border-gray-500 hover:bg-gray-700"
              }`}
            >
              Human
            </button>
            <button
              onClick={() => handleSpeciesChange("alien")}
              className={`px-2 mx-2 rounded-2xl cursor-pointer ${
                species === "alien"
                  ? "bg-green-500 text-black border-green-600 shadow-[0_0_10px_#13acc9]"
                  : "bg-gray-800 text-white border-gray-500 hover:bg-gray-700"
              }`}
            >
              Alien
            </button>
            <button
              onClick={() => handleSpeciesChange("humanoid")}
              className={`px-2 mx-2 rounded-2xl cursor-pointer ${
                species === "humanoid"
                  ? "bg-green-500 text-black border-green-600 shadow-[0_0_10px_#13acc9]"
                  : "bg-gray-800 text-white border-gray-500 hover:bg-gray-700"
              }`}
            >
              Humanoid
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-3">
        {characters.map((character) => (
          <div
            key={character.id}
            className="bg-gray-900 p-4 rounded-lg shadow-lg  border-2 border-green-400"
          >
            <img
              src={character.image}
              alt={character.name}
              className="w-full h-48 object-contain rounded-lg border-2 border-green-300"
            />

            <h2 className="text-center text-xl text-green-400 font-bold mt-3 tracking-wider">
              {character.name}
            </h2>

            <table className="w-full mt-3 text-white border-collapse">
              <thead className="bg-green-500 text-black text-sm ">
                <tr>
                  <th className="py-1 px-2 border border-gray-700">Status</th>
                  <th className="py-1 px-2 border border-gray-700">Species</th>
                  <th className="py-1 px-2 border border-gray-700">Gender</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center bg-gray-800">
                  <td className="py-2 px-2 border border-gray-700">
                    {character.status}
                  </td>
                  <td className="py-2 px-2 border border-gray-700">
                    {character.species}
                  </td>
                  <td className="py-2 px-2 border border-gray-700">
                    {character.gender}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowAll;
