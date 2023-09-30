import React, { useEffect, useState } from "react";
import axios from "axios";
import Karakter from "../components/Karakter";
import Search from "../utils/Search";

const APIClient = () => {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.dev/api/people/").then((res) => {
      setCharacters(res.data);
    });
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = characters.filter((character) =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCharacters(filtered);
  };

  return (
    <div className="Accordion-Container">
      <Search characters={characters} onSearch={handleSearch} />
      {(filteredCharacters.length > 0 ? filteredCharacters : characters).map(
        (character, i) => (
          <Karakter character={character} key={i} />
        )
      )}
    </div>
  );
};

export default APIClient;
